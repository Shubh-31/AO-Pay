"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AutoSlidingCards() {
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(-1);
  const containerRef = useRef(null);
  const xRef = useRef(0);
  const requestRef = useRef(null);

  const speed = 0.5; // pixels per frame (adjust as needed)

  const steps = [
    {
      imgSrc:
        "/assets/ENACH/How E-NACH Payment Processing Works/1. Mandate Registration.png",
      title: "1. Mandate Registration",
      points: [
        "Register customer payment mandates through digital channels with eSign or Aadhaar OTP.",
        "Support for physical mandate digitization and bulk upload.",
        "Mandate modification and cancellation options.",
        "Track mandate approval and rejection in real time.",
        "Integrate with multiple banks for faster registration.",
      ],
    },
    {
      imgSrc:
        "/assets/ENACH/How E-NACH Payment Processing Works/2. Bank Verification.png",
      title: "2. Bank Verification",
      points: [
        "Automatic routing to customer’s destination bank for verification.",
        "Handle approval and rejection workflows with ease.",
        "Instant validation via NPCI or direct bank APIs.",
        "Custom retry logic for pending verifications.",
        "Secure encrypted communication across all nodes.",
      ],
    },
    {
      imgSrc:
        "/assets/ENACH/How E-NACH Payment Processing Works/3. Payment Initiation.png",
      title: "3. Payment Initiation",
      points: [
        "Automate recurring payment initiation on scheduled dates.",
        "Seamlessly trigger debit requests to linked mandates.",
        "Support high-volume batch processing for enterprises.",
        "Monitor transaction flow in real time.",
        "Customizable cut-off and processing window support.",
      ],
    },
    {
      imgSrc:
        "/assets/ENACH/How E-NACH Payment Processing Works/4. Status & Settlement.png",
      title: "4. Status & Settlement",
      points: [
        "Get real-time status updates for all transactions.",
        "Reconcile settlements with detailed success and failure reports.",
        "Automatic credit to designated accounts.",
        "End-to-end transparency with settlement tracking.",
        "Export reports via APIs or dashboards.",
      ],
    },
  ];

  // Continuous sliding animation
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
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        How E-NACH Payment Processing API Works
      </h2>

      {/* Fade edges for smooth scroll */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

      {/* Sliding Cards */}
      <div
        className="relative max-w-6xl mx-auto overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          ref={containerRef}
          className="flex gap-6 w-max transition-transform will-change-transform"
        >
          {[...steps, ...steps].map((step, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[340px] bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex-shrink-0"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={step.imgSrc}
                  alt={step.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 text-center">
                {step.title}
              </h3>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                {step.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
