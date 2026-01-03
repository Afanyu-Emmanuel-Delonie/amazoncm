import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, } from 'framer-motion';

const Stats: React.FC = () => {
  const stats = [
    { value: 15000, suffix: '+', label: 'Advertisers', format: 'K' },
    { value: 500000, suffix: '+', label: 'Reach', format: 'K' },
    { value: 24, suffix: 'H', label: 'Setup Time', format: 'none' },
    { value: 98, suffix: '%', label: 'Satisfaction', format: 'none' },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <AnimatedStat key={idx} stat={stat} delay={idx * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedStat: React.FC<{ 
  stat: { value: number; suffix: string; label: string; format: string }; 
  delay: number 
}> = ({ stat, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2500; // 2.5 seconds for smooth effect

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = easeOutQuart(progress);
      const current = Math.floor(easedProgress * stat.value);
      
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(stat.value);
      }
    };

    // Start after delay
    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, stat.value, delay]);

  const formatNumber = (num: number) => {
    if (stat.format === 'K') {
      return Math.floor(num / 1000);
    }
    return num;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        delay,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="text-center md:border-r last:border-0 border-gray-100"
    >
      <div className="text-4xl md:text-5xl font-extrabold text-black mb-1 tabular-nums">
        {formatNumber(displayValue)}{stat.format === 'K' ? 'K' : ''}{stat.suffix}
      </div>
      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#25D366]">
        {stat.label}
      </div>
    </motion.div>
  );
};

export default Stats;