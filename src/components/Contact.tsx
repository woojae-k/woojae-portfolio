import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-[1280px] mx-auto" id="contact">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
        <h2 className="font-geist text-[24px] font-bold text-primary uppercase flex items-center gap-3 tracking-tight">
          <span>04/</span> Contact Me
        </h2>
        <div className="h-[1px] flex-grow bg-primary mx-8 hidden md:block"></div>
        <div className="font-jetbrains text-xs text-primary font-medium tracking-wider uppercase">COMM_LINK_ACTIVE</div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 border-l-2 border-secondary pl-4 py-1">
          <p className="font-jetbrains text-xs text-primary">
            [NOTICE] The contact form is currently under construction. Please reach out via email or LinkedIn below.
          </p>
        </div>
        <form 
          className="space-y-8 bg-white p-8 border border-primary relative group transition-colors"
          onSubmit={(e) => {
            e.preventDefault();
            alert("This feature is currently under construction. Please contact me directly via email or LinkedIn.");
          }}
        >
          <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-primary transition-colors pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-r border-t border-primary transition-colors pointer-events-none"></div>

          <div>
            <label className="block font-jetbrains text-xs text-primary mb-3 uppercase tracking-wider">Name</label>
            <input 
              className="w-full bg-white border border-primary p-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors text-primary font-geist text-sm" 
              placeholder="Your Name" 
              type="text"
            />
          </div>
          <div>
            <label className="block font-jetbrains text-xs text-primary mb-3 uppercase tracking-wider">Email</label>
            <input 
              className="w-full bg-white border border-primary p-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors text-primary font-geist text-sm" 
              placeholder="your.email@example.com" 
              type="email"
            />
          </div>
          <div>
            <label className="block font-jetbrains text-xs text-primary mb-3 uppercase tracking-wider">Message</label>
            <textarea 
              className="w-full bg-white border border-primary p-4 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors text-primary font-geist text-sm" 
              placeholder="How can I help you?" 
              rows={4}
            ></textarea>
          </div>
          <button 
            className="w-full bg-primary text-white border border-primary px-10 py-4 font-jetbrains text-xs hover:bg-secondary hover:border-secondary transition-colors uppercase tracking-widest mt-4" 
            type="submit"
          >
            Send Transmission
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
