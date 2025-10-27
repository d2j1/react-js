import OpenAI from "openai";
// import OPEN_AI_KEY from "./constants.js";


const OPEN_AI_KEY = "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";

const openai = new OpenAI({
    apiKey: OPEN_AI_KEY,
});

export default openai;