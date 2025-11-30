import React from 'react';
import { MapPin, ArrowRight, Flame, Activity, Waves, Droplets, Users, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const scenarios = [
  {
    icon: <Droplets className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
    title: "木骨 · 恒湿",
    desc: "Structure / 梁架",
    detail: "湿度 >80% 时，除湿系统自动唤醒。防止腐烂，延续木的生命。",
    image: "/sfqx (3).png"
  },
  {
    icon: <Users className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />,
    title: "人潮 · 秩序",
    desc: "Flow / 管控",
    detail: "当每平米超过10人，温和提示。守护体验，也守护安宁。",
    image: "/sfqx (5).png"
  },
  {
    icon: <PenTool className="w-5 h-5 text-cinnabar" />,
    title: "丹青 · 互动",
    desc: "Interact / 文化",
    detail: "手绘古风，AI 赋诗。让游客不仅是过客，更是创作者。",
    image: "/sfqx (6).png"
  },
  {
    icon: <Flame className="w-5 h-5 text-red-600 dark:text-red-500" />,
    title: "烈火 · 止息",
    desc: "Safety / 消防",
    detail: "微光与热感双重锁定。在火焰燃起之前，将其熄灭。",
    image: "/sfqx (7).png"
  },
  {
    icon: <Activity className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
    title: "基石 · 稳固",
    desc: "Stable / 应力",
    detail: "监测每一毫米的沉降，每一度的倾斜。防患于未然。",
    image: "/sfqx (8).png"
  },
  {
    icon: <Waves className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />,
    title: "雨患 · 疏导",
    desc: "Drainage / 水患",
    detail: "监测天沟水位。水涨即报，确保雨水顺流而下，不留痕迹。",
    image: "/sfqx (9).png"
  }
];

const ScenarioShowcase: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
           <div>
             <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-cinnabar w-5 h-5" />
                <span className="text-sm font-mono text-cinnabar uppercase tracking-widest">Case Study: Sanfang Qixiang / 三坊七巷</span>
             </div>
             <h2 className="text-4xl font-serif text-ink-950 dark:text-paper-50 transition-colors">守护，无处不在</h2>
           </div>
           <p className="text-zinc-600 dark:text-zinc-500 max-w-md text-right text-base font-light transition-colors">
             消防、结构、人文。
             <br/>
             系统无缝融入，守护每一刻。
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((item, i) => (
            <MotionDiv 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer border border-black/5 dark:border-white/5 bg-white dark:bg-ink-900/40 shadow-sm"
            >
              {/* Image Layer */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                 <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 dark:opacity-50 group-hover:opacity-45 dark:group-hover:opacity-30 transition-opacity duration-500 grayscale group-hover:grayscale-0" />
                 <div className="absolute inset-0 bg-gradient-to-t from-paper-100 via-paper-100/50 via-70% to-transparent dark:from-ink-950 dark:via-ink-950/60 dark:to-transparent" />
              </div>
              
              {/* Content Layer */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3">
                     <div className="p-2 rounded-lg bg-white/40 dark:bg-white/10 backdrop-blur border border-black/5 dark:border-white/10 text-ink-950 dark:text-white">
                        {item.icon}
                     </div>
                     <span className="text-xs text-jade-700 dark:text-jade-500 uppercase tracking-wider font-mono opacity-80">{item.desc}</span>
                  </div>
                  
                  <h3 className="text-xl font-serif text-ink-950 dark:text-paper-50 mb-4 transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <p className="text-base text-zinc-600 dark:text-zinc-300 font-light leading-relaxed mb-6 border-l border-jade-500 pl-4">
                      {item.detail}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-ink-950 dark:text-white uppercase tracking-widest font-bold">
                       ACTIVE <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScenarioShowcase;