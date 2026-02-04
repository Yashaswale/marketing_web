import Navbar from "../Navbar";
import ServiceHero from "../HeroSectiontemp";
import ContactSection from "../ContactSection";
import Footer from "../Footer";
import { BrandingWhyWorks } from "../Design/BrandingServices";

const UgcAdsServices = ({ data }) => {
    return (
      <section className="py-24 px-6 bg-[#C4C6F9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {data.items.map((item, index) => (
              <UgcCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    );
  };

const UgcCard = ({ item }) => {
    return (
      <div className="bg-white rounded-2xl shadow-md p-5">
        <img
          src={item.image}
          alt={item.title}
          className="rounded-xl mb-4 w-full object-cover"
        />
  
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
  
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
  
        <p className="font-semibold text-sm mb-2">Includes:</p>
  
        <ul className="space-y-2 text-sm mb-5">
          {item.includes.map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-yellow-400 mt-1">●</span>
              {point}
            </li>
          ))}
        </ul>
  
        <button className="bg-yellow-400 hover:bg-yellow-500 transition px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
          Get this service <span>→</span>
        </button>
      </div>
    );
  };

const ugcAdsServicesData = {
    items: [
      {
        title: "Performance-First UGC Production",
        description:
          "We structure UGC with proven performance frameworks.",
        image: "/Images/Ads/ugc_ads/img2.png",
        includes: [
          "Hooks in the first 3 seconds",
          "Messaging order & CTA placement",
          "Length, format, and pacing",
        ],
      },
      {
        title: "Platform-Native Distribution",
        description:
          "UGC ads are optimized per platform, not copy-pasted.",
        image: "/Images/Ads/ugc_ads/img3.png",
        includes: [
          "Meta (Instagram & Facebook Reels, Stories)",
          "YouTube Shorts",
          "TikTok-style vertical placements",
        ],
      },
      {
        title: "Authenticity with Brand Control",
        description:
          "We keep UGC genuine while protecting your brand identity.",
        image: "/Images/Ads/ugc_ads/img4.png",
        includes: [
          "Brand-safe creator guidelines",
          "Visual & messaging consistency",
          "Approval workflows before launch",
        ],
      },
      {
        title: "AI-Powered Creator–Content Matching",
        description:
          "We use AI to match your brand with the right creators.",
        image: "/Images/Ads/ugc_ads/img5.png",
        includes: [
          "Audience demographics & behavior",
          "Historical ad performance of creators",
          "Content style vs conversion impact",
        ],
      },
    ],
  };

const ugcAdsHeroData = {
    bgColor: "bg-[#C4C6F9]",
    title: "UGC Ads That Feel Real & Convert Fast",
    description:
      "We create high-performing UGC ad creatives that blend authenticity with performance—built for Reels, Shorts, and TikTok-style placements.",
    ctaText: "Get Started",
    image: "/Images/Ads/ugc_ads/img1.png",
  };

const ugcAdsWhyWorksData = {
    title: "Why Our UGC Ads Work",
    image: "/Images/Ads/ugc_ads/img6.png",
    points: [
      "Performance-first creative frameworks",
      "Platform-native content execution",
      "Authentic storytelling with brand control",
      "AI-powered creator matching",
      "Built for scale across multiple ad channels",
    ],
  };
  

const UgcAds = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <ServiceHero data={ugcAdsHeroData} />

      {/* UGC ADS SERVICES GRID */}
      <UgcAdsServices data={ugcAdsServicesData} />

      {/* WHY WORKS */}
      <BrandingWhyWorks data={ugcAdsWhyWorksData} />

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default UgcAds;
