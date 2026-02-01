"use client";

import { motion } from "framer-motion";
import { Globe2, RefreshCw, CreditCard, Cpu, TrendingUp } from "lucide-react";

export const SmartPaymentAcceptance = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 text-gray-800 py-20 px-6">
      {/* Gradient accent glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 via-transparent to-gray-50 pointer-events-none" />

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
            Maximize Payment Acceptance & Reduce Failed Transactions
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto md:mx-0 leading-relaxed">
            AOPAY dynamically optimizes payment authorization across tens of
            thousands of issuers globally with
            <span className="text-green-500 font-semibold">
              {" "}
              Adaptive Acceptance
            </span>{" "}
            technology. When a customer's payment is declined, we automatically
            identify the optimal retry messaging and routing combinations to
            prevent lost revenue and reduce involuntary churn.
          </p>

          <h3 className="mb-2 text-md text-gray-600">Smart Authorization Features :</h3>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {[
            {
              icon: <TrendingUp className="text-green-500 w-6 h-6" />,
              title: "Intelligent MID Assignment",
              desc: "Automatically route transactions to the best merchant ID for higher approval rates.",
            },
            {
              icon: <Globe2 className="text-green-500 w-6 h-6" />,
              title: "Direct Network Integrations",
              desc: "Connect directly to Visa, Mastercard, and RuPay for faster and more reliable processing.",
            },
            {
              icon: <Cpu className="text-green-500 w-6 h-6" />,
              title: "Auto-ISO Optimizations",
              desc: "Route payments through the most efficient acquiring banks based on past performance.",
            },
            {
              icon: <RefreshCw className="text-green-500 w-6 h-6" />,
              title: "Smart Payment Retries",
              desc: "Automatically retry failed payments with optimized timing and message parameters.",
            },
            {
              icon: <CreditCard className="text-green-500 w-6 h-6" />,
              title: "Card Account Updater",
              desc: "Automatically update expired or replaced card details to prevent payment failures.",
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
                <pageXOffset className="text-lg font-semibold text-white">
                  {feature.title}
                </pageXOffset>
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
