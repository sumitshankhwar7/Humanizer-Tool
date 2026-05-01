import { useState } from 'react';
import { generateArticle } from '../services/api';
import { useLocalStorage } from './useLocalStorage';

export const useArticleGenerator = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [article, setArticle] = useLocalStorage('generated_article', '');

    const createNewArticle = async (topic) => {
        setIsLoading(true);
        setError(null);
        setArticle('');

        try {
            const response = await generateArticle(topic);
            if (response.data && response.data.success) {
                setArticle(response.data.data);
            } else {
                setError('Failed to generate article. Unexpected response format.');
            }
        } catch (err) {
            console.error('Error in useArticleGenerator:', err);
            setError(err.response?.data?.message || 'Failed to generate article. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return { createNewArticle, isLoading, error, article, setArticle };
};
