import { useEffect, useRef, useState } from "react";

const TextRevealSection = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const content = [
    { text: "At Zadynco, we specialize in", type: "text" },
    { text: "AI", type: "badge", icon: "🤖", image: "/Images/about1.png" },
    { text: "-powered", type: "text" },
    { text: "digital marketing", type: "hero-badge" },
    { text: ". Our intelligent approach helps brands grow faster by combining", type: "text" },
    { text: "data", type: "badge", icon: "📊", image: "/Images/about2.png" },
    { text: "technology, and", type: "text" },
    { text: "creative", type: "badge", icon: "🎨", image: "/Images/about3.png" },
    { text: ". We build smart strategies that adapt in real time and deliver measurable results.", type: "text" },
  ];

  // Split content into lines for line-by-line reveal
  const lines = [];
  let currentLine = [];
  
  content.forEach((item, itemIndex) => {
    if (item.type === "badge" || item.type === "hero-badge") {
      currentLine.push({
        text: item.text,
        type: item.type,
        icon: item.icon,
        image: item.image,
        itemIndex,
      });
    } else {
      const textWords = item.text.split(/\s+/).filter(Boolean);
      textWords.forEach((word) => {
        currentLine.push({
          text: word,
          type: "text",
          itemIndex,
        });
        
        // Start a new line after certain punctuation or word count
        if (currentLine.length >= 12 || word.includes('.')) {
          lines.push([...currentLine]);
          currentLine = [];
        }
      });
    }
  });
  
  // Add any remaining words as the last line
  if (currentLine.length > 0) {
    lines.push(currentLine);
  }

  const [revealedLines, setRevealedLines] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in viewport (top of section is visible)
      const isInViewport = rect.top < windowHeight * 0.8;
      
      // Once in viewport, trigger full reveal
      if (isInViewport) {
        setScrollProgress(1);
      } else {
        setScrollProgress(0);
        setRevealedLines(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate line-by-line reveal when scrollProgress is 1
  useEffect(() => {
    if (scrollProgress === 1) {
      const totalLines = lines.length;
      let currentLine = 0;
      
      const interval = setInterval(() => {
        currentLine += 1; // Reveal one line at a time
        setRevealedLines(currentLine);
        
        if (currentLine >= totalLines) {
          clearInterval(interval);
        }
      }, 400); // 400ms between each line for slower reveal
      
      return () => clearInterval(interval);
    }
  }, [scrollProgress, lines.length]);

  const Badge = ({ children, image }) => (
    <span className="inline-flex items-center gap-2 bg-[#1a1f5c] text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mx-1 align-middle whitespace-nowrap">
      {image && (
        <img 
          src={image} 
          alt={children} 
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 object-contain"
        />
      )}
      {children}
    </span>
  );

  const HeroBadge = ({ children }) => (
    <span className="inline-block relative mx-1 my-1">
      <span 
        className="inline-block bg-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full relative"
        style={{
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)',
        }}
      >
        <span 
          className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-tight relative"
          style={{
            color: '#FBE11B',
            textShadow: `
              -1.5px -1.5px 0 #1a1f5c,
              1.5px -1.5px 0 #1a1f5c,
              -1.5px 1.5px 0 #1a1f5c,
              1.5px 1.5px 0 #1a1f5c,
              -2px 0 0 #1a1f5c,
              2px 0 0 #1a1f5c,
              0 -2px 0 #1a1f5c,
              0 2px 0 #1a1f5c
            `,
          }}
        >
          {children}
        </span>
      </span>
    </span>
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-8 relative"
      style={{ 
        minHeight: '120vh',
        background: 'linear-gradient(180deg, rgba(251, 225, 27, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%)'
      }}
    >
      {/* About us badge - centered */}
      <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 bg-[#1a1f5c] text-white px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
          <span className="text-sm sm:text-base font-medium">About us</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <p
          className="
            text-center
            text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
            leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed
            tracking-normal
            text-[#1a1f5c]
          "
          style={{ textWrap: "balance" }}
        >
          {lines.map((line, lineIndex) => {
            const isLineRevealed = lineIndex < revealedLines;
            
            return (
              <span key={lineIndex} className="inline">
                {line.map((word, wordIndex) => {
                  if (word.type === "hero-badge") {
                    return (
                      <HeroBadge key={`${lineIndex}-${wordIndex}`}>
                        {word.text}
                      </HeroBadge>
                    );
                  }
                  
                  if (word.type === "badge") {
                    return (
                      <Badge key={`${lineIndex}-${wordIndex}`} image={word.image}>
                        {word.text}
                      </Badge>
                    );
                  }

                  return (
                    <span
                      key={`${lineIndex}-${wordIndex}`}
                      className={`
                        inline-block
                        transition-all duration-700 ease-out
                        mx-1
                        ${isLineRevealed 
                          ? "text-[#1a1f5c] font-semibold opacity-100" 
                          : "text-[#1a1f5c]/25 opacity-40 font-normal"
                        }
                      `}
                    >
                      {word.text}
                    </span>
                  );
                })}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default TextRevealSection;