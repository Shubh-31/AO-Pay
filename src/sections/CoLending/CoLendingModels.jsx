"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

const coLendingModels = [
  {
    imgSrc:
      "/assets/CoLending/Flexible Co-Lending Partnership Models/Bank-Led Co-Lending.png",
    heading3: "Bank-Led Co-Lending",
    description:
      "Banks partner with NBFCs to leverage their distribution network and underwriting expertise while meeting priority sector lending targets",
    points: [
      "80:20 or customizable ratio splits",
      "Bank as the lead lender",
      "NBFC sourcing and servicing",
    ],
  },
  {
    imgSrc:
      "/assets/CoLending/Flexible Co-Lending Partnership Models/NBFC-Led Co-Lending.png",
    heading3: "NBFC-Led Co-Lending",
    description:
      "NBFCs access lower-cost funds from banks while maintaining customer relationships and leveraging their domain expertise",
    points: [
      "Flexible partnership ratios",
      "NBFC as originator",
      "Bank funding participation",
    ],
  },
  {
    imgSrc:
      "/assets/CoLending/Flexible Co-Lending Partnership Models/Co-Origination Model.png",
    heading3: "Co-Origination Model",
    description:
      "Equal partnership with shared responsibilities for origination, underwriting, and servicing of loan portfolios",
    points: [
      "Balanced risk-reward sharing",
      "Joint decision-making",
      "Collaborative servicing",
    ],
  },
];

export const CoLendingModelsCards = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl mb-4 text-center">
        Flexible Co-Lending Partnership Models
      </h2>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {coLendingModels.map((model, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={model.imgSrc}
              alt={model.heading3}
              className="w-8 h-auto mb-2"
            />
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {model.heading3}
              </h3>
            </div>
            <p className="text-gray-600 mb-4">{model.description}</p>
            <ul className="space-y-2">
              {model.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">●</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
