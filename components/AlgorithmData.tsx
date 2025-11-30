import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, Legend, CartesianGrid } from 'recharts';
import { Brain, TrendingUp, Activity, Layers, Scan, ArrowRight, Zap, Scissors, Box, Filter, X, ChevronRight, Cpu, Microscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;
const MotionPath = motion.path as any;

// --- Data Constants ---
const quantizationData = [
  { name: 'FP32 (原始)', size: 14, speed: 100 },
  { name: 'INT8 (量化)', size: 4, speed: 380 },
];

const pruningData = [
  { name: '原始模型', speed: 1750 },
  { name: 'ROI裁剪', speed: 1500 },
  { name: '剪枝优化', speed: 1350 },
];

const lstmData = [
  { time: 'T-50', real: 24.2, pred: 24.1 },
  { time: 'T-40', real: 24.5, pred: 24.3 },
  { time: 'T-30', real: 24.8, pred: 24.9 },
  { time: 'T-20', real: 25.1, pred: 25.2 },
  { time: 'T-10', real: 25.0, pred: 25.1 },
  { time: 'Now', real: 24.9, pred: 24.9 },
  { time: 'T+10', real: null, pred: 24.6 },
  { time: 'T+20', real: null, pred: 24.2 },
];

// --- Sub-Page Components ---

const YOLOPage: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="flex flex-col h-full overflow-y-auto">
     <div className="mb-8">
        <h3 className="text-3xl font-serif text-ink-950 dark:text-paper-50 mb-4">视觉中枢 (YOLOv5s)</h3>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl">
           针对边缘端算力受限场景（&lt;1TOPS），我们并未直接部署原生模型，而是采用了一套完整的"瘦身"方案。
           通过 <strong>INT8 量化</strong> 与 <strong>通道剪枝</strong> 技术，让深度学习模型在龙芯嵌入式设备上也能飞腾。
        </p>
     </div>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white/50 dark:bg-black/20 p-6 rounded-2xl border border-black/5 dark:border-white/10">
           <h4 className="text-lg font-bold text-ink-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
              <Zap size={20} className="text-jade-600" />
              模型体积压缩对比
           </h4>
           <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={quantizationData} layout="vertical" margin={{ left: 20 }}>
                   <CartesianGrid strokeDasharray="3 3" stroke="#888" horizontal={false} opacity={0.2} />
                   <XAxis type="number" stroke="#888" tick={{fontSize: 12}} />
                   <YAxis dataKey="name" type="category" width={80} stroke="#888" tick={{fontSize: 12, fill: 'currentColor'}} />
                   <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: 'rgba(0,0,0,0.8)', borderColor: '#333', color: '#fff'}} />
                   <Bar dataKey="size" fill="#10b981" barSize={30} radius={[0, 4, 4, 0]} name="体积 (MB)" />
                 </BarChart>
              </ResponsiveContainer>
           </div>
           <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 text-center">
              体积减少 71%，内存占用大幅降低
           </p>
        </div>

        <div className="bg-white/50 dark:bg-black/20 p-6 rounded-2xl border border-black/5 dark:border-white/10">
           <h4 className="text-lg font-bold text-ink-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
              <Activity size={20} className="text-cinnabar" />
              推理延迟优化 (ms)
           </h4>
           <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={pruningData}>
                   <defs>
                     <linearGradient id="colorSpeed" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                       <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <XAxis dataKey="name" stroke="#888" tick={{fontSize: 12, fill: 'currentColor'}} />
                   <YAxis stroke="#888" tick={{fontSize: 12}} domain={[1000, 2000]} />
                   <Tooltip contentStyle={{backgroundColor: 'rgba(0,0,0,0.8)', borderColor: '#333', color: '#fff'}} />
                   <Area type="monotone" dataKey="speed" stroke="#ef4444" fill="url(#colorSpeed)" strokeWidth={3} />
                 </AreaChart>
              </ResponsiveContainer>
           </div>
           <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 text-center">
              速度提升 22%，满足实时性要求
           </p>
        </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
           <div className="flex items-center gap-3 mb-3 text-jade-700 dark:text-jade-400">
              <Scissors size={24} />
              <span className="font-bold text-xl">ROI 动态裁剪</span>
           </div>
           <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              并不是每一帧画面都需要全图分析。我们通过运动侦测算法，仅对图像中“游客可能出现的区域”（约占全图30%）进行深度推理，大幅减少无效计算。
           </p>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
           <div className="flex items-center gap-3 mb-3 text-blue-700 dark:text-blue-400">
              <Box size={24} />
              <span className="font-bold text-xl">锚框适配 (Anchor)</span>
           </div>
           <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              针对特定场景（如手势交互），使用 K-Means 算法重新聚类锚框尺寸：[10,13], [16,30], [33,23]... 使得小目标手势识别率提升了 5.2%。
           </p>
        </div>
     </div>
  </div>
);

