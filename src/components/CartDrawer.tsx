import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [isCheckoutSubmitted, setIsCheckoutSubmitted] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const finalTotal = Math.max(0, subtotal - discount);
  const freeShippingThreshold = 1000;
  const freeShippingProgress = Math.min(
    100,
    (subtotal / freeShippingThreshold) * 100
  );

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'HANEEZA10' || promoCode.trim().toUpperCase() === 'AUTUMN2024') {
      const disc = Math.round(subtotal * 0.1);
      setDiscount(disc);
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid private invitation code. Try: HANEEZA10');
    }
  };

  const handleCompleteOrder = () => {
    setIsCheckoutSubmitted(true);
    setTimeout(() => {
      onClearCart();
      setIsCheckoutSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#c4c7c7] shadow-2xl flex flex-col justify-between text-[#1a1c1c]">
          {/* Header */}
          <div className="p-6 border-b border-[#e2e2e2] flex items-center justify-between">
            <h3 className="font-serif-display text-xl uppercase tracking-widest text-black">
              Shopping Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>
            <button
              onClick={onClose}
              className="p-1 text-[#444748] hover:text-black transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Complimentary Shipping Banner */}
          <div className="px-6 py-3.5 bg-[#f3f3f4] border-b border-[#e2e2e2]">
            <div className="flex justify-between text-[11px] font-medium tracking-[0.1em] uppercase text-[#444748] mb-1.5">
              <span>
                {subtotal >= freeShippingThreshold
                  ? 'Complimentary Worldwide Shipping Unlocked'
                  : `$${(freeShippingThreshold - subtotal).toLocaleString()} away from Complimentary Shipping`}
              </span>
              <span>{Math.round(freeShippingProgress)}%</span>
            </div>
            <div className="w-full bg-[#e2e2e2] h-1">
              <div
                className="bg-black h-1 transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {isCheckoutSubmitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h4 className="font-serif-display text-2xl text-black">
                  Order Confirmed
                </h4>
                <p className="text-xs text-[#444748] max-w-xs mx-auto leading-relaxed uppercase tracking-wider">
                  Your bespoke selection is being prepared in our Mayfair Atelier. A receipt has been dispatched.
                </p>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <p className="font-serif-display text-xl text-[#747878] italic">
                  Your shopping bag is currently empty.
                </p>
                <button
                  onClick={onClose}
                  className="inline-block border border-black px-6 py-2.5 text-xs font-medium tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors"
                >
                  EXPLORE THE COLLECTION
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 pb-6 border-b border-[#e2e2e2] items-start"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.altText}
                    className="w-20 h-24 object-cover bg-[#f0f0f0]"
                  />
                  <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif-display text-sm font-medium uppercase tracking-wider text-black">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#747878] hover:text-black p-0.5"
                          title="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="text-[10px] font-medium tracking-[0.15em] text-[#747878] uppercase mt-0.5">
                        {item.product.categoryLabel}
                        {item.selectedSize ? ` • SIZE: ${item.selectedSize}` : ''}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center border border-[#c4c7c7]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="px-2 py-0.5 text-xs font-medium hover:bg-neutral-100"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="px-2 py-0.5 text-xs font-medium hover:bg-neutral-100"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-medium text-black">
                        ${(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {!isCheckoutSubmitted && cartItems.length > 0 && (
            <div className="p-6 border-t border-[#e2e2e2] bg-[#f9f9f9] space-y-4">
              {/* Promo code */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="PROMO CODE (HANEEZA10)"
                  className="flex-1 border border-[#c4c7c7] px-3 py-2 text-xs uppercase tracking-widest focus:outline-none focus:border-black bg-white"
                />
                <button
                  type="submit"
                  className="border border-black px-4 py-2 text-[10px] font-medium tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors"
                >
                  APPLY
                </button>
              </form>
              {promoError && (
                <p className="text-[10px] text-[#ba1a1a]">{promoError}</p>
              )}
              {promoApplied && (
                <p className="text-[10px] text-emerald-800 font-medium uppercase tracking-wider">
                  Private invitation discount applied (10% OFF)
                </p>
              )}

              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-medium text-[#747878] uppercase tracking-wider">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-xs font-medium text-emerald-800 uppercase tracking-wider">
                    <span>Discount</span>
                    <span>-${discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-semibold text-black uppercase tracking-wider pt-2 border-t border-[#e2e2e2]">
                  <span>Total</span>
                  <span>${finalTotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                id="checkout-button"
                onClick={handleCompleteOrder}
                className="w-full bg-black text-white py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-[#333333] transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight size={16} />
              </button>

              <div className="flex items-center justify-center space-x-1.5 text-[10px] text-[#747878] uppercase tracking-wider pt-1">
                <ShieldCheck size={14} />
                <span>256-Bit Encrypted Atelier Checkout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
