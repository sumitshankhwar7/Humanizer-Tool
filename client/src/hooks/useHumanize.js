import { useState } from 'react';
import { rewriteContent } from '../services/api';
import { useLocalStorage } from './useLocalStorage';

export const useHumanize = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useLocalStorage('humanized_result', '');

    const humanizeText = async (text) => {
        setIsLoading(true);
        setError(null);
        setResult('');

        try {
            const response = await rewriteContent(text);
            if (response.data && response.data.success) {
                setResult(response.data.data);
            } else {
                setError('Failed to humanize text. Unexpected response format.');
            }
        } catch (err) {
            console.error('Error in useHumanize:', err);
            setError(err.response?.data?.message || 'Failed to humanize text. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return { humanizeText, isLoading, error, result, setResult };
};
