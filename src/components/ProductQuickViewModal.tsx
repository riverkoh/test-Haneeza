import React, { useState } from 'react';
import { X, Check, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { Product } from '../types';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (
    product: Product,
    quantity: number,
    selectedSize?: string,
    selectedColor?: string
  ) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes ? product.sizes[0] : ''
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors ? product.colors[0].name : ''
  );
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-6 md:p-10 border border-[#c4c7c7] shadow-xl text-[#1a1c1c] rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#444748] hover:text-black transition-colors focus:outline-none"
          aria-label="Close detail modal"
        >
          <X size={22} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start pt-2">
          {/* Image */}
          <div className="aspect-[4/5] bg-[#f0f0f0] overflow-hidden relative">
            <img
              src={product.image}
              alt={product.altText}
              className="w-full h-full object-cover"
            />
            {product.isLimitedEdition && (
              <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[9px] font-medium tracking-[0.2em] uppercase">
                LIMITED EDITION
              </span>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#747878] mb-1">
                {product.categoryLabel}
              </p>
              <h3 className="font-serif-display text-2xl md:text-3xl font-normal text-black uppercase tracking-wide">
                {product.name}
              </h3>
              <p className="font-serif-display text-xl text-black mt-2">
                ${product.price.toLocaleString()}
              </p>
            </div>

            <p className="text-sm text-[#444748] leading-relaxed">
              {product.description}
            </p>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="block text-[11px] font-medium tracking-[0.15em] uppercase text-[#1a1c1c] mb-2">
                  COLOR: <span className="text-[#747878]">{selectedColor}</span>
                </label>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-7 h-7 rounded-full border p-0.5 transition-all cursor-pointer ${
                        selectedColor === color.name
                          ? 'border-black ring-1 ring-black'
                          : 'border-transparent'
                      }`}
                      title={color.name}
                    >
                      <span
                        className="block w-full h-full rounded-full border border-black/10"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="block text-[11px] font-medium tracking-[0.15em] uppercase text-[#1a1c1c] mb-2">
                  SELECT SIZE:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3.5 py-2 text-xs font-medium uppercase border transition-all cursor-pointer ${
                        selectedSize === size
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-[#c4c7c7] hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="block text-[11px] font-medium tracking-[0.15em] uppercase text-[#1a1c1c] mb-2">
                QUANTITY:
              </label>
              <div className="inline-flex items-center border border-[#c4c7c7]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-sm font-medium hover:bg-neutral-100 transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-1 text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-sm font-medium hover:bg-neutral-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Bag Button */}
            <button
              id="modal-add-to-bag-button"
              onClick={handleAdd}
              disabled={added}
              className={`w-full py-4 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 ${
                added
                  ? 'bg-emerald-800 text-white'
                  : 'bg-black text-white hover:bg-[#333333]'
              }`}
            >
              {added ? (
                <>
                  <Check size={16} />
                  <span>ADDED TO BAG</span>
                </>
              ) : (
                <span>ADD TO BAG • ${(product.price * quantity).toLocaleString()}</span>
              )}
            </button>

            {/* Craftsmanship Note */}
            <div className="pt-4 border-t border-[#e2e2e2] space-y-2 text-xs text-[#747878]">
              <p>
                <strong className="text-black uppercase tracking-wider">
                  CRAFTSMANSHIP:
                </strong>{' '}
                {product.craftsmanship}
              </p>
              <div className="flex items-center space-x-6 pt-2 text-[#444748]">
                <div className="flex items-center space-x-1.5">
                  <Truck size={14} />
                  <span>Insured Global Delivery</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <RefreshCw size={14} />
                  <span>14-Day Atelier Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
