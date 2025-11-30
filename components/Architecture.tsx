import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Cpu, Activity, Smartphone, Database, Server, Globe, Shield, Code, Terminal, Zap, Layers, GitBranch, Lock, ArrowUpRight, Cloud, Radio, HardDrive } from 'lucide-react';
import { ArchitectureLayer } from '../types';

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;

const layers: ArchitectureLayer[] = [
  {
    id: 'app',
    title: '云端 · 枢纽 (The Hub)',
    subtitle: '决策与洞察',
    description: '掌控全局的智慧大脑。多端云平台如同神经中枢，实时汇聚万千数据。无论是火情的毫秒级预警，还是人流的微妙变化，尽在掌中。',
    tech: ['全域感知看板', '毫秒级触达', '多端适配'],
  },
  {
    id: 'process',
    title: '龙芯 · 玄枢 (The Core)',
    subtitle: '澎湃算力',
    description: '隐于边缘的强大心脏。国产龙芯协同AI加速单元，在毫厘之间完成复杂的视觉推理。数据不出域，计算不延迟。',
    tech: ['LS2K1000LA', 'YOLOv5s视觉模型', '边缘智算', 'CNN 轨迹识别'],
  },
  {
    id: 'network',
    title: '经络 · 脉象 (The Pulse)',
    subtitle: '无形连接',
    description: '看不见的数据高速路。ZigBee星型组网如同建筑的经络，穿梭于梁柱之间，无需破坏一砖一瓦，即可通达万物。',
    tech: ['ZigBee 组网', 'LS1C102', 'MQTT 协议', 'JSON数据包'],
  },
  {
    id: 'sense',
    title: '五感 · 微澜 (The Senses)',
    subtitle: '极致感知',
    description: '敏锐的数字末梢。从温度的微澜到应力的暗涌，像皮肤一样感知古建的每一次呼吸。大隐隐于市，守护于无形。',
    tech: ['微变应力', '红外紫外光线感知', 'DHT11 温湿', '液体感知'],
  },
];

