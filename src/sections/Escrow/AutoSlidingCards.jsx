"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AutoSlidingSecondaryFeatures() {
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(-1);
  const containerRef = useRef(null);
  const xRef = useRef(0);
  const requestRef = useRef(null);

  const speed = 0.5; // pixels per frame — adjust for smoothness

  const data = {
    heading2:
      "Monetize Your Platform With AOPAY Advanced Fee Management Solutions",
    blocks: [
      {
        imgSrc:
          "/assets/Escrow/Monetize Your Platform with Advanced Fee Management/Flexible Contract & Partnership Management.png",
        heading3: "Flexible Contract & Partnership Management",
        items: [
          "Configure partner terms and revenue-sharing agreements",
          "Create customer contracts with customizable fee structures",
          "Multiple subscription tiers and pricing models",
          "White-label branding options for enterprise clients",
        ],
      },
      {
        imgSrc:
          "/assets/Escrow/Monetize Your Platform with Advanced Fee Management/Dynamic Fee Structure & Transaction Limits.png",
        heading3: "Dynamic Fee Structure & Transaction Limits",
        items: [
          "Customizable fees: percentage, flat rate, or hybrid models",
          "Configurable fee allocation between parties",
          "Transaction limits per period, amount, or volume",
          "Dynamic pricing based on transaction type and user tier",
          "Multi-currency fee processing and conversion",
        ],
      },
      {
        imgSrc:
          "/assets/Escrow/Monetize Your Platform with Advanced Fee Management/Advanced Reconciliation & Settlement.png",
        heading3: "Advanced Reconciliation & Settlement",
        items: [
          "Automated financial reconciliation across all escrow accounts",
          "Real-time liability tracking for customers and partners",
          "Automated detection of transaction discrepancies",
          "Streamlined settlement processing and reporting",
          "Multi-party split payment capabilities",
        ],
      },
      {
        imgSrc:
          "/assets/Escrow/Monetize Your Platform with Advanced Fee Management/Flexible Contract & Partnership Management.png",
        heading3: "Cash Flow & Treasury Management",
        items: [
          "Comprehensive cash position monitoring",
          "Automated treasury operations and fund optimization",
          "Multi-bank account management and reconciliation",
          "Liquidity forecasting and cash flow analysis",
        ],
      },
    ],
  };

  // Smooth continuous scroll animation using requestAnimationFrame
  useEffect(() => {
    const animate = () => {
      if (!isHovered) {
        xRef.current += direction * speed;
        const container = containerRef.current;
        if (container) {
          const totalWidth = container.scrollWidth / 2;
          if (xRef.current <= -totalWidth || xRef.current >= 0) {
            setDirection((prev) => -prev);
          }
          container.style.transform = `translateX(${xRef.current}px)`;
        }
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [direction, isHovered]);

  return (
    <section className="relative py-16 px-6 bg-white overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        {data.heading2}
      </h2>

      {/* Gray Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-10" />

      {/* Sliding Track */}
      <div
        className="relative max-w-5xl mx-auto overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          ref={containerRef}
          className="flex gap-6 w-max transition-transform will-change-transform"
        >
          {[...data.blocks, ...data.blocks].map((block, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[340px] bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6 flex-shrink-0 hover:shadow-lg transition-all duration-300"
            >
              {block.imgSrc && (
                <div className="flex justify-center mb-4">
                  <Image
                    src={block.imgSrc}
                    alt={block.heading3}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                {block.heading3}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
