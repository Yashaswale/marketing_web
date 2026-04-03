import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="bg-white text-white min-h-screen">
      <Navbar />

      <main className="relative overflow-hidden">

        {/* ── Hero Section ── */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Full-bleed background image with overlay */}
          <div className="absolute inset-0">
            <img
              src="/Images/about/about_1.png"
              alt="Team collaboration"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Hero content — centered */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-[0.3em] mb-6">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-tight text-white mb-6">
              Building Smarter Digital Growth<br className="hidden sm:block" /> with AI &amp; Innovation
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-7 max-w-3xl mx-auto">
              We are a forward-thinking digital solutions company specializing in AI-powered marketing and advanced technology development. At our core, we believe in innovation, transparency, and long-term partnerships—helping our clients stay ahead in an ever-evolving digital world.
            </p>
          </div>
        </section>

        {/* ── Mission / Vision 2×2 Grid ── */}
        <section className="px-6 py-16 lg:px-10 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl">

              {/* Top-left: Mission icon (light periwinkle) */}
              <div className="bg-[#C5CBF0] flex items-center justify-center py-20 px-10">
                <img
                  src="/Images/about/about_2.png"
                  alt="Mission icon — target"
                  className="h-40 w-40 object-contain drop-shadow-2xl"
                />
              </div>

              {/* Top-right: Mission text (dark navy) */}
              <div className="bg-[#0B1680] flex flex-col justify-center py-20 px-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">Our Mission</h2>
                <p className="text-white text-base leading-7">
                  To help businesses grow smarter, faster, and more efficiently by combining creativity, data, and cutting-edge technology.
                </p>
              </div>

              {/* Bottom-left: Vision text (dark navy) */}
              <div className="bg-[#0B1680] flex flex-col justify-center py-20 px-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">Our Vision</h2>
                <p className="text-white text-base leading-7">
                  To help every business, regardless of size, harness the power of digital transformation and AI to unlock their full potential and thrive in a competitive world.
                </p>
              </div>

              {/* Bottom-right: Vision icon (light periwinkle) */}
              <div className="bg-[#C5CBF0] flex items-center justify-center py-20 px-10">
                <img
                  src="/Images/about/about_3.png"
                  alt="Vision icon — arrow"
                  className="h-40 w-40 object-contain drop-shadow-2xl"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ── Team Section ── */}
        <section className="px-6 pb-24 lg:px-10">
          <div className="max-w-7xl mx-auto">
            {/* Description text above the image */}
            <div className="bg-[#0B1680] rounded-3xl pt-16 pb-0 px-8 sm:px-12 overflow-hidden">
              <p className="text-center text-white text-base sm:text-lg leading-8 max-w-4xl mx-auto mb-12">
                With a team of experts across digital marketing, software development, and intelligent automation, we deliver end-to-end solutions—from building powerful digital platforms to driving measurable online growth. We leverage the latest innovations in artificial intelligence, analytics, and user experience design to create strategies and systems that perform.
              </p>

              {/* Team photo — full width inside the card */}
              <div className="w-full">
                <img
                  src="/Images/about/about_4.png"
                  alt="Our team"
                  className="w-full h-auto object-cover rounded-none"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default About;