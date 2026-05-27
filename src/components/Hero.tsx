import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[100svh] pt-28 pb-16 lg:py-0 flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
         {/* Subtle ambient light gradient blur in the background */}
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00F3FF] bg-opacity-20 rounded-full blur-[150px] mix-blend-screen mix-blend-lighten animate-pulse" style={{ animationDuration: '4s' }} />
         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00F3FF] bg-opacity-10 rounded-full blur-[120px] mix-blend-screen mix-blend-lighten animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B0B]/50 to-[#0B0B0B] z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center z-20 relative">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             <span className="px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#CCFF00] border border-[#CCFF00]/30 rounded-full bg-[#CCFF00]/10 mb-6 inline-block">
               New Collection 2026
             </span>
             <h1 className="font-display font-black text-6xl md:text-8xl lg:text-[110px] leading-[0.85] uppercase italic tracking-tighter mb-6">
                EVOLVE<br/>
                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>BEYOND</span><br/>
                LIMITS.
             </h1>
             <p className="text-white/50 text-sm md:text-md max-w-md uppercase tracking-wide leading-relaxed mb-10">
               Engineering the future of human performance. Ultra-premium activewear designed for the elite.
             </p>

             <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
               <a href="#shop" className="group relative px-10 py-5 bg-[#00F3FF] text-black font-black uppercase tracking-tighter rounded-full overflow-hidden transition-colors hover:bg-white flex items-center justify-center gap-2 max-w-[200px]">
                 <span className="relative z-10">Shop Now</span>
                 <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
               </a>
               
               <a href="#categories" className="px-10 py-5 border border-white/20 text-white font-black uppercase tracking-tighter rounded-full hover:bg-white/10 transition-colors flex items-center justify-center">
                 Explore Tech
               </a>
             </div>
          </motion.div>
        </div>

        {/* Right Content - 3D/Floating Shoe Imagery */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative h-[300px] sm:h-[400px] md:h-[600px] flex items-center justify-center">
            <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
             className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[600px] z-20"
           >
             {/* Floating Shoe Animation */}
             <motion.img 
               src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
               alt="Premium Running Shoe"
               className="w-full h-auto object-contain rounded-3xl relative z-10 transform -rotate-12 shadow-[0_30px_60px_rgba(0,212,255,0.2)]"
               animate={{ 
                 y: [0, -20, 0],
                 rotate: [-12, -10, -12]
               }}
               transition={{ 
                 duration: 6, 
                 repeat: Infinity,
                 ease: "easeInOut" 
               }}
             />

             {/* Dynamic lighting effects underneath the shoe */}
             <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[#00F3FF] rounded-[100%] blur-[40px] opacity-40 mix-blend-screen" />
           </motion.div>
        </div>
      </div>
    </section>
  );
}
