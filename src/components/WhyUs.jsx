import React from "react";

export default function WhySection() {
  const rings = [
    { 
      items: [
        { type: "text", text: "ANALYTICS" },
        { type: "image", src: "/Images/landing Page/orbit1.png", alt: "Logo 1" },
        { type: "image", src: "/Images/landing Page/orbit2.png", alt: "Logo 2" },
      ], 
      radius: 220, 
      duration: "40s" 
    },
    { 
      items: [
        { type: "text", text: "ENGAGEMENT" },
        { type: "image", src: "/Images/landing Page/orbit3.png", alt: "Logo 3" },
        { type: "text", text: "BRANDING" },
      ], 
      radius: 150, 
      duration: "55s", 
      reverse: true 
    },
  ];

  return (
    <section 
      className="py-12 md:py-24 px-4 md:px-6 overflow-hidden"
      style={{
        backgroundColor: 'rgba(251, 225, 27, 0.2)'
      }}
    >
      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(var(--angle)) translateX(var(--radius)) rotate(calc(var(--angle) * -1));
          }
          to {
            transform: rotate(calc(var(--angle) + 360deg)) translateX(var(--radius)) rotate(calc(var(--angle) * -1 - 360deg));
          }
        }

        @keyframes orbitReverse {
          from {
            transform: rotate(calc(var(--angle) + 360deg)) translateX(var(--radius)) rotate(calc(var(--angle) * -1 - 360deg));
          }
          to {
            transform: rotate(var(--angle)) translateX(var(--radius)) rotate(calc(var(--angle) * -1));
          }
        }

        .orbit {
          animation: orbit var(--duration) linear infinite;
        }

        .orbit-rev {
          animation: orbitReverse var(--duration) linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 md:mb-12">
            Why Zadynco?
          </h2>

          <div className="space-y-4 md:space-y-6">
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
                className="bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="bg-[#041E8C] text-black w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4 text-lg md:text-xl">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#111827] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#6B7280]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PERFECT ORBITS */}
        <div className="relative grid place-items-center h-[320px] sm:h-[400px] md:h-[480px] lg:h-[520px] mt-8 lg:mt-0">

          {/* shared center container */}
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] aspect-square">

            {/* RINGS */}
            {rings.map((ring, rIndex) => (
              <Ring key={rIndex} {...ring} />
            ))}

            {/* CENTER CORE */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#041E8C] rounded-full shadow-[0_0_30px_rgba(4,30,140,0.5)] md:shadow-[0_0_50px_rgba(4,30,140,0.5)] flex items-center justify-center">
                <span className="text-white font-bold tracking-wide text-xs sm:text-sm md:text-base">
                  ZADYNCO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PERFECT CONCENTRIC RING ---------- */
function Ring({ items, radius, duration, reverse }) {
  return (
    <div className="absolute inset-0 grid place-items-center">

      {/* path circle (always centered) - responsive radius */}
      <div
        className="absolute rounded-full border border-yellow-400"
        style={{
          width: `min(${radius * 2}px, ${(radius / 260) * 100}%)`,
          height: `min(${radius * 2}px, ${(radius / 260) * 100}%)`,
        }}
      />

      {items.map((item, i) => {
        const angle = (360 / items.length) * i;

        return (
          <div
            key={i}
            className={reverse ? "orbit-rev absolute" : "orbit absolute"}
            style={{
              "--radius": `min(${radius}px, calc(${(radius / 260) * 50}vw))`,
              "--angle": `${angle}deg`,
              "--duration": duration,
            }}
          >
            {item.type === "image" ? (
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <img 
                  src={item.src} 
                  alt={item.alt || `Logo ${i + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <span className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 text-[10px] sm:text-xs font-semibold bg-yellow-400 rounded-full shadow whitespace-nowrap">
                {item.text}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}