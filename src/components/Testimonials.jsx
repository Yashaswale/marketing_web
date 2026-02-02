import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "The strategy was clear, execution was smooth, and results came faster than expected. Our online visibility improved within weeks.",
    author: "Will Smith",
    role: "Marketing Manager",
  },
  {
    text: "Outstanding work! The team delivered beyond expectations. Our conversion rates increased by 150% in just three months.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
  },
  {
    text: "Professional, efficient, and results-driven. They transformed our digital presence completely. Highly recommended!",
    author: "Michael Chen",
    role: "Product Director",
  },
  {
    text: "Incredible attention to detail and customer service. Our brand identity has never looked better. Worth every penny!",
    author: "Emily Rodriguez",
    role: "Brand Manager",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Don't auto-slide when hovered

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section 
      className="py-28 px-6"
      style={{
        background: 'linear-gradient(180deg, rgba(251, 225, 27, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <p className="text-sm text-blue-700 font-medium mb-3">
              Testimonial
            </p>
            <h2 className="text-5xl font-bold text-gray-900 mb-10">
              What Our Client Says
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/Images/landing%20Page/testimonials.png"
                alt="Client meeting"
                className="w-full h-[360px] object-cover grayscale"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative h-[420px] flex items-center justify-center">
            {testimonials.map((t, index) => {
              const position =
                (index - active + testimonials.length) %
                testimonials.length;

              if (position > 2) return null;

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] cursor-pointer"
                  style={{
                    width: "280px",
                    height: "360px",
                    transform: `
                      translateX(${position * 14}px)
                      translateY(${position * 14}px)
                      rotate(${position * -2}deg)
                      scale(${1 - position * 0.05})
                    `,
                    zIndex: 10 - position,
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => setActive(index)}
                >
                  {/* BACK CARD */}
                  {position !== 0 && (
                    <div className="absolute inset-0 bg-yellow-400 rounded-2xl -z-10 translate-x-3 translate-y-3" />
                  )}

                  {/* MAIN CARD */}
                  <div className="bg-blue-700 text-white rounded-2xl p-6 h-full flex flex-col justify-between shadow-xl hover:shadow-2xl transition-shadow">
                    <p className="text-xl leading-relaxed">
                      {t.text}
                    </p>

                    <div>
                      <p className="font-semibold text-sm mt-6">
                        {t.author}
                      </p>
                      <p className="text-xs text-gray-200">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-20">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                i === active
                  ? "w-8 bg-blue-700"
                  : "w-2 bg-gray-400 hover:bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
