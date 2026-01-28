// WebsiteDesign.jsx

import Navbar from "../Navbar";
import ServiceHero from "../HeroSectiontemp";
import ProcessTimeline from "../Process";
import ContactSection from "../ContactSection";
import Footer from "../Footer";
import ShowcaseSection from "../Showcasesection";


// ServiceRow component
const ServiceRow = ({ image, title, description, points, reverse }) => {
    return (
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
            <div className={reverse ? "lg:order-2" : ""}>
                <img src={image} alt={title} className="rounded-xl shadow-lg w-full" />
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-700 mb-6">{description}</p>
                <ul className="space-y-2">
                    {points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-yellow-400 mt-1">•</span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Services section function or component
const WebDesignServices = () => {
    return (
        <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-14">
                    End-to-End Web Design Services
                </h2>

                <div className="space-y-12">
                    {/* CARD 1 */}
                    <ServiceRow
                        image="/Images/Design/web_design/img2.png"
                        title="E-commerce Website Design"
                        description="We design online stores that make browsing and buying simple and seamless."
                        points={[
                            "Create product-focused, clean layouts",
                            "Simplify the checkout process",
                            "Optimize pages for higher conversions",
                        ]}
                    />

                    {/* CARD 2 (REVERSED) */}
                    <ServiceRow
                        reverse
                        image="/Images/Design/web_design/img3.png"
                        title="Business Website Design"
                        description="We design professional websites that represent your brand clearly and build instant trust."
                        points={[
                            "Create clean, modern layouts that feel premium",
                            "Design visuals aligned with your brand identity",
                            "Structure pages with clear navigation",
                        ]}
                    />

                    {/* CARD 3 */}
                    <ServiceRow
                        image="/Images/Design/web_design/img4.png"
                        title="Conversion-Focused Design"
                        description="We design websites with a clear purpose to guide users toward action."
                        points={[
                            "Build lead-generation and sales-focused layouts",
                            "Place clear, compelling CTAs",
                            "Structure pages based on real user behavior",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};


// Process timeline data
export const webDesignProcessData = {
    title: "Our Web Design Process",
    steps: [
        {
            step: 1,
            title: "Understand",
            description: "Your business, audience, and goals.",
            image: "/Images/Design/web_design/process1.png",
        },
        {
            step: 2,
            title: "Plan",
            description: "Website structure, user flow, and content layout.",
            image: "/Images/Design/web_design/process2.png",
        },
        {
            step: 3,
            title: "Design",
            description: "Clean, modern, and brand-aligned visuals.",
            image: "/Images/Design/web_design/process3.png",
        },
        {
            step: 4,
            title: "Review & Refine",
            description: "Feedback-based improvements.",
            image: "/Images/Design/web_design/process4.png",
        },
        {
            step: 5,
            title: "Deliver",
            description: "Launch-ready, developer-friendly designs.",
            image: "/Images/Design/web_design/process5.png",
        },
    ],
};

// Hero section data
export const websiteDesignHero = {
    bgColor: "bg-[#FFF7C2]",
    title: "Turn Visitors into Customers with Smart Website Design",
    description:
        "We design beautiful, user-friendly websites that solve real problems and drive engagement, retention, and growth.",
    ctaText: "Book Demo",
    image: "/Images/Design/web_design/img1.png",
};

const webDesignShowcaseData = {
    title: "We Design Websites That Turn Visitors into Customers",
    image: "/Images/Design/web_design/img5.png",
};

//main component

const WebsiteDesign = () => {
    return (
        <>
            <Navbar />
            {/* HERO SECTION */}
            <ServiceHero data={websiteDesignHero} />

            {/* SERVICES SECTION */}
            <WebDesignServices />

            {/* PROCESS TIMELINE */}
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

export default WebsiteDesign;
