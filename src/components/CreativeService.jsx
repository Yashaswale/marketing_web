import { useEffect, useRef, useState } from "react";
import { Check, ArrowRight } from "lucide-react";

/* =========================
   CONFIG
========================= */

const CARD_HEIGHT = 520;
const STACK_OFFSET = 20; // Vertical offset for stacked cards
const SCALE_STEP = 0.05; // How much smaller each card in the stack appears
const SCROLL_STEP = 600; // Scroll distance to move one card

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
    title: "Ads",
    description:
      "We create and manage paid advertising campaigns across search and social platforms to reach the right users and maximize return on ad spend.",
    features: [
      "Campaign Strategy",
      "Audience Targeting",
      "Ad Creatives",
      "Platform Management",
      "Budget Optimization",
      "Retargeting",
      "A/B Testing",
      "Conversion Tracking",
      "Performance Optimization",
      "Reporting & Insights",
    ],
    image: "/Images/landing%20Page/services2.png",
    color: "bg-[#001A85]",
  },

  {
    id: 3,
    title: "Content",
    description:
      "We craft purposeful content that informs your audience and builds lasting trust. Every piece supports users from first discovery to confident decision.",
    features: [
      "Content Strategy",
      "Content Planning",
      "Content Creation",
      "Visual Content",
      "Short-Form Content",
      "Content Optimization",
      "Brand Storytelling",
      "Content Distribution",
      "Performance Tracking",
      "Reporting & Insights",
    ],
    image: "/Images/landing%20Page/services3.png",
    color: "bg-[#1FA2A6]",
  },

  {
    id: 4,
    title: "Design",
    description:
      "We optimize your website to rank higher on search engines, attract the right audience, and drive consistent organic traffic that converts over time.",
    features: [
      "Brand Identity",
      "UI/UX Design",
      "Web Design",
      "App Design",
      "Landing Pages",
      "Visual Design",
      "Design Systems",
      "Prototyping",
      "UX Testing",
      "Design Optimization",
    ],
    image: "/Images/landing%20Page/services4.png",
    color: "bg-[#F26A4B]",
  },

  {
    id: 5,
    title: "Analytics",
    description:
      "We track performance across all marketing channels and analyze the data. This helps us identify insights and continuously improve campaign results.",
    features: [
      "Data Tracking",
      "Dashboards",
      "User Behavior",
      "Conversion Tracking",
      "Funnel Analysis",
      "Reporting",
      "Data Visualization",
      "Insights",
      "AI Analysis",
      "Optimization",
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

  // Total scroll height
  const totalHeight = SCROLL_STEP * services.length;

  return (
    <div
      style={{
        // Gradient from bottom (yellow) to top (white)
        background: 'linear-gradient(0deg, rgba(251, 225, 27, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%)'
      }}>

      {/* About us badge - centered */}
      <div className="flex justify-center  m-2 sm:m-4 md:m-8 pt-8">
        <div className="inline-flex items-center gap-2 bg-[#1a1f5c] text-white px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          <span className="text-xl sm:text-2xl font-medium">Our Services</span>
        </div>
      </div>
      {/* HEADING SECTION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-2 sm:pt-8 md:pt-4 lg:pt-8">
        <h2
          className="
          text-xl sm:text-4xl md:text-5xl lg:text-5xl
          font-bold
          text-center
          text-gray-900
          leading-tight
        "
        >
          Creative services built for impact and scale
        </h2>
      </div>

      {/* SCROLL ANIMATION SECTION */}
      <section
        ref={sectionRef}
        className="relative pb-8"
        style={{ height: `${totalHeight}px` }}
      >
        {/* STICKY VIEWPORT */}
        <div className="sticky top-0 h-screen flex items-center justify-center px-4 sm:px-6">
          <div className="relative w-full max-w-6xl h-[380px] sm:h-[420px] md:h-[480px] lg:h-[520px]">
            {services.map((service, index) => {
              // Calculate progress for this card
              const start = index * SCROLL_STEP;
              const end = start + SCROLL_STEP;
              const rawProgress = (scrollY - start) / SCROLL_STEP;
              const progress = clamp(rawProgress, 0, 1);

              // Calculate how many cards are "ahead" (not yet scrolled away)
              const cardsAhead = services.length - index - 1;

              // Position in stack (0 = top card currently showing)
              const stackPosition = Math.max(0, cardsAhead - Math.floor(scrollY / SCROLL_STEP));

              // Calculate transforms
              const isActive = scrollY >= start && scrollY < end;
              const isPast = scrollY >= end;

              let translateY, scale, opacity;

              if (isPast) {
                // Card has scrolled away - move it far up
                translateY = -800;
                scale = 0.8;
                opacity = 0;
              } else if (isActive) {
                // Currently active card - moving away
                translateY = -progress * 800;
                scale = 1 - progress * 0.2;
                opacity = 1 - progress;
              } else {
                // Cards waiting in stack
                const positionInStack = index - Math.floor(scrollY / SCROLL_STEP);
                translateY = positionInStack * STACK_OFFSET;
                scale = 1 - (positionInStack * SCALE_STEP);
                opacity = 1;
              }

              return (
                <div
                  key={service.id}
                  className="absolute inset-0"
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: services.length - index,
                    transformOrigin: "center center",
                    transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
                    pointerEvents: isPast ? "none" : "auto",
                  }}
                >
                  <div
                    className={`${service.color} h-full w-full rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 text-white shadow-2xl`}
                  >
                    <div className="flex flex-col lg:flex-row gap-3 sm:gap-6 h-full">
                      {/* LEFT CONTENT */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2 sm:mb-4">
                          <h3 className="text-xl sm:text-3xl md:text-4xl font-bold">
                            {service.title}
                          </h3>
                          <span className="text-2xl sm:text-4xl md:text-5xl opacity-40 ml-2">
                            ({String(service.id).padStart(2, "0")})
                          </span>
                        </div>

                        <p className="mb-2 sm:mb-4 md:mb-6 opacity-90 text-xs sm:text-base leading-snug sm:leading-normal">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3 mb-2 sm:mb-4 md:mb-6 text-[10px] sm:text-sm flex-grow overflow-y-auto">
                          {service.features.map((f, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-1.5 sm:gap-2"
                            >
                              <Check size={12} className="sm:w-4 sm:h-4 flex-shrink-0" />
                              <span>{f}</span>
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
                          className="flex items-center gap-1.5 sm:gap-2 bg-white/20 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-white/30 transition text-xs sm:text-base w-fit"
                        >
                          Learn More <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                        </button>
                      </div>

                      {/* RIGHT IMAGE - Hidden on mobile */}
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
    </div>
  );
};

export default CreativeServicesSection;