import React from 'react';
import { Product } from '../types';

interface CuratedVisionsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onViewAllClick: () => void;
}

export const CuratedVisions: React.FC<CuratedVisionsProps> = ({
  products,
  onSelectProduct,
  onViewAllClick,
}) => {
  const tote = products.find((p) => p.id === 'noir-sculptural-tote') || products[0];
  const frames = products.find((p) => p.id === 'eclipse-frames') || products[1];
  const heels = products.find((p) => p.id === 'pointed-nude-heel') || products[2];

  return (
    <section id="curated-visions-section" className="max-w-[1440px] mx-auto px-6 md:px-16 py-20 md:py-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <h3 className="font-serif-display text-3xl md:text-5xl font-normal text-[#000000] mb-4">
            Curated Visions
          </h3>
          <p className="text-base text-[#444748] max-w-xl font-normal leading-relaxed">
            Objects of desire designed for the modern individual. A dialogue between classic silhouettes and contemporary spirit.
          </p>
        </div>
        <button
          id="view-all-products-link"
          onClick={onViewAllClick}
          className="font-medium text-xs tracking-[0.2em] uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity text-[#000000] cursor-pointer"
        >
          VIEW ALL PRODUCTS
        </button>
      </div>

      {/* Asymmetric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
        {/* Large Featured Card - Col 7 */}
        <div
          id={`product-card-${tote.id}`}
          onClick={() => onSelectProduct(tote)}
          className="md:col-span-7 group cursor-pointer"
        >
          <div className="overflow-hidden mb-6 aspect-[4/5] relative bg-[#f3f3f3]">
            <img
              src={tote.image}
              alt={tote.altText}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {tote.isLimitedEdition && (
              <div className="absolute top-6 left-6">
                <span className="bg-white/95 px-4 py-1.5 text-[10px] font-medium tracking-[0.2em] uppercase text-black shadow-2xs">
                  Limited Edition
                </span>
              </div>
            )}
          </div>
          <div className="flex justify-between items-start pt-1">
            <div>
              <h4 className="font-serif-display text-xl md:text-2xl uppercase tracking-wider text-[#000000] mb-1">
                {tote.name}
              </h4>
              <p className="text-xs font-medium tracking-[0.15em] text-[#747878] uppercase">
                {tote.categoryLabel}
              </p>
            </div>
            <span className="text-base font-normal text-[#1a1c1c]">
              ${tote.price.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Column of 2 smaller cards - Col 5 */}
        <div className="md:col-span-5 flex flex-col space-y-12 md:space-y-16">
          {/* Card 1: Eclipse Frames */}
          <div
            id={`product-card-${frames.id}`}
            onClick={() => onSelectProduct(frames)}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden mb-6 aspect-square relative bg-[#f0f0f0]">
              <img
                src={frames.image}
                alt={frames.altText}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-start pt-1">
              <div>
                <h4 className="font-serif-display text-lg md:text-xl uppercase tracking-wider text-[#000000] mb-1">
                  {frames.name}
                </h4>
                <p className="text-xs font-medium tracking-[0.15em] text-[#747878] uppercase">
                  {frames.categoryLabel}
                </p>
              </div>
              <span className="text-base font-normal text-[#1a1c1c]">
                ${frames.price.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Card 2: Pointed Nude Heel */}
          <div
            id={`product-card-${heels.id}`}
            onClick={() => onSelectProduct(heels)}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden mb-6 aspect-square relative bg-[#f3f3f3]">
              <img
                src={heels.image}
                alt={heels.altText}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-start pt-1">
              <div>
                <h4 className="font-serif-display text-lg md:text-xl uppercase tracking-wider text-[#000000] mb-1">
                  {heels.name}
                </h4>
                <p className="text-xs font-medium tracking-[0.15em] text-[#747878] uppercase">
                  {heels.categoryLabel}
                </p>
              </div>
              <span className="text-base font-normal text-[#1a1c1c]">
                ${heels.price.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
