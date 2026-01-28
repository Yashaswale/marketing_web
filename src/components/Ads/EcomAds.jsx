import Navbar from "../Navbar";
import ServiceHero from "../HeroSectiontemp";
import ContactSection from "../ContactSection";
import Footer from "../Footer";
import ShowcaseSection from "../Showcasesection";


/* ================================
   SERVICES SECTION
================================ */

const EcomAdsServices = ({ data }) => {
  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-24">
        {data.items.map((item, index) => (
          <EcomServiceRow key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

const EcomServiceRow = ({
  title,
  description,
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

        <p className="text-gray-600 leading-relaxed mb-6 max-w-xl">
          {description}
        </p>

        <p className="font-semibold mb-4 text-gray-900">
          Our system connects:
        </p>

        <ul className="space-y-3 mb-8 max-w-xl">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-blue-50 px-4 py-3 rounded-md text-gray-700"
            >
              <span className="text-blue-700 font-bold mt-[2px]">
                ▸
              </span>
              {b}
            </li>
          ))}
        </ul>

        <button className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 transition text-white px-6 py-3 rounded-full text-sm font-medium">
          {buttonText}
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

/* ================================
   ADS BUILT SECTION
================================ */

const AdsBuiltSection = ({ data }) => {
  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-gray-900">
          {data.title}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.images.map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-white"
            >
              <img
                src={img}
                alt={`ad-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================================
   DATA
================================ */

const ecomAdsServicesData = {
  items: [
    {
      title: "From Ad Click to Store Visit",
      description:
        "We connect online ads with offline behavior to show exactly which campaigns bring customers through your doors.",
      bullets: [
        "Ad exposure",
        "Device movement patterns",
        "Store visit signals",
      ],
      buttonText: "Get This Service",
      image: "/Images/Ads/ecom_ads/img2.png",
    },
    {
      title: "Micro-Area Intelligence",
      description:
        "Instead of targeting entire cities, our AI zooms into the micro-areas that actually convert.",
      bullets: [
        "High-conversion streets",
        "Low-performing pockets",
        "Peak-hour hotspots",
      ],
      buttonText: "Get This Service",
      image: "/Images/Ads/ecom_ads/img3.png",
    },
    {
      title: "Competitor-Proximity Targeting",
      description:
        "We position your brand where customers are already deciding.",
      bullets: [
        "Enter competitor zones",
        "Search nearby alternatives",
        "Linger around similar businesses",
      ],
      buttonText: "Get This Service",
      image: "/Images/Ads/ecom_ads/img4.png",
    },
    {
      title: "Competitor-Proximity Targeting",
      description:
        "We position your brand where customers are already deciding.",
      bullets: [
        "Enter competitor zones",
        "Search nearby alternatives",
        "Linger around similar businesses",
      ],
      buttonText: "Get This Service",
      image: "/Images/Ads/ecom_ads/img5.png",
    },
  ],
};


const ecomAdsHeroData = {
  bgColor: "bg-gray-50",
  title: "E-commerce Ads That Scale Sales & ROAS",
  description:
    "We run high-performing e-commerce ad campaigns designed to capture attention, retarget smartly, and convert consistently across platforms.",
  ctaText: "Start My Campaign",
  image: "/Images/Ads/ecom_ads/img1.png",
};

const webDesignShowcaseData = {
  title: "We Design Websites That Turn Visitors into Customers",
  image: "/Images/Ads/ecom_ads/img6.png",
};

/* ================================
   PAGE
================================ */

const EcomAds = () => {
  return (
    <>
      <Navbar />
      <ServiceHero data={ecomAdsHeroData} />
      <EcomAdsServices data={ecomAdsServicesData} />
      <ShowcaseSection
        title={webDesignShowcaseData.title}
        image={webDesignShowcaseData.image}
      />

      <ContactSection />
      <Footer />
    </>
  );
};

export default EcomAds;
