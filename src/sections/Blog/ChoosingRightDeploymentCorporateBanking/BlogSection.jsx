"use client";

export const BlogSection = () => {
  return (
    <section className="relative py-16 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#f0f4ff,#ffffff_100%)]">
      {/* subtle background accent */}
      <div className="absolute top-0 right-0 h-72 w-72 bg-[#001E80]/10 blur-3xl rounded-full" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent">
            3 Deployment Models in Corporate Banking: From Control to
            Partnership
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            AOPAY’s{" "}
            <a
              href="/corporate-lending-management-solutions"
              className="font-semibold underline decoration-[#001E80]/40 underline-offset-4"
            >
              Corporate Banking Solutions
            </a>{" "}
            are designed to support banks across a spectrum of deployment
            models. Each model offers a different balance of control,
            flexibility, cost, and risk—allowing institutions to choose what
            best aligns with their capabilities and strategy.
          </p>
        </div>

        {/* Deployment Models */}
        <div className="mx-auto mt-14 max-w-5xl space-y-10">
          {/* Model 1 */}
          <div className="relative rounded-2xl bg-white/80 backdrop-blur border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8">
            <div className="absolute -left-4 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#001E80] text-white font-bold shadow-md">
              1
            </div>

            <h3 className="text-2xl font-semibold text-[#001E80] mb-4">
              Do It Yourself: Full Autonomy, Higher Responsibility
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Do It Yourself model is best suited for banks with highly skilled
              internal IT teams and a strong preference for operational control.
              Deployments are typically on-premises or hosted within private
              cloud environments, allowing deep customization and smooth
              integration with existing banking systems.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              While this model offers maximum autonomy, it also introduces
              higher operational complexity. Banks are responsible for
              infrastructure management, staffing, upgrades, security, and
              long-term maintenance. Although initial costs may appear lower,
              the total cost of ownership (TCO) can increase over time due to
              scaling, compliance, and support requirements.
            </p>
          </div>

          {/* Model 2 */}
          <div className="relative rounded-2xl bg-white/80 backdrop-blur border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8">
            <div className="absolute -left-4 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#001E80] text-white font-bold shadow-md">
              2
            </div>

            <h3 className="text-2xl font-semibold text-[#001E80] mb-4">
              Do It Together: A Balanced Strategic Partnership
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Do It Together model is the most commonly adopted approach by
              AOPAY’s corporate banking clients. It combines software with
              expert advisory services, implementation support, customer success
              programs, and ongoing technical assistance.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              This hybrid deployment model allows banks to retain strategic
              control while benefiting from AOPAY’s domain expertise and shared
              accountability. It reduces risk, improves time-to-market, and
              supports scalable growth—making it ideal for institutions seeking
              flexibility without carrying the full burden of deployment.
            </p>
          </div>

          {/* Model 3 */}
          <div className="relative rounded-2xl bg-white/80 backdrop-blur border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8">
            <div className="absolute -left-4 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#001E80] text-white font-bold shadow-md">
              3
            </div>

            <h3 className="text-2xl font-semibold text-[#001E80] mb-4">
              We Do It For You: Fully Managed Cloud Services
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At the far end of the deployment spectrum is the fully managed
              cloud model, delivered through AOPAY’s Lending Cloud Service
              (LCS). In this model, AOPAY manages the platform end-to-end,
              including infrastructure, updates, security, and operational
              performance.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              This approach allows rapid deployment, high availability, and
              continuous access to the latest features. It significantly reduces
              internal resource requirements and operational risk, allowing
              banks to focus on outcomes rather than infrastructure. While
              customization is more standardized, the trade-off is a highly
              resilient, secure, and innovation-ready environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
