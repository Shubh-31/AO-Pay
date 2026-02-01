"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

export default function AboutUsHero() {
  return (
    <section className="max-w-7xl mx-auto ">
      <div className="px-6 py-16 grid md:grid-cols-2 gap-10 items-center mt-20">
        {/* Left Side Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold !leading-tight">
            Redefining Digital Banking For the Modern Enterprise
          </h1>
          <p className="mt-4 text-gray-600">
            We're on a mission to democratize access to enterprise-grade banking
            infrastructure, enabling businesses of all sizes to deliver
            world-class financial services without the complexity and cost of
            traditional banking systems.
          </p>
          <p className="mt-4 text-gray-600">
            From fintech startups to established financial institutions, we
            empower innovators to focus on what they do best—serving their
            customers—while we handle the infrastructure.
          </p>
        </div>

        {/* Right Side Image & Rating */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-lg"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <Image
              src="/assets/About/Redefining Digital Banking For the Modern Enterprise.png"
              width={400}
              height={200}
              alt="Best Fintech Solution Provider"
              className="rounded-3xl text-xl"
            />
          </div>

          {/* Review Box */}
        </motion.div>
      </div>
    </section>
  );
}
