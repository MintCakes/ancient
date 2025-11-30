import React from 'react';
import { HardwareSpec } from '../types';
import { PenTool, Cpu, Zap, Maximize, Activity, Wifi, Box, Layers, ArrowRight, Usb, Cable, Battery, Leaf, Network } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const specs: HardwareSpec[] = [
  {
    name: "Loongson 2K1000",
    model: "Core Gateway",
    desc: "中国芯，世界级。自主 LoongArch 架构。数据不出域，安全如磐石。",
    specs: ["1.2GHz 双核", "PCIe 2.0", "自主架构", "工业级温宽"]
  },
  {
    name: "松科智能AI加速棒",
    model: "AI Accelerator",
    desc: "小身材，大智慧。1.0 TOPS 澎湃算力，让古老的建筑读懂现代的手势。",
    specs: ["1.0 TOPS", "USB 3.0", "CNN 加速", "低延迟"]
  },
  {
    name: "LS1C102",
    model: "Sensor Node",
    desc: "至简，至强。休眠功耗低于 0.1W。一次部署，守护四季。",
    specs: ["400MHz", "12-bit ADC", "<1W 功耗", "超长续航"]
  },
  {
    name: "感知矩阵",
    model: "Perception Unit",
    desc: "全域感知。从火焰的微光到应力的暗涌，无所不知，知无不言。",
    specs: ["温湿感知", "结构应力", "火焰感知", "人体感应"]
  }
];

// Red Chip for Loongson
const ChipSchematic = () => (
  <div className="relative w-full h-full bg-white dark:bg-[#0a0a0a] flex items-center justify-center overflow-hidden transition-colors duration-500">
     {/* Outer Glow */}
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-600/10 blur-[60px] rounded-full pointer-events-none"></div>

     {/* Main Die Container */}
     <div className="relative w-48 h-48 border-[1px] border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#050505] shadow-xl dark:shadow-[0_0_40px_rgba(220,38,38,0.15)] flex flex-col p-[2px] transition-colors duration-500">
        <div className="absolute inset-0 border border-black/5 dark:border-white/10 opacity-50"></div>
        <div className="absolute inset-[1px] border border-red-500/20 opacity-30"></div>
        <div className="flex-1 grid grid-cols-4 grid-rows-4 gap-[2px] p-[2px]">
           <div className="col-span-2 row-span-4 flex flex-col gap-[2px]">
              {[...Array(4)].map((_, i) => (
                 <div key={i} className="flex-1 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700/50 relative overflow-hidden group transition-colors duration-500">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 dark:opacity-20"></div>
                    <div className="absolute bottom-1 right-1 w-1 h-1 bg-red-500/50 rounded-full shadow-[0_0_5px_rgba(220,38,38,0.8)]"></div>
                 </div>
              ))}
           </div>
           <div className="col-span-2 row-span-2 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700/50 relative overflow-hidden transition-colors duration-500">
              <div className="absolute inset-0 grid grid-cols-4 gap-[1px] opacity-20">
                 {[...Array(16)].map((_, i) => <div key={i} className="bg-black/5 dark:bg-white/10"></div>)}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-8 h-8 rounded-full border border-red-500/30 flex items-center justify-center">
                    <div className="w-4 h-4 bg-red-500/20 rounded-full animate-pulse"></div>
                 </div>
              </div>
           </div>
           <div className="col-span-2 row-span-2 grid grid-cols-2 gap-[2px]">
               <div className="col-span-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/50 relative transition-colors duration-500">
                  <div className="absolute inset-0 flex flex-col justify-around px-1 opacity-30">
                     <div className="h-[1px] bg-red-500 w-full"></div>
                     <div className="h-[1px] bg-red-500 w-full"></div>
                     <div className="h-[1px] bg-red-500 w-full"></div>
                  </div>
               </div>
               <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/50 transition-colors duration-500"></div>
               <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/50 transition-colors duration-500"></div>
           </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
           <h3 className="text-xl font-bold text-ink-950 dark:text-white tracking-tighter drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(220,38,38,0.9)] flex items-center gap-1 transition-colors duration-500">
             <span className="text-red-600 dark:text-red-500">2K</span>1000
           </h3>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 dark:via-white/5 to-transparent pointer-events-none"></div>
     </div>
  </div>
);

