import { useState, useEffect } from 'react';
import { ShoppingBag, Search, Heart, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
}

export function Navbar({ cartItemCount, onOpenCart }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Shop", href: "#shop" },
    { name: "Categories", href: "#categories" },
    { name: "About", href: "#about" }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-5 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer group flex items-center gap-1.5 md:gap-2">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-tr from-[#00F3FF] to-[#CCFF00] rounded-lg rotate-12"></div>
          <a href="#home" className="font-display font-black text-xl md:text-2xl tracking-tighter uppercase text-white group-hover:text-[#00F3FF] transition-colors">
            NEON<span className="text-[#CCFF00]">PULSE</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white relative group transition-colors">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F3FF] to-[#CCFF00] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button className="text-white/70 hover:text-[#00F3FF] transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-white/70 hover:text-[#00F3FF] transition-colors hidden sm:block">
            <Heart className="w-5 h-5" />
          </button>
          <button className="text-white/70 hover:text-[#00F3FF] transition-colors hidden sm:block">
            <User className="w-5 h-5" />
          </button>
          
          <button onClick={onOpenCart} className="text-white hover:text-[#CCFF00] transition-colors relative group">
            <div className="p-2 glass-panel rounded-full group-hover:border-[#CCFF00]/50 transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute p-[1px] -top-1 -right-1 bg-[#CCFF00] text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-pulse"
                >
                  {cartItemCount}
                </motion.span>
              )}
            </div>
          </button>

          <button 
            className="lg:hidden text-white/70 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-panel border-t border-white/10 lg:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold uppercase tracking-widest text-white/70 hover:text-white hover:text-[#00F3FF] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 mt-4 pt-4 border-t border-white/10">
                 <button className="text-white/70 hover:text-[#00F3FF]"><Search className="w-6 h-6" /></button>
                 <button className="text-white/70 hover:text-[#00F3FF]"><Heart className="w-6 h-6" /></button>
                 <button className="text-white/70 hover:text-[#00F3FF]"><User className="w-6 h-6" /></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
