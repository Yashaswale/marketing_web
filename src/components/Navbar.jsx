import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileOpenCategory, setMobileOpenCategory] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setIsMobileOpen(false);
        setMobileOpenCategory(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="relative z-50 flex items-center justify-between px-8 py-6 bg-blue-700 backdrop-blur-sm">
      <Link to="/" className="flex flex-col">
        <h1 className="text-3xl font-bold text-yellow-400">ZADYNCO.</h1>
        <p className="text-xs text-white/90">AI Powered Digital Marketing & Tech Development</p>
      </Link>

      <div className="hidden lg:flex items-center gap-8">
        {/* SEO Dropdown */}
        <div className="relative">
          <button
            className="text-white hover:text-yellow-400 transition-colors flex items-center gap-1"
            onClick={() => setOpenDropdown(openDropdown === 'seo' ? null : 'seo')}
          >
            SEO
          </button>
          {openDropdown === 'seo' && (
            <div className="absolute top-full left-0 mt-1 bg-blue-700 shadow-lg rounded-md min-w-[240px] py-2">
              <Link
                to="/seo/local"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Local SEO</span>
                <ChevronRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/seo/international"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>International SEO</span>
                <ChevronRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/seo/ecommerce"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Ecommerce SEO</span>
                <ChevronRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/seo/page-speed"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Google Page Speed</span>
                <ChevronRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/seo/enterprise"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Enterprise SEO</span>
                <ChevronRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>

        {/* Design Dropdown */}
        <div className="relative">
          <button
            className="text-white hover:text-yellow-400 transition-colors flex items-center gap-1"
            onClick={() => setOpenDropdown(openDropdown === 'design' ? null : 'design')}
          >
            Design
          </button>
          {openDropdown === 'design' && (
            <div className="absolute top-full left-0 mt-1 bg-blue-700 shadow-lg rounded-md min-w-[240px] py-2">
              <Link
                to="/design/website"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Website Design</span>
                <ChevronRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/design/app"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>App Design</span>
                <ChevronRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/design/branding"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Logo and Product Branding</span>
                <ChevronRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/design/creative"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Social Media Creative Design</span>
                <ChevronRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>

        {/* Content Dropdown */}
        <div className="relative">
          <button
            className="text-white hover:text-yellow-400 transition-colors flex items-center gap-1"
            onClick={() => setOpenDropdown(openDropdown === 'content' ? null : 'content')}
          >
            Content
          </button>
          {openDropdown === 'content' && (
            <div className="absolute top-full left-0 mt-1 bg-blue-700 shadow-lg rounded-md min-w-[260px] py-2">
              <Link
                to="/content/personal-brand"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Personal Brand Content</span>
                <ChevronRight
                  size={16}
                  className="text-yellow-400 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/content/short-form-video"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Short-Form Video Content</span>
                <ChevronRight
                  size={16}
                  className="text-yellow-400 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          )}
        </div>

        {/* Analytics Dropdown */}
        <div className="relative">
          <button
            className="text-white hover:text-yellow-400 transition-colors flex items-center gap-1"
            onClick={() => setOpenDropdown(openDropdown === 'analytics' ? null : 'analytics')}
          >
            Analytics
          </button>
          {openDropdown === 'analytics' && (
            <div className="absolute top-full left-0 mt-1 bg-blue-700 shadow-lg rounded-md min-w-[280px] py-2">
              <Link
                to="/analytics/strategy"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Analytics Strategy & Setup</span>
                <ChevronRight
                  size={16}
                  className="text-yellow-400 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/analytics/performance"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Performance & Marketing Analytics</span>
                <ChevronRight
                  size={16}
                  className="text-yellow-400 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          )}
        </div>

        {/* Ads Dropdown */}
        <div className="relative">
          <button
            className="text-white hover:text-yellow-400 transition-colors flex items-center gap-1"
            onClick={() => setOpenDropdown(openDropdown === 'ads' ? null : 'ads')}
          >
            Ads
          </button>
          {openDropdown === 'ads' && (
            <div className="absolute top-full left-0 mt-1 bg-blue-700 shadow-lg rounded-md min-w-[260px] py-2">
              <Link
                to="/ads/local"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Local & Hyperlocal Ads</span>
                <ChevronRight
                  size={16}
                  className="text-yellow-400 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/ads/ugc"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>UGC & Creator Ads</span>
                <ChevronRight
                  size={16}
                  className="text-yellow-400 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/ads/ecommerce"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>E-commerce Ads</span>
                <ChevronRight
                  size={16}
                  className="text-yellow-400 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          )}
        </div>

        {/* Tech Development Dropdown */}
        <div className="relative">
          <button
            className="text-white hover:text-yellow-400 transition-colors flex items-center gap-1"
            onClick={() => setOpenDropdown(openDropdown === 'tech' ? null : 'tech')}
          >
            Tech Development
          </button>
          {openDropdown === 'tech' && (
            <div className="absolute top-full left-0 mt-1 bg-blue-700 shadow-lg rounded-md min-w-[260px] py-2">
              <Link
                to="/tech/web"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Web Development</span>
                <ChevronRight
                  size={16}
                  className="text-yellow-400 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/tech/app"
                className="px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>App Development</span>
                <ChevronRight
                  size={16}
                  className="text-yellow-400 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          )}
        </div>
        <Link 
          to="/#about" 
          className="text-white hover:text-yellow-400 transition-colors"
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            } else {
              // Let the router handle navigation, then scroll
              setTimeout(() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }
          }}
        >
          About Us
        </Link>
        <Link 
          to="/#contact"
          className="px-6 py-2 bg-white text-blue-700 font-semibold rounded hover:bg-yellow-400 transition-colors"
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            } else {
              // Let the router handle navigation, then scroll
              setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }
          }}
        >
          Book a Call with Us
        </Link>
      </div>

      <button 
        className="lg:hidden text-white"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-blue-700 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {/* SEO */}
            <div>
              <button
                className="w-full flex items-center justify-between text-white hover:text-yellow-400 transition-colors py-3 px-2"
                onClick={() => setMobileOpenCategory(mobileOpenCategory === 'seo' ? null : 'seo')}
              >
                <span>SEO</span>
                {mobileOpenCategory === 'seo' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              {mobileOpenCategory === 'seo' && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/seo/local"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Local SEO
                  </Link>
                  <Link
                    to="/seo/international"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    International SEO
                  </Link>
                  <Link
                    to="/seo/ecommerce"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Ecommerce SEO
                  </Link>
                  <Link
                    to="/seo/page-speed"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Google Page Speed
                  </Link>
                  <Link
                    to="/seo/enterprise"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Enterprise SEO
                  </Link>
                </div>
              )}
            </div>

            {/* Design */}
            <div>
              <button
                className="w-full flex items-center justify-between text-white hover:text-yellow-400 transition-colors py-3 px-2"
                onClick={() => setMobileOpenCategory(mobileOpenCategory === 'design' ? null : 'design')}
              >
                <span>Design</span>
                {mobileOpenCategory === 'design' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              {mobileOpenCategory === 'design' && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/design/website"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Website Design
                  </Link>
                  <Link
                    to="/design/app"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    App Design
                  </Link>
                  <Link
                    to="/design/branding"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Logo and Product Branding
                  </Link>
                  <Link
                    to="/design/creative"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Social Media Creative Design
                  </Link>
                </div>
              )}
            </div>

            {/* Content */}
            <div>
              <button
                className="w-full flex items-center justify-between text-white hover:text-yellow-400 transition-colors py-3 px-2"
                onClick={() => setMobileOpenCategory(mobileOpenCategory === 'content' ? null : 'content')}
              >
                <span>Content</span>
                {mobileOpenCategory === 'content' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              {mobileOpenCategory === 'content' && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/content/personal-brand"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Personal Brand Content
                  </Link>
                  <Link
                    to="/content/short-form-video"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Short-Form Video Content
                  </Link>
                </div>
              )}
            </div>

            {/* Analytics */}
            <div>
              <button
                className="w-full flex items-center justify-between text-white hover:text-yellow-400 transition-colors py-3 px-2"
                onClick={() => setMobileOpenCategory(mobileOpenCategory === 'analytics' ? null : 'analytics')}
              >
                <span>Analytics</span>
                {mobileOpenCategory === 'analytics' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              {mobileOpenCategory === 'analytics' && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/analytics/strategy"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Analytics Strategy & Setup
                  </Link>
                  <Link
                    to="/analytics/performance"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Performance & Marketing Analytics
                  </Link>
                </div>
              )}
            </div>

            {/* Ads */}
            <div>
              <button
                className="w-full flex items-center justify-between text-white hover:text-yellow-400 transition-colors py-3 px-2"
                onClick={() => setMobileOpenCategory(mobileOpenCategory === 'ads' ? null : 'ads')}
              >
                <span>Ads</span>
                {mobileOpenCategory === 'ads' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              {mobileOpenCategory === 'ads' && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/ads/local"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Local & Hyperlocal Ads
                  </Link>
                  <Link
                    to="/ads/ugc"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    UGC & Creator Ads
                  </Link>
                  <Link
                    to="/ads/ecommerce"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    E-commerce Ads
                  </Link>
                </div>
              )}
            </div>

            {/* Tech Development */}
            <div>
              <button
                className="w-full flex items-center justify-between text-white hover:text-yellow-400 transition-colors py-3 px-2"
                onClick={() => setMobileOpenCategory(mobileOpenCategory === 'tech' ? null : 'tech')}
              >
                <span>Tech Development</span>
                {mobileOpenCategory === 'tech' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              </button>
              {mobileOpenCategory === 'tech' && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/tech/web"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/tech/app"
                    className="block py-2 px-2 text-white/90 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    App Development
                  </Link>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link 
              to="/#about" 
              className="block text-white hover:text-yellow-400 transition-colors py-3 px-2"
              onClick={(e) => {
                setIsMobileOpen(false);
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  setTimeout(() => {
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }
              }}
            >
              About Us
            </Link>

            {/* Book a Call */}
            <Link 
              to="/#contact"
              className="block px-6 py-3 bg-[#C4C6F9] text-blue-700 font-semibold rounded hover:bg-yellow-400 transition-colors text-center mt-2"
              onClick={(e) => {
                setIsMobileOpen(false);
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }
              }}
            >
              Book a Call with Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
