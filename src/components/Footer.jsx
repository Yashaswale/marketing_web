function Footer() {
  return (
    <footer className="relative bg-[#1C1C1C] text-white overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: "url(/Images/landing%20Page/Footer.png)",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_2fr] gap-16">
          {/* LEFT */}
          <div>
            <h2 className="text-5xl font-bold tracking-wide text-yellow-400 mb-4">
              ZADYNCO
            </h2>

            <p className="text-gray-300 max-w-sm text-sm leading-relaxed mb-8">
              Smarter digital marketing powered by data, creativity, and AI.
            </p>

            <div className="flex gap-4">
              {[
                {
                  label: "Facebook",
                  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
                {
                  label: "Instagram",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07...",
                },
                {
                  label: "LinkedIn",
                  path: "M20.447 20.452h-3.554v-5.569...",
                },
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={icon.label}
                  className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h3 className="text-yellow-400 font-semibold mb-4">Service</h3>
              <ul className="space-y-2 text-sm">
                {["SEO", "Ads", "Content", "Design", "Analytics"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-yellow-400">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-yellow-400 font-semibold mb-4">Service</h3>
              <ul className="space-y-2 text-sm">
                {["Contact Us", "Privacy Policy", "Terms & Condition"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-300 hover:text-yellow-400">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-yellow-400 font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                {["About Us", "How We Work", "Blog"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-yellow-400">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center">
          <p className="text-xs text-gray-400">
            © 2025 Zadynco. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
