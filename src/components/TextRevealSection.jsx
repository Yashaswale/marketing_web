import { useEffect, useRef, useState } from "react";

const TextRevealSection = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate scroll progress through the section
      const scrollStart = rect.top + sectionHeight * 0.2;
      const scrollEnd = rect.top - windowHeight * 0.5;
      
      let progress = 0;
      if (scrollStart > 0) {
        progress = 0;
      } else if (scrollEnd < 0) {
        progress = 1;
      } else {
        progress = (scrollStart - 0) / (scrollStart - scrollEnd);
      }
      
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = [
    { text: "At Zadynco, we specialize in", type: "text" },
    { text: "AI", type: "badge", icon: "🤖", image: "/Images/about1.png" },
    { text: "-powered digital marketing. Our intelligent approach helps brands grow faster by combining", type: "text" },
    { text: "data", type: "badge", icon: "📊", image: "/Images/about2.png" },
    { text: "technology, and", type: "text" },
    { text: "creative", type: "badge", icon: "🎨", image: "/Images/about3.png" },
    { text: ". We build smart strategies that adapt in real time and deliver measurable results.", type: "text" },
  ];

  // Split all content into words with metadata
  const words = [];
  content.forEach((item, itemIndex) => {
    if (item.type === "badge") {
      words.push({
        text: item.text,
        type: "badge",
        icon: item.icon,
        image: item.image,
        itemIndex,
      });
    } else {
      const textWords = item.text.split(/\s+/).filter(Boolean);
      textWords.forEach((word) => {
        words.push({
          text: word,
          type: "text",
          itemIndex,
        });
      });
    }
  });

  const totalWords = words.length;
  const revealedCount = Math.floor(scrollProgress * (totalWords + 1));

  const Badge = ({ children, image }) => (
    <span className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mx-1 sm:mx-2">
      {image && (
        <img 
          src={image} 
          alt={children} 
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain"
        />
      )}
      {children}
    </span>
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 md:py-36 lg:py-44 px-4 sm:px-6 md:px-8 bg-[#C4C6F9]"
      style={{ minHeight: '150vh' }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <p
          className="
            mx-auto
            text-center
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
            leading-[1.8] sm:leading-[1.8] md:leading-[1.9] lg:leading-[2]
            tracking-normal
            font-normal
          "
          style={{ textWrap: "balance" }}
        >
          {words.map((word, index) => {
            const isRevealed = index < revealedCount;
            
            if (word.type === "badge") {
              return (
                <Badge key={index} image={word.image}>
                  {word.text}
                </Badge>
              );
            }

            return (
              <span
                key={index}
                className={`
                  inline-block
                  transition-colors duration-500 ease-out
                  ${isRevealed ? "text-gray-900 font-medium" : "text-gray-300"}
                `}
                style={{ transitionDelay: '0ms' }}
              >
                {word.text}{" "}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default TextRevealSection;