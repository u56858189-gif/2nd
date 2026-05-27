import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          {/* AI Character Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative flex justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-3xl overflow-hidden glass-panel border-white/10 group">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#00F3FF]/20 to-[#CCFF00]/20 blur-[60px] group-hover:scale-110 transition-transform duration-700" />
              
              <img 
                src="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=800" 
                alt="AI Character representing founder"
                className="w-full h-full object-cover relative z-10 grayscale-[50%] contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />
              
              <div className="absolute bottom-6 left-6 z-30 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#CCFF00]" />
                <span className="text-[#00F3FF] font-black uppercase tracking-widest text-xs">AI Vanguard</span>
              </div>
            </div>
          </motion.div>

          {/* Owner Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <h2 className="text-[#CCFF00] text-sm font-black uppercase tracking-[0.3em] mb-4">THE VISIONARY</h2>
            <h1 className="font-display font-black text-5xl md:text-6xl leading-[0.85] uppercase italic tracking-tighter mb-8 text-white">
              Meet The<br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>Architect</span>
            </h1>

            <p className="text-white/50 text-sm leading-relaxed uppercase tracking-wide mb-8">
              "I envisioned a world where elite athletic performance seamlessly merges with avant-garde aesthetics. NeonPulse is not just a brand; it's the culmination of years spent pushing the boundaries of what's possible."
              <br/><br/>
              From starting as a professional athlete experimenting with custom-engineered kinetic wear in a garage lab, to launching a globally recognized premium sports brand. Driven by obsession with perfection, cutting-edge materials, and futuristic design principles.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-center gap-4 text-white hover:text-[#00F3FF] transition-colors p-4 glass-panel rounded-xl group/contact">
                <div className="p-3 bg-white/5 rounded-lg group-hover/contact:bg-[#00F3FF]/10 transition-colors">
                  <Phone className="w-5 h-5 text-[#CCFF00]" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Direct Line</div>
                  <div className="text-sm font-bold tracking-widest">+1 (800) 555-NEON</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white hover:text-[#00F3FF] transition-colors p-4 glass-panel rounded-xl group/contact">
                <div className="p-3 bg-white/5 rounded-lg group-hover/contact:bg-[#00F3FF]/10 transition-colors">
                  <Mail className="w-5 h-5 text-[#CCFF00]" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Electronic Mail</div>
                  <div className="text-sm font-bold tracking-widest">founder@neonpulse.ai</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white hover:text-[#00F3FF] transition-colors p-4 glass-panel rounded-xl group/contact">
                <div className="p-3 bg-white/5 rounded-lg group-hover/contact:bg-[#00F3FF]/10 transition-colors">
                  <MapPin className="w-5 h-5 text-[#CCFF00]" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">HQ Address</div>
                  <div className="text-sm font-bold tracking-widest leading-loose">
                    2049 Kinetic Avenue,<br/>
                    Cyber District, Neo-SF 94107
                  </div>
                </div>
              </div>
            </div>
            
            <a href="#shop" className="inline-flex w-fit items-center gap-2 px-8 py-4 bg-[#00F3FF] text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-white transition-colors">
              Explore His Creation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
