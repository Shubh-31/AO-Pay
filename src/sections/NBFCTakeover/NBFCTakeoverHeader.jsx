"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightFromLine } from "lucide-react";
import Link from "next/link";
import NBFCForm from "@/sections/NBFCForm"; // ✅ Import your form component

export default function NBFCTakeoverHeader() {
  const highlightCards = [
    {
      title: "Talk to NBFC Experts",
      points: ["Among Asia's Top 100 Consulting Company"],
    },
    {
      title: "Get Expert Consultation",
      points: ["Competitive Pricing", "10,000+ Clients Served"],
    },
    {
      title: "Premium Service Delivery",
      points: ["Trusted by Corporates & Investors", "4.9★ Customer Rating"],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-20">
      <div className="relative px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* ---------------- LEFT CONTENT ---------------- */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 !leading-tight"
          >
            NBFC Takeover Services in India - Acquire RBI Licensed NBFC Fast
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-700 mt-5"
          >
            Worried about legal complexities in NBFC acquisition? Unsure about
            valuation? Get expert guidance to acquire a functioning
            RBI-registered NBFC in just{" "}
            <span className="font-semibold text-green-600">60 days</span> with
            complete due diligence support.
          </motion.p>

          <div className="mt-8">
            <Link href="/contact-us">
              <Button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg shadow-lg hover:bg-green-700">
                Schedule Free Consultation
              </Button>
            </Link>
          </div>

          {/* ---------------- HIGHLIGHT CARDS ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {highlightCards.map((card, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <ArrowRightFromLine className="w-5 h-5 text-green-500 mt-1" />
                      <p className="text-sm">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---------------- RIGHT SIDE (NBFC FORM) ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 w-full max-w-md"
        >
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
            <NBFCForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
