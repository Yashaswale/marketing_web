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
    <section className="bg-gray-50 py-10 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10">
          Work That Makes Impact
        </h2>

        {/* TABS - Mobile: 2 columns, Tablet+: single row */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap bg-blue-100 rounded-lg sm:rounded-xl p-1 mb-6 sm:mb-8 md:mb-12 gap-1">
          {tabs.map((tab) => {
            const isActive = activeTab.id === tab.id;
            const isYellowTab = tab.id === 'mobile' || tab.id === 'content';
            const activeBgClass = isYellowTab ? 'bg-yellow-400 text-gray-900' : 'bg-blue-700 text-white';

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`sm:flex-1 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? `${activeBgClass} shadow-md`
                    : "text-blue-900 hover:bg-blue-200"
                }`}
              >
                <span className="block sm:hidden leading-tight">
                  {tab.label.split(' ').slice(0, 2).join(' ')}
                </span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* IMAGE - with key prop to force re-render on tab change */}
        <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-white shadow-lg">
          <img
            key={activeTab.id}
            src={activeTab.image}
            alt={activeTab.label}
            className="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[520px] object-cover animate-fadeIn"
          />
        </div>

        {/* LOGO STRIP */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <div className="bg-gray-900 w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6">
              {/* Mobile: 3 columns with 2 rows visible */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                {[1,2,3,4,5,6,7,8,9].map((n) => (
                  <div 
                    key={n} 
                    className="flex items-center justify-center"
                  >
                    <img
                      src={`/Images/landing Page/logo/logo${n}.png`}
                      alt={`Partner logo ${n}`}
                      className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add fadeIn animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default WorkThatMakesImpact;