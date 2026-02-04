import { useState, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

// Real Unsplash images
import heroSydney from "@/assets/hero-sydney.jpg";
import heroTeam from "@/assets/hero-team-meeting.jpg";
import heroMelbourne from "@/assets/hero-melbourne.jpg";
import heroCoast from "@/assets/hero-coast.jpg";

const slides = [
  { image: heroSydney, alt: "Sydney Harbour at sunset" },
  { image: heroTeam, alt: "Professional team meeting" },
  { image: heroMelbourne, alt: "Melbourne city skyline" },
  { image: heroCoast, alt: "Australian coastal landscape" },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 500);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const scrollToContent = () => {
    const element = document.getElementById("firm-overview");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            currentSlide === index && !isTransitioning ? "opacity-100" : "opacity-0"
          }`}
          style={{ 
            backgroundImage: `url(${slide.image})`,
            transform: currentSlide === index ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 8s ease-out, opacity 1s ease-in-out',
          }}
        />
      ))}

      {/* Dark Gradient Overlay - ensures text readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 animate-fade-up"
            style={{ 
              textShadow: '0 4px 12px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)'
            }}
          >
            Law Firm of Choice
          </h1>

          {/* Subheading */}
          <p 
            className="text-xl md:text-2xl lg:text-3xl text-white font-light mb-8 animate-fade-up-delay-1"
            style={{ 
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              color: '#E8E8E8'
            }}
          >
            Exceeding Client Expectations Since 2011
          </p>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 animate-fade-up-delay-2"
            style={{ 
              textShadow: '0 2px 6px rgba(0,0,0,0.4)'
            }}
          >
            Australia's premier legal firm providing exceptional representation
            for insurers and employers across NSW and Victoria.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up-delay-3">
            <Link 
              to="/expertise" 
              className="inline-flex items-center justify-center bg-white text-primary px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-accent hover:shadow-2xl hover:-translate-y-1 min-h-[56px]"
              style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
            >
              Explore Our Expertise
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce cursor-pointer z-10"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
