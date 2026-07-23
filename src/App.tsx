import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CuratedVisions } from './components/CuratedVisions';
import { PhilosophySection } from './components/PhilosophySection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { ShopCatalog } from './components/ShopCatalog';
import { EditorialSection } from './components/EditorialSection';
import { AboutModal } from './components/AboutModal';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { AccountDrawer } from './components/AccountDrawer';
import { InfoModal } from './components/InfoModal';

import { PRODUCTS } from './data/products';
import { ActiveTab, CartItem, Product } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Initial cart item to show functionality
    {
      product: PRODUCTS[0],
      quantity: 1,
      selectedColor: 'Onyx Noir',
    },
  ]);

  // Modal States
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isAccountOpen, setIsAccountOpen] = useState<boolean>(false);
  const [infoModalData, setInfoModalData] = useState<{
    title: string;
    content: string;
  } | null>(null);

  // Cart Handlers
  const handleAddToCart = (
    product: Product,
    quantity = 1,
    selectedSize?: string,
    selectedColor?: string
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [
        ...prev,
        {
          product,
          quantity,
          selectedSize,
          selectedColor: selectedColor || (product.colors ? product.colors[0].name : undefined),
        },
      ];
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavigate = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] font-sans-work flex flex-col justify-between selection:bg-black selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
      />

      {/* Main Content Area based on activeTab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection
              onExploreClick={() => handleNavigate('shop')}
            />
            <CuratedVisions
              products={PRODUCTS}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onViewAllClick={() => handleNavigate('shop')}
            />
            <PhilosophySection
              onReadEditorialClick={() => handleNavigate('editorial')}
            />
            <NewsletterSection />
          </>
        )}

        {(activeTab === 'shop' || activeTab === 'collections') && (
          <>
            <ShopCatalog
              products={PRODUCTS}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onAddToCart={(p) => handleAddToCart(p, 1)}
              initialCategory={activeTab === 'collections' ? 'ready-to-wear' : 'all'}
            />
            <NewsletterSection />
          </>
        )}

        {activeTab === 'editorial' && (
          <EditorialSection
            onExploreCollection={() => handleNavigate('shop')}
          />
        )}

        {activeTab === 'about' && (
          <AboutModal
            onExploreClick={() => handleNavigate('shop')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInfoModal={(title, content) => setInfoModalData({ title, content })}
      />

      {/* Modals & Drawers */}
      <ProductQuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(product, qty, size, color) => {
          handleAddToCart(product, qty, size, color);
          setSelectedProduct(null);
        }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(product) => {
          setSelectedProduct(product);
          setIsSearchOpen(false);
        }}
      />

      <AccountDrawer
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      <InfoModal
        title={infoModalData?.title || null}
        content={infoModalData?.content || null}
        onClose={() => setInfoModalData(null)}
      />
    </div>
  );
}