// Blue Schematic for AI Stick
const AIStickSchematic = () => (
   <div className="relative w-full h-full bg-white dark:bg-[#050505] flex items-center justify-center overflow-hidden transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-32 bg-blue-500/10 blur-[50px] rotate-45 pointer-events-none"></div>
      <div className="relative w-48 h-28 border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-sm flex items-center justify-between p-1 shadow-lg dark:shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden rounded-md transition-colors duration-500">
         <div className="absolute inset-0 grid grid-cols-12 gap-[1px] opacity-10 pointer-events-none">
            {[...Array(36)].map((_, i) => <div key={i} className="bg-blue-600 dark:bg-blue-400"></div>)}
         </div>
         <div className="w-6 h-16 border-r border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 flex flex-col justify-center gap-2 pr-1 relative z-10 transition-colors duration-500">
            <div className="h-1 w-full bg-blue-500/50 rounded-full"></div>
            <div className="h-1 w-3/4 bg-blue-500/30 rounded-full ml-auto"></div>
            <div className="h-1 w-full bg-blue-500/50 rounded-full"></div>
         </div>
         <div className="flex-1 h-full flex items-center justify-center relative">
             <div className="absolute w-20 h-20 rounded-full border border-blue-500/20 animate-spin-slow"></div>
             <div className="absolute w-24 h-24 rounded-full border border-blue-500/10 border-dashed animate-[spin_8s_linear_infinite_reverse]"></div>
             <div className="relative w-12 h-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-400/50 rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-colors duration-500">
                 <div className="w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-sm animate-pulse shadow-[0_0_15px_#3b82f6]"></div>
             </div>
             <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                 <path d="M 10 14 L 50 50" stroke="#3b82f6" strokeWidth="1" fill="none" className="animate-pulse" />
                 <path d="M 10 114 L 50 78" stroke="#3b82f6" strokeWidth="1" fill="none" className="animate-pulse" />
                 <path d="M 150 50 L 190 14" stroke="#3b82f6" strokeWidth="1" fill="none" className="animate-pulse" />
                 <path d="M 150 78 L 190 114" stroke="#3b82f6" strokeWidth="1" fill="none" className="animate-pulse" />
             </svg>
         </div>
         <div className="w-8 h-full flex flex-col gap-[2px] relative z-10">
             {[...Array(6)].map((_, i) => (
                <div key={i} className="flex-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden transition-colors duration-500">
                   <div className={`absolute bottom-0 left-0 right-0 bg-blue-500/20`} style={{ height: `${Math.random() * 100}%` }}></div>
                </div>
             ))}
         </div>
         <div className="absolute bottom-2 right-2 text-[10px] font-mono text-blue-600 dark:text-blue-400/80 tracking-tighter">
            NEURAL ACCELERATOR
         </div>
      </div>
   </div>
);

