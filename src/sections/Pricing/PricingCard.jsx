"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";








const plans = [
  {
    id: "Banking",
    title: "Banking & Financial",
    features: [
      "NBFC",
      "NIDHI",
      "Loan Management",
      "Micro Finance",
      "Credit Cooperative Society",
      "Co-lending Software",
      "P2P Lending Software",
     
    ],
  },
];

// Global list = union of all possible features
const allFeatures = [
  // Existing banking features
  "Basic Software",
  "KYC API",
  "Branch Management",
  "SMS API",

  "E - NACH API",
  "QR & Disbursement API",
  "Credit Pull",
  "Credit Update",
  "Customization",
  "Customer Application",
  "Web Application",
  "Android Application",
  "Accounting Management",
  "Prepaid Card",
  "Employee Management",

  "Co-lending Core Engine",
  "Partner Onboarding & Management",
  "Loan Origination System (LOS)",
  "Rule-based Fund Split Engine",
  "Automated Settlement & Reconciliation",
  "Co-lender Dashboard & Reporting",
  "Risk Sharing Models (FLDG / Guarantee Config)",
  "Multi-Lender Agreement Engine",
  "Pool Selection & Co-origination Automation",
  "Custom Workflow & Rule Builder",
  "Dedicated Advisor / Partner Login",

  // P2P Lending Software
  "Core P2P Lending Engine",
  "Investor Registration & Verification",
  "Borrower Onboarding & Profiling",
  "Credit Bureau Integration",
  "Escrow Account Integration",
  "Automated Matching Algorithm (Investor ↔ Borrower)",
  "Risk Rating & Scoring Engine",
  "Investment Portfolio Dashboard",
  "Collection & Repayment Tracking",
  "Auto-Invest Rules (SIP-style Lending)",
  "Secondary Market (Loan Trading)",
  "Advanced Analytics & Investor Reports",
  "Multi-Category Loan Products",
  "Custom Workflow Builder (P2P)",
  "Customer/Investor Mobile App",

  // Treasury Management Software
  "Core Treasury Management Engine",
  "Bank Account Management",
  "Cash Flow Forecasting",
  "Bank Reconciliation",
  "Investment Management (FDs, MF, Bonds)",
  "Risk Management (FX, IR, Liquidity Risk)",
  "Payment Gateway / API Integration",
  "Multi-Bank Connectivity (Host-to-Host / API)",
  "Policy & Limit Management",
  "Advanced Analytics & MIS",
  "Automated Sweep / Pooling",
  "Hedge Management & Accounting",
  "Cash Position Dashboard (Real-Time)",
  "Multi-Currency & FX Rate Integration",
  "Workflow Automation & Approvals",
  "Custom Report Builder",
  "Mobile Application",
];

