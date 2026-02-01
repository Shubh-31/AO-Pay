"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-[0.25]"
      >
        <source src="/assets/Home/homeBG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-7xl mt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AOPAY: Expert Banking Consultation and Solutions
      </motion.h1>

      <p className="mt-6 text-gray-700 max-w-5xl text-lg">
        Power your financial operations with AOPAY’s expert banking consultation
        and comprehensive solutions. From strategic advisory and risk management
        to digital banking integration and lending support, our solutions are
        designed to enhance efficiency, ensure regulatory compliance, and drive
        sustainable growth.
      </p>

      <p className="mt-4 text-gray-600 max-w-4xl text-base">
        Tailored for Fintechs, NBFCs, Microfinance Institutions, Cooperative
        Societies, and progressive banks, AOPAY delivers scalable, secure, and
        flexible solutions that empower organizations to optimize processes,
        mitigate risks, and achieve operational excellence without compromise.
      </p>

      <div className="mt-8">
        <Link href="/contact-us">
          <Button className="bg-green-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-green-700 text-lg">
            Schedule a Demo
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
