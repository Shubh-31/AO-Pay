"use client";

import { motion } from "framer-motion";

const D2CBusinessSolutions = () => {
  const businessModels = [
    {
      title: "Emerging D2C Brands",
      description:
        "For startup consumer brands and new market entrants, AOPAY's payment gateway enables immediate acceptance of multiple payment methods without complex technical setup. Our checkout optimization tools help convert first-time visitors into customers, while fraud protection safeguards your growing business. Quick integration gets your brand selling online in days, not weeks.",
      features: [
        "Rapid Deployment: Launch payment processing in 48 hours with pre-built solutions",
        "Conversion Optimization: Built-in checkout optimization increases first-time buyer conversion",
        "Brand Protection: Essential fraud prevention protects your reputation from day one",
      ],
      imgSrc:
        "/assets/FMCG/AOPAY Tailored Payment Solutions for Every D2C Business Model/Emerging D2C Brands.png",
    },
    {
      title: "Scaling Consumer Brands",
      description:
        "Growing D2C businesses benefit from AOPAY's advanced payment orchestration that handles increasing transaction volumes with intelligent routing. Bank verification systems ensure secure fund management, while comprehensive analytics provide insights into customer purchasing behaviors. Subscription billing capabilities support recurring product delivery models common in consumer goods.",
      features: [
        "Volume Scaling: Handle peak shopping seasons and viral growth seamlessly",
        "Customer Analytics: Deep insights into purchasing patterns and customer lifetime value",
        "Subscription Management: Secure recurring billing for subscription box and replenishment models",
      ],
      imgSrc:
        "/assets/FMCG/AOPAY Tailored Payment Solutions for Every D2C Business Model/Scaling Consumer Brands.png",
    },
    {
      title: "Established FMCG Enterprises",
      description:
        "Large consumer goods companies require sophisticated payment processing across global markets and multiple sales channels. AOPAY's platform supports high transaction volumes with intelligent routing, multi-currency processing, and comprehensive financial reporting. Advanced vendor management handles complex supply chain payments while maintaining the omnichannel experience modern consumers expect.",
      features: [
        "Global Operations: Multi-currency, multi-region payment processing with local optimization",
        "Enterprise Analytics: Advanced reporting and business intelligence for strategic decision-making",
        "Omnichannel Integration: Unified payment experiences across online, mobile, and retail channels",
      ],
      imgSrc:
        "/assets/FMCG/AOPAY Tailored Payment Solutions for Every D2C Business Model/Established FMCG Enterprises.png",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          AOPAY Tailored Payment Solutions for Every D2C Business Model
        </motion.h2>

        {businessModels.map((model, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-8 text-left space-y-4"
          >
            <img src = {model.imgSrc} alt = {model.title} className="w-8 h-auto" />
            <h3 className="text-2xl font-semibold text-gray-800">
              {model.title}
            </h3>
            <p className="text-gray-700">{model.description}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {model.features.map((feature, fIdx) => (
                <li key={fIdx}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default D2CBusinessSolutions;
