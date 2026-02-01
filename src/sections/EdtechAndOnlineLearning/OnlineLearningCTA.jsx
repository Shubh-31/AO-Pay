"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const OnlineLearningCTA = () => {
  const services = [
    {
      imgSrc:
        "/assets/EdtechAndOnlineLearning/Ready to Transform Your EdTech Payment Experience/Course Payment Solutions.png",
      title: "Course Payment Solutions",
      description:
        "Streamline course enrollments, manage pricing models, and optimize conversion rates with payment solutions designed specifically for educational content and services.",
      buttonText: "Explore Course Payments",
    },
    {
      imgSrc:
        "/assets/EdtechAndOnlineLearning/Ready to Transform Your EdTech Payment Experience/Subscription Management.png",
      title: "Subscription Management",
      description:
        "Automated recurring billing, subscription lifecycle management, and student retention tools for learning platforms and membership-based educational services.",
      buttonText: "Explore Subscriptions",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Ready to Transform Your EdTech Payment Experience?
        </motion.h2>

        {/* Intro Paragraph */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Launch your educational platform or optimize your existing payment
          processes with AOPAY's comprehensive EdTech solution. From course
          enrollments to subscription management, we provide everything you need
          to succeed in online education.
        </p>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-md"
          >
            Contact Sales
          </Button>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Icon + Title in one line */}
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="w-6 h-auto"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm mt-2">
                  {service.description}
                </p>
              </div>

              <Button
                size="md"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg mt-4"
              >
                {service.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 text-md max-w-3xl mx-auto leading-relaxed mt-12"
        >
          As the EdTech industry continues to evolve with personalized learning,
          microlearning, and global accessibility trends, having the right
          payment infrastructure is essential for educational success. AOPAY's
          specialized platform ensures your educational business stays
          competitive while providing exceptional student experiences, seamless
          enrollment processes, and sustainable revenue growth in the dynamic
          online learning market.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl font-semibold text-gray-900 mt-8"
        >
          Ready to revolutionize education payments? Join leading educational
          platforms and institutions already using AOPAY to transform their
          payment operations and accelerate student success.
        </motion.h3>
      </div>
    </section>
  );
};

export default OnlineLearningCTA;
