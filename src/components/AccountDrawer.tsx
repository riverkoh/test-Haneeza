import React, { useState } from 'react';
import { X, User, Heart, Package, LogOut } from 'lucide-react';

interface AccountDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountDrawer: React.FC<AccountDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'wishlist'>('profile');

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#c4c7c7] shadow-2xl flex flex-col justify-between text-[#1a1c1c]">
          {/* Header */}
          <div className="p-6 border-b border-[#e2e2e2] flex items-center justify-between">
            <h3 className="font-serif-display text-xl uppercase tracking-widest text-black">
              Client Portal
            </h3>
            <button
              onClick={onClose}
              className="p-1 text-[#444748] hover:text-black transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Account Sub-Nav */}
          <div className="flex border-b border-[#e2e2e2] px-6 pt-2">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 pb-3 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors ${
                activeTab === 'profile'
                  ? 'border-b-2 border-black text-black'
                  : 'text-[#747878] hover:text-black'
              }`}
            >
              PROFILE
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex-1 pb-3 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors ${
                activeTab === 'orders'
                  ? 'border-b-2 border-black text-black'
                  : 'text-[#747878] hover:text-black'
              }`}
            >
              ORDERS
            </button>
            <button
              onClick={() => setActiveTab('wishlist')}
              className={`flex-1 pb-3 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors ${
                activeTab === 'wishlist'
                  ? 'border-b-2 border-black text-black'
                  : 'text-[#747878] hover:text-black'
              }`}
            >
              WISHLIST
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4 pb-6 border-b border-[#e2e2e2]">
                  <div className="w-14 h-14 bg-[#1a1c1c] text-white flex items-center justify-center font-serif-display text-xl">
                    HK
                  </div>
                  <div>
                    <h4 className="font-serif-display text-lg text-black uppercase">
                      Helena Kensington
                    </h4>
                    <p className="text-xs text-[#747878]">VIP Private Client</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-[#444748]">
                  <div>
                    <span className="block text-[10px] font-medium tracking-[0.15em] uppercase text-[#747878]">
                      PREFERRED CURRENCY
                    </span>
                    <p className="text-sm font-medium text-black mt-0.5">USD ($)</p>
                  </div>
                  <div>
                    <span className="block text-[10px] font-medium tracking-[0.15em] uppercase text-[#747878]">
                      PRIMARY BOUTIQUE
                    </span>
                    <p className="text-sm font-medium text-black mt-0.5">Mayfair, London W1S</p>
                  </div>
                  <div>
                    <span className="block text-[10px] font-medium tracking-[0.15em] uppercase text-[#747878]">
                      SAVED ATELIER ADDRESS
                    </span>
                    <p className="text-sm font-medium text-black mt-0.5">
                      74 Cadogan Square, Knightsbridge, London SW1X 0EA
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-4">
                <div className="p-4 border border-[#e2e2e2] bg-[#f9f9f9]">
                  <div className="flex justify-between items-center text-xs font-semibold text-black uppercase">
                    <span>ORDER #HNZ-89104</span>
                    <span className="text-emerald-800">DELIVERED</span>
                  </div>
                  <p className="text-[10px] text-[#747878] mt-1 uppercase">OCTOBER 14, 2024</p>
                  <p className="text-xs font-medium text-black mt-2">
                    Noir Sculptural Tote ($1,250)
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="text-center py-12 text-[#747878] space-y-3">
                <Heart size={28} className="mx-auto text-[#747878]" />
                <p className="font-serif-display text-base italic text-black">
                  Your private wishlist is empty.
                </p>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-[#e2e2e2]">
            <button
              onClick={onClose}
              className="w-full border border-black py-3 text-xs font-medium tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors flex items-center justify-center space-x-2"
            >
              <LogOut size={14} />
              <span>LOGOUT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
