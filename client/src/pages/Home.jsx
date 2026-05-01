import React from 'react';
import TextInput from '../components/TextInput';
import OutputBox from '../components/OutputBox';
import Loader from '../components/Loader';
import { Sparkles, Languages } from 'lucide-react';
import { useHumanize } from '../hooks/useHumanize';

const Home = () => {
    const { humanizeText, isLoading, error, result } = useHumanize();

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                    <Languages className="w-4 h-4" />
                    <span>AI Content Humanization</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    Bypass <span className="text-indigo-400">AI Detection</span> <br className="hidden md:block" /> Instantly
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Transform your AI-generated text into natural, undetectable human writing. 
                    Optimized for perplexity and burstiness to defeat all major detectors.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <TextInput onHumanize={humanizeText} isLoading={isLoading} />
                
                <div className="h-full">
                    {isLoading ? (
                        <div className="glass rounded-3xl p-12 min-h-[460px] flex items-center justify-center">
                            <Loader />
                        </div>
                    ) : (
                        <OutputBox result={result} error={error} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
