import OpenAI from "openai";
import openai from "./OpenAi.js";

const client = openai;

const response = await client.responses.create({
    model: "gpt-5",
    input: "Write a one-sentence bedtime story about a unicorn."
});

console.log(response.output_text);