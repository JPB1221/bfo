import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { BtnPrimary } from '../components/Buttons';
import { ARTICLES } from './Blog';

export default function BlogPost() {
  const { slug } = useParams();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-heading font-bold text-2xl text-slate-50 mb-4">Article Not Found</h1>
        <Link to="/insights" className="text-blue-400 text-sm hover:underline">Back to Insights</Link>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Organization",
      "name": "Bare Force One LLC",
      "url": "https://bareforceone.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bare Force One LLC",
      "logo": { "@type": "ImageObject", "url": "https://bareforceone.com/logo.png" }
    },
    "url": `https://bareforceone.com/insights/${article.slug}`,
    "mainEntityOfPage": `https://bareforceone.com/insights/${article.slug}`
  };

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        path={`/insights/${article.slug}`}
      />
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

      <article className="pt-28 pb-20 lg:pt-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Reveal>
            <Link
              to="/insights"
              data-testid="blog-back"
              className="inline-flex items-center gap-2 text-slate-500 text-xs font-heading uppercase tracking-[0.15em] hover:text-blue-400 transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to Insights
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-heading text-[0.55rem] font-bold uppercase tracking-[0.2em] text-blue-400 bg-blue-500/5 border border-blue-500/20 px-3 py-1">
                {article.sector}
              </span>
              <span className="flex items-center gap-1 font-mono text-[0.6rem] text-slate-500">
                <Clock size={10} /> {article.readTime}
              </span>
              <span className="font-mono text-[0.6rem] text-slate-600">{article.date}</span>
            </div>

            <h1 className="font-heading font-[800] text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-slate-50 leading-[1.05] mb-4">
              {article.title}
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">{article.excerpt}</p>
            <div className="line-draw w-20 mb-12" />
          </Reveal>

          <Reveal delay={0.1}>
            <div data-testid="blog-content" className="space-y-6">
              {article.content.map((block, i) => {
                if (block.type === 'h3') {
                  return (
                    <h3 key={i} className="font-heading font-bold text-lg uppercase tracking-wide text-slate-50 mt-10 mb-2">
                      {block.text}
                    </h3>
                  );
                }
                return (
                  <p key={i} className="text-slate-400 text-base leading-[1.8]">
                    {block.text}
                  </p>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="border-t border-slate-800/40 mt-16 pt-12">
              <h3 className="font-heading font-bold text-lg uppercase tracking-wide text-slate-50 mb-4">
                Have a Project in Mind?
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                We'd like to hear about it. Tell us what you're building and we'll respond with a structured approach.
              </p>
              <BtnPrimary to="/request-proposal" data-testid="blog-cta">
                Request Proposal
              </BtnPrimary>
            </div>
          </Reveal>
        </div>
      </article>
    </>
  );
}
