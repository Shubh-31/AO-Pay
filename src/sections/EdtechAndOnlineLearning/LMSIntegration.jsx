"use client";

const LMSIntegration = () => {
  const integrations = [
    {
      name: "Moodle Integration",
      description:
        "Seamless payment processing for course enrollments and certifications",
    },
    {
      name: "Canvas Connectivity",
      description: "Automated payment and enrollment synchronization",
    },
    {
      name: "Blackboard Integration",
      description: "Unified payment and learning management experience",
    },
    {
      name: "Custom LMS Support",
      description: "Flexible integration with proprietary learning platforms",
    },
    {
      name: "Student Information Systems",
      description: "Direct connection with academic record management",
    },
    {
      name: "Video Platform Integration",
      description: "Payment-gated access to live and recorded content",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Easy Learning Management System Integration
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Connect AOPAY with popular learning management systems and educational
          platforms to create unified payment experiences that synchronize
          enrollment, course access, and student progress tracking.
        </p>

        {/* Integration Capabilities */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            LMS Integration Capabilities:
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {integrations.map((item, idx) => (
              <li key={idx}>
                <span className="font-medium">{item.name}:</span>{" "}
                {item.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LMSIntegration;
