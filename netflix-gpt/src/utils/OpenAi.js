import OpenAI from "openai";
// import OPEN_AI_KEY from "./constants.js";


const OPEN_AI_KEY = "";

const openai = new OpenAI({
    apiKey: OPEN_AI_KEY,
});

export default openai;