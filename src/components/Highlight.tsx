
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Smartphone } from 'lucide-react';

const Highlight: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-black rounded-[3rem] p-12 lg:p-20 relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="w-full lg:w-3/5 space-y-8">
              <span className="bg-[#25D366] text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                Verified Marketplace
              </span>
              <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] uppercase tracking-tighter">
                Grow Faster with <br />
                <span className="text-[#25D366]">WhatsApp Direct.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed font-medium">
                Our technology ensures your business is seen by thousands of verified users across all regions of Cameroon. No spam, just real buyers.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {['Direct Support', 'Verified Lists', 'Daily Reports', 'Local Target'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest">
                    <CheckCircle2 className="text-[#25D366]" size={18} />
                    {item}
                  </div>
                ))}
              </div>
              
              <div className="pt-8">
                <a href="#contact" className="bg-[#25D366] text-black px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-[#25D366]/10 inline-block">
                  Launch Your Ad
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="relative">
                <div className="w-64 h-[500px] bg-white rounded-[2.5rem] p-4 shadow-2xl relative">
                  <div className="w-full h-full bg-gray-50 rounded-[2rem] overflow-hidden flex flex-col">
                    <div className="p-4 flex items-center gap-2 border-b border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                         <Smartphone size={16} />
                      </div>
                      <span className="font-bold text-xs uppercase text-black">Amazon CM</span>
                    </div>
                    <div className="flex-1 p-4 space-y-3">
                      <div className="h-4 w-3/4 bg-[#25D366]/20 rounded"></div>
                      <div className="h-32 w-full bg-gray-200 rounded-xl"></div>
                      <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-10 bg-[#25D366]/10 blur-[80px] rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlight;