const Architecture: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string>(layers[0].id);

  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden flex flex-col justify-center min-h-[90vh]">
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-ink-950 dark:text-paper-50 mb-4 transition-colors">
            骨骼与灵魂 <span className="text-zinc-400 dark:text-zinc-600 font-light mx-2">/</span> <span className="text-2xl md:text-3xl text-zinc-500 font-sans tracking-tight">Anatomy of Silence</span>
          </h2>
          <p className="text-zinc-700 dark:text-zinc-400 max-w-2xl font-light text-lg leading-relaxed transition-colors">
            端、边、云。三位一体，共铸守护之盾。
          </p>
        </div>

        {/* --- Schematic Diagram --- */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 p-8 rounded-3xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-white/5 backdrop-blur-md relative overflow-hidden shadow-lg dark:shadow-2xl transition-colors duration-500"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
          <h3 className="text-sm font-mono text-jade-700 dark:text-jade-500 uppercase tracking-widest mb-8 text-center">系统拓扑 / System Topology</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent -translate-y-1/2 z-0"></div>

            {/* Node 1: Edge Devices */}
            <div className="relative z-10 flex flex-col items-center gap-4 bg-white dark:bg-ink-900/80 p-6 rounded-2xl border border-zinc-200 dark:border-white/10 w-full md:w-1/4 shadow-sm transition-colors">
               <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                  <Activity size={24} />
               </div>
               <div className="text-center">
                  <div className="text-ink-950 dark:text-paper-50 font-bold mb-1">感知 (Sense)</div>
                  <div className="text-xs text-zinc-500 font-mono">Sensors</div>
               </div>
            </div>

            {/* Protocol: ZigBee */}
            <div className="relative z-10 px-3 py-1 bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 rounded-full text-xs text-zinc-500 dark:text-zinc-400 font-mono">
               ZigBee
            </div>

            {/* Node 2: Edge Gateway */}
            <div className="relative z-10 flex flex-col items-center gap-4 bg-white dark:bg-ink-900/90 p-6 rounded-2xl border border-jade-500/20 dark:border-jade-500/30 w-full md:w-1/3 shadow-[0_0_30px_rgba(16,185,129,0.05)] dark:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-colors">
               <div className="w-16 h-16 rounded-full bg-jade-100 dark:bg-jade-900/20 flex items-center justify-center text-jade-700 dark:text-jade-500 border border-jade-500/20">
                  <Cpu size={32} />
               </div>
               <div className="text-center">
                  <div className="text-ink-950 dark:text-paper-50 font-bold mb-1">智算 (Core)</div>
                  <div className="text-xs text-jade-700 dark:text-jade-500 font-mono">Loongson Edge</div>
               </div>
            </div>

            {/* Protocol: MQTT */}
            <div className="relative z-10 px-3 py-1 bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 rounded-full text-xs text-zinc-500 dark:text-zinc-400 font-mono">
               MQTT
            </div>

            {/* Node 3: Cloud */}
            <div className="relative z-10 flex flex-col items-center gap-4 bg-white dark:bg-ink-900/80 p-6 rounded-2xl border border-zinc-200 dark:border-white/10 w-full md:w-1/4 shadow-sm transition-colors">
               <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                  <Cloud size={24} />
               </div>
               <div className="text-center">
                  <div className="text-ink-950 dark:text-paper-50 font-bold mb-1">洞察 (Insight)</div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-mono">Cloud Platform</div>
               </div>
            </div>
          </div>
        </MotionDiv>
        {/* --- END Schematic Diagram --- */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Navigation Stack */}
          <div className="lg:col-span-4 flex flex-col gap-3">
             {layers.map((layer) => (
                <MotionButton
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`relative p-6 rounded-2xl border text-left transition-all duration-300 group overflow-hidden ${
                    activeLayer === layer.id 
                      ? 'bg-gradient-to-r from-jade-100/50 to-transparent dark:from-jade-900/20 dark:to-transparent border-jade-500/30 dark:border-jade-500/50 shadow-sm' 
                      : 'bg-white/60 dark:bg-white/5 border-zinc-200 dark:border-white/5 hover:bg-white/80 dark:hover:bg-white/10 hover:border-zinc-300 dark:hover:border-white/10'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {/* Active Indicator Line */}
                  {activeLayer === layer.id && (
                    <MotionDiv 
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-jade-500 shadow-[0_0_10px_#10b981]"
                    />
                  )}

                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <span className={`text-sm uppercase tracking-widest font-mono mb-1 block ${activeLayer === layer.id ? 'text-jade-700 dark:text-jade-400' : 'text-zinc-500'}`}>
                        {layer.subtitle}
                      </span>
                      <span className={`text-2xl font-serif transition-colors ${activeLayer === layer.id ? 'text-ink-950 dark:text-paper-50' : 'text-zinc-600 dark:text-zinc-400'}`}>
                        {layer.title.split(' ')[0]}
                      </span>
                    </div>
                    
                    <div className={`p-2 rounded-lg transition-colors ${activeLayer === layer.id ? 'bg-jade-500/10 text-jade-700 dark:text-jade-400' : 'bg-transparent text-zinc-500 dark:text-zinc-600'}`}>
                       {layer.id === 'app' && <Smartphone className="w-5 h-5" />}
                       {layer.id === 'process' && <Cpu className="w-5 h-5" />}
                       {layer.id === 'network' && <Wifi className="w-5 h-5" />}
                       {layer.id === 'sense' && <Database className="w-5 h-5" />}
                    </div>
                  </div>
                </MotionButton>
              ))}
          </div>

          {/* RIGHT COLUMN: Content Display Panel */}
          <div className="lg:col-span-8 flex">
            <AnimatePresence mode="wait">
              {layers.map((layer) => (
                layer.id === activeLayer && (
                  <MotionDiv
                    key={layer.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full glass-panel rounded-3xl border-t border-zinc-200 dark:border-white/10 relative overflow-hidden flex flex-col justify-between bg-white/40 dark:bg-black/20"
                  >
                    {/* Background Visual Schematic */}
                    <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-20 z-0 overflow-hidden transition-opacity">
                       <div className="absolute -right-20 top-1/2 -translate-y-1/2">
                          {layer.id === 'network' ? (
                             <Wifi size={300} strokeWidth={0.5} className="text-jade-500 opacity-20" />
                          ) : layer.id === 'process' ? (
                             <Cpu size={300} strokeWidth={0.5} className="text-jade-500 opacity-20" />
                          ) : layer.id === 'app' ? (
                             <Layers size={300} strokeWidth={0.5} className="text-jade-500 opacity-20" />
                          ) : (
                             <Activity size={300} strokeWidth={0.5} className="text-jade-500 opacity-20" />
                          )}
                       </div>
                    </div>

                    <div className="p-8 md:p-12 relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-8">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-2 py-0.5 rounded bg-jade-500/10 border border-jade-500/20 text-jade-700 dark:text-jade-500 text-xs uppercase font-bold tracking-widest">
                              LAYER: {layer.id.toUpperCase()}
                            </span>
                            <span className="w-16 h-[1px] bg-zinc-300 dark:bg-zinc-700"></span>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-serif text-ink-950 dark:text-paper-50">{layer.title}</h3>
                        </div>
                        <MotionDiv
                           animate={{ rotate: 360 }}
                           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                           <Activity className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />
                        </MotionDiv>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-700 dark:text-zinc-300 text-xl font-light leading-relaxed mb-10 max-w-2xl border-l-2 border-jade-500/30 dark:border-jade-900/50 pl-6 transition-colors">
                        {layer.description}
                      </p>

                      {/* Tech Stack Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {layer.tech.map((item, idx) => (
                          <div key={idx} className="group flex items-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-black/40 border border-zinc-200 dark:border-white/5 hover:border-jade-500/30 transition-all hover:bg-white/90 dark:hover:bg-black/60 shadow-sm dark:shadow-none">
                            <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-white/5 group-hover:border-jade-500/50 group-hover:text-jade-600 dark:group-hover:text-jade-400 transition-colors text-zinc-500">
                               <Terminal className="w-4 h-4" />
                            </div>
                            <div>
                               <div className="text-sm text-ink-950 dark:text-paper-50 font-medium group-hover:text-jade-700 dark:group-hover:text-jade-400 transition-colors">{item}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer / Terminal Look */}
                    <div className="mt-auto bg-white/60 dark:bg-black/40 border-t border-zinc-200 dark:border-white/5 p-4 md:px-12 md:py-6 flex items-center justify-between relative z-10 backdrop-blur-sm">
                       <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                          <Terminal className="w-4 h-4" />
                          <span className="animate-pulse">SYSTEM: ONLINE</span>
                          <span className="hidden sm:inline text-zinc-400 dark:text-zinc-700">|</span>
                          <span className="hidden sm:inline">LATENCY: 12ms</span>
                       </div>
                       <div className="flex gap-1">
                          {[1,2,3].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i===1 ? 'bg-jade-500' : 'bg-zinc-300 dark:bg-zinc-700'}`}></div>)}
                       </div>
                    </div>

                  </MotionDiv>
                )
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Architecture;