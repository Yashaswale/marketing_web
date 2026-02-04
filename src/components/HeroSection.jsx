import bgVideo from "/Images/bgvideo.mp4";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
        <h2 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6 leading-tight">
          Turning Data, Tech &<br />
          Creativity into Growth
        </h2>
        <p className="text-xl text-white max-w-3xl">
          We help individuals and businesses grow with smarter strategies, powerful<br />
          technology, and meaningful creative execution.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
