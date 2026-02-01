"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Users } from "lucide-react";

export const TransformNeoBank = () => {
  

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto space-y-12 text-center md:text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Transform Your Vision Into a Leading Neo Bank
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg leading-relaxed max-w-5xl mx-auto md:mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          As the digital banking industry evolves rapidly, having the right
          technology infrastructure is critical to competing with established
          banks and delivering exceptional customer experiences. AOPAY provides
          the complete API platform, fraud prevention tools, verification
          services, and expert guidance to help your neo bank succeed – from
          initial launch through enterprise scale.
          <br />
          <br />
          Whether you're building a mobile-first challenger bank, a specialized
          lending platform, or a full-service digital banking institution,
          leverage AOPAY's comprehensive suite of APIs and professional services
          to accelerate development, ensure compliance, and future-proof your
          business for sustainable growth in the competitive fintech landscape.
        </motion.p>

      
      </div>
    </section>
  );
};
