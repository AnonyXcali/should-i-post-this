import OpenAI from "openai";
require('dotenv').config()

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY, // This is the default and can be omitted
});

export const GET = async () => {
  console.log("process.env.OPEN_AI_KEY", process.env.OPEN_AI_KEY)
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  return Response.json({ name: "John Doe" })
}

const SYSTEM_ROLE = "system"
const SYSTEM_CONTENT = `You are a helpful assistant that is 
assigned to analyze and perform sentimental analysis on the provided sentence, give an elaborate 
explanation on how morally good or bad it is. Also give few suggestions to improve its grammar and also 
give a shortened version of it.`
const USER_ROLE = "user"

export const POST = async (req, res) => {
  const body = await req.json()

  const {
    text: content,
  } = body
  const completion = await openai.chat.completions.create({
    messages: [
      { role: SYSTEM_ROLE, content: SYSTEM_CONTENT },
      { role: USER_ROLE, content }
    ],
    model: "gpt-3.5-turbo",
  });

  return Response.json({ response: completion.choices[0] })
}
