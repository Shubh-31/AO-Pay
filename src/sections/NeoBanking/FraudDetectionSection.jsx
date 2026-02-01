"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Brain,
  Globe2,
  Eye,
  Lock,
  ListChecks,
  Workflow,
} from "lucide-react";

export const FraudDetectionSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 text-gray-100 py-20 px-6">
      {/* Gradient background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-500/10 via-transparent to-gray-50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Automatically Reduce Fraud with Machine Learning
          </h2>
          <p className="text-lg text-black max-w-6xl mx-auto md:mx-auto leading-relaxed">
            Fraud prevention is built into every AOPAY account. AOPAY Radar
            scores every transaction for risk using machine learning models
            trained on hundreds of billions of data points from financial
            institutions worldwide. On average, Radar helps neo banks reduce
            fraud by <span className="text-green-500 font-semibold">32%</span>
            while maintaining smooth customer experiences.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {[
            {
              icon: <Eye className="text-green-500 w-6 h-6" />,
              title: "Device Fingerprinting",
              desc: "Identify suspicious devices and detect account takeover attempts.",
            },
            {
              icon: <Globe2 className="text-green-500 w-6 h-6" />,
              title: "Proxy Detection",
              desc: "Flag transactions from VPNs, proxies, and anonymizing services.",
            },
            {
              icon: <Brain className="text-green-500 w-6 h-6" />,
              title: "Custom Rules Engine",
              desc: "Create fraud rules based on behavior, transaction patterns, and thresholds.",
            },
            {
              icon: <ListChecks className="text-green-500 w-6 h-6" />,
              title: "Allow & Block Lists",
              desc: "Manage whitelists and blacklists for cards, customers, IPs, and emails.",
            },
            {
              icon: <Lock className="text-green-500 w-6 h-6" />,
              title: "Dynamic 3D Secure",
              desc: "Trigger authentication only when risk warrants it for smooth UX.",
            },
            {
              icon: <Workflow className="text-green-500 w-6 h-6" />,
              title: "Review Queues",
              desc: "Enable manual review workflows for high-risk transactions with insights.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-green-500/60 transition-all duration-300 shadow-lg hover:shadow-green-500/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