const CNNPage: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="flex flex-col h-full overflow-y-auto">
     <div className="mb-8 flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
           <h3 className="text-3xl font-serif text-ink-950 dark:text-paper-50 mb-4">轨迹共鸣 (CNN)</h3>
           <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              “马良神笔”的背后，是一套轻量级卷积神经网络。
              它不看画面，只看轨迹。通过将连续的手势坐标映射为单通道图像，我们让机器读懂了空中的笔触。
           </p>
        </div>
        <div className="w-full md:w-64 aspect-square bg-zinc-100 dark:bg-black/50 border border-zinc-200 dark:border-zinc-700 rounded-2xl flex items-center justify-center relative overflow-hidden shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full p-6">
               <MotionPath 
                  d="M 50 15 L 85 85 L 15 85 Z" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               />
               <circle cx="50" cy="15" r="3" className="fill-zinc-400 dark:fill-white" />
               <circle cx="85" cy="85" r="3" className="fill-zinc-400 dark:fill-white" />
               <circle cx="15" cy="85" r="3" className="fill-zinc-400 dark:fill-white" />
            </svg>
            <div className="absolute bottom-2 inset-x-0 text-center text-[10px] font-mono text-zinc-500">INPUT: 64x64 BITMAP</div>
        </div>
     </div>

     <div className="space-y-6">
         <div className="flex items-start gap-4 p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-white/60 dark:bg-white/5">
            <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center shrink-0 text-xl font-serif font-bold text-zinc-500">1</div>
            <div>
               <h4 className="text-xl font-bold text-ink-900 dark:text-zinc-100 mb-2">轨迹降维采样</h4>
               <p className="text-zinc-700 dark:text-zinc-300">
                  用户的手势速度不一，导致采样点密度差异巨大。我们采用<strong>等距重采样算法</strong>，将任意长度的轨迹标准化为 50 个关键点。这使得识别延迟从 80ms 稳定降至 <span className="text-jade-600 dark:text-jade-400 font-bold">60ms</span>。
               </p>
            </div>
         </div>

         <div className="flex items-start gap-4 p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-white/60 dark:bg-white/5">
            <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center shrink-0 text-xl font-serif font-bold text-zinc-500">2</div>
            <div>
               <h4 className="text-xl font-bold text-ink-900 dark:text-zinc-100 mb-2">数据增强 (Augmentation)</h4>
               <p className="text-zinc-700 dark:text-zinc-300">
                  为了应对不同用户的书写习惯，我们在训练集中引入了随机旋转 (±10°)、缩放 (0.8-1.2x) 和平移干扰。模型的鲁棒性显著提升，在复杂光线下的准确率由 88% 提升至 <span className="text-jade-600 dark:text-jade-400 font-bold">95%</span>。
               </p>
            </div>
         </div>

         <div className="flex items-start gap-4 p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-white/60 dark:bg-white/5">
            <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center shrink-0 text-xl font-serif font-bold text-zinc-500">3</div>
            <div>
               <h4 className="text-xl font-bold text-ink-900 dark:text-zinc-100 mb-2">极简网络结构</h4>
               <p className="text-zinc-700 dark:text-zinc-300">
                  抛弃了臃肿的 ResNet，我们设计了一个仅有 3层卷积 + 2层全连接 的浅层网络。模型体积仅 0.5MB，无需依赖 NPU 加速，仅靠 CPU 即可实现实时推理，完美契合低功耗网关。
               </p>
            </div>
         </div>
     </div>
  </div>
);

