import React from 'react';
import { NavLink } from 'react-router-dom';
import { Cpu, Languages, BookOpen } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Cpu className="text-indigo-400 w-8 h-8" />
        <span className="gradient-text text-xl md:text-2xl tracking-tight">AI Content Studio</span>
      </div>
      
      <div className="flex items-center gap-1 md:gap-4">
        <NavLink 
          to="/article-generator" 
          className={({ isActive }) => 
            `flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
              isActive 
              ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shadow-lg shadow-indigo-500/10' 
              : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
            }`
          }
        >
          <BookOpen className="w-4 h-4" />
          <span className="hidden md:inline font-medium">Article Generator</span>
        </NavLink>
        
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
              isActive 
              ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shadow-lg shadow-indigo-500/10' 
              : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
            }`
          }
        >
          <Languages className="w-4 h-4" />
          <span className="hidden md:inline font-medium">AI Humanizer</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
