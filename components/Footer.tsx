import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/80 text-center relative z-10 backdrop-blur-md transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-serif text-ink-950 dark:text-zinc-400 mb-6 transition-colors">让文物活起来</h2>
        <p className="text-zinc-600 dark:text-zinc-500 text-sm font-light mb-8 transition-colors">
          古厝文旅景区物联网无线传感与游客互动系统
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-xs text-zinc-500 dark:text-zinc-600 font-mono transition-colors">
          <span>© 2025 古厝智守项目组</span>
          <span>技术支持：React & Loongson (龙芯)</span>
          <span>设计哲学：东方禅意与现代科技</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;