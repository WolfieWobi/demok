import React from 'react';
import { ShieldCheck, Compass, Brain, ArrowUpRight, Zap, Target } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: 'Institutional Market Clarity',
      description: 'Stop guessing indicators. Learn where banks and institutions place resting orders, absorb retail liquidity, and generate predictable trending expansions.',
      highlight: 'Order Flow & Liquidity',
    },
    {
      icon: Target,
      title: 'Rule-Based Mechanical Execution',
      description: 'Eliminate emotional hesitation with an objective entry checklist. If all 5 criteria are met, you enter without fear. If not, you preserve capital.',
      highlight: 'Zero Second-Guessing',
    },
    {
      icon: ShieldCheck,
      title: 'Mathematical Risk Engineering',
      description: 'Capital preservation is the only true Holy Grail. Protect accounts with hard stop-losses, positive mathematical expectancy, and asymmetric reward ratios.',
      highlight: '1:3 Minimum R:R',
    },
    {
      icon: Brain,
      title: 'Peak Performance Psychology',
      description: 'Transform self-sabotage into iron discipline. Build pre-market routines, post-trade journaling, and emotional immunity to drawdowns.',
      highlight: 'Forensic Review',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#7064ea] bg-indigo-50/80 px-3 py-1 rounded-full inline-block mb-3">
            The Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Why 90% of Traders Fail — and How a System Fixes It
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Retail trading is rigged against emotional decision-makers. MindPillar provides the structural blueprint that turns chaotic market noise into a methodical business.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative bg-[#fdfcfb] rounded-2xl p-7 border border-slate-200/80 hover:border-[#7064ea]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#7064ea] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#7064ea] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#7064ea] uppercase tracking-wider block mb-1">
                    {pillar.highlight}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table / Box: Emotional vs Systematic */}
        <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/70">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* The Old Way */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-500 bg-rose-50 px-3 py-1 rounded-full">
                The Emotional Retail Trap
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Trading on random signals, feelings & social media noise
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-rose-500 font-bold">✕</span> Buying tops due to FOMO when green candles pump
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-500 font-bold">✕</span> Moving stop losses wider during drawdowns hoping for reversals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-500 font-bold">✕</span> Overleveraging after a loss to revenge-trade back to even
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-500 font-bold">✕</span> No trade journal or statistical awareness of expectancy
                </li>
              </ul>
            </div>

            {/* The MindPillar Way */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#7064ea]/20 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                The MindPillar Method
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Operating as a systematic, risk-managed business
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Pre-market checklist validation with quantified entry points
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Immutable 1% max account risk and automatic bracket orders
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Mandatory 3-trade daily loss shutdown rule to prevent tilt
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Automated trade logging with monthly expectancy optimization
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
