
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle } from 'lucide-react';

const WhatsAppChannel: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-8"
        >
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-[#25D366] text-black rounded-3xl flex items-center justify-center shadow-2xl shadow-[#25D366]/20">
              <MessageCircle size={40} />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black">
            Join 500k+ <br />
            <span className="text-[#25D366]">Market Members.</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            Get the best deals from across the country delivered straight to your WhatsApp. Join the largest marketplace community today.
          </p>
          <div className="pt-4">
            <a 
              href="https://whatsapp.com/channel/your-channel-link" 
              className="inline-flex items-center gap-3 bg-black text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-[#25D366] hover:text-black transition-all shadow-2xl shadow-black/10 group"
            >
              Join Channel
              <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppChannel;
