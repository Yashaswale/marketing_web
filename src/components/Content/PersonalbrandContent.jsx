import Navbar from "../Navbar";
import ServiceHero from "../HeroSectiontemp";
import ContactSection from "../ContactSection";
import Footer from "../Footer";

// Local data for the Personal Brand Content page
const personalBrandFormatsData = {
    title: "Personal Brand Content Formats",
    items: [
      {
        title: "Thought Leadership Posts",
        description:
          "These posts position you as a trusted authority by sharing original ideas, perspectives, and frameworks drawn from your experience. We focus on clarity and depth, helping you explain complex topics in a simple, confident way that earns respect and long-term credibility.",
        image: "/Images/Content/personal_content/img2.png",
        buttonText: "Get This Service",
      },
      {
        title: "Personal Journey & Milestone Posts",
        description:
          "We turn key moments, achievements, and experiences into meaningful content that reflects growth and authenticity. These posts build relatability and trust while showing progress, consistency, and commitment over time.",
        image: "/Images/Content/personal_content/img3.png",
        buttonText: "Get This Service",
      },
      {
        title: "Educational Content & Carousels",
        description:
          "Designed to teach and inform, this content breaks down knowledge into structured, easy-to-consume formats. Carousels and explainers help your audience learn from you while subtly reinforcing your authority through value-first content.",
        image: "/Images/Content/personal_content/img4.png",
        buttonText: "Get This Service",
      },
      {
        title: "Founder & Professional Storytelling",
        description:
          "We craft stories around your journey, challenges, decisions, and lessons learned. This content builds emotional connection while reinforcing your expertise, allowing your audience to understand not just what you do, but why you do it and how you think.",
        image: "/Images/Content/personal_content/img5.png",
        buttonText: "Get This Service",
      },
    ],
  };

const personalBrandHeroData = {
    bgColor: "bg-[#C4C6F9]",
    title: "Build Your Personal Brand with High-Impact Content",
    description:
      "We create content formats that help you grow authority, trust, and consistency—so your audience remembers you and chooses you.",
    ctaText: "Get Started",
    image: "/Images/Content/personal_content/img1.png",
  };

const personalBrandWhyWorksData = {
    title: "Why Our Content Strategy Works",
    image: "/Images/Content/personal_content/img6.png",
    points: [
      "Builds authority and credibility",
      "Creates consistency across platforms",
      "Positions you as a trusted expert",
      "Clear storytelling with value-first content",
      "Designed to grow long-term trust",
    ],
  };

const BrandingWhyWorks = ({ data }) => {
  return (
      <section className="py-24 px-6 bg-[#C4C6F9]">
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

const PersonalBrandFormats = ({ data }) => {
    return (
      <section className="py-24 px-6 bg-[#C4C6F9]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-14">{data.title}</h2>
  
          <div className="space-y-10">
            {data.items.map((item, index) => (
              <FormatRow
                key={index}
                {...item}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  
  /* ------------------- ROW STRUCTURE ------------------- */
  
  const FormatRow = ({
    title,
    description,
    image,
    buttonText,
    reverse = false,
  }) => {
    return (
      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        {/* IMAGE */}
        <div
          className={`lg:col-span-3 bg-white rounded-2xl shadow-md overflow-hidden ${
            reverse ? "lg:order-2 lg:col-start-10" : ""
          }`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* CONTENT CARD */}
        <div
          className={`lg:col-span-9 bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between ${
            reverse ? "lg:order-1 lg:col-span-9 lg:col-start-1" : ""
          }`}
        >
          <div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>
  
          <div className="mt-6">
            <button 
              onClick={() => {
                if (window.location.pathname === '/') {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  window.location.href = '/#contact';
                }
              }}
              className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2"
            >
              {buttonText}
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

const PersonalBrandContent = () => {
  return (
    <>
      <Navbar />
      {/* HERO */}
      <ServiceHero data={personalBrandHeroData} />

      {/* FORMATS SECTION (IMAGE + CONTENT CARDS) */}
      <PersonalBrandFormats data={personalBrandFormatsData} />

      {/* WHY IT WORKS (REUSED SECTION) */}
      <BrandingWhyWorks data={personalBrandWhyWorksData} />

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default PersonalBrandContent;
