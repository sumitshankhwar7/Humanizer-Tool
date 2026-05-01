import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader = () => {
    return (
        <div className="flex flex-col items-center gap-4 text-center">
            <div className="relative">
                <Loader2 className="w-12 h-12 text-indigo-500 animate-spin" />
                <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse" />
            </div>
            <div>
                <h3 className="font-semibold text-gray-200">Processing Content</h3>
                <p className="text-gray-500 text-sm mt-1">Applying human-like variance and perplexity...</p>
            </div>
        </div>
    );
};

export default Loader;
