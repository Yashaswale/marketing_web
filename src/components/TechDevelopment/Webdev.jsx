import Navbar from "../Navbar";
import ServiceHero from "../HeroSectiontemp";
import ProcessTimeline from "../Process";
import ContactSection from "../ContactSection";
import Footer from "../Footer";
import ShowcaseSection from "../Showcasesection";



const WhatWeDoGrid = ({ data }) => {
    return (
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">{data.title}</h2>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl mb-4 w-full object-cover"
                />
  
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export const webDevWhatWeDoData = {
    title: "What We Do in Web Development",
    items: [
      {
        title: "Modern Website Development",
        description:
          "Fast, responsive, and scalable websites built for performance and user experience.",
        image: "/Images/Techdev/Website/img2.png",
      },
      {
        title: "UI/UX-Focused Design",
        description:
          "User-first design that improves clarity, trust, and conversions.",
        image: "/Images/Techdev/Website/img3.png",
      },
      {
        title: "Landing Pages & Funnels",
        description:
          "Conversion-focused pages designed to generate leads and sales.",
        image: "/Images/Techdev/Website/img4.png",
      },
      {
        title: "Enterprise & Scalable Web Apps",
        description:
          "Secure web apps built to handle growth, integrations, and complex workflows.",
        image: "/Images/Techdev/Website/img5.png",
      },
      {
        title: "Backend & API Development",
        description:
          "Reliable backend systems for real-time data, integrations, and future expansion.",
        image: "/Images/Techdev/Website/img6.png",
      },
      {
        title: "Deployment & Support",
        description:
          "From launch to updates, maintenance, and performance optimization.",
        image: "/Images/Techdev/Website/img7.png",
      },
    ],
  };

  const WhyChooseUs = ({ data }) => {
    return (
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">{data.title}</h2>
  
          <div className="grid md:grid-cols-3 gap-6">
            {data.items.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 shadow-md ${
                  item.highlight
                    ? "bg-blue-900 text-white"
                    : "bg-blue-100 text-gray-900"
                }`}
              >
                <div className="mb-4 text-2xl">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.heading}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export const webDevWhyChooseUsData = {
    title: "Why Choose Us",
    items: [
      {
        icon: "🚀",
        heading: "Performance-Driven Products",
        description:
          "We build apps that don’t just look good—they convert, retain, and scale.",
        highlight: true,
      },
      {
        icon: "🔗",
        heading: "Seamless Marketing Integration",
        description:
          "Your app fits perfectly into your ads, analytics, CRM, and growth stack.",
        highlight: false,
      },
      {
        icon: "📊",
        heading: "Measurable Business Impact",
        description:
          "Every feature is designed to deliver real results you can track and grow.",
        highlight: false,
      },
    ],
  };

  const ShowcaseGallery = ({ data }) => {
    return (
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">{data.title}</h2>
  
          <div className="grid md:grid-cols-3 gap-6">
            {data.images.map((img, index) => (
              <div
                key={index}
                className="bg-blue-100 rounded-2xl p-4 shadow-md flex items-center justify-center"
              >
                <img
                  src={img}
                  alt={`showcase-${index}`}
                  className="rounded-xl max-h-[320px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
export const webDesignProcessData = {
  title: "Our App Design Process",
  steps: [
    {
      step: 1,
      title: "Understand",
      description: "Your business, audience, and goals.",
      image: "/Images/Techdev/Website/process1.png",
    },
    {
      step: 2,
      title: "Plan",
      description: "App structure, user flow, and content layout.",
      image: "/Images/Techdev/Website/process2.png",
    },
    {
      step: 3,
      title: "Design",
      description: "Clean, modern, and brand-aligned visuals.",
      image: "/Images/Techdev/Website/process3.png",
    },
    {
      step: 4,
      title: "Review & Refine",
      description: "Feedback-based improvements.",
      image: "/Images/Techdev/Website/process4.png",
    },
  ],
};


  
  export const webDevHeroData = {
    bgColor: "bg-gray-50",
    title: "Web Development That Converts Visitors Into Customers",
    description:
      "We build modern, fast, and scalable websites that look premium, perform smoothly, and drive real business results.",
    ctaText: "Book a Call",
    image: "/Images/Techdev/Website/img1.png",
  };
  
  
const webDesignShowcaseData = {
  title: "We Design Websites That Turn Visitors into Customers",
  image: "/Images/Techdev/Website/img8.png",
};

const WebDevelopment = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <ServiceHero data={webDevHeroData} />

      {/* WHAT WE DO (GRID) */}
      <WhatWeDoGrid data={webDevWhatWeDoData} />

      {/* PROCESS (REUSE YOUR COMPONENT) */}
      <ProcessTimeline
        title={webDesignProcessData.title}
        steps={webDesignProcessData.steps}
      />

      {/* WHY CHOOSE US */}
      <WhyChooseUs data={webDevWhyChooseUsData} />

      {/* SHOWCASE GALLERY */}
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

export default WebDevelopment;
