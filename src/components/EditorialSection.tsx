import React, { useState } from 'react';
import { EDITORIALS } from '../data/editorial';
import { EditorialArticle } from '../types';

interface EditorialSectionProps {
  onExploreCollection: () => void;
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({
  onExploreCollection,
}) => {
  const [selectedArticle, setSelectedArticle] = useState<EditorialArticle>(
    EDITORIALS[0]
  );

  return (
    <div id="editorial-view" className="max-w-[1440px] mx-auto px-6 md:px-16 pt-32 pb-24">
      {/* Header */}
      <div className="border-b border-[#e2e2e2] pb-10 mb-12">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#785a1a] mb-3">
          HANEEZA CHRONICLES
        </p>
        <h2 className="font-serif-display text-4xl md:text-6xl text-[#000000] font-normal tracking-tight">
          Editorial & Perspectives
        </h2>
      </div>

      {/* Article Selector Tabs */}
      <div className="flex gap-8 border-b border-[#e2e2e2] pb-4 mb-12 overflow-x-auto">
        {EDITORIALS.map((art) => (
          <button
            key={art.id}
            onClick={() => setSelectedArticle(art)}
            className={`text-xs font-medium tracking-[0.2em] uppercase transition-all whitespace-nowrap cursor-pointer pb-2 ${
              selectedArticle.id === art.id
                ? 'text-[#000000] border-b-2 border-black font-semibold'
                : 'text-[#747878] hover:text-[#000000]'
            }`}
          >
            {art.title}
          </button>
        ))}
      </div>

      {/* Featured Article Layout */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Cover */}
        <div className="space-y-6 text-center">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#747878]">
            {selectedArticle.category} • {selectedArticle.date} • {selectedArticle.readTime}
          </p>
          <h1 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-normal text-[#000000] leading-tight">
            {selectedArticle.title}
          </h1>
          <p className="text-base md:text-lg font-serif-display italic text-[#444748] max-w-2xl mx-auto">
            "{selectedArticle.summary}"
          </p>
        </div>

        {/* Cover Image */}
        <div className="aspect-[16/9] w-full overflow-hidden bg-[#e2e2e2]">
          <img
            src={selectedArticle.coverImage}
            alt={selectedArticle.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="space-y-8 text-[#1a1c1c] text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto pt-4">
          {selectedArticle.paragraphs.map((p, idx) => (
            <p key={idx} className="first-letter:text-5xl first-letter:font-serif-display first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              {p}
            </p>
          ))}

          {/* Pull Quote */}
          {selectedArticle.quote && (
            <blockquote className="my-12 py-8 border-y border-[#c4c7c7] text-center space-y-3">
              <p className="font-serif-display text-2xl md:text-3xl text-[#000000] italic leading-snug">
                "{selectedArticle.quote}"
              </p>
              {selectedArticle.quoteAuthor && (
                <cite className="block text-xs font-medium tracking-[0.2em] uppercase text-[#747878] not-italic">
                  — {selectedArticle.quoteAuthor}
                </cite>
              )}
            </blockquote>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-12 border-t border-[#e2e2e2]">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#747878] mb-6">
            DISCOVER THE COLLECTION INSPIRED BY THIS NARRATIVE
          </p>
          <button
            onClick={onExploreCollection}
            className="bg-black text-white px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#333333] transition-colors cursor-pointer rounded-none"
          >
            EXPLORE THE COLLECTION
          </button>
        </div>
      </div>
    </div>
  );
};
