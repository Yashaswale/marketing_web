import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Monitor, Smartphone, Briefcase, Palette, Megaphone } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    category: "Web Design",
    title: "Modern Portal Layout",
    image: "/Images/Portfolio/Img_1.jpg",
  },
  {
    id: 2,
    category: "Web Design",
    title: "Product Showcase Dashboard",
    image: "/Images/Portfolio/Img_2.jpg",
  },
  {
    id: 3,
    category: "Social Media Design",
    title: "Campaign Insights Tracker",
    image: "/Images/Portfolio/Img_3.jpg",
  },
  {
    id: 4,
    category: "Web Design",
    title: "Mobile Responsive Layout",
    image: "/Images/Portfolio/Img_4.jpg",
  },
  {
    id: 5,
    category: "Web Design",
    title: "Finance Dashboard Interface",
    image: "/Images/Portfolio/Img_5.jpg",
  },
  {
    id: 6,
    category: "Web Design",
    title: "Data Analytics Dashboard",
    image: "/Images/Portfolio/Img_6.jpg",
  },
  {
    id: 7,
    category: "Web Design",
    title: "Commercial Landing Page",
    image: "/Images/Portfolio/Img_7.jpg",
  },
  {
    id: 8,
    category: "Web Design",
    title: "E-commerce Platform Layout",
    image: "/Images/Portfolio/Img_8.jpg",
  },
  {
    id: 9,
    category: "Branding",
    title: "Brand Identity System",
    image: "/Images/Portfolio/Img_9.jpg",
  },
  {
    id: 10,
    category: "Logo Design",
    title: "Fintech Startup Logo",
    image: "/Images/Portfolio/Img_10.jpg",
  },
  {
    id: 11,
    category: "App Design",
    title: "Fintech Dashboard Layout",
    image: "/Images/Portfolio/Img_11.jpg",
  },
  {
    id: 12,
    category: "Social Media Design",
    title: "Marketing Campaign Ad Banner",
    image: "/Images/Portfolio/Img_12.jpg",
  },
  {
    id: 13,
    category: "Web Design",
    title: "SaaS Landing Page Concept",
    image: "/Images/Portfolio/Img_13.jpg",
  },
  {
    id: 14,
    category: "Logo Design",
    title: "Vrooom Brand Design",
    image: "/Images/Portfolio/Img_14.jpg",
  },
  {
    id: 15,
    category: "Web Design",
    title: "SaaS Platform Dashboard",
    image: "/Images/Portfolio/Img_15.jpg",
  },
];

const categories = [
  { id: "all", label: "All Work" },
  { id: "web", label: "Web Design", icon: Monitor },
  { id: "app", label: "App Design", icon: Smartphone },
  { id: "branding", label: "Branding", icon: Briefcase },
  { id: "logo", label: "Logo", icon: Palette },
  { id: "social", label: "Social Media Design", icon: Megaphone },
];

function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    // Scroll to top when page is loaded
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredItems = portfolioItems.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "web") return item.category === "Web Design";
    if (activeTab === "app") return item.category === "App Design";
    if (activeTab === "branding") return item.category === "Branding";
    if (activeTab === "logo") return item.category === "Logo Design";
    if (activeTab === "social") return item.category === "Social Media Design";
    return true;
  });

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow py-16 px-6 md:px-12 lg:px-24">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm block mb-3">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Crafting Digital Experiences
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Where precision meets imagination - we design, code, and execute across dynamic industries.
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-16 max-w-5xl mx-auto">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeTab === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-yellow-400 border-yellow-400 text-gray-900 shadow-md transform scale-105"
                    : "bg-white border-blue-700 text-blue-700 hover:bg-blue-50 hover:border-blue-800"
                }`}
              >
                {IconComponent && <IconComponent size={16} />}
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-2xl bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03]"
            >
              {/* Image with hover zoom */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Bottom gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>

              {/* Content text inside card overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-left pointer-events-none">
                <span className="text-white/70 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1.5">
                  {item.category}
                </span>
                <h3 className="text-white text-base sm:text-lg font-bold leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if no items match */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Portfolio;
