import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X, Award, Info } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenAccount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 bg-[#ffffff] transition-all duration-300 border-b border-[#e2e2e2] ${
        isScrolled ? 'py-3 shadow-xs' : 'py-5'
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-12 max-w-[1440px] mx-auto relative">
        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#1a1c1c] p-1 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Left Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          <button
            id="nav-link-shop"
            onClick={() => handleNavClick('shop')}
            className={`font-medium text-[11px] uppercase tracking-[0.2em] transition-opacity duration-300 ${
              activeTab === 'shop'
                ? 'text-[#000000] border-b border-black pb-0.5'
                : 'text-[#1a1c1c] hover:opacity-60'
            }`}
          >
            SHOP
          </button>
          <button
            id="nav-link-collections"
            onClick={() => handleNavClick('collections')}
            className={`font-medium text-[11px] uppercase tracking-[0.2em] transition-opacity duration-300 ${
              activeTab === 'collections'
                ? 'text-[#000000] border-b border-black pb-0.5'
                : 'text-[#444748] hover:opacity-60'
            }`}
          >
            COLLECTIONS
          </button>
        </div>

        {/* Logo Center */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <button
            id="nav-logo"
            onClick={() => handleNavClick('home')}
            className="focus:outline-none"
          >
            <h1 className="font-serif-display text-2xl md:text-3xl tracking-[0.2em] text-[#000000] font-normal hover:opacity-80 transition-opacity">
              HANEEZA
            </h1>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="hidden lg:flex items-center space-x-8 mr-2">
            <button
              id="nav-link-editorial"
              onClick={() => handleNavClick('editorial')}
              className={`font-medium text-[11px] uppercase tracking-[0.2em] transition-opacity duration-300 ${
                activeTab === 'editorial'
                  ? 'text-[#000000] border-b border-black pb-0.5'
                  : 'text-[#444748] hover:opacity-60'
              }`}
            >
              EDITORIAL
            </button>
            <button
              id="nav-link-about"
              onClick={() => handleNavClick('about')}
              className={`font-medium text-[11px] uppercase tracking-[0.2em] transition-opacity duration-300 ${
                activeTab === 'about'
                  ? 'text-[#000000] border-b border-black pb-0.5'
                  : 'text-[#444748] hover:opacity-60'
              }`}
            >
              ABOUT
            </button>
          </div>

          <button
            id="nav-search-button"
            onClick={onOpenSearch}
            className="cursor-pointer text-[#1a1c1c] hover:opacity-60 transition-opacity p-1"
            title="Search"
            aria-label="Search"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          <button
            id="nav-cart-button"
            onClick={onOpenCart}
            className="cursor-pointer text-[#1a1c1c] hover:opacity-60 transition-opacity p-1 relative"
            title="Shopping Bag"
            aria-label="Shopping Bag"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#000000] text-white text-[9px] font-medium w-4 h-4 flex items-center justify-center rounded-none">
                {cartCount}
              </span>
            )}
          </button>

          {/* Logged in User Profile & Achievement Level Badge (Top Right) */}
          <div className="relative group cursor-pointer" id="user-achievement-badge">
            <div
              onClick={onOpenAccount}
              className="flex items-center space-x-2 bg-[#f4ebd0]/60 hover:bg-[#f4ebd0] border border-[#c4a458] px-2.5 py-1 transition-all rounded-none"
            >
              <Award size={16} className="text-[#967018] shrink-0" />
              <div className="text-left hidden sm:block">
                <div className="flex items-center space-x-1.5">
                  <span className="text-[10px] font-semibold tracking-wider text-[#1a1c1c] uppercase">
                    JOHN TAN
                  </span>
                  <span className="text-[9px] bg-black text-[#d4af37] px-1.5 py-0.2 font-bold tracking-widest uppercase">
                    ACHIEVER
                  </span>
                </div>
                <p className="text-[9px] text-[#444748] font-medium tracking-tight">
                  Spend so far: <span className="text-black font-semibold">$123</span>
                </p>
              </div>
              <Info size={13} className="text-[#747878] hidden sm:block" />
            </div>

            {/* Achievement Tooltip on Hover */}
            <div
              id="achievement-levels-tooltip"
              className="absolute right-0 top-full mt-2 w-72 bg-white border border-black shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-left pointer-events-none group-hover:pointer-events-auto"
            >
              <div className="border-b border-[#e2e2e2] pb-2 mb-3 flex justify-between items-center">
                <p className="text-[10px] font-bold tracking-[0.2em] text-black uppercase">
                  LEVELS OF ACHIEVEMENT
                </p>
                <span className="text-[9px] text-[#747878]">Total: S$123</span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="p-2 border border-[#e2e2e2] bg-[#f9f9f9]">
                  <p className="font-semibold text-black uppercase tracking-wider">
                    Explorer
                  </p>
                  <p className="text-[#444748] mt-0.5">Spend S$50 to S$100.</p>
                </div>

                <div className="p-2 border border-[#c4a458] bg-[#f4ebd0]/80">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-black uppercase tracking-wider">
                      Achiever
                    </p>
                    <span className="text-[8px] bg-black text-[#d4af37] px-1.5 py-0.5 font-bold uppercase tracking-widest">
                      CURRENT LEVEL
                    </span>
                  </div>
                  <p className="text-[#1a1c1c] font-medium mt-0.5">
                    Spend S$100.01 to S$200.
                  </p>
                </div>

                <div className="p-2 border border-[#e2e2e2] bg-[#f9f9f9]">
                  <p className="font-semibold text-black uppercase tracking-wider">
                    Champion
                  </p>
                  <p className="text-[#444748] mt-0.5">
                    Spend more than S$200.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e2e2e2] px-6 py-8 mt-4 space-y-6 animate-fadeIn">
          <div className="pb-4 border-b border-[#e2e2e2] flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-black">John Tan</p>
              <p className="text-[10px] text-[#747878] uppercase">Level: Achiever • Spend: $123</p>
            </div>
            <span className="text-[9px] bg-black text-[#d4af37] px-2 py-0.5 font-bold uppercase">
              ACHIEVER
            </span>
          </div>

          <div className="flex flex-col space-y-5">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left font-medium text-xs uppercase tracking-[0.2em] text-[#1a1c1c]"
            >
              HOME
            </button>
            <button
              onClick={() => handleNavClick('shop')}
              className="text-left font-medium text-xs uppercase tracking-[0.2em] text-[#1a1c1c]"
            >
              SHOP
            </button>
            <button
              onClick={() => handleNavClick('collections')}
              className="text-left font-medium text-xs uppercase tracking-[0.2em] text-[#1a1c1c]"
            >
              COLLECTIONS
            </button>
            <button
              onClick={() => handleNavClick('editorial')}
              className="text-left font-medium text-xs uppercase tracking-[0.2em] text-[#1a1c1c]"
            >
              EDITORIAL
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left font-medium text-xs uppercase tracking-[0.2em] text-[#1a1c1c]"
            >
              ABOUT HANEEZA
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

