"use client";

import { motion } from "framer-motion";
import { Truck, Clock, DollarSign } from "lucide-react";

const LogisticsPaymentSection = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "85% Reduction in Driver Payment Processing Time",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      title: "60% Faster Customer Payment Collections",
    },
    {
      icon: <Truck className="w-6 h-6 text-green-600" />,
      title: "40% Lower Operational Costs via Automated Workflows",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Transforming Payment Operations in the Logistics Industry
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed"
        >
          Logistics industry has undergone significant transformation with the
          rise of e-commerce, last-mile delivery services, and on-demand
          transportation. As logistics companies scale operations, they face
          increasing complexity in managing driver payments, fleet expenses,
          customer collections, and regulatory compliance across multiple
          regions and service types.
          <br />
          <br />
          Modern logistics businesses require more than traditional payment
          processing. They need comprehensive solutions that handle driver
          compensation, fuel reimbursements, maintenance payments, customer
          collections, and real-time financial tracking. AOPAY's specialized
          platform addresses these unique challenges with purpose-built features
          for the transportation and logistics sector.
        </motion.p>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
                {feature.icon}
              </div>
              <p className="text-gray-800 font-medium">{feature.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticsPaymentSection;
