import Groq from 'groq-sdk';
import { seoArticlePrompt } from '../utils/prompts.js';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const generateArticleContent = async (topic) => {
    try {
        console.log(`Generating article with Groq for topic: ${topic}`);
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: seoArticlePrompt
                },
                {
                    role: "user",
                    content: `Topic: ${topic}`
                }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 4000,
            top_p: 1,
        });

        return chatCompletion.choices[0]?.message?.content || '';
    } catch (error) {
        console.error('Error in groqService.generateArticle:', error.message || error);
        throw new Error('Failed to generate article with Groq service.');
    }
};
