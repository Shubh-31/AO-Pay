import React from "react";

export const BlogFinal = () => {
  return (
    <section className="p-4 bg-[radial-gradient(ellipse_100%_80%_at_bottom_left,#f0f4ff,#ffffff)] overflow-x-clip">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="md:text-4xl lg:text-5xl sm:text-3xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 capitalize pb-2">
            Final Thoughts
          </h2>
          <p className="text-lg text-[#010D3E] tracking-loose mt-12">
            <a
              href="/"
              className="underline font-semibold"
            >
              AOPAY
            </a>{" "}
            offers a full spectrum of corporate banking deployment options, but
            the most impactful results occur when deployment is approached as a
            strategic partnership. By aligning goals, sharing risk, and
            co-authoring a success roadmap, banks can transform deployment from
            a technical task into a catalyst for innovation and growth.
          </p>
          <p className="text-lg text-[#010D3E] tracking-loose mt-12">
            This is not just about technology—it’s about building resilient,
            future-ready corporate banking institutions. Whether banks choose to
            deploy independently, collaborate, or fully outsource, success
            begins with clarity, trust, and a commitment to long-term value
            creation.
          </p>
        </div>
      </div>
    </section>
  );
};
