import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';

interface ShopCatalogProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  initialCategory?: string;
}

export const ShopCatalog: React.FC<ShopCatalogProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  initialCategory = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const categories: { key: string; label: string }[] = [
    { key: 'all', label: 'ALL PRODUCTS' },
    { key: 'handbags', label: 'HANDBAGS' },
    { key: 'accessories', label: 'ACCESSORIES' },
    { key: 'footwear', label: 'FOOTWEAR' },
    { key: 'ready-to-wear', label: 'READY-TO-WEAR' },
    { key: 'jewelry', label: 'JEWELRY' },
  ];

  const filteredProducts = useMemo(() => {
    let list = [...products];
    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === (selectedCategory as ProductCategory));
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }
    return list;
  }, [products, selectedCategory, sortBy]);

  return (
    <div id="shop-catalog" className="max-w-[1440px] mx-auto px-6 md:px-16 pt-32 pb-24">
      {/* Header */}
      <div className="border-b border-[#e2e2e2] pb-10 mb-12">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#747878] mb-3">
          AUTUMN / WINTER 2024 COLLECTION
        </p>
        <h2 className="font-serif-display text-4xl md:text-6xl text-[#000000] font-normal tracking-tight">
          The Full Collection
        </h2>
      </div>

      {/* Filter and Sort Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#e2e2e2] pb-6 mb-12 gap-6">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-6 md:gap-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`text-xs font-medium tracking-[0.2em] uppercase transition-all cursor-pointer pb-1 ${
                selectedCategory === cat.key
                  ? 'text-[#000000] border-b-2 border-black font-semibold'
                  : 'text-[#747878] hover:text-[#000000]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center space-x-3 self-end md:self-auto">
          <span className="text-[11px] font-medium tracking-[0.15em] text-[#747878] uppercase">
            SORT BY:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-transparent border-none text-xs font-medium tracking-[0.15em] uppercase text-[#000000] focus:ring-0 cursor-pointer pr-4"
          >
            <option value="featured">FEATURED</option>
            <option value="price-asc">PRICE: LOW TO HIGH</option>
            <option value="price-desc">PRICE: HIGH TO LOW</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            id={`shop-item-${product.id}`}
            className="group cursor-pointer flex flex-col justify-between"
          >
            <div className="overflow-hidden mb-5 aspect-[4/5] relative bg-[#f0f0f0]">
              <img
                src={product.image}
                alt={product.altText}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onClick={() => onSelectProduct(product)}
              />
              {product.isLimitedEdition && (
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 px-3 py-1 text-[9px] font-medium tracking-[0.2em] uppercase text-black">
                    Limited
                  </span>
                </div>
              )}
              {/* Quick Add Overlay on Hover */}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-xs flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProduct(product);
                  }}
                  className="flex-1 bg-transparent border border-black py-2.5 text-[10px] font-medium tracking-[0.2em] uppercase text-black hover:bg-black hover:text-white transition-colors"
                >
                  QUICK VIEW
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product);
                  }}
                  className="flex-1 bg-black text-white py-2.5 text-[10px] font-medium tracking-[0.2em] uppercase hover:bg-[#333333] transition-colors"
                >
                  ADD TO BAG
                </button>
              </div>
            </div>

            <div
              onClick={() => onSelectProduct(product)}
              className="flex justify-between items-start pt-1"
            >
              <div>
                <h4 className="font-serif-display text-lg uppercase tracking-wider text-[#000000] mb-1 group-hover:underline">
                  {product.name}
                </h4>
                <p className="text-[11px] font-medium tracking-[0.15em] text-[#747878] uppercase">
                  {product.categoryLabel}
                </p>
              </div>
              <span className="text-sm font-normal text-[#1a1c1c]">
                ${product.price.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
