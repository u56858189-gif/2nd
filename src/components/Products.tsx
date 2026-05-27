import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Eye, Star } from 'lucide-react';
import { products } from '../data';
import { Product } from '../types';
import { ProductModal } from './ProductModal';
import { useCart } from '../context/CartContext';

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  return (
    <section id="shop" className="py-16 md:py-24 relative bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#CCFF00] text-sm font-black uppercase tracking-[0.3em] mb-4">
            FEATURED DROP
          </h2>
          <p className="text-white/50 text-sm leading-relaxed uppercase tracking-wide max-w-md mx-auto">Latest technological advancements in footwear and apparel. Limited quantities available.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Image Container with 3D-ish feel */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-tr from-[#111] to-[#1A1A1A] flex items-center justify-center p-8">
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  {product.isNew && (
                    <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#0B0B0B] bg-[#CCFF00] rounded-lg">New</span>
                  )}
                  {product.isBestSeller && (
                    <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#00F3FF] bg-[#00F3FF]/10 backdrop-blur-md rounded-lg border border-[#00F3FF]/20">Best Seller</span>
                  )}
                </div>

                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform -rotate-[15deg] scale-105 group-hover:rotate-0 group-hover:scale-125 transition-all duration-700 filter drop-shadow-2xl"
                />

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); addToCart(product, product.sizes[0], 1); }}
                    className="p-4 bg-[#00F3FF] hover:bg-white rounded-full text-black transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-black italic uppercase tracking-tighter text-white group-hover:text-[#00F3FF] transition-colors">{product.name}</h3>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{product.category}</p>
                  </div>
                  <span className="bg-[#CCFF00] text-black px-3 py-1 rounded-lg font-black text-sm italic">${product.price.toFixed(2)}</span>
                </div>
                
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({length: 5}).map((_, idx) => (
                      <Star key={idx} className={`w-3.5 h-3.5 ${idx < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-600'}`} />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                  </div>
                  
                  {/* Colors Preview */}
                  <div className="flex gap-1">
                    {product.colors.map(color => (
                       <div key={color} className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </section>
  );
}
