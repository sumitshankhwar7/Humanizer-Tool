import React from 'react';
import { Copy, FileCheck } from 'lucide-react';

const OutputBox = ({ result, error }) => {
    const handleCopy = () => {
        if (result) {
            navigator.clipboard.writeText(result);
            alert('Copied to clipboard!');
        }
    };

    return (
        <div className="glass rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-indigo-500/5 h-full flex flex-col">
            <div className="border-b border-white/5 bg-white/[0.02] px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2 text-gray-300 font-semibold">
                    <FileCheck className="w-4 h-4 text-indigo-400" />
                    Humanized Output
                </div>
                {result && (
                    <button 
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-sm transition-all border border-white/10" 
                        onClick={handleCopy}
                    >
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                    </button>
                )}
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
                {error && (
                    <div className="mb-4 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                        {error}
                    </div>
                )}
                
                <div className="flex-grow p-4 rounded-2xl bg-slate-950/50 border border-white/5 text-gray-200 text-lg leading-relaxed overflow-y-auto max-h-[400px]">
                    {result ? (
                        <p className="whitespace-pre-wrap">{result}</p>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-gray-600 italic py-20">
                            <FileCheck className="w-12 h-12 mb-4 opacity-20" />
                            <p>Result will appear here...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OutputBox;
