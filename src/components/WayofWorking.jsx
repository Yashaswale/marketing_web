import { useEffect, useRef, useState } from "react";
import {
  HelpCircle,
  BarChart3,
  Target,
  Settings,
  Rocket,
} from "lucide-react";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, goals, audience, and challenges. This sets a strong foundation for the right strategy.",
    icon: <HelpCircle size={22} />,
  },
  {
    id: 2,
    number: "02",
    title: "Analyze",
    description:
      "We study market data, competitors, and user behavior. Insights help us identify what will work best for your brand.",
    icon: <BarChart3 size={22} />,
  },
  {
    id: 3,
    number: "03",
    title: "Strategize",
    description:
      "We create a focused marketing plan using data and AI insights. Every action is aligned with measurable outcomes.",
    icon: <Target size={22} />,
  },
  {
    id: 4,
    number: "04",
    title: "Execute",
    description:
      "We launch campaigns, content, and creatives across the right channels. Execution is optimized for performance from the start.",
    icon: <Settings size={22} />,
  },
  {
    id: 5,
    number: "05",
    title: "Optimize",
    description:
      "We track results, test improvements, and refine continuously. Your marketing grows smarter and more effective over time.",
    icon: <Rocket size={22} />,
  },
];

const WayOfWorkingSection = () => {
  const sectionRef = useRef(null);
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animations one by one
          steps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleIndex(index);
            }, index * 200); // 200ms delay between each card
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const Card = ({ step, index }) => {
    const isVisible = visibleIndex >= index;
    
    return (
      <div
        className={`transform transition-all duration-700 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-8 opacity-0 scale-95"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-blue-100 rounded-xl text-blue-900 transition-transform duration-300 hover:scale-110">
              {step.icon}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-900">
              {step.number}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
            {step.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#041E8C] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#041E8C] via-[#0628B5] to-[#041E8C]" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* MOBILE & TABLET: Text first, then all cards in single column */}
        <div className="lg:hidden space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Let's Get Started
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:gap-6">
            {steps.map((step, i) => (
              <Card key={step.id} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* DESKTOP: Original asymmetric layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_2fr] gap-12 xl:gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-12">
            {/* First Card */}
            <Card step={steps[0]} index={0} />

            {/* Heading below first card */}
            <div
              className={`transform transition-all duration-700 ${
                visibleIndex >= 0
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: "200ms",
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <h2 className="text-5xl xl:text-6xl font-bold text-white leading-tight">
                Let's Get
                <br />
                Started
              </h2>
            </div>
          </div>

          {/* RIGHT COLUMN - 2x2 grid */}
          <div className="grid grid-cols-2 gap-6 xl:gap-8">
            {steps.slice(1).map((step, i) => (
              <Card key={step.id} step={step} index={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WayOfWorkingSection;