import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Eye, PenTool, ArrowUpRight } from 'lucide-react';

const MotionDiv = motion.div as any;

const Card: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  subtitle: string; 
  desc: string; 
  imgUrl: string;
  tags: string[];
  delay: number 
}> = ({ icon, title, subtitle, desc, imgUrl, tags, delay }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay, duration: 0.8 }}
    className="group relative h-[480px] rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/5 bg-white dark:bg-ink-900 shadow-lg dark:shadow-2xl transition-colors duration-500"
  >
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img src={imgUrl} alt={title} className="w-full h-full object-cover opacity-50 dark:opacity-40 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-paper-50 via-paper-50/60 via-70% to-transparent dark:from-ink-950 dark:via-ink-950/80 dark:to-transparent transition-colors duration-500" />
    </div>

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-end p-8">
      <div className="mb-auto flex justify-between items-start">
        <div className="p-3 bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-2xl text-ink-950 dark:text-paper-50 group-hover:bg-jade-500 group-hover:text-black transition-all duration-300 shadow-sm border border-black/5 dark:border-white/10">
          {icon}
        </div>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-2 group-hover:translate-y-0 flex-wrap justify-end">
           {tags.map((tag, i) => (
             <span key={i} className="text-xs font-mono bg-white/80 dark:bg-black/50 backdrop-blur border border-black/5 dark:border-white/10 px-2 py-1 rounded text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
               {tag}
             </span>
           ))}
        </div>
      </div>

      <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div>
          <span className="text-xs font-mono text-jade-700 dark:text-jade-400 uppercase tracking-widest mb-1 block">{subtitle}</span>
          <h3 className="text-3xl font-serif text-ink-950 dark:text-paper-50 transition-colors">{title}</h3>
        </div>
        
        <div className="h-[1px] w-12 bg-zinc-300 dark:bg-zinc-700 group-hover:w-full group-hover:bg-jade-500 transition-all duration-700" />

        <p className="text-zinc-700 dark:text-zinc-300 font-light text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-500">
          {desc}
        </p>

        <div className="pt-4 flex items-center gap-2 text-xs text-jade-700 dark:text-jade-500 font-medium cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
           <span>探索 / EXPLORE</span> <ArrowUpRight size={14} />
        </div>
      </div>
    </div>
  </MotionDiv>
);

const Philosophy: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="philosophy-section" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative scroll-mt-20">
      
      {/* Background Metaphor */}
      <MotionDiv 
        style={{ y: yBg }}
        className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none opacity-5 dark:opacity-5 text-ink-950 dark:text-zinc-200 transition-colors duration-500"
      >
         <svg width="1000" height="1000" viewBox="0 0 100 100" fill="none" stroke="currentColor">
             <path d="M10,50 L90,50 M50,10 L50,90 M20,20 L80,80 M20,80 L80,20" strokeWidth="0.5" />
             <rect x="30" y="30" width="40" height="40" strokeWidth="0.5" />
             <circle cx="50" cy="50" r="30" strokeWidth="0.5" />
         </svg>
      </MotionDiv>

      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <MotionDiv 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-ink-950 dark:text-paper-50 mb-6 transition-colors">
            润物 <span className="text-zinc-400 dark:text-zinc-700 font-thin">/</span> 无声
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 font-light text-xl leading-relaxed border-l-4 border-jade-500/30 dark:border-jade-900/50 pl-6 transition-colors">
            看不见的科技，看得见的历史。
            <br />
            我们将传感器隐于梁柱之间，将算法藏于光影之后。让科技退居幕后，让文化重回台前。
          </p>
        </MotionDiv>
        
        <div className="hidden md:block w-px h-24 bg-gradient-to-b from-zinc-300 dark:from-zinc-800 to-transparent transition-colors"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card 
          delay={0.1}
          icon={<Shield className="w-6 h-6" />}
          title="未雨绸缪"
          subtitle="Proactive"
          imgUrl="/sfqx (1).png"
          desc="不打扰，是最好的保护。非侵入式传感网络，如呼吸般静默。在风险发生前，将其消弭于无形。"
          tags={['零破坏', '全感知', '即时预警']}
        />
        <Card 
          delay={0.2}
          icon={<Eye className="w-6 h-6" />}
          title="大象无形"
          subtitle="Invisible"
          imgUrl="/sfqx (4).png"
          desc="看得见游客，也看得见规则。基于边缘计算的机器视觉，精准捕捉每一次越界，却不带走一丝隐私。"
          tags={['边缘计算', '隐私保护', '毫秒响应']}
        />
        <Card 
          delay={0.3}
          icon={<PenTool className="w-6 h-6" />}
          title="神游其中"
          subtitle="Immersion"
          imgUrl="/sfqx (2).png"
          desc="打破静观的隔阂。以笔为媒，以空为纸。马良神笔，让千年的纹样在指尖复活。互动，即是传承。"
          tags={['虚实共生', '触感反馈', '文化复刻']}
        />
      </div>
    </section>
  );
};

export default Philosophy;