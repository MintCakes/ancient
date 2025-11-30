import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Shield, Clock, ArrowRight } from 'lucide-react';

const MotionDiv = motion.div as any;

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToNext = () => {
    const nextSection = document.getElementById('philosophy-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center selection:bg-jade-900 selection:text-white">
      
      {/* 1. Background Layer Group */}
      <MotionDiv 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        {/* Wireframe Overlay Simulation */}
        <div className="absolute inset-0 bg-[url('/herobackground.jpg')] bg-repeat opacity-30 mix-blend-multiply dark:mix-blend-overlay"></div>
        
        {/* Gradient Overlay for Depth & Text Readability */}
        {/* Light Mode: White Fade | Dark Mode: Black Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-paper-50/90 via-paper-50/50 to-paper-50 dark:from-ink-950/90 dark:via-ink-900/50 dark:to-ink-950 transition-colors duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-paper-50/80 via-transparent to-paper-50/80 dark:from-ink-950/80 dark:via-transparent dark:to-ink-950/80 transition-colors duration-500"></div>
      </MotionDiv>

      {/* 2. Main Content Grid */}
      <div className="relative z-20 w-full max-w-[1600px] px-6 md:px-16 h-full flex flex-col md:flex-row">
        
        {/* LEFT COLUMN: Visual Anchor */}
        <div className="flex-1 h-full flex items-center justify-start md:pl-12">
           <MotionDiv 
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="hidden md:flex flex-row-reverse gap-12 items-start"
           >
              {/* Massive Title */}
              <div className="text-vertical text-[10rem] font-serif text-transparent bg-clip-text bg-gradient-to-b from-ink-950 via-ink-800 to-zinc-400 dark:from-paper-50 dark:via-paper-100 dark:to-zinc-600 tracking-wide leading-none drop-shadow-[0_0_25px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_0_25px_rgba(255,255,255,0.05)] border-l border-black/5 dark:border-white/5 pl-8 py-10 h-[70vh] select-none transition-all duration-500">
                 智<span className="text-jade-600 dark:text-jade-500 animate-pulse-slow glow-text-jade">·</span>守
              </div>
              
              {/* Vertical Subtext */}
              <div className="text-vertical text-xl font-serif text-zinc-500 tracking-[0.8em] pt-10 h-[40vh] border-l border-black/5 dark:border-white/5 pl-4 opacity-80">
                 千年回响 此刻共鸣
              </div>
           </MotionDiv>
        </div>

        {/* RIGHT COLUMN: Information & Interaction */}
        <div className="flex-1 h-full flex flex-col justify-center items-start md:items-end text-left md:text-right relative">
          
          {/* Mobile Title (Visible only on small screens) */}
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden text-center self-center mb-12"
          >
            <h1 className="text-7xl font-serif text-ink-950 dark:text-paper-50 mb-2 glow-text transition-colors">智 · 守</h1>
            <p className="text-zinc-500 tracking-[0.3em] font-light text-sm">千年回响 此刻共鸣</p>
          </MotionDiv>

          <MotionDiv 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="max-w-2xl w-full"
          >
            {/* --- Explicit System Title --- */}
            <div className="mb-10 flex flex-col md:items-end gap-2">
               <h3 className="text-2xl md:text-3xl font-serif font-medium text-ink-950 dark:text-paper-50 tracking-wide leading-snug">
                  古厝文旅景区无线传感与游客互动系统
               </h3>
               <div className="flex items-center gap-3">
                  <div className="h-[1px] w-16 bg-jade-500/50"></div>
                  <span className="text-zinc-500 dark:text-zinc-400 font-mono text-xs md:text-sm uppercase tracking-wider">
                     Project Sentinel v2.0
                  </span>
               </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-ink-950 dark:text-paper-50 mb-8 leading-[1.1] transition-colors">
              <span className="block opacity-90">无形之技</span>
              <span className="block text-zinc-400 dark:text-zinc-600 font-light italic mt-2">有形之史。</span>
            </h2>

            {/* Description */}
            <p className="text-zinc-600 dark:text-zinc-400 font-light text-lg md:text-xl leading-loose mb-16 md:pl-20 transition-colors">
              当 <strong className="text-ink-950 dark:text-paper-50 font-medium">Loongson</strong> 的算力注入梁柱，
              <br/>
              沉默千年的古厝，便有了呼吸。
              <br/>
              <span className="text-xs md:text-sm font-mono text-zinc-400 dark:text-zinc-600 mt-4 block tracking-widest uppercase">
                IoT Sensing / AI Inference / Cloud Control
              </span>
            </p>

            {/* Interactive Button */}
            <div className="flex flex-col md:flex-row justify-end items-center gap-8 mb-20">
               <button 
                  onClick={scrollToNext}
                  className="group relative px-10 py-4 bg-transparent border border-black/10 dark:border-white/10 rounded-full overflow-hidden transition-all duration-500 hover:border-jade-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]"
               >
                  <div className="relative flex items-center gap-4">
                    <span className="font-serif text-lg text-ink-950 dark:text-paper-50 tracking-[0.2em] group-hover:text-jade-700 dark:group-hover:text-white transition-colors">入梦</span>
                    <span className="text-xs font-mono text-zinc-500 group-hover:text-jade-600 dark:group-hover:text-jade-400 transition-colors">ENTER SYSTEM</span>
                    <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-jade-600 dark:group-hover:text-jade-400 group-hover:translate-x-1 transition-all" />
                  </div>
               </button>
            </div>

            {/* Metrics / Stats Row */}
            <div className="grid grid-cols-3 gap-8 md:gap-12 w-full border-t border-black/5 dark:border-white/5 pt-8 transition-colors">
               <StatItem 
                 icon={<Zap size={18} />} 
                 value="12ms" 
                 label="LATENCY" 
                 sub="Instant Response"
                 delay={0.5}
               />
               <StatItem 
                 icon={<Shield size={18} />} 
                 value="24/7" 
                 label="GUARDIAN" 
                 sub="Always Active"
                 delay={0.6}
               />
               <StatItem 
                 icon={<Clock size={18} />} 
                 value="90d+" 
                 label="ENDURANCE" 
                 sub="Ultra-low Power"
                 delay={0.7}
               />
            </div>

          </MotionDiv>
        </div>
      </div>

      {/* Scroll Indicator */}
      <MotionDiv 
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 mix-blend-difference"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-zinc-400 dark:via-white/30 to-transparent"></div>
        <span className="text-xs font-mono text-zinc-400 dark:text-white/30 uppercase tracking-[0.3em]">Scroll</span>
      </MotionDiv>
    </section>
  );
};

// Helper Component for Stats
const StatItem: React.FC<{ icon: React.ReactNode, value: string, label: string, sub: string, delay: number }> = ({ icon, value, label, sub, delay }) => (
  <MotionDiv 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    className="group cursor-default text-center md:text-right"
  >
     <div className="flex flex-col md:flex-row-reverse items-center md:items-end gap-2 md:gap-3 mb-2">
        <div className="text-zinc-500 dark:text-zinc-600 group-hover:text-jade-600 dark:group-hover:text-jade-500 transition-colors duration-500">{icon}</div>
        <div className="text-2xl md:text-3xl font-mono font-light text-ink-950 dark:text-paper-50 group-hover:text-black dark:group-hover:text-white transition-colors">{value}</div>
     </div>
     <div className="flex flex-col md:items-end">
        <div className="text-xs font-mono text-jade-600 dark:text-jade-500 uppercase tracking-widest mb-1">{label}</div>
        <div className="text-xs text-zinc-500 dark:text-zinc-600 font-light opacity-80 group-hover:opacity-100 transition-opacity">{sub}</div>
     </div>
  </MotionDiv>
);

export default Hero;