import { useEffect, useRef, useState } from "react";

const TextRevealSection = () => {
  const sectionRef = useRef(null);
  const [revealedLines, setRevealedLines] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          [0, 1, 2, 3, 4].forEach((i) => {
            setTimeout(() => {
              setRevealedLines((prev) => [...prev, i]);
            }, i * 250);
          });
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const textLines = [
    { text: "At Zadynco, we specialize in", highlight: "AI" },
    { text: "powered", highlight: "digital marketing" },
    {
      text: "Our intelligent approach helps brands grow faster by combining",
      highlight: "data",
    },
    { text: "technology, and", highlight: "creative" },
    {
      text: "We build smart strategies that adapt in real time and deliver measurable results.",
    },
  ];

  /* ✅ Simple constant highlight (NO animation) */
  const Highlight = ({ children }) => (
    <span
      className="
        inline-block
        bg-yellow-300/70
        px-2
        rounded-sm
        font-semibold
      "
    >
      {children}
    </span>
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="
            mx-auto
            max-w-5xl
            text-center
            text-gray-800

            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            leading-relaxed md:leading-[1.6]
            tracking-tight
          "
          style={{ textWrap: "balance" }}
        >
          {textLines.map((line, index) => {
            const revealed = revealedLines.includes(index);

            return (
              <span
                key={index}
                className={`
                  inline
                  transition-all duration-700
                  ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
              >
                {line.text}{" "}
                {line.highlight && <Highlight>{line.highlight}</Highlight>}{" "}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default TextRevealSection;
