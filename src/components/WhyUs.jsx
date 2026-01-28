import { useEffect, useRef } from "react";

function WhySection() {
  const ringsRef = useRef([]);
  const labelsRef = useRef([]);

  useEffect(() => {
    ringsRef.current.forEach((ring, index) => {
      if (!ring) return;

      const duration = 40 + index * 20;
      ring.style.animationDuration = `${duration}s`;

      // counter-rotate labels
      const labels = labelsRef.current[index] || [];
      labels.forEach((label) => {
        label.style.animationDuration = `${duration}s`;
      });
    });
  }, []);

  return (
    <section className="bg-[#CFD9FF] py-24 md:py-32 px-6 overflow-hidden">
      {/* ANIMATIONS */}
      <style>{`
        @keyframes rotate-cw {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes rotate-ccw {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .orbit {
          animation: rotate-cw linear infinite;
        }

        .counter-rotate {
          animation: rotate-ccw linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#111827] mb-12">
            Why Zadynco?
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Quality Execution",
                desc: "We move quickly without compromising quality, helping you launch, test, and scale faster.",
                icon: "⚡",
              },
              {
                title: "Proven Expertise",
                desc: "Our experience across industries helps us deliver strategies that actually perform.",
                icon: "🎯",
              },
              {
                title: "Cost Efficient",
                desc: "We optimize resources and budgets to deliver maximum value and sustainable growth.",
                icon: "💰",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="bg-[#041E8C] text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#111827] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6B7280]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ORBITS */}
        <div className="relative flex items-center justify-center h-[460px]">
          <div className="relative w-[420px] h-[420px]">
            {/* OUTER RING */}
            <div
              ref={(el) => (ringsRef.current[0] = el)}
              className="orbit absolute rounded-full border-[6px] border-white"
              style={{
                width: 420,
                height: 420,
                top: "50%",
                left: "50%",
              }}
            >
              {[
                { text: "BRANDING", pos: "top-[-14px] left-1/2 -translate-x-1/2" },
                { text: "ENGAGEMENT", pos: "right-[-20px] top-1/2 -translate-y-1/2" },
              ].map((item, i) => (
                <span
                  key={i}
                  ref={(el) => {
                    if (!labelsRef.current[0]) labelsRef.current[0] = [];
                    labelsRef.current[0][i] = el;
                  }}
                  className={`counter-rotate absolute ${item.pos} bg-[#FACC15] px-4 py-1 rounded-full text-xs font-bold`}
                >
                  {item.text}
                </span>
              ))}
            </div>

            {/* MIDDLE RING */}
            <div
              ref={(el) => (ringsRef.current[1] = el)}
              className="orbit absolute rounded-full border-[6px] border-white"
              style={{
                width: 300,
                height: 300,
                top: "50%",
                left: "50%",
              }}
            >
              {[
                { text: "ANALYTICS", pos: "left-[-20px] top-1/2 -translate-y-1/2" },
                { text: "SEO", pos: "top-6 left-1/2 -translate-x-1/2" },
              ].map((item, i) => (
                <span
                  key={i}
                  ref={(el) => {
                    if (!labelsRef.current[1]) labelsRef.current[1] = [];
                    labelsRef.current[1][i] = el;
                  }}
                  className={`counter-rotate absolute ${item.pos} bg-[#FACC15] px-4 py-1 rounded-full text-xs font-bold`}
                >
                  {item.text}
                </span>
              ))}
            </div>

            {/* INNER RING */}
            <div
              ref={(el) => (ringsRef.current[2] = el)}
              className="orbit absolute rounded-full border-[6px] border-white"
              style={{
                width: 200,
                height: 200,
                top: "50%",
                left: "50%",
              }}
            >
              <span
                ref={(el) => {
                  if (!labelsRef.current[2]) labelsRef.current[2] = [];
                  labelsRef.current[2][0] = el;
                }}
                className="counter-rotate absolute bottom-[-14px] left-1/2 -translate-x-1/2 bg-[#FACC15] px-4 py-1 rounded-full text-xs font-bold"
              >
                SOCIAL ADS
              </span>
            </div>

            {/* CENTER CORE */}
            <div className="absolute w-24 h-24 bg-[#041E8C] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_40px_rgba(4,30,140,0.6)] flex items-center justify-center">
              <span className="text-white text-sm font-bold">
                ZADYNCO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySection;
