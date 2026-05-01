import React, { useState } from 'react';
import { Type, Send } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TextInput = ({ onHumanize, isLoading }) => {
    const [text, setText] = useLocalStorage('input_text', '');

    const handleHumanizeClick = () => {
        if (text.trim().length > 10) {
            onHumanize(text);
        }
    };

    return (
        <div className="glass rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-indigo-500/5">
            <div className="border-b border-white/5 bg-white/[0.02] px-6 py-4 flex items-center gap-2 text-gray-300 font-semibold">
                <Type className="w-4 h-4 text-indigo-400" />
                Original AI Text
            </div>
            
            <div className="p-6">
                <textarea
                    className="w-full bg-slate-950/50 border border-white/5 rounded-2xl p-4 text-gray-200 placeholder:text-gray-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all min-h-[300px] text-lg resize-none"
                    placeholder="Paste your AI-generated content here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    disabled={isLoading}
                />
                
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-sm text-gray-500 font-medium bg-white/5 px-3 py-1 rounded-lg">
                        {text.length.toLocaleString()} characters
                    </span>
                    <button 
                        className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20" 
                        onClick={handleHumanizeClick}
                        disabled={isLoading || text.trim().length < 10}
                    >
                        {isLoading ? 'Rewriting...' : 'Humanize Content'}
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TextInput;
