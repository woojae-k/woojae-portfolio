import React from 'react';
import { Terminal, Cpu, Database } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-[1280px] mx-auto" id="skills">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
        <h2 className="font-geist text-[24px] font-bold text-primary uppercase flex items-center gap-3 tracking-tight">
          <span>01/</span> Skills Matrix
        </h2>
        <div className="h-[1px] flex-grow bg-primary mx-8 hidden md:block"></div>
        <div className="font-jetbrains text-xs text-primary font-medium tracking-wider uppercase">CORE_COMPETENCIES.JSON</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Programming */}
        <div className="p-8 border border-primary bg-white group transition-colors relative">
          <div className="absolute top-4 right-4 font-jetbrains text-primary group-hover:text-secondary transition-colors">01</div>
          <Terminal className="text-primary mb-6 group-hover:text-secondary transition-colors" size={40} strokeWidth={1.5} />
          <h3 className="font-jetbrains text-xs font-medium mb-8 text-primary border-b border-primary pb-2 uppercase transition-colors">Programming</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center font-jetbrains text-sm">
              <span className="text-primary">C++</span>
              <span className="text-primary">[EXPERT]</span>
            </li>
            <li className="flex justify-between items-center font-jetbrains text-sm">
              <span className="text-primary">Python</span>
              <span className="text-primary">[SYSTEMS]</span>
            </li>
            <li className="flex justify-between items-center font-jetbrains text-sm">
              <span className="text-primary">TypeScript</span>
              <span className="text-primary">[WEB_DEV]</span>
            </li>
            <li className="flex justify-between items-center font-jetbrains text-sm">
              <span className="text-primary">Java</span>
              <span className="text-primary">[BACKEND]</span>
            </li>
          </ul>
        </div>

        {/* Hardware & Systems */}
        <div className="p-8 border border-primary bg-white group transition-colors relative">
          <div className="absolute top-4 right-4 font-jetbrains text-primary group-hover:text-secondary transition-colors">02</div>
          <Cpu className="text-primary mb-6 group-hover:text-secondary transition-colors" size={40} strokeWidth={1.5} />
          <h3 className="font-jetbrains text-xs font-medium mb-8 text-primary border-b border-primary pb-2 uppercase transition-colors">Hardware & Systems</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center font-jetbrains text-sm">
              <span className="text-primary">ESP32 & Arduino</span>
              <span className="text-primary">[MCU]</span>
            </li>
            <li className="flex justify-between items-center font-jetbrains text-sm">
              <span className="text-primary">Raspberry Pi</span>
              <span className="text-primary">[LINUX]</span>
            </li>
            <li className="flex justify-between items-center font-jetbrains text-sm">
              <span className="text-primary">Circuit Design</span>
              <span className="text-primary">[SCHEMATIC]</span>
            </li>
            <li className="flex justify-between items-center font-jetbrains text-sm">
              <span className="text-primary">Soldering</span>
              <span className="text-primary">[HARDWARE]</span>
            </li>
          </ul>
        </div>

        {/* Frameworks & AI */}
        <div className="p-8 border border-primary bg-white group transition-colors relative">
          <div className="absolute top-4 right-4 font-jetbrains text-primary group-hover:text-secondary transition-colors">03</div>
          <Database className="text-primary mb-6 group-hover:text-secondary transition-colors" size={40} strokeWidth={1.5} />
          <h3 className="font-jetbrains text-xs font-medium mb-8 text-primary border-b border-primary pb-2 uppercase transition-colors">Frameworks & AI</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center font-jetbrains text-sm">
              <span className="text-primary">ROS2</span>
              <span className="text-primary">[ROBOTICS]</span>
            </li>
            <li className="flex justify-between items-center font-jetbrains text-sm">
              <span className="text-primary">PyTorch</span>
              <span className="text-primary">[DL]</span>
            </li>
            <li className="flex justify-between items-center font-jetbrains text-sm">
              <span className="text-primary">React & Flask</span>
              <span className="text-primary">[FULLSTACK]</span>
            </li>
            <li className="flex justify-between items-center font-jetbrains text-sm">
              <span className="text-primary">Docker</span>
              <span className="text-primary">[CONTAINERS]</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
