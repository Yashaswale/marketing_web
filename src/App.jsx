import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SEOPage from './pages/SEOPage';
import WebsiteDesign from './components/Design/WebsiteDesign';
import AppDesign from './components/Design/AppDesign';
import Branding from './components/Design/BrandingServices';
import CreativeDesign from './components/Design/CreativeDesign';
import PersonalBrandContent from './components/Content/PersonalbrandContent';
import ShortFormVidContent from './components/Content/ShortFormVidContent';
import LocalAds from './components/Ads/LocalAds';
import UgcAds from './components/Ads/UgcAds';
import EcomAds from './components/Ads/EcomAds';
import StatergyAnalytics from './components/Analytics/AnalyticsStatergy';
import PerformanceAnalytics from './components/Analytics/PerformanceAnalytics';
import WebDevelopment from './components/TechDevelopment/Webdev';
import AppDevelopment from './components/TechDevelopment/Appdev';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seo/:type" element={<SEOPage />} />
        <Route path="/design/website" element={<WebsiteDesign />} />
        <Route path="/design/app" element={<AppDesign />} />
        <Route path="/design/branding" element={<Branding />} />
        <Route path="/design/creative" element={<CreativeDesign />} />
        <Route path="/content/personal-brand" element={<PersonalBrandContent />} />
        <Route path="/content/short-form-video" element={<ShortFormVidContent />} />
        <Route path="/ads/local" element={<LocalAds />} />
        <Route path="/ads/ugc" element={<UgcAds />} />
        <Route path="/ads/ecommerce" element={<EcomAds />} />
        <Route path="/analytics/strategy" element={<StatergyAnalytics />} />
        <Route path="/analytics/performance" element={<PerformanceAnalytics />} />
        <Route path="/tech/web" element={<WebDevelopment />} />
        <Route path="/tech/app" element={<AppDevelopment />} />
      </Routes>
    </Router>
  );
}

export default App;
