import { Link } from "react-router-dom";

// Social icons array
const socialIcons = [
  {
    label: "Facebook",
    href: "https://facebook.com/",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.797 2.163 15.417 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.545 1.459 2.488 2.516 2.216 3.689 2.158 4.966.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.33 2.45 1.387 3.507 1.057 1.057 2.23 1.329 3.507 1.387C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.45-.33 3.507-1.387 1.057-1.057 1.329-2.23 1.387-3.507.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.33-2.45-1.387-3.507C19.398.402 18.225.13 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    path: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm14.25 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z",
  },
];

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
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_2fr] gap-16">
          
          {/* LEFT */}
          <div>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{
                color: "#FFD600",
                textShadow: "0 2px 12px rgba(0,0,0,0.7)",
                letterSpacing: "0.08em",
              }}
            >
              ZADYNCO
            </h2>

            <p className="text-gray-300 max-w-sm text-sm leading-relaxed mb-8">
              Smarter digital marketing powered by data, creativity, and AI.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              {socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.label}
                  className="w-10 h-10 rounded-md bg-white/10 text-white flex items-center justify-center 
                             hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            
            {/* SERVICES */}
            <div>
              <h3 className="text-yellow-400 font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "SEO", href: "/seo/local" },
                  { label: "Ads", href: "/ads/local" },
                  { label: "Content", href: "/content/personal-brand" },
                  { label: "Design", href: "/design/website" },
                  { label: "Analytics", href: "/analytics/strategy" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-yellow-400 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-yellow-400 font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Contact Us", href: "#contact" },
                  { label: "Privacy Policy", href: "#privacy" },
                  { label: "Terms & Condition", href: "#terms" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-yellow-400 transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-yellow-400 font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "How We Work", href: "#how-we-work" },
                  { label: "Tech Development", href: "/tech/web" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-yellow-400 transition"
                    >
                      {item.label}
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
