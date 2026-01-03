
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 z-50 w-full glass-card py-5">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center text-[#25D366] font-black text-lg">
            A
          </div>
          <span className="text-xl font-black tracking-tighter uppercase text-black">
            Amazon<span className="text-[#25D366]">CM</span>
          </span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-10 text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">
          <a href="#features" className="hover:text-black transition-colors">Features</a>
          <a href="#about" className="hover:text-black transition-colors">Impact</a>
          <a href="#contact" className="hover:text-black transition-colors">Advertise</a>
        </div>

        <a 
          href="#contact" 
          className="bg-black text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#25D366] hover:text-black transition-all shadow-xl shadow-black/5"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
