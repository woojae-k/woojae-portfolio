import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Autonomous Robot Navigation",
      tags: ["C++", "ROS2"],
      description: "Completed the WATO onboarding assignment to develop a ROS2 navigation stack for a differential-drive robot equipped with a camera and LiDAR. Integrated multi-sensor data for path planning and static obstacle avoidance. Designed an A*-based global path planner for efficient routing.",
      type: "CORE_SYSTEM",
      link: "https://github.com/woojae-k/wato-asd-assignment",
      image: "public/ros2 project.png"
    },
    {
      title: "Delirium Detection Handheld",
      tags: ["C++", "ESP32"],
      description: "Built an ESP32-based handheld device that automates CAM delirium screening, improving assessment consistency in low-resource clinical environments. Integrated Gemini API to dynamically generate standardized CAM questions. Implemented secure local storage and a WiFi access-point export server via a web interface.",
      type: "FIRMWARE",
      link: "https://github.com/woojae-k/delirium-detection-device",
      image: "public/delirium detection handheld.jpg"
    },
    {
      title: "Containerized Home Server",
      tags: ["Raspberry Pi", "Docker"],
      description: "Built a containerized home server on a Raspberry Pi 4 by leveraging Docker to self-host and manage services. Integrated and configured WireGuard and NextCloud for secure remote access and file storage.",
      type: "SYS_ADMIN",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBufVZeldCggKuwCc3QlyFIWBuyyGmPrR9XtsDzU420NRuhJVdC57PmEDmckO8aI9OH2slOlPSzs4hXgnhn6rlQ_7295ChGqrNPfXKOY1aAjjHXO8CK_L26j21KEtFw5294PV1LiPlaRNizxYIfTjPWRDmYlrpoKJlVB2PyCMQFPoDXuaE7oWebDKVdLublQqNzF9NtMCu5VdMlqXP4GLE2pn8pXKxleGpd2SweDYOiGP_v4fhE5M3k2EhhjT-L0vz8abyPpIUeEUlw"
    },
    {
      title: "Neural Network Color Classifier",
      tags: ["PyTorch", "NumPy"],
      description: "Completed a guided ML tutorial to implement and train a neural network in PyTorch classifying colors as warm or cool. Processed and fed training data into the model, achieving 99% accuracy on the validation set.",
      type: "LEARNING_MODULE",
      link: "https://github.com/woojae-k/uwrl-onboarding-ml",
      image: "" // Placeholder fallback
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-primary" id="projects">
      <div className="px-6 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="font-geist text-[24px] font-bold text-primary uppercase flex items-center gap-3 tracking-tight">
            <span>02/</span> PROJECTS
          </h2>
          <div className="h-[1px] flex-grow bg-primary mx-8 hidden md:block"></div>
          <div className="font-jetbrains text-xs text-primary font-medium tracking-wider uppercase">ARCHIVE.MD</div>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white border border-primary overflow-hidden group transition-colors`}>
                
                {/* Image Section */}
                <div className={`w-full md:w-1/2 aspect-video relative overflow-hidden border-b md:border-b-0 ${isEven ? 'md:border-r' : 'md:border-l'} border-primary transition-colors bg-gray-100 flex items-center justify-center`}>
                  {project.image ? (
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      src={project.image}
                    />
                  ) : (
                    <span className="font-jetbrains text-xs text-primary uppercase tracking-widest">[IMAGE PLACEHOLDER]</span>
                  )}
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex gap-2 mb-6 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-white border border-primary px-3 py-1 font-jetbrains text-xs text-primary group-hover:text-secondary transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="font-geist text-[24px] font-bold text-primary mb-4 uppercase leading-tight">{project.title}</h3>
                  <p className="text-primary mb-8 font-geist text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-primary transition-colors flex justify-between items-center">
                    <span className="font-jetbrains text-sm text-primary">{project.type}</span>
                    {project.link && (
                      <a className="text-primary hover:text-secondary transition-colors" href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
