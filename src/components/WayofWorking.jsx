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
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisible((prev) =>
                prev.includes(i) ? prev : [...prev, i]
              );
            }, i * 160);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const Card = ({ step, index }) => (
    <div
      className={`transition-all duration-700 ease-out ${
        visible.includes(index)
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <div className="bg-white rounded-2xl p-8 shadow-xl h-full">
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 bg-blue-100 rounded-xl text-blue-900">
            {step.icon}
          </div>
          <span className="text-sm font-semibold text-gray-900">
            {step.number}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {step.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#041E8C] py-28 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#041E8C] via-[#0628B5] to-[#041E8C]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-12">
            {/* First Card */}
            <Card step={steps[0]} index={0} />

            {/* Text below */}
            <h2 className="text-5xl font-bold text-white leading-tight">
              Let’s Get
              <br />
              Started
            </h2>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {steps.slice(1).map((step, i) => (
              <Card
                key={step.id}
                step={step}
                index={i + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WayOfWorkingSection;