// Green Schematic for Sensor Node (LS1C102)
const SensorNodeSchematic = () => (
   <div className="relative w-full h-full bg-white dark:bg-[#050505] flex items-center justify-center overflow-hidden transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-jade-500/10 blur-[60px] pointer-events-none"></div>
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px opacity-10 pointer-events-none">
          {[...Array(36)].map((_,i) => <div key={i} className="bg-jade-600 dark:bg-jade-900"></div>)}
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="relative w-48 h-48 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-jade-600/20 dark:border-jade-500/20 border-dashed animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-jade-600/30 dark:border-jade-500/30 opacity-50 animate-[spin_15s_linear_infinite_reverse]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-1.5 h-1.5 bg-jade-600 dark:bg-jade-400 rounded-full shadow-[0_0_5px_#10b981]"></div>
              </div>
              <div className="relative w-24 h-24">
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                      <polygon points="50,2 91.57,26 91.57,74 50,98 8.43,74 8.43,26" fill="rgba(6,78,59,0.1)" stroke="#059669" strokeWidth="1" className="dark:fill-[rgba(6,78,59,0.2)] dark:stroke-[#10b981]" />
                      <polygon points="50,15 80.3,32.5 80.3,67.5 50,85 19.7,67.5 19.7,32.5" className="fill-white dark:fill-[rgba(5,5,5,0.8)] stroke-jade-600 dark:stroke-[#059669]" strokeWidth="0.5" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-6 h-10 border border-jade-600/30 dark:border-jade-500/30 rounded-[2px] p-[2px] flex flex-col justify-end gap-[1px] bg-white/50 dark:bg-black/50 backdrop-blur-sm transition-colors duration-500">
                          <div className="w-full h-[2px] bg-jade-600/30 dark:bg-jade-500/30"></div>
                          <div className="w-full h-[2px] bg-jade-600/30 dark:bg-jade-500/30"></div>
                          <div className="w-full flex-1 bg-gradient-to-t from-jade-700 to-jade-500 dark:from-jade-600 dark:to-jade-400 shadow-[0_0_10px_#10b981] animate-pulse-slow"></div>
                       </div>
                  </div>
              </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-jade-700 dark:text-jade-500/80 tracking-wider bg-jade-100 dark:bg-jade-900/20 px-3 py-1.5 rounded-full border border-jade-200 dark:border-jade-500/10 transition-colors duration-500">
             <Zap size={12} className="fill-current" />
             <span>ULTRA-LOW PWR</span>
          </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-jade-500/5 to-transparent h-[10%] animate-[float_4s_linear_infinite] opacity-30 pointer-events-none" style={{animationDuration: '3s'}}></div>
   </div>
);

// Yellow Schematic for Perception Matrix
const MatrixSchematic = () => (
   <div className="relative w-full h-full bg-white dark:bg-[#050505] flex items-center justify-center overflow-hidden transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-600/10 blur-[80px] pointer-events-none"></div>
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(rgba(234,179,8,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.4) 1px, transparent 1px)',
             backgroundSize: '20px 20px'
           }}
      ></div>
      
      <div className="relative w-full h-full max-w-[240px] max-h-[200px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             <div className="w-16 h-16 border border-yellow-600/30 dark:border-yellow-500/30 rotate-45 flex items-center justify-center shadow-[0_0_25px_rgba(234,179,8,0.2)] animate-[spin_12s_linear_infinite]"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-8 h-8 bg-yellow-100/50 dark:bg-yellow-900/40 border border-yellow-600 dark:border-yellow-500 backdrop-blur-sm rotate-45 flex items-center justify-center transition-colors duration-500">
                    <div className="w-4 h-4 bg-yellow-600 dark:bg-yellow-500/80 rounded-sm animate-pulse shadow-[0_0_15px_#eab308]"></div>
                 </div>
             </div>
          </div>
          
          {/* Nodes */}
          {[
            { top: '20%', left: '20%', delay: '0s' },
            { top: '30%', right: '10%', delay: '2s' },
            { bottom: '25%', left: '15%', delay: '0.5s' },
            { bottom: '20%', right: '25%', delay: '1s' }
          ].map((pos, i) => (
             <div key={i} className="absolute flex flex-col items-center gap-1 z-10" style={pos}>
                <div className="relative">
                   <div className="w-2.5 h-2.5 bg-yellow-600 dark:bg-yellow-500 rounded-full shadow-[0_0_10px_#eab308] z-10 relative"></div>
                   <div className="absolute inset-0 bg-yellow-600 dark:bg-yellow-500 rounded-full animate-ping opacity-75" style={{animationDelay: pos.delay}}></div>
                </div>
             </div>
          ))}

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 text-yellow-600 dark:text-yellow-500/40">
             <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" stopColor="transparent" />
                   <stop offset="50%" stopColor="currentColor" />
                   <stop offset="100%" stopColor="transparent" />
                </linearGradient>
             </defs>
             <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#lineGrad)" strokeWidth="1" />
             <line x1="50%" y1="50%" x2="90%" y2="30%" stroke="url(#lineGrad)" strokeWidth="1" />
             <line x1="50%" y1="50%" x2="15%" y2="75%" stroke="url(#lineGrad)" strokeWidth="1" />
             <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="url(#lineGrad)" strokeWidth="1" />
             <path d="M 20 40 Q 50 10 90 60" fill="none" stroke="rgba(234, 179, 8, 0.2)" strokeDasharray="3 3" />
             <path d="M 15 150 Q 50 180 75 160" fill="none" stroke="rgba(234, 179, 8, 0.2)" strokeDasharray="3 3" />
          </svg>
      </div>
      <div className="absolute bottom-4 left-0 right-0 text-center z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100/50 dark:bg-yellow-950/40 border border-yellow-600/20 dark:border-yellow-500/20 rounded-full transition-colors duration-500">
            <Network size={12} className="text-yellow-600 dark:text-yellow-500" />
            <span className="text-[10px] font-mono text-yellow-700 dark:text-yellow-500 tracking-widest uppercase">MESH TOPOLOGY</span>
          </div>
      </div>
   </div>
);

