import { useEffect, useRef, useState } from "react";

const TextRevealSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const content = [
    { text: "At Zadynco, we specialize in AI-powered ", type: "text" },
    { type: "badge", image: "/Images/about4.png" },
    { text: "Our intelligent approach helps brands grow faster by combining Data", type: "text" },
    { type: "badge", image: "/Images/about1.png" },
    { text: "technology and", type: "text" },
    { type: "badge", image: "/Images/about2.png" },
    { text: "creative strategies that adapt in real time and deliver measurable results.", type: "text" },
  ];

  const marqueeItems = [
    "Local SEO",
    "App Design",
    "Personal Brand Content",
    "E-Commerce Ads",
    "Analytics Strategy",
  ];

  /* -----------------------------
     Split words smoothly
  ----------------------------- */
  const words = content.flatMap((item) => {
    if (item.type === "badge") return [item];
    return item.text.split(" ").map((w) => ({ text: w, type: "text" }));
  });

  /* -----------------------------
     Smooth reveal using IntersectionObserver
  ----------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  /* -----------------------------
     Components
  ----------------------------- */
  const Badge = ({ image, delay }) => (
    <span
      className={`
        inline-flex items-center mx-2 align-middle
        transition-all duration-700 ease-out
        ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5"}
      `}
      style={{ transitionDelay: delay }}
    >
      <img
        src={image}
        alt=""
        className="
          h-[1.1em]        /* matches text height */
          w-auto           /* wider naturally */
          rounded-full
          shadow-md
          object-cover
        "
      />
    </span>
  );


  /* -----------------------------
     UI
  ----------------------------- */

  return (
    <>
      <section
        ref={sectionRef}
        className="pt-28 pb-0 px-6 relative"
        style={{
          minHeight: "90vh",
          background:
            "linear-gradient(180deg, rgba(251,225,27,0.25) 0%, rgba(255,255,255,0.25) 100%)",
        }}
      >

        {/* About us badge - centered */}
        <div className="flex justify-center  m-2 sm:m-4 md:m-8">
          <div className="inline-flex items-center gap-2 bg-[#1a1f5c] text-white px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            <span className="text-xl sm:text-3xl font-medium">About us</span>
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-center">

          <p
            className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              leading-relaxed
              font-medium
              text-[#1a1f5c]
            "
          >
            {words.map((word, i) =>
              word.type === "badge" ? (
                <Badge key={i} image={word.image} delay={`${i * 40}ms`} />
              ) : (
                <span
                  key={i}
                  className={`
                    inline-block mx-[3px]
                    transition-all duration-700 ease-out
                    ${isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"}
                  `}
                  style={{
                    transitionDelay: `${i * 40}ms`,
                  }}
                >
                  {word.text}
                </span>
              )
            )}
          </p>
        </div>
      </section>

      {/* -----------------------------
          Marquee
      ----------------------------- */}

      <div className="w-full bg-[#1a1a1a] py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center">
              {marqueeItems.map((item, index) => (
                <span
                  key={index}
                  className="mx-10 text-yellow-400 text-lg md:text-xl font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33%);
          }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </>
  );
};

export default TextRevealSection;
