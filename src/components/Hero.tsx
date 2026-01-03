
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5 mb-12 lg:mb-0 space-y-8 z-10"
        >
          <div className="inline-flex items-center space-x-2 bg-green-50 text-[#25D366] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
            </span>
            <span>Premium Advertising Cameroon</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-black">
            Advertise Your <br />
            <span className="text-[#25D366]">Business</span> on WhatsApp.
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-500 max-w-xl leading-relaxed font-medium">
            Reach thousands of buyers instantly. We put your brand directly in front of the right customers across Cameroon.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#contact" 
              className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-[#25D366] transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2"
            >
              Advertise Now
              <ArrowRight size={18} />
            </a>
            <a 
              href="https://whatsapp.com/channel/your-channel-link" 
              className="bg-white border-2 border-gray-100 text-black px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:border-[#25D366] hover:text-[#25D366] transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare size={18} />
              Join Channel
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-2/5 relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/5 border-[12px] border-white">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" 
              alt="Business Growth" 
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-6 left-6 right-6 p-5 glass-card rounded-2xl border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-black">
                  <ArrowRight size={20} />
                </div>
                <div>
                  <p className="font-bold text-black text-sm uppercase tracking-tight">Rapid Growth</p>
                  <p className="text-gray-500 text-xs">Join 15K+ Active Businesses</p>
                </div>
              </div>
            </div>
          </div>
          {/* Subtle green glow */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#25D366]/10 blur-[100px] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