const HardwareDetails: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Metaphor: Internal Alchemy (Ripples & Character) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] opacity-[0.03] dark:opacity-[0.03] opacity-[0.02] pointer-events-none z-0 select-none transition-opacity">
         {/* Concentric Ripples - Dark/Light aware */}
         <div className="absolute inset-0 rounded-full border border-black/10 dark:border-white/20 scale-[0.2]"></div>
         <div className="absolute inset-0 rounded-full border border-black/10 dark:border-white/20 scale-[0.4]"></div>
         <div className="absolute inset-0 rounded-full border border-black/10 dark:border-white/20 scale-[0.6]"></div>
         <div className="absolute inset-0 rounded-full border border-black/10 dark:border-white/20 scale-[0.8]"></div>
         <div className="absolute inset-0 rounded-full border border-black/10 dark:border-white/20 scale-[1.0]"></div>
         
         {/* Giant Calligraphy Character 'Core' */}
         <div className="absolute inset-0 flex items-center justify-center text-[40vw] font-serif text-ink-950 dark:text-white">
            芯
         </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <MotionDiv 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left border-b border-black/10 dark:border-white/10 pb-8 transition-colors"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-ink-950 dark:text-paper-50 transition-colors">硅骨龙芯 <span className="mx-2 text-jade-600 dark:text-jade-500">/</span> 万象生生</h2>
          <p className="text-zinc-500 mt-6 font-mono text-sm tracking-widest">POWERED BY LOONGSON</p>
        </MotionDiv>

        {/* --- Ecosystem Map --- */}
        <MotionDiv 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mb-24 relative p-8 md:p-12 rounded-3xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-ink-900/40 backdrop-blur-md shadow-xl dark:shadow-none transition-colors duration-500"
        >
            <div className="absolute top-4 left-4 text-xs font-mono text-jade-600 dark:text-jade-500 tracking-widest uppercase">生态拓扑 / Ecosystem Map</div>
            
            <div className="flex flex-col items-center justify-center gap-8 relative py-8">
               
               {/* Central Core */}
               <div className="relative z-20 flex flex-col items-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-zinc-100 dark:bg-zinc-900 rounded-2xl border-2 border-jade-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)] dark:shadow-[0_0_50px_rgba(16,185,129,0.2)] flex flex-col items-center justify-center gap-2 transition-colors">
                     <Cpu size={48} className="text-ink-950 dark:text-paper-50" />
                     <div className="text-sm font-bold text-ink-950 dark:text-white uppercase">龙芯中枢</div>
                     <div className="text-xs text-zinc-500">LS2K1000LA</div>
                  </div>
               </div>

               {/* Connections */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-zinc-300 dark:bg-zinc-800 -z-10 hidden md:block"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[150%] bg-zinc-300 dark:bg-zinc-800 -z-10 hidden md:block"></div>

               {/* Satellites Grid */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-32 w-full z-10">
                  
                  {/* Left: Sensors */}
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-20 h-20 bg-white dark:bg-black rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-blue-500 dark:text-blue-400 shadow-sm">
                        <Activity size={24} />
                     </div>
                     <div className="h-8 w-[1px] bg-gradient-to-b from-blue-400 to-transparent md:hidden"></div>
                     <div className="text-center">
                        <div className="text-sm text-ink-950 dark:text-zinc-300 font-bold">感知节点</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-600">LS1C102</div>
                     </div>
                  </div>

                  {/* Spacer for Main Board (Center) - Logic handled by flex/grid */}
                  <div className="hidden md:block"></div>

                  {/* Right: AI Stick */}
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-20 h-20 bg-white dark:bg-black rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-cinnabar shadow-sm">
                        <Usb size={24} />
                     </div>
                     <div className="h-8 w-[1px] bg-gradient-to-b from-cinnabar to-transparent md:hidden"></div>
                     <div className="text-center">
                        <div className="text-sm text-ink-950 dark:text-zinc-300 font-bold">神经加速</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-600">AI Accelerator</div>
                     </div>
                  </div>
               </div>

               {/* Bottom: Cameras */}
                <div className="flex flex-col items-center gap-2 mt-4">
                     <div className="h-8 w-[1px] bg-gradient-to-b from-zinc-300 dark:from-zinc-700 to-transparent md:hidden"></div>
                     <div className="w-20 h-20 bg-white dark:bg-black rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-yellow-600 dark:text-yellow-500 shadow-sm">
                        <Cable size={24} />
                     </div>
                     <div className="text-center">
                        <div className="text-sm text-ink-950 dark:text-zinc-300 font-bold">视觉采集</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-600">HD Vision</div>
                     </div>
                  </div>
            </div>
        </MotionDiv>

        {/* Vertical Stack Layout */}
        <div className="flex flex-col gap-16 mb-32">
          {specs.map((spec, index) => {
            const isLoongson = index === 0;
            const isAIStick = index === 1;
            const isSensorNode = index === 2;
            const isMatrix = index === 3;
            
            // Determine accent colors based on item type
            let accentColor = 'text-jade-600 dark:text-jade-500';
            let accentBorder = 'group-hover:border-jade-500/30';
            let accentShadow = 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]';
            let dotColor = 'bg-jade-500';

            if (isLoongson) {
                accentColor = 'text-red-600 dark:text-red-500';
                accentBorder = 'group-hover:border-red-500/30';
                accentShadow = 'group-hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]';
                dotColor = 'bg-red-500';
            } else if (isAIStick) {
                accentColor = 'text-blue-600 dark:text-blue-500';
                accentBorder = 'group-hover:border-blue-500/30';
                accentShadow = 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]';
                dotColor = 'bg-blue-500';
            } else if (isSensorNode) {
                accentColor = 'text-jade-600 dark:text-jade-500';
                accentBorder = 'group-hover:border-jade-500/30';
                accentShadow = 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]';
                dotColor = 'bg-jade-500';
            } else if (isMatrix) {
                accentColor = 'text-yellow-600 dark:text-yellow-500';
                accentBorder = 'group-hover:border-yellow-500/30';
                accentShadow = 'group-hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]';
                dotColor = 'bg-yellow-500';
            }

            return (
              <MotionDiv 
                key={spec.name} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-panel p-8 md:p-12 rounded-[2rem] relative overflow-hidden group transition-all duration-500 bg-white/40 dark:bg-ink-900/40 ${accentBorder}`}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-zinc-100/50 dark:from-white/5 to-transparent rounded-bl-[10rem] pointer-events-none" />
                
                <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
                  {/* Visual Icon Section */}
                  <div className="w-full lg:w-1/3 flex-shrink-0">
                     <div className={`aspect-[4/3] rounded-2xl bg-zinc-100/50 dark:bg-black/40 border border-black/5 dark:border-white/5 flex items-center justify-center relative overflow-hidden transition-shadow duration-500 ${accentShadow}`}>
                        {/* Render Special Schematics */}
                        {isLoongson ? (
                          <ChipSchematic />
                        ) : isAIStick ? (
                          <AIStickSchematic />
                        ) : isSensorNode ? (
                          <SensorNodeSchematic />
                        ) : isMatrix ? (
                          <MatrixSchematic />
                        ) : (
                          <>
                             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.05),_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_70%)]"></div>
                             <Layers strokeWidth={1} className="w-32 h-32 text-zinc-300 dark:text-zinc-700 group-hover:text-yellow-500 transition-colors duration-500" />
                          </>
                        )}
                     </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-grow space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <span className={`${accentColor} text-xs font-mono uppercase tracking-widest mb-2 block`}>{spec.model}</span>
                        <h3 className="text-3xl md:text-4xl font-bold text-ink-950 dark:text-paper-50 font-serif transition-colors">{spec.name}</h3>
                      </div>
                    </div>

                    <p className={`text-zinc-600 dark:text-zinc-400 text-lg font-light leading-relaxed border-l-2 border-black/5 dark:border-white/10 pl-6 transition-colors ${isLoongson ? 'group-hover:border-red-500/50' : isAIStick ? 'group-hover:border-blue-500/50' : isMatrix ? 'group-hover:border-yellow-500/50' : 'group-hover:border-jade-500/50'}`}>
                      {spec.desc}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                      {spec.specs.map((s) => (
                        <div key={s} className="flex flex-col gap-1 p-3 rounded-lg bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/5">
                          <div className={`w-1.5 h-1.5 rounded-full mb-1 ${dotColor}`}></div>
                          <span className="text-sm text-zinc-600 dark:text-zinc-300 font-mono leading-tight">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>

        {/* Ma Liang Pen Feature - Expanded */}
        <MotionDiv 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 border-t border-jade-500/20 relative overflow-hidden bg-white/40 dark:bg-ink-900/40"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cinnabar/5 rounded-full blur-[100px]"></div>

          <div className="w-full lg:w-1/2 space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cinnabar/10 border border-cinnabar/20 text-cinnabar text-xs tracking-widest uppercase">
              <PenTool className="w-3 h-3" />
              Interactive Artifact
            </div>
            
            <h3 className="text-5xl font-serif text-ink-950 dark:text-paper-50 leading-tight transition-colors">
              马良神笔 <br/>
              <span className="text-xl text-zinc-500 font-sans font-light tracking-normal">挥毫 · 即令</span>
            </h3>
            
            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed text-lg transition-colors">
              以空为纸，以光为墨。
              <br/>
              当 <b>YOLOv5s</b> 捕捉到你的手势，现实与虚拟的边界即刻消融。
              画圆，画三角，画方形。灯光亮，机关转，歌声起。视听盛宴，挥毫即令。
              <br/>
              这不是魔法，是算法。
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "YOLOv5s: 唤醒",
                "CNN: 轨迹识别",
                "GPIO: 实体触发",
                "IP 盲盒: 纹样生成",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300 p-3 bg-white/50 dark:bg-white/5 rounded-lg border border-black/5 dark:border-white/5">
                  <Activity className="w-4 h-4 text-jade-600 dark:text-jade-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative min-h-[400px] flex justify-center items-center">
             {/* Simulated Pen Interaction Visual */}
             <div className="relative z-10 w-full h-80 rounded-2xl bg-zinc-100 dark:bg-black border border-black/10 dark:border-white/10 overflow-hidden shadow-xl dark:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1525672629631-f1eb40331003?q=80&w=2670&auto=format&fit=crop"
                  alt="Ink Brush"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-50 mix-blend-multiply dark:mix-blend-overlay"
                />
                
                {/* Digital Trajectory Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 400 200" className="w-full h-full">
                       <filter id="glow">
                          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                          <feMerge>
                             <feMergeNode in="coloredBlur"/>
                             <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                       </filter>
                       <path 
                          d="M 50 150 Q 150 50 200 100 T 350 50" 
                          stroke="#ef4444" 
                          strokeWidth="4" 
                          fill="none"
                          filter="url(#glow)"
                          strokeLinecap="round"
                          className="animate-[dash_3s_ease-in-out_infinite]"
                          strokeDasharray="400"
                          strokeDashoffset="400"
                       >
                         <animate attributeName="stroke-dashoffset" from="400" to="0" dur="3s" repeatCount="indefinite" />
                       </path>
                    </svg>
                </div>

                {/* UI Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-mono text-zinc-500">
                   <span>INPUT: INFRARED</span>
                   <span className="text-jade-600 dark:text-jade-500">DETECTED: CIRCLE</span>
                </div>
             </div>
             
             {/* Floating Elements */}
             <MotionDiv 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-6 -right-6 p-4 bg-white dark:bg-ink-800 rounded-xl border border-black/10 dark:border-white/10 shadow-xl z-20"
             >
                <Maximize className="w-6 h-6 text-ink-950 dark:text-paper-50" />
             </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default HardwareDetails;