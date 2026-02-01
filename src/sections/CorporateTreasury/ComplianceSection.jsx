"use client";

import React from "react";
import Link from "next/link";
import { Check, ShieldCheck, Bank, FileText, Users } from "lucide-react";

export default function ComplianceSection() {
  const features = [
    {
      imgSrc:
        "/assets/CorporateTreasury/Complete Compliance & Risk Management/Aadhaar Verification.png",
      title: "Aadhaar Verification",
      desc: "Instant identity validation for employees, vendors, and business partners using India's national biometric database",
    },
    {
      imgSrc:
        "/assets/CorporateTreasury/Complete Compliance & Risk Management/PAN Status Verification.png",
      title: "PAN Verification",
      desc: "Validate tax identification numbers in real-time to ensure accurate TDS processing and regulatory reporting",
    },
    {
      imgSrc:
        "/assets/CorporateTreasury/Complete Compliance & Risk Management/Bulk GST Verification.png",
      title: "GST Verification",
      desc: "Authenticate supplier credentials, validate input tax credit claims, and maintain audit-ready documentation",
    },
    {
      imgSrc:
        "/assets/CorporateTreasury/Complete Compliance & Risk Management/Bank Account Verification.png",
      title: "Bank Account Verification",
      desc: "Prevent payment fraud and errors by validating account holder names, account numbers, and IFSC codes before processing transactions",
    },
    {
      imgSrc:
        "/assets/CorporateTreasury/Complete Compliance & Risk Management/Instant CIBIL API Integration.png",
      title: "CIBIL Integration",
      desc: "Access credit reports and scores to assess creditworthiness when extending trade credit or entering into financial arrangements",
    },
  ];

  return (
    <section className="w-full bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Complete Compliance &amp; Risk Management
            </h2>
            <p className="mt-3 text-sm text-gray-700 max-w-xl">
              Corporate treasury teams operate under intense regulatory
              scrutiny. AOPAY's KYC and KYB solution ensure comprehensive
              verification and due diligence, helping you maintain compliance
              while accelerating onboarding processes.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left: Feature list */}
          <div className="md:col-span-2 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-3 p-4 rounded-lg border border-black/5 bg-white"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-black/10">
                    <img src={f.imgSrc} alt={f.alt} className="text-black" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">{f.title}</h3>
                    <p className="mt-1 text-xs text-gray-600">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 md:mt-0 flex items-center gap-3">
              <div className="border border-black/10 rounded-md px-3 py-2 text-sm font-medium">
                <span className="block">Loan Management</span>
                <span className="text-xs text-gray-600">
                  Manage drawdowns, covenants & repayments
                </span>
              </div>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 border rounded-md px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors"
              >
                <span>Get Started</span>
              </Link>
            </div>

            <div className="mt-4 p-4 bg-gray-50 border border-black/5 rounded-lg">
              <h4 className="font-semibold">Our Loan Management</h4>
              <p className="text-sm text-gray-700 mt-2">
                Our Loan Management solution extends these capabilities further,
                helping enterprises manage working capital loans, term
                facilities, and credit lines from multiple lenders. Track
                drawdowns, monitor covenants, and automate repayment
                schedules—all within a single platform that integrates with your
                treasury operations.
              </p>

              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border">
                    {" "}
                    <Check className="w-3 h-3" />{" "}
                  </span>
                  Centralised drawdown & repayment tracking
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border">
                    {" "}
                    <Check className="w-3 h-3" />{" "}
                  </span>
                  Covenant monitoring & alerting
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border">
                    {" "}
                    <Check className="w-3 h-3" />{" "}
                  </span>
                  Multi-lender facility orchestration
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Accent panel */}
          <aside className="flex flex-col gap-4 p-6 border border-black/5 rounded-lg bg-black text-white">
            <div>
              <h5 className="text-sm font-semibold">Audit-ready by design</h5>
              <p className="text-xs mt-2 text-white/90">
                Maintain records, evidence trails and API logs suitable for
                internal and statutory audits.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="text-sm font-semibold">Integrations</h5>
              <p className="text-xs mt-2 text-white/90">
                CIBIL, UIDAI, GSTN, Bank APIs and leading accounting/ERP
                platforms.
              </p>
            </div>

            <div className="mt-auto">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 w-full justify-center rounded-md border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors"
              >
                Request a Demo
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
