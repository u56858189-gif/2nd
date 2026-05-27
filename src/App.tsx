import { CustomCursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { Products } from './components/Products';
import { About } from './components/About';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { useCart, CartProvider } from './context/CartContext';
import { useEffect } from 'react';

function AppContent() {
  const { cartItemCount, setIsCartOpen } = useCart();
  
  useEffect(() => {
    // Enable smooth scrolling and prevent horizontal overflow
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar cartItemCount={cartItemCount} onOpenCart={() => setIsCartOpen(true)} />
      
      <main className="overflow-x-hidden w-full">
        <Hero />
        <Categories />
        {/* Adds a dynamic visual break line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <Products />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <About />
      </main>

      <Footer />
      <CartDrawer />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
