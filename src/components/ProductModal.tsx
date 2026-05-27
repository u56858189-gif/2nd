import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, ShoppingBag, Truck, ShieldCheck, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[0] || '');
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, 1);
    setAdded(true);
    setTimeout(() => {
       setAdded(false);
       onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0B0B0B] border border-white/10 shadow-2xl rounded-3xl flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Image Container */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-[#111] to-[#0A0A0A]">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-cover rounded-2xl shadow-2xl transform -rotate-12 hover:rotate-0 transition-all duration-700 hover:scale-105"
              />
            </motion.div>
            
            {/* Ambient background glow for image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00F3FF] rounded-full blur-[100px] opacity-20 pointer-events-none" />
          </div>

          {/* Right: Details */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
            <div className="flex items-center gap-2 mb-4 text-[#CCFF00] text-[10px] font-black uppercase tracking-widest">
              {product.isNew && <span>New Release</span>}
              {product.isNew && product.isBestSeller && <span className="text-white">•</span>}
              {product.isBestSeller && <span>Best Seller</span>}
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-2 text-white">{product.name}</h2>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl text-[#CCFF00] font-black italic">${product.price.toFixed(2)}</span>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-gray-300 text-sm ml-1">{product.rating} ({product.reviews} Reviews)</span>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed uppercase tracking-wide mb-8">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-white">Select Size</span>
                <button className="text-[10px] uppercase tracking-widest text-white/50 hover:text-white underline underline-offset-2">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-xl border text-sm font-bold uppercase tracking-wider transition-all ${
                      selectedSize === size 
                        ? 'border-[#00F3FF] bg-[#00F3FF]/10 text-[#00F3FF] shadow-[0_0_15px_rgba(0,243,255,0.2)]' 
                        : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4">
              <button 
                onClick={handleAddToCart}
                disabled={added}
                className={`w-full py-4 rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                  added 
                    ? 'bg-[#CCFF00] text-black' 
                    : 'bg-[#00F3FF] text-black hover:bg-white'
                }`}
              >
                {added ? (
                   <><Check className="w-5 h-5" /> Added to Cart</>
                ) : (
                   <><ShoppingBag className="w-5 h-5 shadow-sm" /> Add to Cart — ${product.price.toFixed(2)}</>
                )}
              </button>
              
              <div className="flex items-center justify-center gap-6 mt-4 text-[10px] uppercase tracking-widest text-white/50">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#00F3FF]" />
                  <span>Free Global Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#CCFF00]" />
                  <span>Lifetime Authenticity</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
