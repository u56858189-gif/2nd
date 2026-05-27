import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '../data';

export function Categories() {
  return (
    <section id="categories" className="py-16 md:py-24 relative overflow-hidden bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <h2 className="text-[#CCFF00] text-sm font-black uppercase tracking-[0.3em] mb-4">GEAR MATRIX</h2>
            <p className="text-white/50 text-sm leading-relaxed uppercase tracking-wide max-w-md">Precision engineered categories for your specific performance vectors.</p>
          </div>
          <a href="#shop" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] hover:text-[#CCFF00] transition-colors pb-2 border-b border-white/20 hover:border-[#CCFF00]">
            View All Categories <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-[280px] sm:h-[320px] md:h-[400px] rounded-2xl overflow-hidden glass-panel cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-40"
                 style={{ backgroundImage: `url(${cat.image})` }}
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00F3FF]/30 rounded-2xl transition-colors duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display font-black text-xl md:text-2xl mb-2 text-white uppercase italic tracking-tighter">{cat.name}</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex items-center gap-2 text-[#00F3FF] font-black text-xs uppercase tracking-[0.2em] mt-3">
                    EXPLORE <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
