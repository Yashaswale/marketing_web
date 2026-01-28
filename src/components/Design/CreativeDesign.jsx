import Navbar from "../Navbar";
import ServiceHero from "../HeroSectiontemp";
import ContactSection from "../ContactSection";
import Footer from "../Footer";
import ShowcaseSection from "../Showcasesection";


const CreativeDesignServices = ({ data }) => {
    return (
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">
            {data.title}
          </h2>
  
          <div className="space-y-20">
            {data.services.map((service, index) => (
              <CreativeBlock
                key={index}
                {...service}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

  const CreativeBlock = ({
    image,
    title,
    description,
    points,
    reverse,
  }) => {
    return (
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <div className={reverse ? "lg:order-2" : ""}>
          <img
            src={image}
            alt={title}
            className="rounded-2xl shadow-lg"
          />
        </div>
  
        {/* CONTENT */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">
            {title}
          </h3>
  
          <p className="text-gray-700 mb-4">
            {description}
          </p>
  
          <p className="font-semibold mb-3">What we do:</p>
  
          <ul className="space-y-3">
            {points.map((point, i) => (
              <li
                key={i}
                className="bg-blue-50 text-gray-700 px-4 py-2 rounded-md text-sm"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  

  export const creativeDesignServicesData = {
    title: "End-to-End Creative Design Services",
    services: [
      {
        title: "Reels & Short-Video Creatives",
        description:
          "We design supporting visuals for short-form videos that help your content stand out and perform better on platforms like Instagram and Facebook.",
        image: "/Images/Design/socialmedia_design/img2.png",
        points: [
          "Design reel covers and attention-grabbing thumbnails",
          "Create visual storyboards to guide video flow",
          "Add text overlays, transitions, and motion-ready elements",
        ],
      },
      {
        title: "Story & Ad Creatives",
        description:
          "We create quick-impact designs tailored for stories and paid ads that deliver your message clearly within seconds.",
        image: "/Images/Design/socialmedia_design/img3.png",
        points: [
          "Design Instagram and Facebook story creatives",
          "Structure visuals with ad-focused hierarchy",
          "Design CTA-driven layouts that encourage action",
        ],
      },
      {
        title: "Blog Writing & Content Design",
        description:
          "We write and design blogs that educate, engage, and support your brand across social media and search platforms.",
        image: "/Images/Design/socialmedia_design/img4.png",
        points: [
          "Blog topic research based on your audience",
          "SEO-friendly blog writing",
          "Visual blog layouts with images & highlights",
          "Content repurposing for social media posts",
        ],
      },
    ],
  };
  

  export const creativeDesignHeroData = {
    bgColor: "bg-gray-50",
    title: "Creative Designs That Capture Attention & Drive Action",
    description:
      "We design scroll-stopping creatives for social media, ads, and content that help brands connect, communicate, and convert.",
    ctaText: "Start Your Creative Project",
    image: "/Images/Design/socialmedia_design/img1.png",
  };

  const webDesignShowcaseData = {
    title: "We Design Websites That Turn Visitors into Customers",
    image: "/Images/Design/socialmedia_design/img5.png",
  };
  

const CreativeDesign = () => {
  return (
    <>
      <Navbar />
      {/* HERO */}
      <ServiceHero data={creativeDesignHeroData} />

      {/* CREATIVE DESIGN SERVICES */}
      <CreativeDesignServices data={creativeDesignServicesData} />

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

export default CreativeDesign;
