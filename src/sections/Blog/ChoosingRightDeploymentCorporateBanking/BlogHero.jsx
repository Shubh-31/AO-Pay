"use client";

import Image from "next/image";
import { useRef } from "react";

export const BlogHero = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="relative overflow-x-clip bg-[radial-gradient(ellipse_120%_90%_at_bottom_left,#f0f4ff,#ffffff)]"
    >
      {/* subtle background glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#001E80]/10 blur-3xl" />

      <div className="container relative z-10 py-12 md:py-16">
        <div className="mx-auto max-w-5xl text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Choosing the Right Deployment Path: Balancing Control and
            Flexibility in Corporate Banking
          </h1>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <span className="h-1.5 w-1.5 rounded-full bg-[#001E80]" />
            <span>
              Authored by{" "}
              <strong className="font-semibold text-gray-800">
                Kushaldeep
              </strong>
              , Digital Marketer at{" "}
              <span className="font-semibold text-[#001E80]">AOPAY</span>
            </span>
          </div>

          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#001E80]/40 to-transparent" />

          <div className="text-lg md:text-xl text-[#010D3E] leading-relaxed tracking-tight space-y-4">
            <p>
              In today’s rapidly evolving financial ecosystem, corporate banking
              technology deployment is no longer just a technical decision—it is
              a strategic one. The deployment model a bank selects directly
              impacts operational efficiency, innovation speed, scalability, and
              long-term business value.
            </p>

            <p>
              Whether banks are launching new corporate banking products,
              modernizing legacy systems, or scaling digital lending operations,
              choosing the right deployment path is critical.
            </p>

            <p>
              Successful transformations begin with a co-authored success
              plan—one that aligns the bank, the technology provider, and
              strategic partners around shared objectives. Without this clarity,
              even well-funded technology initiatives risk delays, cost
              overruns, or underperformance.
            </p>

            <p>
              Understanding the <strong>“why”</strong> behind the deployment
              investment ensures that technology decisions support broader
              business goals rather than operate in isolation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
