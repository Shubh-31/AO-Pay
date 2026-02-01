"use client";

import { motion } from "framer-motion";

const GigPlatformSupport = () => {
  const supportPoints = [
    {
      title: "Platform Launch Consultation",
      description:
        "Comprehensive support for launching gig economy platforms including payment flow design, compliance setup, user experience optimization, and go-to-market strategy development.",
    },
    {
      title: "Trust and Safety Optimization",
      description:
        "Specialized guidance on building platform trust through payment security, dispute resolution processes, user verification systems, and reputation management integration.",
    },
    {
      title: "Growth Strategy Development",
      description:
        "Ongoing consultation on scaling payment operations, expanding to new markets, optimizing transaction flows, and implementing advanced features for competitive advantage.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 border-b-2 border-black inline-block pb-2"
        >
          Expert Support for Gig Economy Platform Success
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg md:text-xl"
        >
          Partner with AOPAY's gig economy specialists to optimize your
          platform's payment operations, enhance user trust, and accelerate
          business growth through specialized guidance and ongoing support.
        </motion.p>

        {/* Support Points */}
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {supportPoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-left"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-700">{point.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="mt-8 px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GigPlatformSupport;
