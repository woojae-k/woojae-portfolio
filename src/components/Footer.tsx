import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('w39kim@uwaterloo.ca');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bottom-0 bg-white border-t border-primary mt-24">
      <div className="max-w-[1280px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-end items-center gap-8">
        <div className="flex gap-8 items-center flex-wrap justify-center">
          <a className="font-jetbrains text-xs text-primary hover:text-secondary transition-colors duration-200 uppercase cursor-pointer" href="https://github.com/woojae-k" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="font-jetbrains text-xs text-primary hover:text-secondary transition-colors duration-200 uppercase cursor-pointer" href="https://www.linkedin.com/in/woojae-kim-33054b383/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a onClick={handleCopyEmail} className="font-jetbrains text-xs text-primary hover:text-secondary transition-colors duration-200 uppercase cursor-pointer">
            {copied ? 'COPIED!' : 'EMAIL'}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