// ✅ Feature mapping by product
const productFeatures = {
  // ===== Existing banking products =====
  "Core Banking": {
    basic: new Set(["Basic Software", "KYC API", "Employee Management"]),
    standard: new Set([
      "Branch Management",
      "SMS API",

      "E - NACH API",
      "QR & Disbursement API",
    ]),
    premium: new Set([
      "CIBIL Pull & Update API",
      "Customization",
      "Source Code",
      "Credit Pull",
    ]),
  },

  NIDHI: {
    basic: new Set([
      "Basic Software",
      "KYC API",
      "Employee Management",
      "Credit Pull",
    ]),
    standard: new Set([
      "Branch Management",
      "SMS API",

      "E - NACH API",
      "QR & Disbursement API",
      "Credit Pull",
    ]),
    premium: new Set([
      "CIBIL Pull & Update API",
      "Customization",
      "Source Code",
      "Prepaid Card",
      "Credit Pull",
      "Credit Update",
    ]),
  },

  "Credit Cooperative Society": {
    basic: new Set([
      "Basic Software",
      "KYC API",
      "Employee Management",
      "Credit Pull",
    ]),
    standard: new Set([
      "Branch Management",
      "SMS API",

      "E - NACH API",
      "QR & Disbursement API",
      "Credit Pull",
    ]),
    premium: new Set([
      "CIBIL Pull & Update API",
      "Customization",
      "Source Code",
      "Prepaid Card",
      "Credit Pul",
      "Credit Update",
    ]),
  },

  "Loan Management": {
    basic: new Set([
      "Basic Software",
      "KYC API",
      "Employee Management",
      "Credit Pull",
    ]),
    standard: new Set([
      "Branch Management",
      "SMS API",
      "E - NACH API",
      "QR & Disbursement API",
      "CIBIL Pull & Update API",
    ]),
    premium: new Set([
      "Customer Application",
      "Customization",
      "Source Code",
      "Credit Pull",
    ]),
  },

  NBFC: {
    basic: new Set([
      "Basic Software",
      "Web Application",
      "Accounting Management",
      "KYC API",
      "Employee Management",
      "Credit Pull",
    ]),
    standard: new Set([
      "Branch Management",
      "SMS API",
      "Accounting Management",
      "Web Application",
      "E - NACH API",
      "QR & Disbursement API",
      "CIBIL Pull & Update API",
      "Credit Pull",
    ]),
    premium: new Set([
      "Accounting Management",
      "Web Application",
      "Android Application",
      "Customer Application",
      "Customization",
      "Source Code",
      "Credit Pull",
      "Credit Update",
    ]),
  },

  "Micro Finance": {
    basic: new Set([
      "Basic Software",
      "KYC API",
      "Employee Management",
      "Credit Pull",
    ]),
    standard: new Set([
      "Branch Management",
      "SMS API",
      "E - NACH API",
      "QR & Disbursement API",
      "Customer Application"
    ]),
    premium: new Set([
      "Customer Application",
      "Customization",
      "Source Code",
      "Credit Pull",
    ]),
  },

  // ===== NEW: Co-lending Software =====
  "Co-lending Software": {
    basic: new Set([
      "Co-lending Core Engine",
      "Partner Onboarding & Management",
      "Loan Origination System (LOS)",
      "Web Application",
      "Android Application",
      "KYC API",
      "Employee Management",
      "Credit Pull",
      "Credit Update",
    ]),
    standard: new Set([
      "Co-lending Core Engine",
      "Partner Onboarding & Management",
      "Loan Origination System (LOS)",
      "Rule-based Fund Split Engine",
      "Automated Settlement & Reconciliation",
      "Web Application",
      "Android Application",
      "KYC API",
      "E - NACH API",
      "Credit Bureau (CIBIL/Experian) Pull API",
      "Co-lender Dashboard & Reporting",
      "Risk Sharing Models (FLDG / Guarantee Config)",
      "Credit Update",
    ]),
    premium: new Set([
      "Co-lending Core Engine",
      "Partner Onboarding & Management",
      "Loan Origination System (LOS)",
      "Rule-based Fund Split Engine",
      "Automated Settlement & Reconciliation",
      "Web Application",
      "Android Application",
      "KYC API",
      "E - NACH API",
      "Credit Bureau (CIBIL/Experian) Pull API",
      "Co-lender Dashboard & Reporting",
      "Risk Sharing Models (FLDG / Guarantee Config)",
      "Multi-Lender Agreement Engine",
      "Pool Selection & Co-origination Automation",
      "Custom Workflow & Rule Builder",
      "Dedicated Advisor / Partner Login",
      "Customer Application",
      "Customization",
      "Source Code",
      "Credit Update",
    ]),
  },

  // ===== NEW: P2P Lending Software =====
  "P2P Lending Software": {
    basic: new Set([
      "Core P2P Lending Engine",
      "Web Application",
      "Android Application",
      "KYC API",
      "Investor Registration & Verification",
      "Borrower Onboarding & Profiling",
      "Employee Management",
      "Credit Pull",
    ]),
    standard: new Set([
      "Core P2P Lending Engine",
      "Web Application",
      "Android Application",
      "KYC API",
      "Investor Registration & Verification",
      "Borrower Onboarding & Profiling",
      "Credit Bureau Integration",
      "Escrow Account Integration",
      "Risk Rating & Scoring Engine",
      "Investment Portfolio Dashboard",
      "Collection & Repayment Tracking",
    ]),
    premium: new Set([
      "Core P2P Lending Engine",
      "Web Application",
      "Android Application",
      "KYC API",
      "Investor Registration & Verification",
      "Borrower Onboarding & Profiling",
      "Credit Bureau Integration",
      "Escrow Account Integration",
      "Automated Matching Algorithm (Investor ↔ Borrower)",
      "E - NACH API",
      "Risk Rating & Scoring Engine",
      "Investment Portfolio Dashboard",
      "Collection & Repayment Tracking",
      "Auto-Invest Rules (SIP-style Lending)",
      "Secondary Market (Loan Trading)",
      "Advanced Analytics & Investor Reports",
      "Multi-Category Loan Products",
      "Custom Workflow Builder (P2P)",
      "Customer/Investor Mobile App",
      "Customization",
      "Source Code",
    ]),
  },

  // ===== NEW: Treasury Management Software =====
  // "Treasury Management Software": {
  //   basic: new Set([
  //     "Core Treasury Management Engine",
  //     "Web Application",
  //     "Bank Account Management",
  //     "Employee Management",
  //     "Credit Pull",
  //   ]),
  //   standard: new Set([
  //     "Core Treasury Management Engine",
  //     "Web Application",
  //     "Bank Account Management",
  //     "Cash Flow Forecasting",
  //     "Bank Reconciliation",
  //     "Investment Management (FDs, MF, Bonds)",
  //     "Risk Management (FX, IR, Liquidity Risk)",
  //   ]),
  //   premium: new Set([
  //     "Core Treasury Management Engine",
  //     "Web Application",
  //     "Bank Account Management",
  //     "Cash Flow Forecasting",
  //     "Bank Reconciliation",
  //     "Investment Management (FDs, MF, Bonds)",
  //     "Risk Management (FX, IR, Liquidity Risk)",
  //     "Payment Gateway / API Integration",
  //     "Multi-Bank Connectivity (Host-to-Host / API)",
  //     "Policy & Limit Management",
  //     "Advanced Analytics & MIS",
  //     "Automated Sweep / Pooling",
  //     "Hedge Management & Accounting",
  //     "Cash Position Dashboard (Real-Time)",
  //     "Multi-Currency & FX Rate Integration",
  //     "Workflow Automation & Approvals",
  //     "Custom Report Builder",
  //     "Mobile Application",
  //     "Customization",
  //     "Source Code",
  //   ]),
  // },
};

