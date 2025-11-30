import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Architecture from './components/Architecture';
import HardwareDetails from './components/HardwareDetails';
import SoftwareFeatures from './components/SoftwareFeatures';
import AlgorithmData from './components/AlgorithmData';
import ScenarioShowcase from './components/ScenarioShowcase';
import VideoShowcase from './components/VideoShowcase';
import SummaryHighlights from './components/SummaryHighlights';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  // Default to dark mode as per original design
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <main className="min-h-screen w-full relative transition-colors duration-500">
      <ParticleBackground />
      
      {/* Content Layers - Reordered Narrative */}
      <div className="relative z-10 flex flex-col gap-0">
        
        {/* 1. Intro */}
        <Hero />
        
        {/* 2. Demand & Concept (Problem) */}
        <Philosophy />
        
        {/* 3. Function & Scenarios (Use Cases) - MOVED TO 3RD PAGE */}
        <ScenarioShowcase />
        
        {/* 4. Design & Architecture (Overview) */}
        <Architecture />
        
        {/* 5. Technology: Algorithms (Implementation) - Highlighted First */}
        <AlgorithmData />

        {/* 6. Technology: Hardware (National Platform) - The Carrier */}
        <HardwareDetails />
        
        {/* 7. Technology: Software (Interaction layer) */}
        <SoftwareFeatures />
        
        {/* 8. Demo */}
        <VideoShowcase />

        {/* 9. Innovation Summary (Highlights) */}
        <SummaryHighlights />
        
        <Footer />
      </div>
      
      {/* Floating Action Buttons */}
      <div className="fixed top-8 right-8 z-50 flex flex-col gap-4">
         
         {/* Theme Toggle */}
         <button 
            onClick={toggleTheme}
            className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-ink-950 dark:text-paper-50 hover:scale-110 transition-transform duration-300 group"
            aria-label="Toggle Theme"
         >
            {isDark ? (
               <Sun size={20} className="group-hover:text-yellow-400 transition-colors" />
            ) : (
               <Moon size={20} className="group-hover:text-jade-500 transition-colors" />
            )}
         </button>

         {/* Loading/System Indicator (Decorative) */}
         <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center animate-spin-slow mix-blend-exclusion opacity-50 pointer-events-none">
            <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
         </div>

      </div>
    </main>
  );
};

export default App;