import { HfInference } from "@huggingface/inference";
require('dotenv').config()

const inference = new HfInference(process.env.HF_TOKEN);

export const POST = async (req, res) => {
  try {

    const body = await req.json()

    const {
      context,
    } = body

    const hfResponse = await inference.textToImage({
        model: process.env.IMAGE_GENERATION_HF,
        inputs: context,
      })

    const arrayBuffer = await hfResponse.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer);
    const base64data = buffer.toString('base64');

    return Response.json({ base64data })

  } catch (error) {
    console.log(error)
  }
}
