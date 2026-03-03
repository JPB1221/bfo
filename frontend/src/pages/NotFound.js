import React from 'react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { BtnPrimary, BtnOutline } from '../components/Buttons';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="relative min-h-[80vh] flex items-center justify-center scanline-overlay grid-texture">
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <Reveal direction="scale">
            <span className="font-mono text-[0.65rem] text-blue-500/50 block mb-4">ERROR /404</span>
            <h1 className="font-heading font-[800] text-6xl md:text-8xl uppercase tracking-wide text-slate-50 mb-4">
              404
            </h1>
            <p className="text-slate-400 text-lg mb-10">
              This page doesn't exist. It may have been moved or the URL is incorrect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BtnPrimary to="/" data-testid="404-home">Back to Home</BtnPrimary>
              <BtnOutline to="/contact" data-testid="404-contact">Contact Us</BtnOutline>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
