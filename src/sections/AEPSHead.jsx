"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightFromLine } from "lucide-react";

const AEPSHead = () => {
  return (
    <section className="max-w-7xl mx-auto mt-20">
      <div className="relative px-6 py-16 flex flex-col lg:flex-row items-center justify-around">
        {/* Left Content */}
        <div className="text-center max-w-2xl lg:text-left">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold !leading-tight text-black"
          >
            Aadhaar Pay API for Seamless Biometric Payments & Merchant
            Collections
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 mt-4"
          >
            Integrate our comprehensive AEPS to enable Aadhaar-based banking
            services including cash withdrawal, balance inquiry, and mini
            statements. Perfect for business correspondents, fintech companies,
            and financial service providers.
          </motion.p>

          {/* Buttons */}

          {/* Salient Features */}
        </div>

        {/* Right Content (Image / Video Placeholder) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-[400px] mt-10 lg:mt-0"
        >
          <div className="relative bg-white p-6 rounded-xl shadow">
            <img
              src="/assets/AEPSAPISolution/AEPS.png"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AEPSHead;
