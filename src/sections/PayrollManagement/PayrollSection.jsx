"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const payrollData = [
  {
    title: "Enterprise Payroll for Large Organizations",
    desc: "Tailored payroll management for multi-location, multi-department businesses with advanced compliance tracking, automated reporting, and executive insights.",
    imgSrc:
      "/assets/PayrollManagement/AOPAY Advanced Payroll Solutions/Enterprise Payroll for Large Organizations.png",
  },
  {
    title: "Scalable Payroll for SMBs & Startups",
    desc: "Quick-to-deploy payroll solution designed for growing companies. Intuitive interface with essential features for fast adoption.",
    imgSrc:
      "/assets/PayrollManagement/AOPAY Advanced Payroll Solutions/Scalable Payroll for SMBs & Startups.png",
  },
  {
    title: "Embedded Payroll for HR Tech & SaaS",
    desc: "White-label API for HR tech and SaaS platforms. Seamless integration, fully customizable, empowering embedded payroll workflows.",
    imgSrc:
      "/assets/PayrollManagement/AOPAY Advanced Payroll Solutions/Embedded Payroll for HR Tech & SaaS.png",
  },
  {
    title: "Performance & Reliability",
    desc: "Proven platform performance: 80% faster payroll processing, 99.9% calculation accuracy, 50,000+ employees processed monthly, and full statutory compliance.",
    imgSrc:
      "/assets/PayrollManagement/AOPAY Advanced Payroll Solutions/Performance & Reliability.png",
    isMetrics: true,
    metrics: [
      { label: "Processing Speed", value: "80% Faster" },
      { label: "Accuracy", value: "99.9%" },
      { label: "Employees Processed", value: "50,000+" },
      { label: "Compliance", value: "100%" },
    ],
  },
];

export const PayrollSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          AOPAY Advanced Payroll Solutions
        </motion.h2>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto">
          Streamline payroll operations, ensure compliance, and empower
          employees with our enterprise-grade, developer-friendly payroll
          platform.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {payrollData.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ${item.iconColor}`}
                >
                 <img src = {item.imgSrc} alt = {item.title} className="w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{item.desc}</p>

              {item.isMetrics && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {item.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      <p className="text-green-600 font-bold text-lg">
                        {metric.value}
                      </p>
                      <p className="text-gray-500 text-sm">{metric.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
