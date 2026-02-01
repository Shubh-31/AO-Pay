"use client";

import React from "react";

export default function NBFCTypeSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          Types of NBFCs You Can Register - Choose Your Category
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          NBFCs in India are categorized based on their ability to accept
          deposits and the nature of their financial activities. Understanding
          these categories helps you choose the right license type for your
          business objectives.
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Deposit Taking NBFCs */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-indigo-600 text-3xl">🏦</span>
              <h4>Deposit-Taking NBFCs (NBFC-D)</h4>
            </h3>
            <p className="text-gray-600 mb-6">
              These NBFCs can accept public deposits and are subject to stricter
              RBI supervision and compliance regulations.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-semibold text-green-600">
                  <h4>Asset Finance Company (AFC):</h4>
                </span>{" "}
                Finances tangible assets such as automobiles, commercial
                vehicles, and machinery.
              </li>
              <li>
                <span className="font-semibold text-green-600">
                  <h4>Core Investment Company (CIC):</h4>
                </span>{" "}
                Acts as a holding entity investing mainly in group company
                securities.
              </li>
              <li>
                <span className="font-semibold text-green-600">
                  <h4>Housing Finance Company (HFC):</h4>
                </span>{" "}
                Provides home loans for purchase, construction, or renovation
                (regulated by NHB).
              </li>
              <li>
                <span className="font-semibold text-green-600">
                  <h4>Micro Finance Institution (MFI):</h4>
                </span>{" "}
                Offers micro-loans to low-income individuals and groups for
                financial inclusion.
              </li>
              <li>
                <span className="font-semibold text-green-600">
                  <h4>Mutual Benefit Finance Company (MBFC):</h4>
                </span>{" "}
                Operates like a cooperative society, lending mainly to members.
              </li>
            </ul>
          </div>

          {/* Non-Deposit Taking NBFCs */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-indigo-600 text-3xl">💼</span>
              Non-Deposit Taking NBFCs (NBFC-ND)
            </h3>
            <p className="text-gray-600 mb-6">
              These NBFCs raise funds through borrowings, equity, or commercial
              papers instead of public deposits.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-semibold text-green-600">
                  <h4>Infrastructure Debt Fund (IDF-NBFC):</h4>
                </span>{" "}
                Refinances existing infrastructure loans via debt securities.
              </li>
              <li>
                <span className="font-semibold text-green-600">
                  <h4>Infrastructure Finance Company (IFC):</h4>
                </span>{" "}
                Provides long-term financing for infrastructure projects like
                roads and power plants.
              </li>
              <li>
                <span className="font-semibold text-green-600">
                  <h4>Investment Company (IC):</h4>
                </span>{" "}
                Engages in financial services, credit facilities, and investment
                advisory.
              </li>
              <li>
                <span className="font-semibold text-green-600">
                  <h4>Loan Company:</h4>
                </span>{" "}
                Offers diverse loan and advance products excluding asset
                purchase financing.
              </li>
              <li>
                <span className="font-semibold text-green-600">
                  <h4>
                    Systemically Important Core Investment Company (CIC-ND-SI):
                  </h4>
                </span>{" "}
                Holds assets of ₹100 crore+ with 90% investments in group
                entities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
