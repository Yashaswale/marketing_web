import Navbar from "../Navbar";
import ServiceHero from "../HeroSectiontemp";
import ContactSection from "../ContactSection";
import Footer from "../Footer";

/* ================================
   SERVICES SECTION
================================ */

const LocalAdsServices = ({ data }) => {
  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-24">
        {data.items.map((item, index) => (
          <LocalAdsRow key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

const LocalAdsRow = ({
  title,
  description,
  subtitle,
  bullets,
  buttonText,
  image,
}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-20 items-start">
      {/* IMAGE (LEFT) */}
      <div>
        <img
          src={image}
          alt={title}
          className="w-full rounded-xl"
        />
      </div>

      {/* CONTENT (RIGHT) */}
      <div className="pt-2">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-5 max-w-xl">
          {description}
        </p>

        {subtitle && (
          <p className="font-semibold mb-4 text-gray-900">
            {subtitle}
          </p>
        )}

        <ul className="space-y-3 mb-8 max-w-xl">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-blue-100 px-4 py-3 rounded-md text-gray-700"
            >
              <span className="text-blue-700 font-bold mt-[2px]">
                ▸
              </span>
              {b}
            </li>
          ))}
        </ul>

        <button className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 transition text-white px-6 py-3 rounded-full text-sm font-medium">
          {buttonText}
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

/* ================================
   DATA
================================ */

const localAdsServicesData = {
  items: [
    {
      title: "From Ad Click to Store Visit",
      description:
        "We connect online ads with offline behavior to show exactly which campaigns bring customers through your doors.",
      subtitle: "Our system connects:",
      bullets: [
        "Ad exposure",
        "Device movement patterns",
        "Store visit signals",
      ],
      buttonText: "Get This Service",
      image: "/Images/Ads/local_ads/img2.png",
    },
    {
      title: "Micro-Area Intelligence",
      description:
        "Instead of targeting entire cities, our AI zooms into the micro-areas that actually convert.",
      subtitle: "Our AI breaks cities into micro-zones:",
      bullets: [
        "High-conversion streets",
        "Low-performing pockets",
        "Peak-hour hotspots",
      ],
      buttonText: "Get This Service",
      image: "/Images/Ads/local_ads/img3.png",
    },
    {
      title: "Competitor-Proximity Targeting",
      description:
        "We position your brand where customers are already deciding.",
      subtitle: "We run ads when users:",
      bullets: [
        "Enter competitor zones",
        "Search nearby alternatives",
        "Linger around similar businesses",
      ],
      buttonText: "Get This Service",
      image: "/Images/Ads/local_ads/img4.png",
    },
    {
      title: "Competitor-Proximity Targeting",
      description:
        "We position your brand where customers are already deciding.",
      subtitle: "We run ads when users:",
      bullets: [
        "Enter competitor zones",
        "Search nearby alternatives",
        "Linger around similar businesses",
      ],
      buttonText: "Get This Service",
      image: "/Images/Ads/local_ads/img5.png",
    },
    {
      title: "Competitor-Proximity Targeting",
      description:
        "We position your brand where customers are already deciding.",
      subtitle: "We run ads when users:",
      bullets: [
        "Enter competitor zones",
        "Search nearby alternatives",
        "Linger around similar businesses",
      ],
      buttonText: "Get This Service",
      image: "/Images/Ads/local_ads/img6.png",
    },
  ],
};

const localAdsHeroData = {
  bgColor: "bg-gray-50",
  title: "Local Ads That Drive Real Footfall & Conversions",
  description:
    "We run hyper-local ad campaigns that target high-intent zones, track store visits, and help you win customers right when they’re ready to buy.",
  ctaText: "Get Started",
  image: "/Images/Ads/local_ads/img1.png",
};

/* ================================
   PAGE
================================ */

const LocalAds = () => {
  return (
    <>
      <Navbar />
      <ServiceHero data={localAdsHeroData} />
      <LocalAdsServices data={localAdsServicesData} />
      <ContactSection />
      <Footer />
    </>
  );
};

export default LocalAds;
