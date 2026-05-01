import { generateArticleContent } from '../services/groqService.js';

export const createArticle = async (req, res, next) => {
    try {
        const { topic } = req.body;

        if (!topic || topic.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Please provide a topic to generate an article.'
            });
        }

        const articleContent = await generateArticleContent(topic);

        res.status(200).json({
            success: true,
            data: articleContent,
            message: 'Article successfully generated.'
        });
    } catch (error) {
        next(error);
    }
};
