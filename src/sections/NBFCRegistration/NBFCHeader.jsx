"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightFromLine } from "lucide-react";
import NBFCForm from "@/sections/NBFCForm";
 // make sure to adjust import path

export default function NBFCHeader() {
  return (
    <section className="max-w-7xl mx-auto mt-20 px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* ---------- Left Content ---------- */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold !leading-tight text-gray-900"
          >
            NBFC Registration in India - Complete RBI License Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 mt-4"
          >
            Get Your Non-Banking Financial Company Registered with 99% Success
            Rate | Expert NBFC Consultants Available 24/7. Is your business
            engaged in lending, investments, or other financial activities? NBFC
            registration in India is your gateway to legal financial operations.
            Join 98 out of 100 NBFCs registered with AOPay™ experts who are
            running successfully today.
          </motion.p>

          <div className="mt-6">
            <Link href="/contact-us">
              <Button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-700">
                Get Started with AOPay
              </Button>
            </Link>
          </div>

          {/* ✅ Optional: Salient Features List */}
          <ul className="mt-8 space-y-3 text-gray-700">
            {[
              "99% Success Rate",
              "Complete Documentation Support",
              "Technology Advisory",
              "Compliance Management",
              "Fast-Track Approval",
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <ArrowRightFromLine className="w-5 h-5 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Right Form Section ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <p className="text-xl text-center font-semibold mb-4">
            Start your NBFC Journey Today !
            </p>
            <NBFCForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
