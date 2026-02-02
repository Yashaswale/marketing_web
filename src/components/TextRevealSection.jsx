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
    { text: ' powered digital marketing. Our intelligent approach helps brands grow faster by combining data ', highlight: 'data', boldIcon: false },
    { text: ' technology, and ', highlight: 'creative', boldIcon: false },
    { text: ' We build smart strategies that adapt in real time and deliver measurable results.' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-4xl md:text-5xl leading-relaxed text-left text-gray-800">
          {textLines.map((line, index) => {
            const revealed = revealedLines.includes(index);

            // determine if this segment should render an image for the highlight
            let imgSrc = null;
            if (line.highlight === 'AI') imgSrc = '/Images/about3.png';
            if (line.highlight === 'data') imgSrc = '/Images/about1.png';
            if (line.highlight === 'creative') imgSrc = '/Images/about2.png';

            return (
              <span
                key={index}
                className={`inline-block align-middle transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2' }`}
                style={{ marginRight: 12 }}
              >
                <span className="mr-2">{line.text}</span>
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={line.highlight}
                    className="inline-block w-40 h-15 rounded-full object-cover align-middle"
                  />
                ) : null}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default TextRevealSection;
