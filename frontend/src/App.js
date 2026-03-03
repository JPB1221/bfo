import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Government from './pages/Government';
import Enterprise from './pages/Enterprise';
import LocalBusiness from './pages/LocalBusiness';
import Capabilities from './pages/Capabilities';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Contact from './pages/Contact';
import RequestProposal from './pages/RequestProposal';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#070b16] flex flex-col">
        <Navbar />
        <main className="flex-1">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
