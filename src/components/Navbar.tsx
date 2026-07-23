import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
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
        isScrolled ? 'py-4 shadow-xs' : 'py-6'
      }`}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-16 max-w-[1440px] mx-auto relative">
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
        <div className="hidden md:flex items-center space-x-10">
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
        <div className="flex items-center space-x-6 md:space-x-8">
          <div className="hidden md:flex items-center space-x-10 mr-4">
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

          <button
            id="nav-account-button"
            onClick={onOpenAccount}
            className="cursor-pointer text-[#1a1c1c] hover:opacity-60 transition-opacity p-1 hidden sm:block"
            title="Account"
            aria-label="Account"
          >
            <User size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e2e2e2] px-6 py-8 mt-4 space-y-6 animate-fadeIn">
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
