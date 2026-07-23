import React from 'react';
import { ActiveTab } from '../types';

interface FooterProps {
  onNavigate: (tab: ActiveTab) => void;
  onOpenInfoModal: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInfoModal }) => {
  return (
    <footer id="main-footer" className="bg-[#ffffff] border-t border-[#c4c7c7]">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full px-6 md:px-16 py-16 md:py-24 max-w-[1440px] mx-auto gap-12 lg:gap-16">
        {/* Brand & Copyright */}
        <div className="space-y-6 max-w-sm">
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left focus:outline-none"
          >
            <h2 className="font-serif-display text-2xl md:text-3xl tracking-[0.2em] text-[#000000] font-normal hover:opacity-80 transition-opacity">
              HANEEZA
            </h2>
          </button>
          <p className="text-[11px] font-medium tracking-[0.15em] text-[#444748] uppercase leading-relaxed">
            © 2024 HANEEZA. ALL RIGHTS RESERVED.
            <br />
            CRAFTED IN LONDON.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-x-16 sm:gap-x-24 gap-y-8">
          {/* SUPPORT */}
          <div className="space-y-4">
            <h6 className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#747878] mb-6">
              SUPPORT
            </h6>
            <ul className="space-y-3.5">
              <li>
                <button
                  onClick={() =>
                    onOpenInfoModal(
                      'Shipping & Returns',
                      'HANEEZA offers complimentary worldwide insured shipping on all orders over $500. Returns and exchanges are accepted within 14 days of delivery in original, unworn condition with security tags attached.'
                    )
                  }
                  className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#444748] hover:text-[#000000] transition-colors"
                >
                  SHIPPING & RETURNS
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    onOpenInfoModal(
                      'Client Services & Contact',
                      'Our Concierge Service is available Monday through Saturday from 9:00 AM to 6:00 PM GMT.\n\nEmail: concierge@haneeza.com\nTelephone: +44 20 7946 0912\nAtelier: Mayfair, London W1S 2TF'
                    )
                  }
                  className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#444748] hover:text-[#000000] transition-colors"
                >
                  CONTACT
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    onOpenInfoModal(
                      'Store Locator',
                      'HANEEZA Flagship Atelier:\n14 Old Bond Street, Mayfair, London W1S 4PP\n\nStockists:\nHarrods, London\nLe Bon Marché, Paris\nSaks Fifth Avenue, New York\nIsetan Shinjuku, Tokyo'
                    )
                  }
                  className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#444748] hover:text-[#000000] transition-colors"
                >
                  STORE LOCATOR
                </button>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="space-y-4">
            <h6 className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#747878] mb-6">
              LEGAL
            </h6>
            <ul className="space-y-3.5">
              <li>
                <button
                  onClick={() =>
                    onOpenInfoModal(
                      'Privacy Policy',
                      'HANEEZA respects your privacy and is committed to protecting your personal data in accordance with GDPR and applicable laws. We never share client data with third parties for marketing purposes.'
                    )
                  }
                  className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#444748] hover:text-[#000000] transition-colors"
                >
                  PRIVACY POLICY
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    onOpenInfoModal(
                      'Terms of Service',
                      'All sales on haneeza.com are governed by English Law. Product availability is updated in real time. Bespoke and made-to-order items require a 50% deposit prior to atelier crafting.'
                    )
                  }
                  className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#444748] hover:text-[#000000] transition-colors"
                >
                  TERMS OF SERVICE
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    onOpenInfoModal(
                      'Accessibility',
                      'HANEEZA is committed to digital accessibility for individuals with disabilities. We continuously enhance the user experience for everyone, adhering to WCAG 2.1 Level AA standards.'
                    )
                  }
                  className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#444748] hover:text-[#000000] transition-colors"
                >
                  ACCESSIBILITY
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div className="space-y-6">
          <h6 className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#747878]">
            FOLLOW US
          </h6>
          <div className="flex space-x-6">
            <a
              href="#instagram"
              onClick={(e) => {
                e.preventDefault();
                onOpenInfoModal('Instagram', 'Follow @HANEEZA_OFFICIAL for daily atelier insights and runway archives.');
              }}
              className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#444748] hover:text-[#000000] transition-colors"
            >
              INSTAGRAM
            </a>
            <a
              href="#pinterest"
              onClick={(e) => {
                e.preventDefault();
                onOpenInfoModal('Pinterest', 'Explore moodboards, architecture, and fabric inspirations on our official Pinterest.');
              }}
              className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#444748] hover:text-[#000000] transition-colors"
            >
              PINTEREST
            </a>
            <a
              href="#vimeo"
              onClick={(e) => {
                e.preventDefault();
                onOpenInfoModal('Vimeo', 'Watch 4K runway short films and artisan documentaries on Vimeo.');
              }}
              className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#444748] hover:text-[#000000] transition-colors"
            >
              VIMEO
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
