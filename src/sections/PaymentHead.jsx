"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightFromLine } from "lucide-react";

const PaymentHead = ({ headerSection }) => {
  return (
    <section className="max-w-7xl mx-auto mt-20">
      <div className="relative px-6 py-16 flex flex-col lg:flex-row items-center justify-around">
        {/* Left Content */}
        <div className="text-center max-w-2xl lg:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold !leading-tight"
          >
            {headerSection.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 mt-4"
          >
            {headerSection.subTitle}
          </motion.p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            {headerSection?.btn1 && headerSection?.btn1Link ? (
              <Link href={headerSection.btn1Link}>
                <Button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-700">
                  {headerSection.btn1}
                </Button>
              </Link>
            ) : null}

            {headerSection?.btn2 && headerSection?.btn2Link ? (
              <Link href={headerSection.btn2Link}>
                <Button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-gray-300">
                  {headerSection.btn2}
                </Button>
              </Link>
            ) : null}

            {/* Fallback */}
            {!headerSection?.btn1 && !headerSection?.btn2 && (
              <Link href="/contact-us">
                <Button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-700">
                  Get Started
                </Button>
              </Link>
            )}
          </div>

          {/* ✅ Salient Features Section */}
          {headerSection?.SalientFeatures?.length > 0 && (
            <div className="mt-8 text-left">
              <ul className="space-y-3">
                {headerSection.SalientFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <ArrowRightFromLine className="w-5 h-5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-[400px] mt-10 lg:mt-0"
        >
          {!headerSection.video ? (
            <div className="relative bg-white p-6">
              <Image
                src={headerSection.imgSrc}
                width={300}
                height={300}
                alt={headerSection.alt}
                className="w-full h-auto"
              />
            </div>
          ) : (
            <figure className="relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                aria-label={headerSection.alt}
                className="w-full h-auto rounded-lg shadow-sm"
              >
                <source src={headerSection.imgSrc} type="video/mp4" />
                {headerSection.alt}
              </video>
              <figcaption className="sr-only">{headerSection.alt}</figcaption>
            </figure>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentHead;
