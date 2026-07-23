import React from 'react';

interface PhilosophySectionProps {
  onReadEditorialClick: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  onReadEditorialClick,
}) => {
  return (
    <section id="philosophy-section" className="bg-[#f3f3f4] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Image with vertical CRAFTSMANSHIP text */}
        <div className="order-2 md:order-1 relative">
          <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#e2e2e2]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmaWkf1qg-IucFFY0Pl3TQx6UQy85X4mtGJSOET4ON1lW4pKxnCaC9b9iY4ve-v-4HZOkt6l72_KjckGAE2XbXe7mhKVVccgeobHckoFJND_Q4-kTvBP46W9uTnnfpBlYSka0iImjvuPLEFG6ynrEtcq5OBsU0-G4ABUz7JwgAgLwi1li-U9k0lO2ZVXZPVGEV12pR1n7w_6gAw4JjFkHQULUZuD2wUJXWt-fbvt1Y6D060cXy7hPiWIVvnmSIKfR-RLdYWKF9yaru"
              alt="Fashion designer in a minimalist atelier draped garment"
              className="w-full h-full object-cover"
            />
            {/* Watermark text */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none select-none">
              <p className="font-serif-display text-5xl xl:text-6xl text-black/10 rotate-90 origin-center whitespace-nowrap tracking-[0.8em]">
                CRAFTSMANSHIP
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Text */}
        <div className="order-1 md:order-2 space-y-8 lg:space-y-10">
          <h5 className="font-medium text-xs tracking-[0.4em] uppercase text-[#785a1a]">
            THE PHILOSOPHY
          </h5>
          <h3 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#000000] leading-[1.15]">
            Design Without <br /> Distraction
          </h3>
          <p className="text-base md:text-lg text-[#444748] font-normal leading-relaxed">
            At HANEEZA, we believe that true luxury is found in the stillness of perfect design. Our pieces are crafted with an obsession for detail and a reverence for the materials we use. We don't just create fashion; we compose a visual language of elegance and restraint.
          </p>
          <div className="pt-4">
            <button
              id="read-editorial-button"
              onClick={onReadEditorialClick}
              className="inline-block border border-black px-10 py-4 font-medium text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300 cursor-pointer rounded-none"
            >
              Read the Editorial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
