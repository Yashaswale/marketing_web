import Navbar from "../Navbar";
import ServiceHero from "../HeroSectiontemp";
import ContactSection from "../ContactSection";
import Footer from "../Footer";

const AnalyticsServices = ({ data }) => {
    return (
      <section className="py-24 px-6 bg-[#C4C6F9]">
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
          "Cross-channel performance tracking",
          "Campaign, ad, and creative-level insights",
          "Funnel and revenue visibility",
        ],
        buttonText: "Start My Website",
        image: "/Images/Analytics/performance_analytics/img2.png",
      },
      {
        title: "ROI & Attribution Analysis",
        description: "Understand where growth actually comes from.",
        bullets: [
          "Channel-wise ROI measurement",
          "Conversion path analysis",
          "Assisted and last-touch attribution views",
        ],
        buttonText: "Start My Website",
        image: "/Images/Analytics/performance_analytics/img3.png",
      },
      {
        title: "Funnel & Conversion Optimization",
        description: "Identify where users drop off and why.",
        bullets: [
          "Step-by-step funnel analysis",
          "Conversion rate diagnostics",
          "Opportunity mapping for improvements",
        ],
        buttonText: "Start My Website",
        image: "/Images/Analytics/performance_analytics/img4.png",
      },
      {
        title: "Custom Dashboards & Reporting",
        description: "Dashboards built for how teams work.",
        bullets: [
          "Real-time and scheduled reports",
          "Role-based views for teams and leaders",
          "Clear visual summaries for faster reviews",
        ],
        buttonText: "Start My Website",
        image: "/Images/Analytics/performance_analytics/img5.png",
      },
    ],
  };

  const WhatYouGain = ({ data }) => {
    return (
      <section className="py-24 px-6 bg-[#C4C6F9]">
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
    image: "/Images/Analytics/performance_analytics/img6.png",
    points: [
      "Clear understanding of marketing performance",
      "Actionable insights across all channels",
      "Improved efficiency and better cost control",
      "Stronger, data-driven optimization decisions",
      "Measurable growth with proven ROI",
    ],
  };

  export const analyticsHeroData = {
    bgColor: "bg-[#C4C6F9]",
    title: "See what’s working. Fix what’s not. Scale what performs.",
    description:
      "Performance & Marketing Analytics gives clear, AI-powered visibility into how every campaign, channel, and creative drives growth, turning data into smarter decisions.",
    ctaText: "Book a Call",
    image: "/Images/Analytics/performance_analytics/img1.png",
  };
  

const PerformanceAnalytics = () => {
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

export default PerformanceAnalytics;
