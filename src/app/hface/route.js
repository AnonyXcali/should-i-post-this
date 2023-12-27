import { HfInference } from "@huggingface/inference";
require('dotenv').config()

const inference = new HfInference(process.env.HF_TOKEN);

export const POST = async (req, res) => {
  try {

    const body = await req.json()

    const {
      text: inputs,
    } = body

    const response = await inference.textClassification({
      model: 'SamLowe/roberta-base-go_emotions',
      inputs,
    })

    return Response.json({ response })

  } catch (error) {
    console.log(error)
  }
}
