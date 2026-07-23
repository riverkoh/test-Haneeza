import React from 'react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section id="hero-section" className="relative h-[85vh] min-h-[640px] max-h-[920px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/15 z-10"></div>
      
      {/* Background Hero Image */}
      <div
        className="w-full h-full bg-cover bg-center hero-zoom"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnkzJdri_lmIETqq_THTTq0rjiGZIeLPXxpV6SCvbAFkWNwIZGKEg7A7yXb2VJemacCFYDgq-asPFd2x6zBp4nxP-2Wg1xoPkmpzqsUV4zkyNTL-uXvIqQrBfJ_fH9Jdq4deTHRKb82IbgP5_ivpQ3BR41zaO17SU71pzW3ByD9snlmtbZ03JQOeOGVXQ2O8lOGT4fajwa73MBSEKohidMc3lKUdf0LVFkcJj_SZmzx3R42eMRCtWPutJLe9Z30ZaeqWgWmS3o8YDF')`,
        }}
        role="img"
        aria-label="Model in a minimalist sculptural white dress against a limestone wall"
      ></div>

      {/* Hero Content Overlay */}
      <div className="absolute bottom-16 md:bottom-24 left-6 md:left-16 z-20 text-white max-w-xl">
        <p className="text-xs md:text-sm font-medium mb-4 tracking-[0.4em] uppercase text-white/90">
          Autumn / Winter 2024
        </p>
        <h2 className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal mb-8 leading-[1.05] tracking-tight">
          The Purest <br /> Form
        </h2>
        <button
          id="hero-explore-button"
          onClick={onExploreClick}
          className="bg-white text-black px-10 md:px-12 py-4 font-medium text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300 cursor-pointer rounded-none border border-white"
        >
          EXPLORE THE COLLECTION
        </button>
      </div>
    </section>
  );
};
