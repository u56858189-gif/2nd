import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[120] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md h-full bg-[#0B0B0B] border-l border-white/10 shadow-2xl flex flex-col pointer-events-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-[#00F3FF]" />
                <h2 className="font-display text-xl font-black italic uppercase tracking-tighter text-white">Your Cart</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                  <ShoppingBag className="w-16 h-16 text-gray-500 mb-4" />
                  <p className="text-gray-400">Your cart is empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 text-[#00F3FF] uppercase font-bold text-xs tracking-widest underline underline-offset-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={item.cartItemId} 
                    className="flex gap-4 p-4 rounded-xl glass-panel group"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-tr from-[#111] to-[#222]">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover p-2 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between start mb-1">
                        <h4 className="font-bold text-white text-sm">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-gray-500 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <p className="text-xs text-gray-400 mb-2">Size: {item.selectedSize}</p>
                      
                      <div className="mt-auto flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-white/10 rounded-lg">
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="px-2 py-1 text-gray-400 hover:text-white"
                          >-</button>
                          <span className="px-2 text-xs font-medium text-white">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="px-2 py-1 text-gray-400 hover:text-white"
                          >+</button>
                        </div>
                        
                        <span className="font-black italic text-[#CCFF00]">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-white/5 bg-black/50 backdrop-blur-lg">
                <div className="space-y-3 mb-6 flex flex-col text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-lg pt-3 border-t border-white/10 mt-2">
                    <span>Total</span>
                    <span className="text-gradient">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full py-4 bg-[#00F3FF] text-black font-black uppercase tracking-tighter rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2">
                  Secure Checkout <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
