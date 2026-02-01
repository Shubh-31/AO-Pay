"use client";

const EdTechPaymentSolutions = () => {
  const benefits = [
    "80% Increase in course enrollment conversion rates with optimized checkout",
    "65% Reduction in payment-related student support queries",
    "90% Faster payment processing for international students",
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Transforming Payment Operations in{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Online Education
            </span>
          </h2>

          {/* Descriptions */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              EdTech industry has experienced unprecedented growth as
              educational institutions, training providers, and content creators
              embrace digital learning platforms. As online education businesses
              scale from individual courses to comprehensive learning
              ecosystems, they face increasing complexity in managing student
              payments, subscription billing, instructor payouts, and global
              market expansion.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Modern educational platforms require sophisticated payment
              infrastructure that can handle diverse pricing models,
              international students, multiple currencies, and varying payment
              preferences while maintaining security and compliance standards.
              AOPAY&apos;s specialized EdTech payment platform addresses these
              unique challenges with purpose-built solutions for the education
              industry.
            </p>
          </div>
        </div>

        {/* Benefits List */}
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, idx) => (
            <li
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex gap-3"
            >
              <div className="mt-1">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-50">
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </span>
              </div>
              <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                {benefit}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EdTechPaymentSolutions;
