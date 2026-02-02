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
      className="py-24 px-6 overflow-hidden"
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

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
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
                <div className="bg-[#041E8C] text-black w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl">
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

        {/* RIGHT PERFECT ORBITS */}
        <div className="relative grid place-items-center h-[520px]">

          {/* shared center container */}
          <div className="relative w-[clamp(300px,70vw,520px)] aspect-square">

            {/* RINGS */}
            {rings.map((ring, rIndex) => (
              <Ring key={rIndex} {...ring} />
            ))}

            {/* CENTER CORE */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-28 h-28 bg-[#041E8C] rounded-full shadow-[0_0_50px_rgba(4,30,140,0.5)] flex items-center justify-center">
                <span className="text-white font-bold tracking-wide">
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

      {/* path circle (always centered) */}
      <div
        className="absolute rounded-full border border-yellow-400"
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
      />

      {items.map((item, i) => {
        const angle = (360 / items.length) * i;

        return (
          <div
            key={i}
            className={reverse ? "orbit-rev absolute" : "orbit absolute"}
            style={{
              "--radius": `${radius}px`,
              "--angle": `${angle}deg`,
              "--duration": duration,
            }}
          >
            {item.type === "image" ? (
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src={item.src} 
                  alt={item.alt || `Logo ${i + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <span className="px-4 py-2 text-xs font-semibold bg-yellow-400 rounded-full shadow whitespace-nowrap">
                {item.text}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
