import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-[1280px] mx-auto border-b border-primary" id="about">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
        <h2 className="font-geist text-[24px] font-bold text-primary uppercase flex items-center gap-3 tracking-tight">
          <span>00/</span> About Me
        </h2>
        <div className="h-[1px] flex-grow bg-primary mx-8 hidden md:block"></div>
        <div className="font-jetbrains text-xs text-primary font-medium tracking-wider uppercase">PROFILE.TXT</div>
      </div>
      <div className="max-w-3xl mx-auto">
        <p className="font-geist text-base text-primary leading-relaxed mb-6">
          Hi! I am a Computer Engineering student at the University of Waterloo with a deep passion for robotics, AI, and embedded systems. My experience spans from building autonomous navigation stacks using C++, ROS2 to developing embedded medical screening devices on the ESP32. I thrive on solving complex, low-level system challenges while maintaining a strong grasp of high-level machine learning concepts.
        </p>
        <p className="font-geist text-base text-primary leading-relaxed">
          When I'm not studying, I enjoy experimenting with new AI technologies. Outside of tech, I like listening to J-pop and playing guitar and piano.
        </p>
      </div>
    </section>
  );
};

export default About;
