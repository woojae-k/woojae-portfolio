import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-[1280px] mx-auto border-b border-primary" id="experience">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
        <h2 className="font-geist text-[24px] font-bold text-primary uppercase flex items-center gap-3 tracking-tight">
          <span>03/</span> Experience & Education
        </h2>
        <div className="h-[1px] flex-grow bg-primary mx-8 hidden md:block"></div>
        <div className="font-jetbrains text-xs text-primary font-medium tracking-wider uppercase">TIMELINE.LOG</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Experience Column */}
        <div>
          <h3 className="font-jetbrains text-sm text-primary mb-8 uppercase tracking-widest border-b border-primary pb-2">Professional Experience</h3>
          
          <div className="border border-primary p-8 bg-white transition-colors group relative">
            <div className="absolute top-4 right-4 font-jetbrains text-xs text-primary group-hover:text-secondary transition-colors">
              Jan 26 - Apr 26
            </div>
            <h4 className="font-geist text-[18px] font-bold text-primary uppercase mb-2">Project Team Member</h4>
            <div className="font-jetbrains text-xs text-primary mb-6">Microsoft Azure & AI Fundamentals — WE Accelerate</div>
            
            <ul className="space-y-3 font-geist text-sm text-primary list-disc list-inside marker:text-secondary">
              <li>Designed an Azure-powered medical device evaluation solution to detect early hardware failures and proactively prevent product recalls.</li>
              <li>Collaborated with a four-person team and an Avanade mentor to develop and pitch the architecture, achieving an "Excellent" (34/40) final presentation rating.</li>
              <li>Conceptualized detailed system architecture diagrams and wireframes to map out Azure resource integration.</li>
            </ul>
          </div>
        </div>

        {/* Education Column */}
        <div>
          <h3 className="font-jetbrains text-sm text-primary mb-8 uppercase tracking-widest border-b border-primary pb-2">Education & Awards</h3>
          
          <div className="border border-primary p-8 bg-white transition-colors group relative mb-8">
            <div className="absolute top-4 right-4 font-jetbrains text-xs text-primary group-hover:text-secondary transition-colors">
              2025 - 2030
            </div>
            <h4 className="font-geist text-[18px] font-bold text-primary uppercase mb-2">University of Waterloo</h4>
            <div className="font-jetbrains text-xs text-primary mb-4">Bachelor of Applied Science in Computer Engineering</div>
            <p className="font-geist text-sm text-primary">
              Relevant coursework and deep dive into low-level systems, algorithms, and hardware design.
            </p>
          </div>

          <div className="border border-primary p-8 bg-white transition-colors group relative">
            <div className="absolute top-4 right-4 font-jetbrains text-xs text-primary group-hover:text-secondary transition-colors">
              2025
            </div>
            <h4 className="font-geist text-[18px] font-bold text-primary uppercase mb-2">President's Scholarship of Distinction</h4>
            <p className="font-geist text-sm text-primary">
              Awarded by the University of Waterloo for achieving an admission average of 95%+.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
