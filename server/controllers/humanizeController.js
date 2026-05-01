import { rewriteText } from '../services/aiService.js';

export const testConnection = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Backend and Frontend are successfully connected!'
    });
};

export const humanizeContent = async (req, res, next) => {
    try {
        const { text } = req.body;

        if (!text || text.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Please provide text to humanize.'
            });
        }

        // Call AI Service
        const rewrittenText = await rewriteText(text);

        res.status(200).json({
            success: true,
            data: rewrittenText,
            message: 'Text successfully humanized.'
        });
    } catch (error) {
        next(error);
    }
};
