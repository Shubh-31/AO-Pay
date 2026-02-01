"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NBFCChallenges() {
  const challenges = [
    {
      imgSrc:
        "/assets/NBFCRegistration/Challenges/Documentation Errors and Incompleteness.png",
      title: "Documentation Errors and Incompleteness",
      desc: "Incomplete or incorrectly prepared documents trigger RBI queries causing significant delays. ",
      solution:
        "Engage experienced consultants who understand regulatory expectations and prepare documentation meeting exact specifications from the outset.",
    },
    {
      imgSrc:
        "/assets/NBFCRegistration/Challenges/Insufficient Management Experience.png",
      title: "Insufficient Management Experience",
      desc: "Many applications fail due to directors lacking requisite banking experience.",
      solution:
        "Recruit experienced independent directors or advisors with proven financial sector credentials to strengthen your management team.",
    },
    {
      imgSrc:
        "/assets/NBFCRegistration/Challenges/Weak Business Plan Presentation.png",
      title: "Weak Business Plan Presentation",
      desc: "Generic or poorly researched business plans fail to convince regulators of viability.",
      solution:
        "Develop data-driven plans with realistic projections, thorough market analysis, and clear differentiation strategies supported by industry research.",
    },
    {
      imgSrc:
        "/assets/NBFCRegistration/Challenges/Capital Arrangement Challenges.png",
      title: "Capital Arrangement Challenges",
      desc: "Arranging ₹10 crore genuine equity proves difficult for many startups.",
      solution:
        "Leverage AOPay's investor network, explore co-founder partnerships, or consider strategic investors aligned with your business vision.",
    },
    {
      imgSrc: "/assets/NBFCRegistration/Challenges/Background Check Issues.png",
      title: "Background Check Issues",
      desc: "Credit history problems for directors or shareholders derail applications.",
      solution:
        "Conduct thorough due diligence on all stakeholders before application, resolve outstanding credit issues, and provide clarifications for any historical concerns.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Common Challenges in NBFC Registration and How to Overcome Them
        </motion.h2>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          The NBFC registration journey presents several challenges that can
          delay or derail applications. Understanding these obstacles helps you
          prepare effectively:
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-start gap-6">
        {challenges.map((item, index) => {
          const isLastOdd =
            challenges.length % 2 !== 0 && index === challenges.length - 1;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 text-left border border-gray-100 w-full md:w-[calc(50%-0.75rem)] ${
                isLastOdd ? "md:mx-auto" : ""
              }`}
            >
              <Image src = {item.imgSrc} alt = {item.title} width={100} height={100} className="w-6 mb-2" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-3">{item.desc}</p>
              <p className="text-gray-600">
                <span className="font-semibold text-blue-700">Solution:</span>{" "}
                {item.solution}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
