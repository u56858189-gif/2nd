import { ArrowRight, Twitter, Instagram, Youtube, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-gradient-to-tr from-[#00F3FF] to-[#CCFF00] rounded-lg rotate-12"></div>
               <h2 className="font-display font-black text-3xl tracking-tighter uppercase text-white hover:text-[#00F3FF] transition-colors">
                 NEON<span className="text-[#CCFF00]">PULSE</span>
               </h2>
            </div>
            <p className="text-white/50 text-xs leading-relaxed mb-6 uppercase tracking-wide">
              Pushing the boundaries of human performance through advanced kinetic engineering and luxurious activewear design. Form meets ultimate function.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-white hover:text-[#CCFF00] hover:bg-white/10 border border-white/5 transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-white hover:text-[#00F3FF] hover:bg-white/10 border border-white/5 transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-white hover:text-red-500 hover:bg-white/10 border border-white/5 transition-all"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">Shop</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Men's Apparel</a>
              <a href="#" className="text-white/50 hover:text-[#00F3FF] transition-colors text-xs uppercase tracking-widest flex items-center gap-2">Women's Apparel <span className="bg-[#00F3FF] text-black text-[10px] font-black italic px-2 py-0.5 rounded-sm">SALE</span></a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Running Shoes</a>
              <a href="#" className="text-white/50 hover:text-[#CCFF00] transition-colors text-xs uppercase tracking-widest">New Arrivals</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Accessories</a>
            </div>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">Help</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Contact Support</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Track Order</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Returns & Policy</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">Size Guide</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest">FAQ</a>
            </div>
          </div>

          {/* Newsletter / Store */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">Newsletter</h4>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-4">Subscribe for exclusive drops, early access, and tech insights.</p>
            <div className="flex relative items-center mb-8">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00F3FF]/50 transition-colors uppercase tracking-widest text-[10px]"
              />
              <button className="absolute right-2 p-2 bg-[#00F3FF] text-black rounded-full hover:scale-105 transition-transform"><ArrowRight className="w-4 h-4" /></button>
            </div>
            
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/50">
              <div className="p-2 bg-white/5 rounded-lg border border-white/5"><MapPin className="w-4 h-4 text-[#CCFF00]" /></div>
              <span>Find a Flagship Store</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} NeonPulse Sports Inc. <br className="md:hidden" />Engineered in California.
          </p>
          <div className="flex gap-4">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
             <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
