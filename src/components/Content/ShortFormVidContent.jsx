import Navbar from "../Navbar";
import ServiceHero from "../HeroSectiontemp";
import ContactSection from "../ContactSection";
import Footer from "../Footer";

// Local data for the Short-Form Video Content page
const shortFormVidHeroData = {
    bgColor: "bg-[#C4C6F9]",
    title: "Short-Form Video Content That Stops the Scroll",
    description:
      "We create short-form video content formats that boost engagement, build trust, and help your brand grow consistently across platforms.",
    ctaText: "Get Started",
    image: "/Images/Content/shortform_content/img1.png",
  };

const shortFormVidFormatsData = {
    title: "Short-Form Video Content Formats",
    items: [
      {
        title: "Reels & Short-Video Scripts",
        description:
          "We craft high-retention scripts designed for short-form platforms. Every line is structured to hook viewers fast and keep them watching.",
        image: "/Images/Content/shortform_content/img1.png",
        buttonText: "Get This Service",
      },
      {
        title: "Hook + Story + CTA Frameworks",
        description:
          "We build repeatable content frameworks that make your videos consistent, easy to produce, and conversion-focused.",
        image: "/Images/Content/shortform_content/img1.png",
        buttonText: "Get This Service",
      },
      {
        title: "Educational Short-Form Content",
        description:
          "We turn your knowledge into quick, valuable short-form videos that teach something useful in seconds and build authority.",
        image: "/Images/Content/shortform_content/img1.png",
        buttonText: "Get This Service",
      },
      {
        title: "Personal Brand Video Storytelling",
        description:
          "We help you share your journey, experiences, and lessons in a way that builds emotional connection and trust with your audience.",
        image: "/Images/Content/shortform_content/img1.png",
        buttonText: "Get This Service",
      },
    ],
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

const ShortFormVidContent = () => {
  return (
    <>
      <Navbar />
      {/* HERO */}
      <ServiceHero data={shortFormVidHeroData} />

      {/* FORMATS SECTION (IMAGE + CONTENT CARDS) */}
      <PersonalBrandFormats data={shortFormVidFormatsData} />

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default ShortFormVidContent;
