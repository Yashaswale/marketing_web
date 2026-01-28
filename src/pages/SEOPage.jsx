import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MarketingSections from '../components/SEO/SeoComponent';
import { localSEOSections } from '../components/SEO/Localseo';
import { internationalSEOSections } from '../components/SEO/InternationalSEO';
import { ecommerceSEOSections } from '../components/SEO/EcommerceSEO';
import { pageSpeedSEOSections } from '../components/SEO/PageSpeedSEO';
import { enterpriseSEOSections } from '../components/SEO/EnterpriseSEO';

const SEO_DATA = {
  local: localSEOSections,
  international: internationalSEOSections,
  ecommerce: ecommerceSEOSections,
  'page-speed': pageSpeedSEOSections,
  enterprise: enterpriseSEOSections,
};

const SEOPage = () => {
  const { type } = useParams();
  const sections = SEO_DATA[type] || localSEOSections;

  return (
    <>
      <Navbar />
      <MarketingSections sections={sections} />
    </>
  );
};

export default SEOPage;

