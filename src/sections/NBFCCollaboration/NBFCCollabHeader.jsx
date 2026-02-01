"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightFromLine } from "lucide-react";
import Link from "next/link";
import NBFCForm from "@/sections/NBFCForm";
import Image from "next/image";

export default function NBFCCollabHeader() {
  const highlightCards = [
    {
      imgSrc: "/assets/NBFCCollaboration/NBFCCollab/Agreement Drafting.png",
      title: "Agreement Drafting",
      points: [
        "Platform aggregation agreements and MoU creation between NBFCs, banks, and fintechs",
      ],
    },
    {
      imgSrc: "/assets/NBFCCollaboration/NBFCCollab/Revenue Model Design.png",
      title: "Revenue Model Design",
      points: [
        "Co-lending partnership structures with profit-sharing mechanisms",
      ],
    },
    {
      imgSrc: "/assets/NBFCCollaboration/NBFCCollab/Strategic Connections.png",
      title: "Strategic Connections",
      points: [
        "Connect NBFCs with vetted fintech players and banking partners",
      ],
    },
    {
      imgSrc: "/assets/NBFCCollaboration/NBFCCollab/Escrow Management.png",
      title: "Escrow Management",
      points: ["Setup and management of escrow accounts for fintechs"],
    },
    {
      imgSrc: "/assets/NBFCCollaboration/NBFCCollab/Performance Analytics.png",
      title: "Performance Analytics",
      points: [
        "NPA tracking, FLDG reporting, business analysis, monthly reconciliation",
      ],
    },
    {
      imgSrc: "/assets/NBFCCollaboration/NBFCCollab/Compliance Support.png",
      title: "Compliance Support",
      points: ["Regulatory management for fintechs and NBFCs"],
    },
  ];

  // Split cards into two groups for better layout balance
  const leftCards = highlightCards.slice(0, 3);
  const rightCards = highlightCards.slice(3);

  return (
    <section className="max-w-7xl mx-auto mt-20 px-6">
      <div className="grid lg:grid-cols-2 gap-10 items-stretch">
        {/* ---------------- LEFT CONTENT ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between bg-white/50 rounded-2xl p-6"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              NBFC Collaboration Services - Strategic Partnerships for Growth
            </h1>

            <p className="text-lg text-gray-700 mt-5">
              Connect NBFCs with Banks and Fintechs through Co-Lending, FLDG
              Models & Revenue-Sharing Partnerships. Complete platform
              aggregation, compliance support, and business growth solutions.
            </p>

            <div className="mt-8">
              <Link href="/contact-us">
                <Button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg shadow-lg hover:bg-green-700">
                  Schedule Free Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* 3 Cards on the left */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6 mt-10">
            {leftCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5"
              >
                <Image
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-6 mr-2"
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <ArrowRightFromLine className="w-5 h-5 text-green-500 mt-1" />
                      <p className="text-sm">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ---------------- RIGHT SIDE ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-between bg-white/50 rounded-2xl p-6"
        >
          {/* Form */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
            <p className="text-center text-xl font-semibold">
              Get Started with NBFC Collaboration Today
            </p>
            <NBFCForm />
          </div>

          {/* 3 Cards below form */}
          <div className="flex flex-wrap justify-between gap-6 mt-10">
            {rightCards.map((card, index) => (
              <div
                key={index}
                className="flex-1 min-w-[250px] bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5"
              >
                <Image
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-6 mr-2"
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <ArrowRightFromLine className="w-5 h-5 text-green-500 mt-1" />
                      <p className="text-sm">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
