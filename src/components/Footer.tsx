
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-white/5 pb-20 mb-12">
          <div className="max-w-md space-y-6">
            <div className="text-3xl font-black uppercase tracking-tighter">
              Amazon<span className="text-[#25D366]">CM</span>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed">
              Leading the digital marketplace in Cameroon. We bridge the gap between vendors and buyers through elite WhatsApp networks.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <a href="#" className="hover:text-[#25D366] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#25D366] transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#25D366] transition-colors">WhatsApp</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.25em] text-gray-600 gap-4">
          <p>© 2026 AMAZON CAMEROON ELITE ADVERTISING</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
