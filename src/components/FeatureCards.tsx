
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck } from 'lucide-react';

const FeatureCards: React.FC = () => {
  const features = [
    {
      icon: <Target className="text-[#25D366]" size={32} />,
      title: 'Precision Targeting',
      desc: 'Reach customers based on location and interest across Cameroon.',
      dark: true
    },
    {
      icon: <Zap className="text-[#25D366]" size={32} />,
      title: 'Instant Delivery',
      desc: 'Your ads go live in hours, reaching phones directly when it matters.',
      dark: false
    },
    {
      icon: <ShieldCheck className="text-[#25D366]" size={32} />,
      title: 'Trusted Ads',
      desc: 'Join a verified network that customers trust for genuine offers.',
      dark: true
    }
  ];

  return (
    <section id="features" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6">Elite Services.</h2>
          <div className="w-20 h-2 bg-[#25D366]"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[2rem] flex flex-col justify-between h-[380px] group transition-all duration-500 ${f.dark ? 'bg-black text-white' : 'bg-gray-50 text-black border border-gray-100 hover:border-[#25D366]'}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#25D366]/10 transition-colors">
                {f.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{f.title}</h3>
                <p className={`${f.dark ? 'text-gray-400' : 'text-gray-500'} font-medium leading-relaxed`}>
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
