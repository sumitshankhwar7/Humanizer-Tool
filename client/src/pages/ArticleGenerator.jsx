import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Sparkles, Copy, FileText, Send } from 'lucide-react';
import Loader from '../components/Loader';
import { useArticleGenerator } from '../hooks/useArticleGenerator';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ArticleGenerator = () => {
    const { createNewArticle, isLoading, error, article } = useArticleGenerator();
    const [topic, setTopic] = useLocalStorage('article_topic', '');

    const handleGenerate = () => {
        if (topic.trim().length > 3) {
            createNewArticle(topic);
        }
    };

    const handleCopy = () => {
        if (article) {
            navigator.clipboard.writeText(article);
            alert('Article copied to clipboard!');
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4" />
                    <span>AI-Powered Content Creation</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    Generate <span className="text-indigo-400">SEO Articles</span> <br className="hidden md:block" /> in Seconds
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Create comprehensive, 1500-word SEO-optimized articles tailored to your topic. 
                    Perfect for bloggers, marketers, and businesses.
                </p>
            </div>
            
            <div className="glass rounded-3xl p-2 mb-12 shadow-indigo-500/5 transition-all hover:shadow-indigo-500/10">
                <div className="flex flex-col md:flex-row items-center gap-2">
                    <div className="relative flex-grow w-full">
                        <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type="text"
                            className="w-full bg-transparent border-0 focus:ring-0 pl-12 pr-4 py-4 text-white text-lg placeholder:text-gray-600"
                            placeholder="Enter your article topic (e.g., 'The Future of Sustainable Energy')"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            disabled={isLoading}
                            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                        />
                    </div>
                    <button 
                        className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20" 
                        onClick={handleGenerate}
                        disabled={isLoading || topic.trim().length <= 3}
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                Generating...
                            </span>
                        ) : (
                            <>
                                <span>Generate Article</span>
                                <Send className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </div>
            </div>
            
            <div className="w-full">
                {isLoading ? (
                    <div className="glass rounded-3xl p-12 min-h-[400px] flex items-center justify-center">
                        <Loader />
                    </div>
                ) : (
                    <div className="glass rounded-3xl overflow-hidden min-h-[400px] transition-all duration-500">
                        <div className="border-b border-white/5 bg-white/[0.02] px-8 py-4 flex justify-between items-center">
                            <h2 className="font-semibold text-gray-300 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-indigo-400" />
                                Result Output
                            </h2>
                            {article && (
                                <button 
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-sm transition-all border border-white/10" 
                                    onClick={handleCopy}
                                >
                                    <Copy className="w-4 h-4" />
                                    <span>Copy Markdown</span>
                                </button>
                            )}
                        </div>
                        
                        {error && (
                            <div className="m-8 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                {error}
                            </div>
                        )}
                        
                        <div className="p-8 md:p-12 prose prose-invert max-w-none text-gray-300 leading-loose prose-headings:text-white prose-strong:text-indigo-400 prose-ul:list-disc">
                            {article ? (
                                <ReactMarkdown>{article}</ReactMarkdown>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-20 text-gray-600">
                                    <FileText className="w-12 h-12 mb-4 opacity-20" />
                                    <p className="italic">Your generated article will appear here...</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ArticleGenerator;
