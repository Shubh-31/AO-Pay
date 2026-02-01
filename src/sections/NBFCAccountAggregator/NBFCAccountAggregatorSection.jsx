"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightFromLine } from "lucide-react";
import NBFCForm from "@/sections/NBFCForm"; // ✅ ensure correct import path

export default function NBFCAccountAggregatorHeader() {
  return (
    <section className="max-w-7xl mx-auto mt-20 px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* ---------- LEFT CONTENT ---------- */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold !leading-tight text-gray-900"
          >
            NBFC Account Aggregator License — Get RBI AA Registration Fast
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 mt-4"
          >
            Struggling to acquire NBFC Account Aggregator License? Let our
            experts save your time and money. Get your RBI AA License with a{" "}
            <strong>99% success rate</strong> and industry-leading compliance
            and advisory support.
          </motion.p>

          <div className="mt-6">
            <Link href="/contact-us">
              <Button className="bg-green-600 text-white px-8 py-3 rounded-lg text-base shadow-lg hover:bg-green-700 transition-all">
                Schedule Free Consultation
              </Button>
            </Link>
          </div>

          {/* ✅ Key Highlights */}
          <ul className="mt-8 space-y-3 text-gray-700">
            {[
              "99% Success Rate",
              "End-to-End Compliance Guidance",
              "RBI Consultation Assistance",
              "Legal Documentation Support",
              "Fast Application Processing",
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <ArrowRightFromLine className="w-5 h-5 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- RIGHT FORM SECTION ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm lg:max-w-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <NBFCForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
