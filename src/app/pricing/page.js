import PricingCard from "@/sections/Pricing/PricingCard";
import Head from "next/head";
import React from "react";
import { Suspense } from "react";



const Pricing = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Our Pricing Plans
        </h1>
        <p className="text-center max-w-2xl mx-auto text-lg mb-12">
          Choose a plan that fits your business needs. AOPAY plans are designed
          to deliver secure, scalable, and fully integrated digital solutions
          for financial institutions and banking operations.
        </p>

        <div className="overflow-x-auto">
          <Suspense
            fallback={<div className="text-center">Loading pricing...</div>}
          >
            <PricingCard />
          </Suspense>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-2">
            Need a Custom Solution?
          </h3>
          <p className="mb-4">
            We offer flexible pricing for enterprise-level needs. Contact us for
            a personalized quote.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
};

export default Pricing;
