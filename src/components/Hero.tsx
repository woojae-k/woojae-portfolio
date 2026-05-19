import React from 'react';
import { Code, Link, Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[870px] flex flex-col justify-center items-center px-6 grid-bg border-b border-primary overflow-hidden">
      <div className="text-center z-10">
        <h1 className="font-geist text-5xl md:text-[80px] font-bold text-primary mb-12 tracking-tighter uppercase leading-[1.1]">
          WOOJAE KIM
        </h1>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a className="px-8 py-4 bg-primary text-white border border-primary font-jetbrains text-xs flex items-center justify-center gap-2 hover:bg-secondary hover:border-secondary transition-colors uppercase tracking-widest" href="https://github.com/woojae-k" target="_blank" rel="noopener noreferrer">
            <Code size={18} /> View GitHub
          </a>
          <a className="px-8 py-4 bg-white border border-primary text-primary font-jetbrains text-xs flex items-center justify-center gap-2 hover:bg-secondary hover:text-white hover:border-secondary transition-colors uppercase tracking-widest" href="https://www.linkedin.com/in/woojae-kim-33054b383/" target="_blank" rel="noopener noreferrer">
            <Link size={18} /> LinkedIn
          </a>
          <a className="px-8 py-4 bg-white border border-primary text-primary font-jetbrains text-xs flex items-center justify-center gap-2 hover:bg-secondary hover:text-white hover:border-secondary transition-colors uppercase tracking-widest" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Download size={18} /> Resume
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={32} className="text-primary" />
      </div>
    </section>
  );
};

export default Hero;
