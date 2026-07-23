import React, { useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-20 px-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-2xl p-6 md:p-8 shadow-2xl border border-[#c4c7c7] text-[#1a1c1c]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center border-b border-black pb-3">
          <SearchIcon size={20} className="text-[#747878] mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH BAGS, HEELS, ACCESSORIES, READY-TO-WEAR..."
            className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-sm font-medium tracking-[0.15em] uppercase placeholder:text-[#747878]"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#747878] hover:text-black"
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        {!query && (
          <div className="pt-6 space-y-3">
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#747878]">
              POPULAR SEARCHES
            </p>
            <div className="flex flex-wrap gap-2">
              {['NOIR TOTE', 'ECLIPSE FRAMES', 'POINTED HEEL', 'SCULPTURAL GOWN'].map(
                (term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="border border-[#c4c7c7] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.15em] uppercase hover:border-black transition-colors"
                  >
                    {term}
                  </button>
                )
              )}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="pt-6 max-h-96 overflow-y-auto space-y-4">
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#747878]">
              {filtered.length} RESULT{filtered.length === 1 ? '' : 'S'} FOUND
            </p>
            {filtered.length === 0 ? (
              <p className="text-sm font-serif-display italic text-[#747878] py-8 text-center">
                No products match "{query}".
              </p>
            ) : (
              filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                  className="flex items-center gap-4 p-2 hover:bg-[#f3f3f4] transition-colors cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.altText}
                    className="w-14 h-16 object-cover bg-[#f0f0f0]"
                  />
                  <div>
                    <h5 className="font-serif-display text-base uppercase text-black">
                      {item.name}
                    </h5>
                    <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#747878]">
                      {item.categoryLabel} • ${item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
