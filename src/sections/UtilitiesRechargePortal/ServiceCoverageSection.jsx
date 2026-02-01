"use client";

import { motion } from "framer-motion";

const ServiceCoverageSection = () => {
  const services = [
    "Mobile Recharge",
    "DTH Recharge",
    "Electricity Bills",
    "Water Bills",
    "Gas Bills",
    "Internet Bills",
    "Landline Bills",
    "Credit Card Bills",
    "Insurance Premium",
    "Loan EMI",
    "Municipal Taxes",
    "Educational Fees",
    "Gaming Credits",
    "Streaming Services",
    "Travel Bookings",
    "Government Fees",
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/90 border border-gray-200 rounded-3xl shadow-sm px-6 md:px-10 py-10 md:py-12 text-center space-y-8">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Complete Service Coverage Across All Categories
          </motion.h2>

          {/* Accent line */}
          <div className="flex justify-center">
            <span className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-green-500" />
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Support diverse service categories with our comprehensive platform
            designed to handle all major utility and recharge services with
            consistent performance and reliability.
          </motion.p>

          {/* Services List */}
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 text-left text-gray-700 text-sm md:text-base max-w-4xl mx-auto mt-4"
          >
            {services.map((service, index) => (
              <li
                key={index}
                className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2"
              >
                <span className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                <span>{service}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceCoverageSection;
