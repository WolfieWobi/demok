import React, { useState } from 'react';
import { BookOpen, CheckCircle2, ChevronRight, Clock, Award, PlayCircle } from 'lucide-react';

interface CurriculumSectionProps {
  onStartTraining: () => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ onStartTraining }) => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: '01',
      title: 'Module 1: Market Mechanics & Order Flow',
      duration: '4.5 Hours · 8 Lessons',
      badge: 'Foundation',
      description:
        'Understand the mechanics behind how currency markets, index futures, and commodities move. Stop viewing candles as mere shapes and start interpreting buyer vs seller liquidity.',
      lessons: [
        'How Central Banks and Tier-1 Liquidity Providers Operate',
        'Identifying Premium vs. Discount Equilibrium Zones',
        'Fair Value Gaps (FVG) and Imbalance Fill Mechanics',
        'High-Timeframe vs. Low-Timeframe Multi-Timeframe Alignment',
      ],
    },
    {
      id: '02',
      title: 'Module 2: High-Probability Execution Setups',
      duration: '6.0 Hours · 12 Lessons',
      badge: 'Execution Edge',
      description:
        'Master our 3 core setups with deterministic entry, stop loss, and multiple take profit rules. Eliminate emotional bias with strict criteria.',
      lessons: [
        'The London Session Liquidity Sweep Strategy',
        'New York Open Continuation & Range Expansion Model',
        'Breaker Blocks & Mitigation Execution Protocol',
        'Live Chart Case Studies & Trade Execution Drills',
      ],
    },
    {
      id: '03',
      title: 'Module 3: Institutional Risk Engineering',
      duration: '3.5 Hours · 6 Lessons',
      badge: 'Capital Protection',
      description:
        'Protect your capital like a hedge fund risk manager. Learn position sizing mathematics, volatility-adjusted stop losses, and drawdown defense.',
      lessons: [
        'The Fixed Fractional 1% Risk Formula',
        'Dynamic Partial Taking & Trailing Stops to Break-Even',
        'Correlated Asset Risk: Avoiding Double Exposure Across Pairs',
        'Managing Funded Trader Prop Firm Drawdown Constraints',
      ],
    },
    {
      id: '04',
      title: 'Module 4: Trader Psychology & Review Routine',
      duration: '4.0 Hours · 7 Lessons',
      badge: 'Mastery',
      description:
        'The final pillar separating profitable professionals from perpetual break-even traders. Construct an unbreakable pre-market routine and trade journal.',
      lessons: [
        'The 15-Minute Pre-Market Warmup & Invalidation Mapping',
        'Neurological Triggers of FOMO & Revenge Trading',
        'Operating the MindPillar Trade Journal & Analytics',
        'Quarterly Statistical Calibration: Increasing Size with Proof',
      ],
    },
  ];

  return (
    <section id="curriculum" className="py-20 lg:py-28 bg-[#fdfcfb]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#7064ea] bg-indigo-50 px-3 py-1 rounded-full inline-block mb-3">
              Structured Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
              A 4-Phase System Engineered for Consistency
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              No filler, no indicator overload. A step-by-step master curriculum designed to take you from uncertain gambler to disciplined, rule-based trader.
            </p>
          </div>

          <button
            onClick={onStartTraining}
            className="self-start md:self-auto inline-flex items-center gap-2 bg-[#7064ea] hover:bg-[#6052e4] text-white font-medium text-sm px-6 py-3 rounded-full shadow-md transition-all shrink-0"
          >
            <span>Start Module 1 Free</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Module Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Module Selector Sidebar */}
          <div className="lg:col-span-5 space-y-3">
            {modules.map((mod, index) => (
              <div
                key={mod.id}
                onClick={() => setActiveModule(index)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer select-none ${
                  activeModule === index
                    ? 'bg-white border-[#7064ea] shadow-lg shadow-indigo-100/50 -translate-y-0.5'
                    : 'bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#7064ea]">
                    PHASE {mod.id}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    {mod.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {mod.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{mod.duration}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Module Detail Showcase */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/80 shadow-md">
            <div className="flex items-center gap-2 text-xs font-bold text-[#7064ea] uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>Deep Dive Preview</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
              {modules[activeModule].title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {modules[activeModule].description}
            </p>

            <div className="border-t border-slate-100 pt-6 mb-8">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                What you will master in this module:
              </h4>
              <div className="space-y-3">
                {modules[activeModule].lessons.map((lesson, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-indigo-50/40 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium text-slate-800">
                      {lesson}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100">
              <div className="flex items-center gap-2.5">
                <PlayCircle className="w-5 h-5 text-[#7064ea]" />
                <span className="text-xs font-medium text-slate-700">
                  Includes full HD video lessons, downloadable PDF playbooks & journal templates.
                </span>
              </div>
              <button
                onClick={onStartTraining}
                className="w-full sm:w-auto text-xs font-bold text-[#7064ea] hover:text-[#6052e4] hover:underline whitespace-nowrap cursor-pointer"
              >
                Enroll Free →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