const pricingMap = {
  "Loan Management": {
    basic: "Rs 35,000",
    standard: "Rs 50,000",
    premium: "Rs 1,20,000",
  },
  "Co-lending Software": {
    basic: "Rs 1,50,000",
    standard: "Rs 3,50,000",
    premium: "Rs 5,00,000",
  },
  "P2P Lending Software": {
    basic: "Rs 1,00,000",
    standard: "Rs 1,80,000",
    premium: "Rs 3,50,000",
  },
  NBFC: { basic: "Rs 50,000", standard: "Rs 80,000", premium: "Rs 1,50,000" },
  NIDHI: { basic: "Rs 25,000", standard: "Rs 35,000", premium: "Rs 1,10,000" },
  "Credit Cooperative Society": {
    basic: "Rs 35,000",
    standard: "Rs 70,000",
    premium: "Rs 1,20,000",
  },
  "Micro Finance": {
    basic: "Rs 25,000",
    standard: "Rs 45,000",
    premium: "Rs 1,00,000",
  },
};

export default function PricingCard() {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [hoverPrice, setHoverPrice] = useState({
    row: null,
    col: null,
    plan: null,
    price: null,
  });
  const [selectedFeatureList, setSelectedFeatureList] = useState();
  const searchParams = useSearchParams();
  const productFromURL = searchParams.get("product");

  useEffect(() => {
    if (productFromURL && productFeatures[productFromURL]) {
      setSelectedFeatureList(productFromURL);
    }
  }, [productFromURL]);

  return (
    <section
      className="
    py-24 
    min-h-[80vh] 
    bg-contain bg-center bg-repeat
    bg-blur-md
  "
      style={{ backgroundImage: `url('/assets/Pricing/PricingBg.png')` }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative"
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Highlighted Button */}
              <motion.button
                whileHover={{ scale: 1.07 }}
                className="
              relative px-8 py-4 rounded-2xl font-semibold shadow-lg transition 
              flex items-center gap-2 text-gray-800
              bg-white/80 backdrop-blur-md 
              border border-white/40
              hover:shadow-[0_0_20px_rgba(80,150,255,0.6)]
              overflow-hidden
            "
              >
                {/* Gradient Glow Border */}
                <span className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-borderFlow opacity-80">
                  <span className="block w-full h-full rounded-2xl bg-white/90 backdrop-blur-sm" />
                </span>

                {/* Button Label */}
                <span className="relative z-10">{plan.title}</span>

                {/* Icon */}
                <motion.span
                  animate={{ rotate: hoveredPlan === plan.id ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative z-10"
                >
                  <ChevronDown size={18} />
                </motion.span>
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {hoveredPlan === plan.id && (
                  <motion.ul
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.25 }}
                    className="
                  absolute left-0 mt-3 w-64 max-h-[380px] overflow-y-auto 
                  bg-white/95 backdrop-blur-xl 
                  border border-gray-200 shadow-xl rounded-2xl 
                  p-4 space-y-3 z-20
                "
                  >
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="cursor-pointer text-gray-700 hover:text-blue-600 transition"
                        onClick={() => setSelectedFeatureList(feature)}
                      >
                        {feature}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Feature Table */}
        {selectedFeatureList && productFeatures[selectedFeatureList] && (
          <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg border">
            <h2 className="text-3xl font-bold mb-6 text-gray-700">
              {selectedFeatureList}
            </h2>

            {(() => {
              const sets = productFeatures[selectedFeatureList];
              const visibleFeatures = allFeatures.filter((f) => {
                if (
                  (selectedFeatureList === "NIDHI" ||
                    selectedFeatureList === "Credit Cooperative Society") &&
                  f === "Customer Application"
                )
                  return false;
                return (
                  sets.basic.has(f) ||
                  sets.standard.has(f) ||
                  sets.premium.has(f)
                );
              });

              const basicCount = visibleFeatures.filter((f) =>
                sets.basic.has(f)
              ).length;
              const standardCount = visibleFeatures.filter(
                (f) => sets.basic.has(f) || sets.standard.has(f)
              ).length;
              const premiumCount = visibleFeatures.filter(
                (f) =>
                  sets.basic.has(f) ||
                  sets.standard.has(f) ||
                  sets.premium.has(f)
              ).length;

              const pricing = pricingMap[selectedFeatureList] || null;

              const renderBuyNow = (planKey, planName, priceValue, rowIdx) => {
                if (
                  priceValue &&
                  hoverPrice.row === rowIdx &&
                  hoverPrice.col === planKey
                ) {
                  return (
                    <div className="mt-2">
                      <Link
                        href={`/checkout?title=${encodeURIComponent(
                          selectedFeatureList
                        )}&plan=${encodeURIComponent(
                          planName
                        )}&price=${encodeURIComponent(priceValue)}`}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-700 hover:to-blue-700 text-white text-sm px-4 py-2 rounded-lg shadow-lg inline-block"
                      >
                        Buy Now
                      </Link>
                    </div>
                  );
                }
                return null;
              };

              return (
                <div className="overflow-x-auto">
                  <table className="w-full table-auto border-collapse rounded-md shadow-md overflow-hidden">
                    <thead>
                      <tr>
                        <th className="border px-6 py-3 text-center">
                          Features
                        </th>
                        <th className="border px-6 py-3">
                          Basic{" "}
                          {/* <span className="text-gray-500">({basicCount})</span> */}
                        </th>
                        <th className="border px-6 py-3">
                          Standard{" "}
                          {/* <span className="text-gray-500">
                            ({standardCount})
                          </span> */}
                        </th>
                        <th className="border px-6 py-3">
                          Premium{" "}
                          {/* <span className="text-gray-500">
                            ({premiumCount})
                          </span> */}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {visibleFeatures.map((feature, idx) => {
                        const isBasic = sets.basic.has(feature);
                        const isStandard =
                          isBasic || sets.standard.has(feature);
                        const isPremium =
                          isStandard || sets.premium.has(feature);
                        const isFirstFeature = idx === 0;



                        // Helper to render each plan cell
                        const renderCell = (hasFeature, planKey, planName) => {
                          const planPrice = pricing?.[planKey] || null;

                          if (!hasFeature) return <span>—</span>;

                          const isFirstFeature = idx === 0;

                          if (isFirstFeature && planPrice) {
                            return (
                              <div
                                className="relative flex flex-col items-center"
                                onMouseEnter={() =>
                                  setHoverPrice({
                                    row: idx,
                                    col: planKey,
                                    plan: planName,
                                    price: planPrice,
                                  })
                                }
                                onMouseLeave={() =>
                                  setHoverPrice({
                                    row: null,
                                    col: null,
                                    plan: null,
                                    price: null,
                                  })
                                }
                              >
                                <span className="text-sm text-gray-800">
                                  {planPrice}
                                </span>
                                {renderBuyNow(
                                  planKey,
                                  planName,
                                  planPrice,
                                  idx
                                )}
                              </div>
                            );
                          }

                        return (
                          <span className="flex items-center justify-center m-auto">
                            <Check />
                          </span>
                        );
                        };

                        return (
                          <tr
                            key={idx}
                            className={`border-t border-gray-200 ${
                              idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                            } hover:bg-gray-100`}
                          >
                            <td className="p-4 text-gray-700 font-medium">
                              {feature}
                            </td>

                            {/* Basic */}
                            <td className="p-4 text-center font-bold">
                              {renderCell(isBasic, "basic", "Basic")}
                            </td>

                            {/* Standard */}
                            <td className="p-4 text-center font-bold">
                              {renderCell(isStandard, "standard", "Standard")}
                            </td>

                            {/* Premium */}
                            <td className="p-4 text-center font-bold">
                              {renderCell(isPremium, "premium", "Premium")}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
}
