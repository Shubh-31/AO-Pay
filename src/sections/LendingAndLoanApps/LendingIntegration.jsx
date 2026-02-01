"use client";

import { motion } from "framer-motion";
import {
  Server,
  CreditCard,
  FileText,
  Users,
  File,
  MessageCircle,
} from "lucide-react";

const LendingIntegration = () => {
  const integrationPoints = [
    {
      icon: <Server className="w-6 h-6 text-blue-500" />,
      heading: "Core Banking Systems",
      description:
        "Sync with existing banking infrastructure and account management systems.",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-green-500" />,
      heading: "Credit Bureau Integration",
      description:
        "Connect with multiple credit bureaus for comprehensive credit assessment.",
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-500" />,
      heading: "Accounting Software",
      description:
        "Automated financial reporting and reconciliation with popular accounting platforms.",
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      heading: "Collection Agencies",
      description:
        "Integrate with collection partners for comprehensive recovery management.",
    },
    {
      icon: <File className="w-6 h-6 text-pink-500" />,
      heading: "Document Management",
      description: "Connect with document storage and verification services.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-teal-500" />,
      heading: "Communication Platforms",
      description:
        "SMS, email, and WhatsApp integration for borrower communication.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Easy Integration with Lending Ecosystem
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
          {integrationPoints.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition hover:-translate-y-1 flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {item.heading}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LendingIntegration;
