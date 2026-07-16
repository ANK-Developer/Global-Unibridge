import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import HowWeWork from './pages/HowWeWork.jsx'
import Services from './pages/Services.jsx'
import TNE from './pages/services/TNE.jsx'
import MarketEntry from './pages/services/MarketEntry.jsx'
import AgencyModel from './pages/services/AgencyModel.jsx'
import ELearning from './pages/services/ELearning.jsx'
import Events from './pages/Events.jsx'
import EventDetail from './pages/EventDetail.jsx'
import Articles from './pages/Articles.jsx'
import ArticleDetail from './pages/ArticleDetail.jsx'
import FAQs from './pages/FAQs.jsx'
import Contact from './pages/Contact.jsx'
import Terms from './pages/Terms.jsx'
import Privacy from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/how-we-work" element={<HowWeWork />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/tne" element={<TNE />} />
      <Route path="/services/india-market-entry" element={<MarketEntry />} />
      <Route path="/services/agency-recruitment-model" element={<AgencyModel />} />
      <Route path="/services/e-learning" element={<ELearning />} />
      <Route path="/event" element={<Events />} />
      <Route path="/events/:slug" element={<EventDetail />} />
      <Route path="/article" element={<Articles />} />
      <Route path="/article/:slug" element={<ArticleDetail />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
