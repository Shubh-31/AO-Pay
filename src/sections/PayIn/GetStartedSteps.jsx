// GetStartedSteps.jsx
export default function GetStartedSteps() {
  const steps = [
    {
      number: "1",
      title: "Sign Up",
      description: "Create your PayIn API account in minutes.",
    },
    {
      number: "2",
      title: "Integrate",
      description: "Use our API docs for quick and seamless integration.",
    },
    {
      number: "3",
      title: "Go Live",
      description: "Start accepting payments immediately.",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-12 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-sm">
      <div className="max-w-5xl mx-auto text-center">
        {/* H3 */}
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Get Started in 3 Simple Steps
        </h3>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-100 rounded-2xl shadow hover:shadow-md transition transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-700 font-bold text-xl rounded-full mb-3">
                  {step.number}
                </div>
                <h4 className="text-xl font-semibold text-indigo-700 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
