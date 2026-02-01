"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const StudentPaymentJourney = () => {
  const journeySteps = [
    {
      imgSrc:
        "/assets/EdtechAndOnlineLearning/Seamless Student Payment Journey/Course Discovery.png",
      title: "Course Discovery",
      description:
        "Students browse courses with clear pricing, course details, and instructor information displayed transparently.",
    },
    {
      imgSrc:
        "/assets/EdtechAndOnlineLearning/Seamless Student Payment Journey/Enrollment Decision.png",
      title: "Enrollment Decision",
      description:
        "Students select courses and see comprehensive pricing including any applicable taxes, fees, or discounts.",
    },
    {
      imgSrc:
        "/assets/EdtechAndOnlineLearning/Seamless Student Payment Journey/Payment Processing.png",
      title: "Payment Processing",
      description:
        "Secure, optimized checkout with multiple payment options and mobile-friendly interface for convenience.",
    },
    {
      imgSrc:
        "/assets/EdtechAndOnlineLearning/Seamless Student Payment Journey/Instant Access.png",
      title: "Instant Access",
      description:
        "Immediate course access upon successful payment with automated enrollment confirmation and learning platform access.",
    },
    {
      imgSrc:
        "/assets/EdtechAndOnlineLearning/Seamless Student Payment Journey/Ongoing Support.png",
      title: "Ongoing Support",
      description:
        "Continued payment support for subscription management, additional courses, and certification fee processing.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Seamless Student Payment Journey
        </motion.h2>

        {/* Steps */}
        <div className="mt-10 flex flex-col gap-6 text-left">
          {journeySteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img src = {step.imgSrc} alt = {step.title} className="w-6 my-2"/> 
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentPaymentJourney;
