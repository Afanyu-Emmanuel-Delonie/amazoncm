
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, } from 'lucide-react';


const AdForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    product: '',
    message: ''
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetPhone = "250798971739";
    const adText = `*New Advertising Request*\n\n*Name:* ${formData.name}\n*Business:* ${formData.business}\n*WhatsApp:* ${formData.phone}\n*Product:* ${formData.product}\n\n*Proposed Ad Text:* ${formData.message}`;
    window.open(`https://wa.me/${targetPhone}?text=${encodeURIComponent(adText)}`, '_blank');
  };

  return (
    <section id="contact" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-black leading-none">
              Start Your <br />
              <span className="text-[#25D366]">Promotion.</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Fill the form to reach our verified audience. We will contact you on WhatsApp to finalize your promotion.
            </p>
            
            <div className="space-y-4 pt-4">
              {['24/7 Support', 'Verified Audience', 'Direct Redirect'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-xs uppercase tracking-[0.2em]">
                  <div className="w-1.5 h-1.5 bg-[#25D366] rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-gray-50 p-8 lg:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-black/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    name="name" required value={formData.name} onChange={handleChange}
                    placeholder="NAME" 
                    className="w-full bg-white border border-gray-200 px-6 py-4 rounded-2xl outline-none focus:border-[#25D366] transition-all text-sm font-bold uppercase tracking-widest placeholder:text-gray-300"
                  />
                  <input 
                    name="business" required value={formData.business} onChange={handleChange}
                    placeholder="BUSINESS" 
                    className="w-full bg-white border border-gray-200 px-6 py-4 rounded-2xl outline-none focus:border-[#25D366] transition-all text-sm font-bold uppercase tracking-widest placeholder:text-gray-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    name="phone" required value={formData.phone} onChange={handleChange}
                    placeholder="WHATSAPP NUMBER" 
                    className="w-full bg-white border border-gray-200 px-6 py-4 rounded-2xl outline-none focus:border-[#25D366] transition-all text-sm font-bold uppercase tracking-widest placeholder:text-gray-300"
                  />
                  <input 
                    name="product" required value={formData.product} onChange={handleChange}
                    placeholder="SERVICE/PRODUCT" 
                    className="w-full bg-white border border-gray-200 px-6 py-4 rounded-2xl outline-none focus:border-[#25D366] transition-all text-sm font-bold uppercase tracking-widest placeholder:text-gray-300"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">AD CONTENT</span>
                  </div>
                  <textarea 
                    name="message" required value={formData.message} onChange={handleChange}
                    rows={3} placeholder="DRAFT YOUR MESSAGE..." 
                    className="w-full bg-white border border-gray-200 p-6 rounded-2xl outline-none focus:border-[#25D366] transition-all text-black font-medium resize-none placeholder:text-gray-300"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-black text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#25D366] transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3 group"
                >
                  Send Now
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdForm;
