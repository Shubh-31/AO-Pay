"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function BenefitsSection({ benefits, benefitsHeading }) {
  return (
    <section className="max-w-7xl mt-4 mx-auto py-16 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2"
      >
        <img
          src={benefitsHeading.imgUrl}
          alt={benefitsHeading.alt}
          className="w-5/6 rounded-xl "
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {benefitsHeading.heading}
        </h2>
        {benefitsHeading.subHeading && (
          <p className="text-gray-600 mb-6">{benefitsHeading.subHeading}</p>
        )}

        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
              <div>
                {benefit.title && (
                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                )}
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
