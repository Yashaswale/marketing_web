import { useState } from "react";

const tabs = [
  {
    id: "website",
    label: "Website Design",
    image: "/Images/landing Page/work1.png",
  },
  {
    id: "mobile",
    label: "Mobile App",
    image: "/Images/landing Page/work2.png",
  },
  {
    id: "branding",
    label: "Branding & Logo Design",
    image: "/Images/landing Page/work3.png",
  },
  {
    id: "content",
    label: "Content Creation",
    image: "/Images/landing Page/work4.png",
  },
];

const WorkThatMakesImpact = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-gray-50 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-gray-900 mb-10">
          Work That Makes Impact
        </h2>

        {/* TABS */}
        <div className="flex flex-wrap bg-blue-100 rounded-xl p-1 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab.id === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-6 py-3 text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? "bg-blue-900 text-white shadow"
                    : "text-blue-900 hover:bg-blue-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* IMAGE */}
        <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg">
          <img
            src={activeTab.image}
            alt={activeTab.label}
            className="w-full h-[520px] object-cover transition-opacity duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkThatMakesImpact;
