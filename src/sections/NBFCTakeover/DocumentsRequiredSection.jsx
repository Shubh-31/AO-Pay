"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DocumentsRequiredSection() {
  const documents = [
    {
      imgSrc:
        "/assets/NBFC Takeover/DocumentsRequired/ShareholdersInformation.png",
      title: "Directors & Shareholders Information",
      desc: "Complete KYC, profiles, and background details.",
    },
    {
      imgSrc: "/assets/NBFC Takeover/DocumentsRequired/BankerReport.png",
      title: "Bankers' Report",
      desc: "Confidential reports from banking institutions.",
    },
    {
      imgSrc: "/assets/NBFC Takeover/DocumentsRequired/3Year.png",
      title: "3-Year Financial Statements",
      desc: "Audited financials with CA certification.",
    },
    {
      imgSrc:
        "/assets/NBFC Takeover/DocumentsRequired/NonCriminalDeclaration.png",
      title: "Non-Criminal Declaration",
      desc: "Statement confirming no criminal convictions (u/s 138 NI Act).",
    },
    {
      imgSrc:
        "/assets/NBFC Takeover/DocumentsRequired/AssociationAndNonAssociation.png",
      title: "Association/Non-Association Declaration",
      desc: "Disclosure of related party relationships.",
    },
    {
      imgSrc: "/assets/NBFC Takeover/DocumentsRequired/PANKYCDocs.png",
      title: "PAN & KYC Documents",
      desc: "For all directors, shareholders, and entities.",
    },
    {
      imgSrc: "/assets/NBFC Takeover/DocumentsRequired/DueDiligence.png",
      title: "Comprehensive Due Diligence Report",
      desc: "Financial, legal, and operational assessment.",
    },
    {
      imgSrc:
        "/assets/NBFC Takeover/DocumentsRequired/CompanyLegalDocuments.png",
      title: "Company Legal Documents",
      desc: "MOA, AOA, CoI, CoR, and board resolutions.",
    },
    {
      imgSrc: "/assets/NBFC Takeover/DocumentsRequired/BusinessPlan.png",
      title: "NBFC Business Plan",
      desc: "Five-year strategic and financial projections.",
    },
    {
      imgSrc:
        "/assets/NBFC Takeover/DocumentsRequired/CapitalDocumentation.png",
      title: "Source of Capital Documentation",
      desc: "Proof of acquisition funding sources.",
    },
    {
      imgSrc:
        "/assets/NBFC Takeover/DocumentsRequired/BusinessAddressProof.png",
      title: "Registered Business Address Proof",
      desc: "Ownership or lease documents for office premises.",
    },
    {
      imgSrc: "/assets/NBFC Takeover/DocumentsRequired/DIN.png",
      title: "Directors' Identification Number (DIN)",
      desc: "Valid DIN for all proposed directors.",
    },
    {
      imgSrc:
        "/assets/NBFC Takeover/DocumentsRequired/ComplianceCertificates.png",
      title: "Statutory Compliance Certificates",
      desc: "GST, PAN, TAN, and other registrations.",
    },
    {
      imgSrc: "/assets/NBFC Takeover/DocumentsRequired/ValuationReport.png",
      title: "Valuation Report",
      desc: "Independent valuation by certified valuers.",
    },
    {
      imgSrc:
        "/assets/NBFC Takeover/DocumentsRequired/ShareTransferDocuments.png",
      title: "Share Transfer Documents",
      desc: "SPA, transfer deeds, and board approvals.",
    },
    {
      imgSrc:
        "/assets/NBFC Takeover/DocumentsRequired/ExistingCreditors.png",
      title: "NOC from Existing Creditors",
      desc: "Consent letters from lenders and creditors.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 overflow-hidden border border-gray-100 mb-10"
      >
        {/* Left gradient border */}
        <div className="absolute top-0 left-0 w-1 h-full bg-black rounded-l-2xl" />

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Documents Required for NBFC Takeover – Complete Checklist
        </h2>
        <p className="text-gray-700 mb-6">
          Comprehensive documentation is crucial for smooth NBFC takeover
          approval. Here's the complete checklist of documents required from
          both acquiring and target entities:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {documents.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all p-5"
            >
              <span className="flex mr-2 item-center">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-6 m-2"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
              </span>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-800 mt-10 font-medium">
          AOPay's documentation experts ensure every document is properly
          prepared, certified, and organized to meet RBI standards, eliminating
          approval delays due to documentation deficiencies.
        </p>
      </motion.div>
    </section>
  );
}
