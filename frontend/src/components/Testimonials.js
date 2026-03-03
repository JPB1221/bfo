import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  { text: "The BFO team was very communicative and did a fantastic job of optimizing our page for both speed and on-page SEO!", project: "Page Speed & SEO Optimization" },
  { text: "I would recommend Bare Force One to a friend, I am very satisfied with the job they have done, and their very timely communication.", project: "DotNetNuke Development" },
  { text: "They were very responsive and completed the work quickly and ahead of schedule. Would highly recommend.", project: "Wix Subscription Website" },
  { text: "There is no way the BFO team could have done better than what they did! They guided me on my website, gave great feedback, and even gave some great innovative ideas for my business.", project: "Website Strategy & Development" },
  { text: "Bare Force One is incredible and you are missing out if you are not considering them for your website!", project: "Web Development" },
  { text: "The BFO team was great. Very responsive, knowledgeable, and flexible. Easy to work with and high quality work. I highly recommend them!", project: "Full Stack Development" },
  { text: "Bare Force One was very responsive to helping with an immediate, urgent need with my Expression Engine issues. They were flexible and easy to work with.", project: "Expression Engine Fix" },
  { text: "It was a pleasure working with Bare Force One, who did a great job and delivered exactly as promised.", project: "Web Application" },
  { text: "The BFO team was wonderful to work with, they are very enthusiastic and an excellent communicator.", project: "Wix Expert" },
  { text: "Super professional and communicative! We'll be sure to ask Bare Force One to assist with additional projects moving forward. Thanks!", project: "Language Data Project" },
];

function ReviewCard({ review }) {
  return (
    <div className="flex-shrink-0 w-[380px] bg-[#0c1222]/80 backdrop-blur-sm border border-slate-800/40 p-7 hover:border-blue-500/30 transition-all duration-500 group flex flex-col">
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={12} className="fill-blue-500 text-blue-500" />
        ))}
        <span className="ml-2 font-mono text-[0.6rem] text-slate-500">5.00</span>
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-5 font-body flex-1">
        "{review.text}"
      </p>
      <div className="border-t border-slate-800/40 pt-4 flex items-center justify-between">
        <span className="font-mono text-[0.6rem] text-slate-500 uppercase tracking-wider">{review.project}</span>
        <span className="text-[0.6rem] text-blue-500/60 font-heading uppercase tracking-widest">Verified Client</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section data-testid="testimonials-section" className="relative bg-[#070b16] border-y border-slate-800/30 py-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="section-number block mb-3">/05</span>
            <h2 className="font-heading font-[800] text-3xl md:text-4xl uppercase tracking-wide text-slate-50">
              What Our <span className="gradient-text">Partners</span> Say
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="pulse-dot" />
            <span className="font-mono text-xs text-slate-500">10+ verified reviews</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070b16] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070b16] to-transparent z-10 pointer-events-none" />

        <div className="testimonial-track pl-6">
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