const LSTMPage: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="flex flex-col h-full overflow-y-auto">
     <div className="mb-8">
        <h3 className="text-3xl font-serif text-ink-950 dark:text-paper-50 mb-4">时空预言 (LSTM)</h3>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-4xl">
           环境监测不是被动记录，而是主动预知。
           利用 LSTM (长短期记忆网络) 处理时序数据的优势，我们让系统具备了未卜先知的能力。
        </p>
     </div>

     <div className="glass-panel p-6 md:p-10 rounded-3xl bg-white/50 dark:bg-ink-900/40 border border-black/5 dark:border-white/10 mb-8">
        <div className="h-80 w-full">
           <ResponsiveContainer width="100%" height="100%">
             <AreaChart data={lstmData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
               <defs>
                 <linearGradient id="colorPred" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                   <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                 </linearGradient>
                 <linearGradient id="colorReal" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                   <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                 </linearGradient>
               </defs>
               <CartesianGrid strokeDasharray="3 3" stroke="#888" opacity={0.2} />
               <XAxis dataKey="time" stroke="#888" tick={{fontSize: 12}} />
               <YAxis domain={['dataMin - 0.5', 'dataMax + 0.5']} stroke="#888" tick={{fontSize: 12}} />
               <Tooltip contentStyle={{backgroundColor: 'rgba(0,0,0,0.8)', borderColor: '#333', color: '#fff'}} />
               <Legend verticalAlign="top" height={36} iconType="circle"/>
               <Area type="monotone" dataKey="real" name="实测温度 (Real)" stroke="#10b981" fill="url(#colorReal)" strokeWidth={3} />
               <Area type="monotone" dataKey="pred" name="预测趋势 (Predicted)" stroke="#8b5cf6" fill="url(#colorPred)" strokeWidth={3} strokeDasharray="5 5" />
             </AreaChart>
           </ResponsiveContainer>
        </div>
        <div className="text-center mt-4 text-sm text-zinc-500">
           基于过去 50 个时间步长 (Timesteps) 预测未来趋势
        </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
           <div className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">INPUT FEATURES</div>
           <div className="text-3xl font-serif text-ink-950 dark:text-paper-50 mb-2">5 <span className="text-zinc-400">→</span> 3</div>
           <p className="text-sm text-zinc-600 dark:text-zinc-400">
              通过<strong>皮尔逊相关系数</strong>分析，剔除“游客数量”等弱相关特征，仅保留“温度”、“湿度”、“光照强度”作为核心输入。
           </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
           <div className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">PREDICTION WINDOW</div>
           <div className="text-3xl font-serif text-ink-950 dark:text-paper-50 mb-2">24h</div>
           <p className="text-sm text-zinc-600 dark:text-zinc-400">
              利用滑动窗口机制，实时更新训练集。系统能够适应季节变化，甚至突发天气状况。
           </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
           <div className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-2">MODEL ERROR</div>
           <div className="text-3xl font-serif text-jade-600 dark:text-jade-400 mb-2">&lt; 3%</div>
           <p className="text-sm text-zinc-600 dark:text-zinc-400">
              在连续72小时的测试中，均方根误差 (RMSE) 保持在极低水平，准确预警了两次模拟高温风险。
           </p>
        </div>
     </div>
  </div>
);

// --- Main Hub Component ---

