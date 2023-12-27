import { HfInference } from "@huggingface/inference";
require('dotenv').config()

const inference = new HfInference(process.env.HF_TOKEN);

export const POST = async (req, res) => {
  try {

    const body = await req.json()

    const {
      image: inputs,
    } = body

    const response = await inference.imageToText({
      model: 'Salesforce/blip-image-captioning-large',
      inputs,
    })

    return Response.json({ response })

  } catch (error) {
    console.log(error)
  }
}
