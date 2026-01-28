import Navbar from "../Navbar";
import ServiceHero from "../HeroSectiontemp";
import ContactSection from "../ContactSection";
import Footer from "../Footer";
import ShowcaseSection from "../Showcasesection";

const BrandingServices = ({ data }) => {
    return (
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-5"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-xl mb-4 w-full object-cover"
                />
  
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>
  
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
  
                <p className="font-semibold text-sm mb-2">Includes:</p>
  
                <ul className="space-y-2 text-sm">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-yellow-400 mt-1">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  
  export const brandingServicesData = [
    {
      title: "Logo Design That Scales",
      description:
        "We design logos that look sharp everywhere, from mobile screens to billboards.",
      image: "/Images/Design/logo&prod_design/img2.png",
      includes: [
        "Concept-driven logo design",
        "Minimal, modern & timeless styles",
        "Scalable formats & variations",
        "Icon, symbol & wordmark options",
      ],
    },
    {
      title: "Brand Strategy & Positioning",
      description:
        "We help your brand be perceived correctly with purpose-driven decisions.",
      image: "/Images/Design/logo&prod_design/img3.png",
      includes: [
        "Brand purpose & vision clarity",
        "Target audience definition",
        "Brand personality & tone",
        "Competitive positioning",
      ],
    },
    {
      title: "Branding & Packaging",
      description:
        "We craft product branding that grabs attention and communicates value.",
      image: "/Images/Design/logo&prod_design/img4.png",
      includes: [
        "Product branding concepts",
        "Packaging & label design",
        "Shelf & digital-first visuals",
        "Product storytelling elements",
      ],
    },
    {
      title: "Rebranding & Brand Refresh",
      description:
        "Perfect for brands that need a modern update while keeping their core essence.",
      image: "/Images/Design/logo&prod_design/img5.png",
      includes: [
        "Brand audit & gap analysis",
        "Logo refinement or redesign",
        "Updated visual identity",
        "Transition-ready brand assets",
      ],
    },
    {
      title: "Digital Brand Assets",
      description:
        "We design assets that keep your brand consistent and professional online.",
      image: "/Images/Design/logo&prod_design/img6.png",
      includes: [
        "Social media brand kits",
        "Website & app branding elements",
        "Marketing creatives & templates",
        "Presentation & pitch deck designs",
      ],
    },
  ];
  

  export const BrandingWhyWorks = ({ data }) => {
    return (
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <img
            src={data.image}
            alt="Branding process"
            className="rounded-2xl shadow-lg"
          />
  
          {/* CONTENT */}
          <div>
            <h2 className="text-4xl font-bold mb-8">
              {data.title}
            </h2>
  
            <div className="space-y-4">
              {data.points.map((point, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 shadow flex items-center gap-3"
                >
                  <span className="text-yellow-400">✔</span>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  export const brandingWhyWorksData = {
    title: "Why Our Branding Works",
    image: "/Images/Design/logo&prod_design/img7.png",
    points: [
      "Scalable for growth",
      "Clear communication",
      "Strategy-first approach",
      "Clean, modern design language",
      "Long-term brand thinking",
    ],
  };
  

  export const brandingHeroData = {
    bgColor: "bg-gray-50",
    title: "Build a Brand That People Remember",
    description:
      "We help brands stand out with strategy-driven design that communicates clearly and scales with growth.",
    ctaText: "Start Your Brand",
    image: "/Images/Design/logo&prod_design/img1.png",
  };

  const webDesignShowcaseData = {
    title: "We Design Websites That Turn Visitors into Customers",
    image: "/Images/Design/logo&prod_design/img8.png",
  };
  

const Branding = () => {
  return (
    <>
      <Navbar />
      {/* HERO */}
      <ServiceHero data={brandingHeroData} />

      {/* SERVICES GRID */}
      <BrandingServices data={brandingServicesData} />

      {/* WHY BRANDING WORKS */}
      <BrandingWhyWorks data={brandingWhyWorksData} />

      <ShowcaseSection
        title={webDesignShowcaseData.title}
        image={webDesignShowcaseData.image}
      />

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Branding;
