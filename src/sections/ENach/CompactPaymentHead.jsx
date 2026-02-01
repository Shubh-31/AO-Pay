"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightFromLine } from "lucide-react";

const CompactPaymentHead = ({ headerSection }) => {

    
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6">
      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* ✅ Left Section */}
        <div className="max-w-2xl text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
          >
            {headerSection.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-600 text-lg leading-relaxed"
          >
            {headerSection.subTitle}
          </motion.p>

          {/* ✅ CTA Buttons */}
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
            {headerSection?.btn1 && headerSection?.btn1Link && (
              <Link href={headerSection.btn1Link}>
                <Button className="bg-green-600 text-white px-6 py-2.5 rounded-lg shadow-lg hover:bg-green-700 hover:scale-[1.02] transition-transform">
                  {headerSection.btn1}
                </Button>
              </Link>
            )}

            {headerSection?.btn2 && headerSection?.btn2Link && (
              <Link href={headerSection.btn2Link}>
                <Button className="bg-gray-200 text-gray-800 px-6 py-2.5 rounded-lg shadow-md hover:bg-gray-300 hover:scale-[1.02] transition-transform">
                  {headerSection.btn2}
                </Button>
              </Link>
            )}
          </div>

          {/* ✅ Optional Salient Features */}
          {headerSection?.SalientFeatures?.length > 0 && (
            <div className="mt-8 text-left">
              <ul className="space-y-3">
                {headerSection.SalientFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <ArrowRightFromLine className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ✅ Right Section — Compact Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center items-center w-[240px] h-[240px]  p-4"
        >
          {!headerSection.video ? (
            <Image
              src={headerSection.imgSrc}
              alt={headerSection.alt || headerSection.title}
              width={220}
              height={220}
              className="object-contain w-[180px] h-auto"
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-label={headerSection.alt}
              className="rounded-lg shadow-sm w-[200px] h-auto"
            >
              <source src={headerSection.imgSrc} type="video/mp4" />
            </video>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CompactPaymentHead;
