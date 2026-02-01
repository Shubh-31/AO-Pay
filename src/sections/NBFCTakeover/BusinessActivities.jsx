"use client";
import Image from "next/image";
import React from "react";

export default function BusinessActivities() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Business Activities You Can Conduct After NBFC Takeover
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Once you successfully acquire an NBFC through the takeover process,
          you gain authorization to conduct a comprehensive range of financial
          services under your inherited RBI license:
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 hover:bg-white transition-all duration-300 rounded-2xl shadow-md p-6">
            <Image
              src="/assets/NBFC Takeover/BusinessActivities/Asset Financing.png"
              alt="Asset Financing Icon"
              width={100}
              height={100}
              className="w-6 my-2"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Asset Financing
            </h3>
            <p className="text-gray-700">
              Provide loans for acquisition of vehicles, machinery, equipment,
              and other physical assets.
            </p>
          </div>

          <div className="bg-gray-50 hover:bg-white transition-all duration-300 rounded-2xl shadow-md p-6">
            <Image
              src="/assets/NBFC Takeover/BusinessActivities/Securities Investment.png"
              alt="Securities Investment"
              width={100}
              height={100}
              className="w-6 my-2"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Securities Investment
            </h3>
            <p className="text-gray-700">
              Acquire and trade in shares, debentures, bonds, stocks, and
              government securities.
            </p>
          </div>

          <div className="bg-gray-50 hover:bg-white transition-all duration-300 rounded-2xl shadow-md p-6">
            <Image
              src="/assets/NBFC Takeover/BusinessActivities/Lending Services.png"
              alt="Lending Services"
              width={100}
              height={100}
              className="w-6 my-2"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Lending Services
            </h3>
            <p className="text-gray-700">
              Grant personal loans, business loans, and various types of
              advances to individuals and corporates.
            </p>
          </div>

          <div className="bg-gray-50 hover:bg-white transition-all duration-300 rounded-2xl shadow-md p-6">
            <Image
              src="/assets/NBFC Takeover/BusinessActivities/Commercial Securities Investment.png"
              alt="Commercial Securities Investment"
              width={100}
              height={100}
              className="w-6 my-2"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Commercial Securities Investment
            </h3>
            <p className="text-gray-700">
              Invest in diverse commercial securities and financial instruments.
            </p>
          </div>

          <div className="bg-gray-50 hover:bg-white transition-all duration-300 rounded-2xl shadow-md p-6">
            <Image
              src="/assets/NBFC Takeover/BusinessActivities/Credit Facilities.png"
              alt="Credit Facilities"
              width={100}
              height={100}
              className="w-6 my-2"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Credit Facilities
            </h3>
            <p className="text-gray-700">
              Provide working capital loans, credit lines, and customized credit
              solutions.
            </p>
          </div>

          <div className="bg-gray-50 hover:bg-white transition-all duration-300 rounded-2xl shadow-md p-6">
            <Image
              src="/assets/NBFC Takeover/BusinessActivities/Specialized Financial Services.png"
              alt="Specialized Financial Services"
              width={100}
              height={100}
              className="w-6 my-2"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Specialized Financial Services
            </h3>
            <p className="text-gray-700">
              Offer lease financing, hire purchase, factoring, and other
              specialized products.
            </p>
          </div>
        </div>

        <p className="text-gray-700 text-center mt-12 leading-relaxed max-w-4xl mx-auto">
          The inherited NBFC license allows you to leverage established
          operational frameworks while expanding into new financial services as
          per your business strategy and RBI guidelines.
        </p>
      </div>
    </section>
  );
}
