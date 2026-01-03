
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, DollarSign } from 'lucide-react';

const ValueItem: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex gap-4"
  >
    <div className="w-12 h-12 bg-gray-50 text-[#25D366] rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-black mb-1 uppercase tracking-tight">{title}</h3>
      <p className="text-gray-500 font-medium leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const ValueProp: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-black leading-tight mb-8 uppercase tracking-tighter">
              Your Partner in <br />
              <span className="text-[#25D366]">Digital Success.</span>
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8 max-w-lg">
              We bridge the gap between local vendors and digital shoppers. In a country where everyone is on WhatsApp, we put your brand where the conversation is happening.
            </p>
            <div className="w-24 h-2 bg-black"></div>
          </motion.div>
          
          <div className="w-full lg:w-1/2 space-y-10">
            <ValueItem 
              icon={<Zap size={24} />}
              title="Fast Promotion"
              description="Get your ad live within hours. We prioritize speed so you can move your inventory faster."
              delay={0.1}
            />
            <ValueItem 
              icon={<Target size={24} />}
              title="Targeted Reach"
              description="Ads land directly in highly active WhatsApp environments with thousands of verified local members."
              delay={0.2}
            />
            <ValueItem 
              icon={<DollarSign size={24} />}
              title="Elite Value"
              description="Premium advertising packages designed for ambitious startups and established Cameroon brands."
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
