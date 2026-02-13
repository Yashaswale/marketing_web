import { useState } from "react";

const tabs = [
  {
    id: "website",
    label: "Website Design",
    image: "/Images/landing Page/work1.png",
  },
  {
    id: "mobile",
    label: "Mobile App",
    image: "/Images/landing Page/work2.png",
  },
  {
    id: "branding",
    label: "Branding & Logo Design",
    image: "/Images/landing Page/work3.png",
  },
  {
    id: "content",
    label: "Content Creation",
    image: "/Images/landing Page/work4.png",
  },
];

const logoCount = 9;
const logos = Array.from({ length: logoCount }, (_, i) => i + 1);
const marqueeLogos = [...logos, ...logos];

const WorkThatMakesImpact = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <>
      <style>{`
        @keyframes marquee-slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-slide 22s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="bg-gray-50 pt-28 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* TITLE */}
          <h2 className="text-4xl font-bold text-gray-900 mb-10">
            Work That Makes Impact
          </h2>

          {/* TABS */}
          <div className="flex flex-wrap bg-blue-100 rounded-xl p-1 mb-12">
            {tabs.map((tab) => {
              const isActive = activeTab.id === tab.id;
              const isYellowTab = tab.id === "mobile" || tab.id === "content";
              const activeBgClass = isYellowTab
                ? "bg-yellow-400 text-gray-900"
                : "bg-blue-700 text-white";

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-6 py-3 text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? `${activeBgClass} shadow`
                      : "text-blue-900 hover:bg-blue-200"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* IMAGE */}
          <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg">
            <img
              src={activeTab.image}
              alt={activeTab.label}
              className="w-full h-[520px] object-cover transition-opacity duration-500"
            />
          </div>
        </div>

        {/* LOGO STRIP — full bleed, -mx-6 cancels section padding */}
        <div className="mt-8 -mx-6">
          <div className="bg-gray-900 w-full fixed bottom-0 left-0 z-40 lg:static lg:w-full overflow-hidden">
            <div className="relative">
              {/* Left fade */}
              <div
                className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(to right, #111827 0%, transparent 100%)",
                }}
              />
              {/* Right fade */}
              <div
                className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(to left, #111827 0%, transparent 100%)",
                }}
              />

              {/* Scrolling track */}
              <div className="py-5 overflow-hidden">
                <div
                  className="marquee-track flex items-center gap-8 lg:gap-16"
                  style={{ width: "max-content" }}
                >
                  {marqueeLogos.map((n, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center"
                      style={{ minWidth: "80px" }}
                    >
                      <img
                        src={`/Images/landing Page/logo/logo${n}.png`}
                        alt={`logo-${n}`}
                        className="h-6 sm:h-8 md:h-10 lg:h-8 object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkThatMakesImpact;