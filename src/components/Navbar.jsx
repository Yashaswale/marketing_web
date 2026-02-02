import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
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
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Local SEO</span>
                <ChevronRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/seo/international"
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>International SEO</span>
                <ChevronRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/seo/ecommerce"
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Ecommerce SEO</span>
                <ChevronRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/seo/page-speed"
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Google Page Speed</span>
                <ChevronRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/seo/enterprise"
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
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
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Website Design</span>
                <ChevronRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/design/app"
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>App Design</span>
                <ChevronRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/design/branding"
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Logo and Product Branding</span>
                <ChevronRight size={16} className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/design/creative"
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
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
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Personal Brand Content</span>
                <ChevronRight
                  size={16}
                  className="text-yellow-400 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/content/short-form-video"
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
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
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Analytics Strategy & Setup</span>
                <ChevronRight
                  size={16}
                  className="text-yellow-400 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/analytics/performance"
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
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
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Local & Hyperlocal Ads</span>
                <ChevronRight
                  size={16}
                  className="text-yellow-400 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/ads/ugc"
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>UGC & Creator Ads</span>
                <ChevronRight
                  size={16}
                  className="text-yellow-400 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/ads/ecommerce"
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
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
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
              >
                <span>Web Development</span>
                <ChevronRight
                  size={16}
                  className="text-yellow-400 group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/tech/app"
                className="block px-4 py-3 text-white hover:bg-blue-600 transition-colors flex items-center justify-between group"
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

      <button className="lg:hidden text-white">
        <Menu size={28} />
      </button>
    </nav>
  );
};

export default Navbar;
