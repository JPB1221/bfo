import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

const Government = lazy(() => import('./pages/Government'));
const Enterprise = lazy(() => import('./pages/Enterprise'));
const LocalBusiness = lazy(() => import('./pages/LocalBusiness'));
const Capabilities = lazy(() => import('./pages/Capabilities'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const RequestProposal = lazy(() => import('./pages/RequestProposal'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#070b16] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/government" element={<Government />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/local-business" element={<LocalBusiness />} />
              <Route path="/capabilities" element={<Capabilities />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/request-proposal" element={<RequestProposal />} />
              <Route path="/insights" element={<Blog />} />
              <Route path="/insights/:slug" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
