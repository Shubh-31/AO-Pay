"use client";
import React from "react";

export default function KeyPlayers() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Understanding How NBFC Takeover Works - Key Players
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          NBFC takeover process involves two primary entities working through a
          structured acquisition framework:
        </p>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Target Company */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 relative overflow-hidden">
            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-blue-400 rounded-t-2xl"></div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-2">
              🎯 Target Company
            </h3>
            <p className="text-gray-700 mb-4">
              The existing RBI-registered NBFC being acquired.
            </p>
            <h4 className="text-lg font-semibold text-green-700 mb-2">
              Characteristics:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Holds valid CoR from RBI</li>
              <li>• Operating financial business</li>
              <li>• Has existing shareholders</li>
              <li>• Possesses market standing</li>
              <li>• May have customer base</li>
            </ul>
          </div>

          {/* Acquirer Company */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 relative overflow-hidden">
            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-blue-400 rounded-t-2xl"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              🏢 Acquirer Company
            </h3>
            <p className="text-gray-700 mb-4">
              The entity purchasing the target NBFC.
            </p>
            <h4 className="text-lg font-semibold text-green-700 mb-2">
              Requirements:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Financial capability to acquire</li>
              <li>• Meets RBI fit & proper criteria</li>
              <li>• Minimum NOF requirements</li>
              <li>• Clear business objectives</li>
              <li>• Compliance readiness</li>
            </ul>
          </div>

          {/* How the Acquisition Works */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 relative overflow-hidden">
            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-blue-400 rounded-t-2xl"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              📋 How the Acquisition Works
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The acquirer company purchases shares from existing shareholders
              of the target NBFC following due regulatory procedures. Upon
              successful completion, the acquiring entity gains control of the
              target company along with its pre-existing RBI registration,
              operational licenses, market reputation, and business
              infrastructure. This transfer of ownership and control must comply
              with RBI guidelines and statutory requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
