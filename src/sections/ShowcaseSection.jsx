import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Pitch Coach" />
            </div>
            <div className="text-content">
              <h2>
                An AI-powered app that analyzes your startup pitch using speech and facial expression recognition, providing instant feedback on delivery, content, and audience engagement.
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "React",
                  "Tailwind CSS",
                  "ReactMediaRecorder",
                  "react-webcam",
                  "face-api.js",
                  "Flask",
                  "OpenAI Whisper API",
                  "OpenAI LLM API",
                ].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium
                              bg-blue-600 text-white shadow-sm ring-1 ring-white/10 hover:bg-blue-500"
                  >
                    {t}
                  </span>
                ))}
              </div>

              
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Job Scraper Chrome Extension"
                />
              </div>
              <h2>The Job Scraper Chrome Extension</h2>
            
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "JavaScript",
                "Chrome Extension",
                "Manifest V3",
                "Popup UI",
                "Content Scripts",
                "Chrome Storage",
                "Tailwind CSS",
                "DOM scraping",
                "Configurable selectors",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium
                            bg-blue-600 text-white shadow-sm ring-1 ring-white/10 hover:bg-blue-500"
                >
                  {t}
                </span>
              ))}
            </div>
        
            </div>
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>Password Visualizer - Interactive tool visualizing password strength in real-time</h2>
              <div className="mt-3 flex flex-wrap gap-2">
              {[
                "React",
                "JavaScript",
                "Tailwind CSS",
                "zxcvbn (entropy)",
                "Clipboard API",
                "Local-only evaluation",
                "Accessible UI",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium
                            bg-blue-600 text-white shadow-sm ring-1 ring-white/10 hover:bg-blue-500"
                >
                  {t}
                </span>
              ))}
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
