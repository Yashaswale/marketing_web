import { useEffect, useRef, useState } from 'react';

const TextRevealSection = () => {
  const sectionRef = useRef(null);
  const [revealedLines, setRevealedLines] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            [0, 1, 2, 3].forEach((lineIndex) => {
              setTimeout(() => {
                setRevealedLines((prev) => [...prev, lineIndex]);
              }, lineIndex * 300);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const textLines = [
    { text: 'At Zadynco, we specialize in ', highlight: 'AI', boldIcon: true },
    { text: ' powered digital marketing. Our intelligent approach helps brands grow faster by combining ', highlight: 'data', boldIcon: false },
    { text: ' technology, and ', highlight: 'creative', boldIcon: false },
    { text: ' We build smart strategies that adapt in real time and deliver measurable results.' }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-4xl md:text-5xl leading-relaxed space-y-2">
          {textLines.map((line, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                revealedLines.includes(index)
                  ? 'text-blue-900 opacity-100'
                  : 'text-blue-200 opacity-30'
              }`}
            >
              {line.highlight ? (
                <>
                  <span>{line.text}</span>
                  <span className="inline-flex items-center mx-2 px-4 py-1 bg-blue-900 text-white rounded-full text-2xl font-semibold">
                    {line.highlight}
                  </span>
                </>
              ) : (
                <span>{line.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextRevealSection;
