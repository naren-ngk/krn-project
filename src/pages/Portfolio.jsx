import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ManifestoSection from './components/About';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger);

const HorizontalPortfolio = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(sectionRef.current.children);

    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + triggerRef.current.offsetWidth
      }
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden">
      <div 
        ref={triggerRef} 
        className="h-screen overflow-hidden"
      >
        <div 
          ref={sectionRef} 
          className="flex h-screen"
          style={{ width: `${2 * 100}%` }} 
        >
          {/* Hero Section */}
          <section 
            className="w-screen h-full flex items-center justify-center"
          >
           <Hero />
          </section>

          {/* About Section */}
          <section 
            className="w-screen h-full flex items-center justify-center"
          >
            <ManifestoSection />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HorizontalPortfolio;