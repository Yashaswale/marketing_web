import ContactSection from '../ContactSection';
import Footer from '../Footer';

const MarketingSections = ({ sections }) => {
  return (
    <>
      {sections.map((section, index) => {
        switch (section.type) {
          case "hero":
            return <Hero key={index} {...section} />;

          case "info":
            return <Info key={index} {...section} />;

          case "strategy":
            return <Strategy key={index} {...section} />;

          case "benefits":
            return <Benefits key={index} {...section} />;

          default:
            return null;
        }
      })}

      <ContactSection />
      <Footer />
    </>
  );
};

export default MarketingSections;
  
  /* ---------------- SUB COMPONENTS ---------------- */
  
  const Hero = ({ bgColor, title, description, ctaText, image, buttonColor = "bg-yellow-400" }) => (
    <section className={`${bgColor} py-20 px-6`}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <p className="text-gray-700 mb-8 max-w-xl">{description}</p>
          <button className={`${buttonColor} px-6 py-3 rounded-full font-semibold text-white hover:opacity-90 transition-opacity`}>
            {ctaText} →
          </button>
        </div>
        <img src={image} alt="" className="rounded-xl shadow-lg" />
      </div>
    </section>
  );
  
  const Info = ({ title, description, points, image }) => (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="text-gray-700 mb-6">{description}</p>
          <ul className="space-y-2">
            {points.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>
        </div>
        <img src={image} alt="" className="rounded-xl shadow-md" />
      </div>
    </section>
  );
  
  const Strategy = ({
    title,
    steps,
    highlightCardColor = "bg-yellow-400",
  }) => (
    <section className="py-24 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">{title}</h2>
  
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const isImageCard = !!step.image;
  
            return (
              <div
                key={step.id}
                className={`
                  rounded-2xl min-h-[220px] flex
                  ${isImageCard ? "p-0" : "p-8"}
                  ${step.highlight ? highlightCardColor : "bg-white"}
                `}
              >
                {/* IMAGE CARD */}
                {isImageCard ? (
                  <img
                    src={step.image}
                    alt={step.title || "strategy-visual"}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <div className="flex flex-col justify-between w-full">
                    {/* HEADER */}
                    <div className="flex justify-between mb-4">
                      <h3
                        className={`text-lg font-semibold ${
                          step.highlight ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {step.title}
                      </h3>
  
                      <span
                        className={`text-lg font-bold ${
                          step.highlight ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {step.id}
                      </span>
                    </div>
  
                    {/* DESCRIPTION */}
                    <p
                      className={`text-base leading-relaxed ${
                        step.highlight ? "text-white/90" : "text-gray-700"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
    
  
  const Benefits = ({ title, image, benefits, benefitIconColor = "text-green-500", benefitIcon = "✔" }) => (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <img src={image} alt="" className="rounded-xl shadow-lg" />
        <div>
          <h2 className="text-4xl font-bold mb-8">{title}</h2>
          <div className="space-y-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow flex items-center gap-3">
                <span className={`text-2xl ${benefitIconColor}`}>{benefitIcon}</span>
                <span className="text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
  );
  