const AlgorithmData: React.FC = () => {
  const [activePage, setActivePage] = useState<null | 'yolo' | 'cnn' | 'lstm'>(null);

  useEffect(() => {
    if (activePage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePage]);

  const pages = [
    { 
      id: 'yolo', 
      title: '见细微 · YOLO', 
      subtitle: '目标检测与量化', 
      desc: '在边缘端实现毫秒级推理的奥秘。',
      icon: <Scan size={32} className="text-jade-600 dark:text-jade-400" />
    },
    { 
      id: 'cnn', 
      title: '辨墨痕 · CNN', 
      subtitle: '手势识别与交互', 
      desc: '轻量级网络如何读懂空中笔触。',
      icon: <Activity size={32} className="text-cinnabar" />
    },
    { 
      id: 'lstm', 
      title: '知未然 · LSTM', 
      subtitle: '趋势预测与感知', 
      desc: '从历史数据中窥探未来的风险。',
      icon: <TrendingUp size={32} className="text-blue-600 dark:text-blue-400" />
    }
  ] as const;

  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-ink-950 dark:text-paper-50 mb-6 transition-colors">
              算法之美，美美与共
            </h2>
            <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest max-w-lg">
              COMPUTATIONAL ALCHEMY: OPTIMIZATION & INFERENCE
            </p>
          </div>
          <div className="mt-6 md:mt-0 text-right hidden md:block">
             <div className="text-xs text-jade-700 dark:text-jade-500 font-mono mb-1">EDGE COMPUTING</div>
             <div className="text-zinc-600 dark:text-zinc-400 text-sm">Loongson LS2K1000LA + Neural Stick</div>
          </div>
        </div>

        {/* --- Entry Cards (Menu) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {pages.map((page) => (
              <MotionDiv
                 key={page.id}
                 whileHover={{ y: -5 }}
                 className="group cursor-pointer relative overflow-hidden rounded-3xl glass-panel bg-white/40 dark:bg-ink-900/40 p-8 h-[480px] flex flex-col justify-between transition-all duration-300"
                 onClick={() => setActivePage(page.id)}
              >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-zinc-100 dark:from-white/5 to-transparent rounded-bl-[4rem] transition-colors"></div>
                 
                 <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-zinc-50 dark:bg-black/40 border border-zinc-100 dark:border-white/5 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                       {page.icon}
                    </div>
                    <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2">{page.subtitle}</div>
                    <h3 className="text-2xl font-serif text-ink-950 dark:text-paper-50 group-hover:text-jade-700 dark:group-hover:text-jade-400 transition-colors">{page.title}</h3>
                 </div>

                 <div className="relative z-10">
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                       {page.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold text-ink-950 dark:text-white uppercase tracking-wider group-hover:gap-3 transition-all">
                       Explore Details <ArrowRight size={14} />
                    </div>
                 </div>
              </MotionDiv>
           ))}
        </div>

        {/* --- Full Screen Detail Modal --- */}
        <AnimatePresence>
           {activePage && (
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
              >
                 <motion.div 
                    layoutId={activePage}
                    className="w-full max-w-6xl h-full md:h-[90vh] bg-[#fdfbf7] dark:bg-[#090c0f] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col border border-zinc-200 dark:border-white/10"
                 >
                    {/* Modal Header */}
                    <div className="flex items-center justify-between p-6 md:p-8 border-b border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-md sticky top-0 z-20">
                       <div className="flex items-center gap-3">
                          <button 
                             onClick={() => setActivePage(null)}
                             className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
                          >
                             <ArrowRight className="rotate-180 text-zinc-600 dark:text-zinc-400" />
                          </button>
                          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest hidden md:inline-block">ALGORITHM DETAILS / {activePage.toUpperCase()}</span>
                       </div>
                       <button 
                          onClick={() => setActivePage(null)}
                          className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-white/10 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-white/20 transition-colors text-zinc-600 dark:text-zinc-300"
                       >
                          <X size={20} />
                       </button>
                    </div>

                    {/* Modal Content */}
                    <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-pattern">
                       {activePage === 'yolo' && <YOLOPage onClose={() => setActivePage(null)} />}
                       {activePage === 'cnn' && <CNNPage onClose={() => setActivePage(null)} />}
                       {activePage === 'lstm' && <LSTMPage onClose={() => setActivePage(null)} />}
                    </div>
                 </motion.div>
              </motion.div>
           )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default AlgorithmData;