import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Palette, Bell, Bot, Wand2, CloudCog } from 'lucide-react';

const MotionDiv = motion.div as any;

const SoftwareFeatures: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 border-t border-black/5 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <MotionDiv 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-ink-950 dark:text-paper-50 mb-4 transition-colors">
            灵感，注入代码
          </h2>
          <p className="text-zinc-500 font-light tracking-widest uppercase text-sm">
            Spirit in the Code
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1: AI Tour Guide */}
          <MotionDiv 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             viewport={{ once: true }}
             className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-white/60 dark:hover:bg-white/5 transition-colors bg-white/40 dark:bg-ink-900/40"
          >
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-jade-100 to-white dark:from-jade-900 dark:to-black flex items-center justify-center mb-6 border border-jade-500/20 group-hover:border-jade-500/50 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                <Bot className="w-8 h-8 text-jade-600 dark:text-jade-400" />
             </div>
             <h3 className="text-xl font-bold text-ink-950 dark:text-paper-50 mb-4">知音 · DeepSeek</h3>
             <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-6">
               它懂历史，更懂你。
               <br/>
               基于 <strong>DeepSeek LLM</strong> 构建古厝专属知识库，结合 <strong>百度语音 API</strong>，实现 <span className="text-jade-600 dark:text-jade-400">WebSocket</span> 实时流式对话。聊聊脱胎漆器，谈谈肉燕鱼丸，对答如流。
             </p>
             <div className="mt-auto flex gap-2 text-xs text-jade-600 dark:text-jade-500 font-medium">
                <span className="px-3 py-1.5 bg-jade-500/10 rounded-full border border-jade-500/10">多角色导游</span>
                <span className="px-3 py-1.5 bg-jade-500/10 rounded-full border border-jade-500/10">毫秒级TTS</span>
             </div>
          </MotionDiv>

          {/* Feature 2: AIGC Art Tool */}
          <MotionDiv 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             viewport={{ once: true }}
             className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-white/60 dark:hover:bg-white/5 transition-colors bg-white/40 dark:bg-ink-900/40"
          >
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-50 to-white dark:from-cinnabar/20 dark:to-black flex items-center justify-center mb-6 border border-cinnabar/20 group-hover:border-cinnabar/50 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                <Wand2 className="w-8 h-8 text-cinnabar" />
             </div>
             <h3 className="text-xl font-bold text-ink-950 dark:text-paper-50 mb-4">造物 · 火山引擎</h3>
             <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-6">
               人人都是艺术家。
               <br/>
               调用 <strong>火山引擎 AIGC API</strong>，将游客随手一拍实时转化为“中国红”、“水墨风”或“动漫风”。定格的不只是画面，是意境。
             </p>
             <div className="mt-auto flex gap-2 text-xs text-cinnabar font-medium">
                <span className="px-3 py-1.5 bg-cinnabar/10 rounded-full border border-cinnabar/10">风格迁移</span>
                <span className="px-3 py-1.5 bg-cinnabar/10 rounded-full border border-cinnabar/10">文创生成</span>
             </div>
          </MotionDiv>

          {/* Feature 3: Cloud & Alerts */}
          <MotionDiv 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             viewport={{ once: true }}
             className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-white/60 dark:hover:bg-white/5 transition-colors bg-white/40 dark:bg-ink-900/40"
          >
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/40 dark:to-black flex items-center justify-center mb-6 border border-blue-500/20 group-hover:border-blue-500/50 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                <CloudCog className="w-8 h-8 text-blue-500 dark:text-blue-400" />
             </div>
             <h3 className="text-xl font-bold text-ink-950 dark:text-paper-50 mb-4">天眼 · PYQT</h3>
             <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-6">
               决胜千里之外。
               <br/>
               基于 <strong>PYQT</strong> 打造的可视化管理看板，通过 <strong>MQTT 协议</strong> 汇聚万千传感器数据。一丝火星，一声异响，毫秒之间，直达掌心。
             </p>
             <div className="mt-auto flex gap-2 text-xs text-blue-600 dark:text-blue-500 font-medium">
                <span className="px-3 py-1.5 bg-blue-500/10 rounded-full border border-blue-500/10">MQTT集群</span>
                <span className="px-3 py-1.5 bg-blue-500/10 rounded-full border border-blue-500/10">微信预警</span>
             </div>
          </MotionDiv>

        </div>
      </div>
    </section>
  );
};

export default SoftwareFeatures;