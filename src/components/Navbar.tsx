import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full top-0 sticky bg-white border-b border-primary z-50">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-2xl font-geist font-bold tracking-tight text-primary hover:text-secondary transition-colors">
          WOOJAE KIM
        </a>
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-jetbrains text-xs text-primary pb-1 hover:text-secondary transition-colors duration-200" href="#about">About</a>
          <a className="font-jetbrains text-xs text-primary pb-1 hover:text-secondary transition-colors duration-200" href="#skills">Skills</a>
          <a className="font-jetbrains text-xs text-primary pb-1 hover:text-secondary transition-colors duration-200" href="#projects">Projects</a>
          <a className="font-jetbrains text-xs text-primary pb-1 hover:text-secondary transition-colors duration-200" href="#experience">Experience</a>
          <a className="font-jetbrains text-xs text-primary pb-1 hover:text-secondary transition-colors duration-200" href="#contact">Contact</a>
        </div>
        <a href="#contact" className="bg-primary text-white border border-primary px-6 py-2 font-jetbrains text-xs hover:bg-secondary hover:border-secondary transition-colors">
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
