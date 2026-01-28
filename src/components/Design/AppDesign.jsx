import Navbar from "../Navbar";
import ServiceHero from "../HeroSectiontemp";
import ProcessTimeline from "../Process";
import ContactSection from "../ContactSection";
import Footer from "../Footer";
import ShowcaseSection from "../Showcasesection";


const appDesignServicesData = {
  title: "End-to-End App Design Services",
  services: [
    {
      title: "UX Research & User Flows",
      description:
        "We design apps by stepping into your users’ shoes. Through research and thoughtful planning, we understand what users need, how they behave, and what motivates them.",
      image: "/Images/Design/app_design/img2.png",
      points: [
        "User Personas: Define real user types to design with purpose",
        "Journey Mapping: Visualize user actions from start to finish",
        "App Flow & Logic Planning: Create smooth, intuitive navigation",
        "Feature Prioritization: Focus on what truly matters to users and business goals",
      ],
    },
    {
      title: "Mobile App UI/UX Design",
      description:
        "We design mobile apps that feel effortless from the very first tap. Every screen is crafted to be intuitive, visually clear, and aligned with how users naturally interact.",
      image: "/Images/Design/app_design/img3.png",
      points: [
        "Android & iOS App Designs: Platform-specific, polished interfaces",
        "User-Centric UI Layouts: Designed around real user behavior",
        "Smooth Navigation & Interactions: Clear flows with minimal friction",
        "Accessibility-Friendly Design: Inclusive designs for all users",
      ],
    },
    {
      title: "App Redesign & Optimization",
      description:
        "Your app already exists? We make it work better. By analyzing real user behavior and design gaps, we refine your app to feel faster, clearer, and more engaging.",
      image: "/Images/Design/app_design/img4.png",
      points: [
        "UX Audit: Identify friction points and drop-offs",
        "Usability Fixes: Simplify flows and interactions",
        "UI Modernization: Refresh the look with a clean, modern design",
        "Conversion-Focused Redesign: Turn more users into active, loyal customers",
      ],
    },
  ],
};

const ServiceBlock = ({
  image,
  title,
  description,
  points,
  reverse,
}) => {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-16 items-center`}
    >
      {/* IMAGE */}
      <div className={`${reverse ? "lg:order-2" : ""}`}>
        <div className="relative inline-block">
          {/* Blue Accent Border */}
          <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-blue-700"></div>

          <img
            src={image}
            alt={title}
            className="relative z-10 rounded-2xl bg-white"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6 max-w-xl">
          {description}
        </p>

        <p className="font-semibold mb-4 text-gray-900">
          What we do:
        </p>

        <ul className="space-y-3 max-w-xl">
          {points.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-blue-50 px-4 py-3 rounded-md text-gray-700"
            >
              <span className="text-blue-700 font-bold mt-[2px]">
                ▸
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


const AppDesignServices = ({ title, services }) => {
  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-20 text-gray-900">
          {title}
        </h2>

        <div className="space-y-28">
          {services.map((service, index) => (
            <ServiceBlock
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


export const webDesignProcessData = {
  title: "Our App Design Process",
  steps: [
    {
      step: 1,
      title: "Understand",
      description: "Your business, audience, and goals.",
      image: "/Images/Design/app_design/process1.png",
    },
    {
      step: 2,
      title: "Plan",
      description: "App structure, user flow, and content layout.",
      image: "/Images/Design/app_design/process2.png",
    },
    {
      step: 3,
      title: "Design",
      description: "Clean, modern, and brand-aligned visuals.",
      image: "/Images/Design/app_design/process3.png",
    },
    {
      step: 4,
      title: "Review & Refine",
      description: "Feedback-based improvements.",
      image: "/Images/Design/app_design/process4.png",
    },
    {
      step: 5,
      title: "Deliver",
      description: "Launch-ready, developer-friendly designs.",
      image: "/Images/Design/app_design/process5.png",
    },
  ],
};

const appDesignHero = {
  bgColor: "bg-[#E3F2FD]",
  title: "Mobile Apps That Users Love to Use",
  description:
    "We design mobile apps that feel effortless from the very first tap. Every screen is crafted to be intuitive, visually clear, and aligned with how users naturally interact.",
  ctaText: "Book Demo",
  image: "/Images/Design/app_design/img1.png",
};

const webDesignShowcaseData = {
  title: "We Design Websites That Turn Visitors into Customers",
  image: "/Images/Design/app_design/img5.png",
};


const AppDesign = () => {
  return (
    <>
      <Navbar />
      {/* HERO */}
      <ServiceHero data={appDesignHero} />

      {/* SERVICES */}
      <AppDesignServices
        title={appDesignServicesData.title}
        services={appDesignServicesData.services}
      />

      {/* PROCESS */}
      <ProcessTimeline
        title={webDesignProcessData.title}
        steps={webDesignProcessData.steps}
      />

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

export default AppDesign;
