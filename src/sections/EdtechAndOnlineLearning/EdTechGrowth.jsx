"use client";

const EdTechGrowth = () => {
  const solutions = [
    {
      name: "Content Expansion",
      description: "Add new courses, programs, and learning formats seamlessly",
    },
    {
      name: "Global Market Entry",
      description:
        "Expand to new countries with localized payment and compliance",
    },
    {
      name: "Student Volume Scaling",
      description: "Handle thousands of concurrent enrollments and payments",
    },
    {
      name: "Business Model Evolution",
      description:
        "Adapt from individual courses to subscriptions and institutional sales",
    },
    {
      name: "Technology Integration",
      description: "Connect with emerging EdTech tools and platforms",
    },
    {
      name: "Regulatory Adaptation",
      description:
        "Stay compliant with evolving education and payment regulations",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* H2 */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Scale Your Educational Platform with Industry Growth
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          As the EdTech industry continues expanding with new learning
          modalities and global reach, AOPAY's platform evolves with your
          business, supporting growth from individual courses to comprehensive
          educational ecosystems without requiring infrastructure overhauls.
        </p>

        {/* Growth-Ready Solutions */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Growth-Ready EdTech Solutions:
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {solutions.map((item, idx) => (
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

export default EdTechGrowth;
