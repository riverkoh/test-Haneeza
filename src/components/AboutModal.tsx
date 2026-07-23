import React from 'react';

interface AboutModalProps {
  onExploreClick: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ onExploreClick }) => {
  return (
    <div id="about-view" className="max-w-[1440px] mx-auto px-6 md:px-16 pt-32 pb-24">
      {/* Header */}
      <div className="border-b border-[#e2e2e2] pb-10 mb-16">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#785a1a] mb-3">
          MAYFAIR, LONDON
        </p>
        <h2 className="font-serif-display text-4xl md:text-6xl text-[#000000] font-normal tracking-tight">
          About HANEEZA
        </h2>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="space-y-6">
          <h3 className="font-serif-display text-3xl md:text-4xl text-[#000000] leading-tight">
            An Obsession with Stillness & Pure Form
          </h3>
          <p className="text-base text-[#444748] leading-relaxed">
            Founded in London, HANEEZA creates timeless garments and objects of desire. Every piece is an exercise in restraint—stripping away visual superfluousness until only balance, texture, and architectural form remain.
          </p>
          <p className="text-base text-[#444748] leading-relaxed">
            Our garments are crafted from ethically sourced raw fibers: organic Irish linen, Mongolian cashmere, vegetable-tanned Italian calfskins, and recycled sterling silver with heavy gold vermeil.
          </p>

          <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#e2e2e2]">
            <div>
              <p className="font-serif-display text-3xl text-black">100%</p>
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#747878] mt-1">
                Ethically Sourced Textiles
              </p>
            </div>
            <div>
              <p className="font-serif-display text-3xl text-black">48 hrs</p>
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#747878] mt-1">
                Average Artisan Craftsmanship
              </p>
            </div>
          </div>
        </div>

        <div className="aspect-[4/3] w-full overflow-hidden bg-[#e2e2e2]">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
            alt="HANEEZA Flagship Boutique Atelier"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Boutique Locations */}
      <div className="bg-[#f3f3f4] p-10 md:p-16 border border-[#e2e2e2] space-y-8">
        <h3 className="font-serif-display text-2xl md:text-3xl text-black">
          Global Flagship & Stockists
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black mb-2">
              LONDON FLAGSHIP ATELIER
            </p>
            <p className="text-sm text-[#444748] leading-relaxed">
              14 Old Bond Street, Mayfair
              <br />
              London W1S 4PP, United Kingdom
              <br />
              +44 20 7946 0912
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black mb-2">
              PARIS PRIVATE SALON
            </p>
            <p className="text-sm text-[#444748] leading-relaxed">
              28 Rue du Faubourg Saint-Honoré
              <br />
              75008 Paris, France
              <br />
              +33 1 42 68 55 00
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black mb-2">
              TOKYO BOUTIQUE
            </p>
            <p className="text-sm text-[#444748] leading-relaxed">
              5-7-15 Minamiaoyama, Minato-ku
              <br />
              Tokyo 107-0062, Japan
              <br />
              +81 3 5464 2100
            </p>
          </div>
        </div>

        <div className="pt-6 text-center md:text-left">
          <button
            onClick={onExploreClick}
            className="bg-black text-white px-8 py-3.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#333333] transition-colors rounded-none"
          >
            DISCOVER THE COLLECTION
          </button>
        </div>
      </div>
    </div>
  );
};
