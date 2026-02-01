import React from "react";
import Link from "next/link";

const BlogContent = () => {
  return (
    <section className="py-12 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#f0f4ff,#ffffff_100%)]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-8xl mx-auto mb-12">
          <h2 className="w-full text-4xl sm:text-2xl md:text-4xl lg:text-5xl text-center leading-tight font-semibold bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-8 pb-2">
            Strategic Factors Influencing Deployment Decisions
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto space-y-6">
          <p className="section-description text-xl leading-relaxed">
            Corporate banking deployment strategies are shaped by multiple
            factors, including existing architecture, regulatory requirements,
            risk appetite, and long-term digital transformation goals. While
            many banks are accelerating cloud adoption, others prefer hybrid or
            on-premise models that evolve over time.
          </p>

          <p className="section-description text-xl leading-relaxed">
            As institutions move from self-managed to fully managed deployments,
            standardization often increases—but flexibility does not disappear.
            AOPAY’s corporate banking solutions remain highly configurable,
            ensuring banks can meet unique business and regulatory requirements
            across all deployment models.
          </p>

          <p className="section-description text-xl leading-relaxed">
            Ultimately, deployment is not just about implementing software—it’s
            about delivering strategic value. AOPAY’s success is directly tied
            to customer outcomes, which is why we emphasize long-term
            partnerships over transactional engagements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
