import OpenAI from "openai";
import { HfInference } from "@huggingface/inference";

require('dotenv').config()

const inference = new HfInference(process.env.HF_TOKEN);

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY, // This is the default and can be omitted
});

const SYSTEM_ROLE = "system"
const SYSTEM_CONTENT = `You are an instagram profile generation assistant, that relies on the user input, which 
contains intricate details such as username, profile description and image type. You utilize these information, to 
create an instagram profile, provided in a response as requested by the user. Make sure the user input doesn't contain
anything explicit that may contain hints of racism, pornography, violence or abuse, in case such text contain, then send
a single response of "explicit_error".`

const USER_ROLE = "user"

const imageGenerator = async (data) => {
  const posts = [...data.posts]
  const withGenerated = []

  for(const box of posts) {
    try {
      const obj = {
        ...box,
        imageBlob: null
      }

      // const data = { inputs: box.context }

      // const response = await fetch(
		  //     process.env.HF_API_ENDPOINT,
		  //   {
      //     headers: { 
      //       "Accept": "image/png",
      //       "Authorization": `Bearer ${process.env.HF_TOKEN}`, 
      //       "Content-Type": "application/json" 
      //     },
      //       method: "POST",
      //       body: JSON.stringify(data),
	    //   	}
	    //   );
	    // const result = await response.blob();

      const hfResponse = await inference.textToImage({
        model: process.env.IMAGE_GENERATION_HF,
        inputs: box.context,
      })

      const arrayBuffer = await hfResponse.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer);
      const base64data = buffer.toString('base64');
      obj.imageBlob = base64data

      withGenerated.push(obj)
    } catch(e) {
      throw new Error(e)
    }
  }

  return withGenerated || []
}


export const POST = async (req, res) => {
  try {
    const body = await req.json()

    console.log("body", body)

    const {
      user_name,
      user_description,
      image_type,
    } = body.payload

    const content = `Generate an Instagram profile with these inputs of name of the user: ${user_name}, 
    profile description as it follows: ${user_description}, image type: ${image_type}.
    The response should be an object containing the following keys, name with the value of ${user_name}, 
    bio (should be short and make it more human like, emojis must, less than 50 words, construct something using the name: ${user_name} & 
    profile description as given above to generate this), 
    number_of_posts (it would always be 9), number_of_followers (any random number up to 2000), 
    number_of_following (any random number up to 2000) and posts would be an array of objects exactly 9, 
    where each object contains these following keys, context (this has to be a short description or 
      characteristic idea about how the image would be using the image type and make sure the user is 
      present in the image, the format should be "<username>, image would be generated as <image type>, 
      <context you create in third person>"), caption (take the corresponding idea from the context 
        you have generated and use it to generate a caption for the same).`

    const completion = await openai.chat.completions.create({
      messages: [
        { role: SYSTEM_ROLE, content: SYSTEM_CONTENT },
        { role: USER_ROLE, content }
      ],
      model: "gpt-3.5-turbo",
    });

    const response = completion.choices[0]

    if(response && response.message.content === "explicit_error") {
      throw new Error("Not allowed")
    }

    const message = response.message.content || ""
    const parsed = message && JSON.parse(message)

    // const contentWithImages = await imageGenerator(parsed)

    // if (contentWithImages && contentWithImages.length > 0) {
    //   parsed.posts = [...contentWithImages]
    // }

    return Response.json({ response: parsed }, { status: 200, statusText: "Success" })

  } catch(error) {
    console.log("Error", error)
    return Response.json({ error: "Not Allowed" }, { status: 400, statusText: "Error" })
  }
  
}
