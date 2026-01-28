const ServiceHero = ({ data }) => {
    return (
      <section className={`${data.bgColor} py-20 px-6`}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-6">
              {data.title}
            </h1>
  
            <p className="text-gray-700 max-w-xl mb-8">
              {data.description}
            </p>
  
            {data.ctaText && (
              <button className="bg-yellow-400 hover:bg-yellow-500 transition px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                {data.ctaText}
                <span>→</span>
              </button>
            )}
          </div>
  
          {/* RIGHT IMAGE / MOCKUP */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-xl p-4">
              <img
                src={data.image}
                alt={data.imageAlt || "Hero visual"}
                className="rounded-xl max-w-full h-auto"
              />
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default ServiceHero;



  //example data 

//   export const websiteDesignHero = {
//     bgColor: "bg-[#FFF7C2]",
//     title: "Turn Visitors into Customers with Smart Website Design",
//     description:
//       "We design beautiful, user-friendly websites that solve real problems and drive engagement, retention, and growth.",
//     ctaText: "Book Demo",
//     image: "/images/website-design.png",
//   };
  
  