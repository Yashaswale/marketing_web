import Navbar from "../Navbar";
import ServiceHero from "../HeroSectiontemp";
import ContactSection from "../ContactSection";
import Footer from "../Footer";

const AnalyticsServices = ({ data }) => {
    return (
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-12">
          {data.items.map((item, index) => (
            <AnalyticsServiceRow
              key={index}
              {...item}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>
    );
  };
  
  const AnalyticsServiceRow = ({
    title,
    description,
    bullets,
    buttonText,
    image,
    reverse = false,
  }) => {
    return (
      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        {/* IMAGE CARD */}
        <div
          className={`lg:col-span-4 bg-white rounded-2xl shadow-md overflow-hidden ${
            reverse ? "lg:order-2 lg:col-start-9" : ""
          }`}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
  
        {/* CONTENT CARD */}
        <div
          className={`lg:col-span-8 bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between ${
            reverse ? "lg:order-1 lg:col-span-8 lg:col-start-1" : ""
          }`}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
  
            <ul className="space-y-2 text-gray-700 text-sm">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
  
          <div className="mt-6">
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
              {buttonText} <span>→</span>
            </button>
          </div>
        </div>
      </div>
    );
  };


  const analyticsServicesData = {
    items: [
      {
        title: "Measurement Framework Design",
        description: "We start with strategy, not tools.",
        bullets: [
          "Clear KPIs aligned with growth objectives",
          "Funnel-based measurement structure",
          "Channel-wise success definitions",
        ],
        buttonText: "Start My Website",
        image: "/Images/Analytics/statergy_analytics/img2.png",
      },
      {
        title: "End-to-End Tracking Setup",
        description: "Every action is tracked accurately across the user journey.",
        bullets: [
          "Website & app event tracking",
          "Conversion and goal setup",
          "Cross-channel attribution readiness",
        ],
        buttonText: "Start My Website",
        image: "/Images/Analytics/statergy_analytics/img3.png",
      },
      {
        title: "Custom Dashboards & Reporting",
        description: "All your data, simplified in one view.",
        bullets: [
          "Real-time performance dashboards",
          "Channel, campaign, and funnel views",
          "Clear visual storytelling for teams and leaders",
        ],
        buttonText: "Start My Website",
        image: "/Images/Analytics/statergy_analytics/img4.png",
      },
      {
        title: "Custom Dashboards & Reporting",
        description: "All your data, simplified in one view.",
        bullets: [
          "Real-time performance dashboards",
          "Channel, campaign, and funnel views",
          "Clear visual storytelling for teams and leaders",
        ],
        buttonText: "Start My Website",
        image: "/Images/Analytics/statergy_analytics/img5.png",
      },
    ],
  };

  const WhatYouGain = ({ data }) => {
    return (
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <img
            src={data.image}
            alt={data.title}
            className="rounded-2xl shadow-lg"
          />
  
          {/* CONTENT */}
          <div>
            <h2 className="text-4xl font-bold mb-8">{data.title}</h2>
  
            <div className="space-y-4">
              {data.points.map((point, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 shadow flex items-center gap-3"
                >
                  <span className="text-yellow-400">✔</span>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  const analyticsGainData = {
    title: "What You Gain",
    image: "/Images/Analytics/statergy_analytics/img6.png",
    points: [
      "Accurate, reliable data you can trust",
      "Clear visibility into performance metrics",
      "Confident decisions backed by data",
      "Smarter campaign optimization across channels",
      "Measurable return on marketing investment",
    ],
  };

  export const analyticsHeroData = {
    bgColor: "bg-gray-50",
    title: "Analytics & Tracking That Helps You Scale Smarter",
    description:
      "We set up tracking, dashboards, and measurement frameworks so you always know what’s working—and what to optimize next.",
    ctaText: "Book a Call",
    image: "/Images/Analytics/statergy_analytics/img1.png",
  };
  

const StatergyAnalytics = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HOME / HERO */}
      <ServiceHero data={analyticsHeroData} />

      {/* SERVICES SECTION (IMAGE 1) */}
      <AnalyticsServices data={analyticsServicesData} />

      {/* WHAT YOU GAIN (IMAGE 2) */}
      <WhatYouGain data={analyticsGainData} />

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default StatergyAnalytics;
