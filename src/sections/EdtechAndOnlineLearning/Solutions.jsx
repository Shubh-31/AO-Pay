"use client";

const Solutions = () => {
  const solutions = [
    {
      imgSrc:
        "/assets/EdtechAndOnlineLearning/Tailored Solutions for Every Educational Business Model/Small-Scale Online Educators.png",
      title: "Small-Scale Online Educators",
      description:
        "Individual instructors and small course creators benefit from simple, cost-effective payment solutions that enable immediate course monetization. Our payment gateway facilitates quick setup for selling courses, webinars, and digital educational content without complex technical requirements. Payment links and mobile-optimized checkout processes help solo educators reach students globally while maintaining professional payment experiences that build trust and credibility.",
    },
    {
      imgSrc:
        "/assets/EdtechAndOnlineLearning/Tailored Solutions for Every Educational Business Model/Mid-Scale EdTech Platforms.png",
      title: "Mid-Scale EdTech Platforms",
      description:
        "Growing educational platforms and training companies require scalable payment infrastructure that supports diverse learning products and pricing models. Our comprehensive solution handles subscription management for learning platforms, corporate training programs, and certification courses. Advanced analytics provide insights into student payment behavior, course performance, and revenue optimization opportunities while automated billing reduces administrative overhead.",
    },
    {
      imgSrc:
        "/assets/EdtechAndOnlineLearning/Tailored Solutions for Every Educational Business Model/Large-Scale Educational Institutions.png",
      title: "Large-Scale Educational Institutions",
      description:
        "Universities, colleges, and enterprise training organizations need secure payment systems that handle high transaction volumes, international students, and complex fee structures. Our platform supports tuition payments, course fees, certification programs, and ancillary services with advanced security and compliance features. Integration capabilities with existing learning management systems and student information systems ensure seamless operations across all institutional functions.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Tailored Solutions for Every Educational Business Model
        </h2>

        {/* Solutions */}
        <div className="space-y-10">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="space-y-4 border border-gray-200 p-4 rounded-md shadow-md hover:shadow-lg"
            >
              {/* Icon + Title in one line */}
              <div className="flex items-center gap-3">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-6 h-auto"
                />
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
