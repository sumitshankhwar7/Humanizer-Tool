import { GoogleGenAI } from '@google/genai';
import { humanizerPrompt } from '../utils/prompts.js';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const rewriteText = async (text) => {
    const modelsToTry = ['gemini-2.5-flash', 'gemini-1.5-flash'];
    let lastError = null;

    for (const model of modelsToTry) {
        try {
            console.log(`Attempting rewrite with model: ${model}`);
            const response = await ai.models.generateContent({
                model: model,
                contents: `${humanizerPrompt}\n\nOriginal Text:\n${text}`,
                config: {
                    temperature: 0.85, 
                    topP: 0.9,
                }
            });
            
            if (response && response.text) {
                return response.text;
            }
        } catch (error) {
            console.error(`Error with model ${model}:`, error.message || error);
            lastError = error;
            // If it's a 503 (high demand) or 429 (rate limit), continue to the next model
            if (error.status === 503 || error.status === 429 || (error.message && error.message.includes('503'))) {
                console.log(`Falling back to next model...`);
                continue;
            }
            // If it's another error, break and throw
            break;
        }
    }

    // If we get here, all models failed
    const errorMessage = lastError?.message || 'Unknown API error';
    throw new Error(`Failed to rewrite content with AI service: ${errorMessage}`);
};
