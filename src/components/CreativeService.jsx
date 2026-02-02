import { useEffect, useRef, useState } from "react";
import { Check, ArrowRight } from "lucide-react";

/* =========================
   CONFIG
========================= */

const CARD_HEIGHT = 520;
const STACK_GAP = 28;
const FLIP_ANGLE = 95; // >90 ensures full disappearance
const SCROLL_STEP = CARD_HEIGHT * 0.9;

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

/* =========================
   DATA
========================= */

const services = [
  {
    id: 1,
    title: "SEO",
    description:
      "We optimize your website to rank higher on search engines, attract the right audience, and drive consistent organic traffic that converts over time.",
    features: [
      "SEO Audit",
      "Keyword Research",
      "Technical SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Local SEO",
      "Performance Tracking",
      "Content Optimization",
      "Competitor Analysis",
      "SEO Reporting & Insights",
    ],
    image: "/Images/landing%20Page/services1.png",
    color: "bg-[#D9822B]",
  },
  {
    id: 2,
    title: "Design",
    description:
      "Beautiful, conversion-focused designs that capture attention and drive engagement across all platforms and devices.",
    features: [
      "UI/UX Design",
      "Brand Identity",
      "Web Design",
      "Mobile Design",
      "Graphic Design",
      "Prototyping",
    ],
    image: "/Images/landing%20Page/services4.png",
    color: "bg-[#F26A4B]",
  },
  {
    id: 3,
    title: "Content",
    description:
      "Compelling content that tells your story, engages your audience, and drives meaningful actions.",
    features: [
      "Content Strategy",
      "Copywriting",
      "Blog Posts",
      "Social Media Content",
      "Video Scripts",
      "Email Campaigns",
    ],
    image: "/Images/landing%20Page/services3.png",
    color: "bg-[#1FA2A6]",
  },
  {
    id: 4,
    title: "Ads",
    description:
      "Data-driven advertising campaigns that reach the right people at the right time with maximum ROI.",
    features: [
      "Google Ads",
      "Facebook Ads",
      "Instagram Ads",
      "LinkedIn Ads",
      "Retargeting",
      "Campaign Optimization",
    ],
    image: "/Images/landing%20Page/services2.png",
    color: "bg-[#001A85]",
  },
  {
    id: 5,
    title: "Analytics",
    description:
      "Deep insights and actionable data to understand your audience and optimize every aspect of your marketing.",
    features: [
      "Google Analytics",
      "Data Tracking",
      "Conversion Tracking",
      "Performance Reports",
      "A/B Testing",
      "ROI Analysis",
    ],
    image: "/Images/landing%20Page/services5.png",
    color: "bg-[#D9822B]",
  },
];

/* =========================
   COMPONENT
========================= */

const CreativeServicesSection = () => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setScrollY(Math.max(0, -rect.top));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // EXACT scroll height — no extra slack
  const totalHeight = SCROLL_STEP * (services.length + 1);

  return (
    <>
      {/* HEADING SECTION */}
      <div className="bg-white pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 text-left">
            Creative services built for impact and scale
          </h2>
        </div>
      </div>

      {/* SCROLL ANIMATION SECTION */}
      <section
        ref={sectionRef}
        className="relative bg-white py-7"
        style={{ height: `${totalHeight}px` }}
      >
        {/* STICKY VIEWPORT */}
        <div className="sticky top-0 h-screen flex items-center justify-center px-4">
          <div
            className="relative w-full max-w-6xl h-[520px]"
            style={{ perspective: "1600px" }}
          >
            {services.map((service, index) => {
              const start = index * SCROLL_STEP;
              const rawProgress = (scrollY - start) / SCROLL_STEP;
              const progress = clamp(rawProgress, 0, 1);

              const isGone = progress >= 1;

              const rotateX = -progress * FLIP_ANGLE;
              const translateY =
                progress * 180 + index * STACK_GAP;

              return (
                <div
                  key={service.id}
                  className="absolute inset-0"
                  style={{
                    transform: isGone
                      ? "translateY(1200px)"
                      : `
                        translateY(${translateY}px)
                        rotateX(${rotateX}deg)
                      `,
                    opacity: isGone ? 0 : 1 - progress * 0.9,
                    visibility: isGone ? "hidden" : "visible",
                    pointerEvents: isGone ? "none" : "auto",
                    zIndex: services.length - index,
                    transformOrigin: "top center",
                    transformStyle: "preserve-3d",
                    transition:
                      "transform 0.18s linear, opacity 0.18s linear",
                  }}
                >
                  <div
                    className={`${service.color} h-full w-full rounded-3xl p-8 sm:p-10 text-white shadow-2xl`}
                  >
                    <div className="flex flex-col lg:flex-row gap-6 h-full">
                      {/* LEFT CONTENT */}
                      <div className="flex-1">
                        <div className="flex justify-between mb-4">
                          <h3 className="text-3xl sm:text-4xl font-bold">
                            {service.title}
                          </h3>
                          <span className="text-5xl opacity-40">
                            ({String(service.id).padStart(2, "0")})
                          </span>
                        </div>

                        <p className="mb-6 opacity-90">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                          {service.features.map((f, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2"
                            >
                              <Check size={16} />
                              {f}
                            </div>
                          ))}
                        </div>

                        <button 
                          onClick={() => {
                            if (window.location.pathname === '/') {
                              const contactSection = document.getElementById('contact');
                              if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                              }
                            } else {
                              window.location.href = '/#contact';
                            }
                          }}
                          className="flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full hover:bg-white/30 transition"
                        >
                          Learn More <ArrowRight size={16} />
                        </button>
                      </div>

                      {/* RIGHT IMAGE */}
                      <div className="flex-1 hidden lg:block">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeServicesSection;
