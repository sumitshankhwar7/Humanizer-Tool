import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ArticleGenerator from './pages/ArticleGenerator';
import './index.css';

function App() {
  useEffect(() => {
    // Clear all localStorage data on component mount (e.g., page refresh)
    window.localStorage.clear();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article-generator" element={<ArticleGenerator />} />
            {/* Default to Article Generator as requested */}
            <Route path="*" element={<Navigate to="/article-generator" replace />} />
          </Routes>
        </main>
        
        <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm">
          <p>© 2026 AI Content Studio. Built with Tailwind & Passion.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
