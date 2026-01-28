const ProcessTimeline = ({ title, steps }) => {
  return (
    <section className="py-28 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-24 text-gray-900">
          {title}
        </h2>

        <div className="relative">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-[4px] bg-blue-700 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-28">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 items-center`}
                >
                  {/* LEFT SIDE */}
                  <div
                    className={`${
                      isLeft ? "lg:pr-16 text-right" : "lg:order-2 lg:pl-16"
                    }`}
                  >
                    {isLeft && (
                      <>
                        <span className="inline-block text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-3">
                          Step {step.step}
                        </span>

                        <h3 className="text-xl font-semibold mb-2">
                          {step.title}
                        </h3>

                        <p className="text-gray-600 mb-4">
                          {step.description}
                        </p>

                        <img
                          src={step.image}
                          alt={step.title}
                          className="inline-block rounded-xl"
                        />
                      </>
                    )}
                  </div>

                  {/* DOT */}
                  <div className="hidden lg:flex justify-center relative">
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div
                    className={`${
                      !isLeft ? "lg:pl-16" : "lg:order-1"
                    }`}
                  >
                    {!isLeft && (
                      <>
                        <span className="inline-block text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-3">
                          Step {step.step}
                        </span>

                        <h3 className="text-xl font-semibold mb-2">
                          {step.title}
                        </h3>

                        <p className="text-gray-600 mb-4">
                          {step.description}
                        </p>

                        <img
                          src={step.image}
                          alt={step.title}
                          className="rounded-xl"
                        />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

  
  export default ProcessTimeline;

  
//   //example data 
//   export const webDesignProcessData = {
//     title: "Our Web Design Process",
//     steps: [
//       {
//         step: 1,
//         title: "Understand",
//         description: "Your business, audience, and goals.",
//         image: "/images/process-understand.png",
//       },
//       {
//         step: 2,
//         title: "Plan",
//         description: "Website structure, user flow, and content layout.",
//         image: "/images/process-plan.png",
//       },
//       {
//         step: 3,
//         title: "Design",
//         description: "Clean, modern, and brand-aligned visuals.",
//         image: "/images/process-design.png",
//       },
//       {
//         step: 4,
//         title: "Review & Refine",
//         description: "Feedback-based improvements.",
//         image: "/images/process-review.png",
//       },
//       {
//         step: 5,
//         title: "Deliver",
//         description: "Launch-ready, developer-friendly designs.",
//         image: "/images/process-deliver.png",
//       },
//     ],
//   };