"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const WorkflowSection = () => {
 

  return (
    <section className="bg-[#0b0f19] text-white py-16 px-6 md:px-16 flex justify-center">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">Our Vision</h2>
        <p className="text-gray-400 mb-6">
          To become the most trusted and digital banking ecosystem platform,
          powering the next generation of financial services and making banking
          technology accessible to every business.
        </p>
        <p className="text-gray-400">
          We envision a future where launching financial services is as simple
          as integrating an API, regardless of your company size or technical
          expertise.
        </p>
      </div>
    </section>
  );
};

export default WorkflowSection;
