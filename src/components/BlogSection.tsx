import React, { useState } from 'react';
import { BookOpen, ArrowRight, Clock, Tag } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const posts = [
    {
      title: 'How to Identify High-Probability Liquidity Sweeps in FX',
      excerpt: 'Retail support and resistance zones are designed to be hunted. Learn the mechanics of false breakouts and how institutions build inventory.',
      readTime: '6 min read',
      date: 'Sep 24, 2026',
      tag: 'Order Flow',
      author: 'Senior Analyst',
    },
    {
      title: 'The Psychology of the 1% Rule: Why Less Leverage Equals More Freedom',
      excerpt: 'Why risking more than 2% per trade virtually guarantees emotional tilt during normal statistical variance and losing streaks.',
      readTime: '5 min read',
      date: 'Sep 18, 2026',
      tag: 'Risk Management',
      author: 'MindPillar Research',
    },
    {
      title: 'Building a Pre-Market Routine that Takes Under 15 Minutes',
      excerpt: 'A structured morning checklist that strips away analysis paralysis, maps key levels, and sets automatic price alerts.',
      readTime: '4 min read',
      date: 'Sep 11, 2026',
      tag: 'Trading Routine',
      author: 'Lead Instructor',
    },
  ];

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#7064ea] bg-indigo-50 px-3 py-1 rounded-full inline-block mb-3">
              Market Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Latest Insights & Case Studies
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Actionable trading research, playbook breakdowns, and mindset mastery from the MindPillar desk.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, idx) => (
            <article
              key={post.title}
              onClick={() => setSelectedPost(selectedPost === idx ? null : idx)}
              className="group bg-[#fdfcfb] rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#7064ea]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="font-semibold text-[#7064ea] bg-indigo-50/80 px-2.5 py-0.5 rounded-full">
                    {post.tag}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#7064ea] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{post.date}</span>
                <span className="text-[#7064ea] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
