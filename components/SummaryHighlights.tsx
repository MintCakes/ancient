import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Fingerprint, Sprout, ArrowUpRight } from 'lucide-react';

const MotionDiv = motion.div as any;

const SummaryHighlights: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative bg-zinc-50 dark:bg-zinc-900 text-ink-950 dark:text-paper-50 overflow-hidden transition-colors duration-500">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-5 mix-blend-multiply dark:mix-blend-screen"></div>
      
      {/* Gradient Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jade-200/40 dark:bg-jade-900/30 rounded-full blur-[120px] pointer-events-none transition-colors duration-500"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-transparent bg-clip-text bg-gradient-to-r from-ink-950 to-zinc-500 dark:from-paper-50 dark:to-zinc-400 transition-all">
              大成 · 综述
            </h2>
            <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
              Project Highlights & Innovations
            </p>
          </div>
          <div className="max-w-md text-right text-zinc-600 dark:text-zinc-400 font-light text-sm md:text-base leading-relaxed transition-colors">
            从被动保护到主动感知，从通用芯片到国产龙芯。<br/>
            这是一次科技与文明的深度对话。
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Highlight 1: Technology */}
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-3xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-jade-500/30 dark:hover:bg-white/10 transition-all duration-500 overflow-hidden shadow-sm dark:shadow-none"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-50 transition-opacity">
              <Cpu size={80} className="text-jade-600 dark:text-jade-500" />
            </div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-jade-500/10 text-jade-700 dark:text-jade-400 text-sm font-mono uppercase tracking-widest transition-colors">
                <span>Core Tech</span>
              </div>
              <h3 className="text-3xl font-serif mb-6 text-ink-950 dark:text-paper-50 transition-colors">国产算力 · 边缘智算</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed mb-10 flex-grow transition-colors">
                摒弃昂贵的通用GPU方案，基于<strong className="text-ink-950 dark:text-paper-50 transition-colors">龙芯 2K1000</strong> 构建自主可控的边缘设备。通过<strong className="text-ink-950 dark:text-paper-50 transition-colors">模型量化与剪枝</strong>，在低功耗国产芯片上实现了高精度实时推理。
              </p>
              <div className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between transition-colors">
                <span className="text-sm text-zinc-500 font-mono">LOONGSON INSIDE</span>
                <ArrowUpRight className="w-6 h-6 text-jade-600 dark:text-jade-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </MotionDiv>

          {/* Highlight 2: Interaction */}
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative p-8 rounded-3xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-cinnabar/30 dark:hover:bg-white/10 transition-all duration-500 overflow-hidden shadow-sm dark:shadow-none"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-50 transition-opacity">
              <Fingerprint size={80} className="text-cinnabar" />
            </div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cinnabar/10 text-cinnabar text-sm font-mono uppercase tracking-widest transition-colors">
                <span>Experience</span>
              </div>
              <h3 className="text-3xl font-serif mb-6 text-ink-950 dark:text-paper-50 transition-colors">虚实共生 · 沉浸交互</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed mb-10 flex-grow transition-colors">
                打破“请勿触摸”的冰冷距离。利用<strong className="text-ink-950 dark:text-paper-50 transition-colors">计算机视觉(CV)</strong>与<strong className="text-ink-950 dark:text-paper-50 transition-colors">生成式AI(AIGC)</strong>，让游客通过手势、语音与古建筑进行跨越时空的对话，让文化可感、可触、可玩。
              </p>
              <div className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between transition-colors">
                <span className="text-sm text-zinc-500 font-mono">IMMERSIVE AI</span>
                <ArrowUpRight className="w-6 h-6 text-cinnabar group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </MotionDiv>

          {/* Highlight 3: Philosophy */}
          <MotionDiv 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative p-8 rounded-3xl bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:border-blue-500/30 dark:hover:bg-white/10 transition-all duration-500 overflow-hidden shadow-sm dark:shadow-none"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-50 transition-opacity">
              <Sprout size={80} className="text-blue-600 dark:text-blue-500" />
            </div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-mono uppercase tracking-widest transition-colors">
                <span>Concept</span>
              </div>
              <h3 className="text-3xl font-serif mb-6 text-ink-950 dark:text-paper-50 transition-colors">大隐于市 · 无感守护</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed mb-10 flex-grow transition-colors">
                坚持<strong className="text-ink-950 dark:text-paper-50 transition-colors">最小干预原则</strong>。传感器隐于梁柱，数据藏于云端。在不破坏古建一砖一瓦的前提下，建立起一套全天候、全维度的数字化生命体征监测系统。
              </p>
              <div className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between transition-colors">
                <span className="text-sm text-zinc-500 font-mono">NON-INTRUSIVE</span>
                <ArrowUpRight className="w-6 h-6 text-blue-600 dark:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </MotionDiv>

        </div>
      </div>
    </section>
  );
};

export default SummaryHighlights;