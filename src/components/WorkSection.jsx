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
            const isYellowTab = tab.id === 'mobile' || tab.id === 'content';
            const activeBgClass = isYellowTab ? 'bg-yellow-400 text-gray-900' : 'bg-blue-700 text-white';

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-6 py-3 text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? `${activeBgClass} shadow`
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

        {/* LOGO STRIP */}
        <div className="mt-8">
          {/* full-bleed strip; fixed bottom on small screens, static on lg+ */}
          <div className="bg-gray-900 w-full fixed bottom-0 left-0 z-40 lg:static lg:top-auto">
            <div className="max-w-7xl mx-auto lg:px-6 px-0 py-4 lg:py-6">
              <div className="flex items-center justify-between gap-6 lg:gap-12 flex-nowrap overflow-hidden lg:overflow-visible">
                {[1,2,3,4,5,6,7,8,9].map((n) => (
                  <div key={n} className="flex-1 flex items-center justify-center min-w-[64px] lg:min-w-[80px]">
                    <img
                      src={`/Images/landing Page/logo/logo${n}.png`}
                      alt={`logo-${n}`}
                      className="h-6 sm:h-8 md:h-10 lg:h-8 object-contain opacity-90 grayscale"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkThatMakesImpact;
