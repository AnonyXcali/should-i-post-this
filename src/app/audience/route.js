import OpenAI from "openai";
require('dotenv').config()

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY, // This is the default and can be omitted
});

const SYSTEM_ROLE = "system"
const SYSTEM_CONTENT = `You are an amazing social media analyst that analyzes the given caption and provides 
information about which demographic it would cater to the most. The response should be in a format of an array 
of objects, where each object contains different age ranges, lets say kids (5-12), teenagers (12-18), young adults (19-29), 
adults (30 - 50), elderly(50+) and within the object containing 2 keys, the first key called label, which denotes the age range of the above mentioned 
demographic and a second key name score which gives the more favourability score that the caption would favour to upto 0.1. Please make sure the response is a valid array. 
It has been noticed that the response sometimes contains invalid array.`
const USER_ROLE = "user"

export const POST = async (req, res) => {
  const body = await req.json()

  const {
    text: content,
  } = body
  const completion = await openai.chat.completions.create({
    messages: [
      { role: SYSTEM_ROLE, content: SYSTEM_CONTENT },
      { role: USER_ROLE, content: `The caption is: ${content}` }
    ],
    model: "gpt-3.5-turbo",
  });

  return Response.json({ response: completion.choices[0] })
}
