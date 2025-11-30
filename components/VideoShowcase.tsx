import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const VideoShowcase: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Metaphor: Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0.05),_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05),_transparent_70%)] pointer-events-none z-0"></div>

      {/* Decorative Technical Text - Left */}
      <div className="hidden md:flex flex-col gap-12 absolute left-8 top-1/3 text-xs font-mono text-zinc-400 dark:text-zinc-700 text-vertical select-none">
          <span>LAT: 26.08 N</span>
          <span>LON: 119.30 E</span>
      </div>
      
      {/* Decorative Technical Text - Right */}
      <div className="hidden md:flex flex-col gap-12 absolute right-8 top-1/3 text-xs font-mono text-zinc-400 dark:text-zinc-700 text-vertical select-none">
          <span>SYS: ONLINE</span>
          <span>CAM_ID: 04</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <MotionDiv
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="text-4xl md:text-5xl font-serif text-ink-950 dark:text-paper-50 mb-2 transition-colors">实录 · 视界</h2>
             <p className="text-zinc-500 font-light tracking-widest uppercase text-sm">
               System Live Demo
             </p>
           </MotionDiv>
           
           <MotionDiv 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-4 py-2 bg-jade-100/50 dark:bg-jade-900/20 border border-jade-500/20 rounded-full text-jade-700 dark:text-jade-500 text-xs font-mono uppercase tracking-wide"
           >
              <div className="w-2 h-2 bg-jade-500 rounded-full animate-pulse"></div>
              Live Feed
           </MotionDiv>
        </div>

        {/* Video Container */}
        <MotionDiv 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative aspect-video rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 bg-black shadow-xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] group"
        >
           {/* Bilibili Iframe */}
           <iframe 
             src="//player.bilibili.com/player.html?isOutside=true&aid=115449643667489&bvid=BV11cyqBpEwp&cid=33457834890&p=1" 
             scrolling="no" 
             frameBorder="0" 
             allowFullScreen={true}
             className="w-full h-full"
           ></iframe>

           {/* AI Overlay Effects (Pointer events none allows interaction with iframe) */}
           <div className="absolute inset-0 pointer-events-none">
              {/* Corner Brackets */}
              <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-jade-500/50 rounded-tl-lg"></div>
              <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-jade-500/50 rounded-tr-lg"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-jade-500/50 rounded-bl-lg"></div>
              <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-jade-500/50 rounded-br-lg"></div>

              {/* Scanning Line */}
              <MotionDiv 
                 className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-jade-500 to-transparent shadow-[0_0_20px_#10b981]"
                 animate={{ top: ['0%', '100%', '0%'] }}
                 transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              />

              {/* Data Floating Elements */}
              <div className="absolute top-12 right-12 flex flex-col items-end gap-1 font-mono text-xs text-jade-500/80">
                 <span>ISO: 800</span>
                 <span>SHUTTER: 1/50</span>
                 <span>AI_CONF: 98.4%</span>
              </div>
           </div>
           
        </MotionDiv>
      </div>
    </section>
  )
}

export default VideoShowcase;