"use client";
import React from "react";

export default function RBIApprovalForNBFCTakeover() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          When RBI Approval is Mandatory for NBFC Takeover
        </h2>

        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          The Reserve Bank of India maintains strict oversight over NBFC
          ownership and control changes. Prior RBI approval is mandatory in the
          following circumstances:
        </p>

        {/* RBI Prior Approval Required Section */}
        <div
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 mb-10 border-l-4 border-transparent"
          style={{
            borderImage: "linear-gradient(to right, #fb923c, #60a5fa) 1",
          }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            🔐 Situations Requiring RBI Prior Approval:
          </h3>

          <ul className="space-y-4 text-gray-700">
            <li>
              <h4 className="text-lg font-semibold text-green-700">
                Initiation of Takeover:
              </h4>
              <p>
                At the commencement of any NBFC takeover or acquisition process,
                RBI consent must be obtained before proceeding with formal
                negotiations.
              </p>
            </li>
            <li>
              <h4 className="text-lg font-semibold text-green-700">
                Management Changes (30% Directors):
              </h4>
              <p>
                When the takeover results in changes affecting 30% or more of
                the total number of directors on the board, necessitating prior
                regulatory approval.
              </p>
            </li>
            <li>
              <h4 className="text-lg font-semibold text-green-700">
                Shareholding Transfer (26% Capital):
              </h4>
              <p>
                If the transaction involves transfer of 26% or more of the
                paid-up equity capital to new shareholders, RBI permission is
                compulsory before execution.
              </p>
            </li>
            <li>
              <h4 className="text-lg font-semibold text-green-700">
                Change of Control:
              </h4>
              <p>
                Any transaction that results in effective control shifting from
                existing promoters to acquiring entities, regardless of exact
                shareholding percentage.
              </p>
            </li>
          </ul>
        </div>

        {/* RBI Approval Not Required Section */}
        <div
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-l-4 border-transparent"
          style={{
            borderImage: "linear-gradient(to bottom right, #3b82f6, #34d399) 1",
          }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            ✓ RBI Approval Not Required For:
          </h3>

          <ul className="space-y-4 text-gray-700">
            <li>
              <h4 className="text-lg font-semibold text-blue-700">
                Capital Reduction or Buyback:
              </h4>
              <p>
                Reduction in paid-up capital or share buyback programs approved
                by competent courts, as these fall under judicial oversight
                rather than RBI purview.
              </p>
            </li>
            <li>
              <h4 className="text-lg font-semibold text-blue-700">
                Board Member Rotation:
              </h4>
              <p>
                Routine changes in management due to normal rotation of board
                members, including appointment or retirement of independent
                directors as per corporate governance norms.
              </p>
            </li>
            <li>
              <h4 className="text-lg font-semibold text-blue-700">
                Minor Shareholding Changes:
              </h4>
              <p>
                Transfers involving less than 26% of paid-up capital that don't
                result in change of effective control.
              </p>
            </li>
          </ul>
        </div>

        <p className="text-gray-700 text-center max-w-3xl mx-auto mt-10">
          Understanding these regulatory requirements helps structure your NBFC
          takeover transaction appropriately, avoiding delays and ensuring
          smooth RBI approval.
        </p>
      </div>
    </section>
  );
}
