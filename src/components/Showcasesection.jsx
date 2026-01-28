const ShowcaseSection = ({
    title,
    description,
    image,
    bg = "bg-gray-50",
  }) => {
    return (
      <section className={`${bg} py-28 px-6`}>
        <div className="max-w-7xl mx-auto">
          {/* TEXT */}
          <div className="max-w-4xl mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>
  
            {description && (
              <p className="mt-6 text-lg text-gray-600 max-w-3xl">
                {description}
              </p>
            )}
          </div>
  
          {/* IMAGE */}
          <div className="relative">
            {/* Soft background plate */}
            <div className="absolute inset-0 bg-[#E9F0EE] rounded-3xl"></div>
  
            <img
              src={image}
              alt={title}
              className="relative z-10 w-full rounded-3xl shadow-sm"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default ShowcaseSection;
  