"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-16 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-4">
        Complete solutions for Businesses & Individuals: Streamlined, Secure &
        Accessible
      </h2>
      <p className="text-gray-400 mb-10">
        Flexible pricing for any business size.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8 px-6">
        {/* Starter Plan */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-900 p-8 rounded-xl shadow-lg w-full md:w-1/4 text-left"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Businesses</h3>
            <Image src="/assets/Home/B2C.png" width={40} height={40} />
          </div>
          <p className="text-gray-400 mt-2">
            Full access to all premium features.
          </p>
          {/* <p className="text-3xl font-bold my-4">
            $39 <span className="text-gray-400 text-sm">/ month</span>
          </p> */}
          <Link href="/contact-us">
            <button className="border border-white rounded-full px-6 py-2 mt-4 hover:bg-white hover:text-black transition">
              Get Started
            </button>
          </Link>
          <ul className="mt-6 space-y-2 pt-4 border-t border-gray-700">
            <li className="flex gap-2">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />{" "}
              Streamlined verification processes
            </li>
            <li className="flex gap-2">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />{" "}
              Reduced operational costs
            </li>
            <li className="flex gap-2">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />{" "}
              Enhanced security
            </li>
            <li className="flex gap-2">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />{" "}
              Real-time transaction monitoring
            </li>
            <li className="flex gap-2">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />{" "}
              Complete Business Solutions Suite
            </li>
          </ul>
        </motion.div>

        {/* Enterprise Plan */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-900 p-8 rounded-xl shadow-lg w-full md:w-1/4 text-left"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Individuals</h3>
            <Image src="/assets/Home/D2C.png" width={40} height={40} />
          </div>
          <p className="text-gray-400 mt-2">Basic features to get started.</p>
          {/* <p className="text-3xl font-bold my-4">
            $99 <span className="text-gray-400 text-sm">/ month</span>
          </p> */}
          <Link href="/contact-us">
            <button className="border border-white rounded-full px-6 py-2 mt-4 hover:bg-white hover:text-black transition">
              Get Started
            </button>
          </Link>
          <ul className="mt-6 space-y-2 text-left pt-4 border-t border-gray-700">
            <li className="flex gap-2">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />{" "}
              User-friendly interface
            </li>
            <li className="flex gap-2">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />{" "}
              Secure transactions
            </li>
            <li className="flex gap-2">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />{" "}
              24/7 availability
            </li>
            <li className="flex gap-2">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />{" "}
              Competitive rates
            </li>
            <li className="flex gap-2">
              <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />{" "}
              Instant service delivery
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Professional Plan */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col bg-teal-900 p-8 rounded-xl mt-12 shadow-lg max-w-3xl mx-auto items-center gap-2"
      >
        <h3 className="text-xl font-semibold">Download AOPay App Now</h3>
        <p className="text-gray-300 ">
          Greater flexibility with custom solutions.
        </p>
        <div href="" className="flex gap-3">
          <a href="https://play.google.com/store/apps/details?id=com.bos.payment.appName&pcampaignid=web_share">
            <Image src="/assets/Home/google.svg" width={120} height={70} />
          </a>
          <a href="#">
            <Image src="/assets/Home/apple.svg" width={120} height={70} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
