import React from 'react';
import { ArrowRight, Play, Users, BookOpen, BarChart3, ShieldCheck } from 'lucide-react';
import { HeroFloatingCards } from './HeroFloatingCards.tsx';

interface HeroProps {
  onExploreCourse: () => void;
  onSeeHowItWorks: () => void;
  onCardClick: (cardName: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCourse,
  onSeeHowItWorks,
  onCardClick,
}) => {
  // Provided background image url from user brief
  const bgImageUrl = 'https://assets.cdn.filesafe.space/pb7jC8AQPGfj0vcrymWI/media/6abbc372001f4ad24e5dc52a.png';

  const stats = [
    {
      icon: Users,
      value: '1,000+',
      label: 'Students',
    },
    {
      icon: BookOpen,
      value: 'Lifetime',
      label: 'Access',
    },
    {
      icon: BarChart3,
      value: 'Structured',
      label: 'Curriculum',
    },
    {
      icon: ShieldCheck,
      value: 'Repeatable',
      label: 'System',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden pt-2 sm:pt-4 pb-12 lg:pb-16 bg-[#fdfcfb]">
      {/* Background Graphic for Desktop (Stretches across right side seamlessly) */}
      <div className="hidden lg:block absolute top-0 right-0 w-[58%] xl:w-[56%] h-full pointer-events-none select-none z-0">
        <img
          src={bgImageUrl}
          alt="MindPillar Trading Education Hero"
          className="w-full h-full object-cover object-left-top"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Main Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[520px] xl:min-h-[580px]">
          
          {/* ================= LEFT COLUMN: Typography & CTAs ================= */}
          <div className="lg:col-span-6 xl:col-span-6 pt-4 lg:pt-0">
            {/* Eyebrow / Kicker */}
            <div className="mb-4">
              <span className="text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.14em] text-[#7064ea] uppercase inline-block">
                TRADING EDUCATION FOR A BRIGHTER YOU
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[38px] sm:text-[48px] md:text-[54px] xl:text-[62px] font-extrabold tracking-[-0.035em] leading-[1.08] mb-6 text-slate-900">
              <span className="bg-gradient-to-r from-[#7064ea] via-[#b67375] to-[#c97c58] bg-clip-text text-transparent">
                Master Consistent
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#ba785a] to-[#7f4f40] bg-clip-text text-transparent">
                Trading Through
              </span>
              <br />
              <span className="text-slate-950">
                a Proven System
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-[15.5px] sm:text-[17px] leading-[1.6] max-w-[500px] mb-8 font-normal">
              Learn to trade with a structured, repeatable system — not random signals or emotions.
              Build the skills, discipline and confidence to trade the markets with clarity.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-12">
              {/* Primary CTA */}
              <button
                onClick={onExploreCourse}
                className="group inline-flex items-center gap-2.5 bg-[#7064ea] hover:bg-[#6052e4] text-white text-[15.5px] font-medium px-7 py-3.5 rounded-full shadow-[0_6px_20px_rgba(112,100,234,0.38)] hover:shadow-[0_8px_25px_rgba(112,100,234,0.48)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Course</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onSeeHowItWorks}
                className="group inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 text-slate-800 text-[15.5px] font-medium px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-slate-400 group-hover:scale-105 transition-all">
                  <Play className="w-2.5 h-2.5 fill-slate-800 text-slate-800 ml-0.5" />
                </div>
                <span>See How It Works</span>
              </button>
            </div>

            {/* Bottom Stats & Trust Indicators */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2">
                {stats.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 ${
                        index !== stats.length - 1 ? 'sm:border-r sm:border-slate-200/80 sm:pr-3' : ''
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-indigo-50/80 text-[#7064ea] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[14px] sm:text-[14.5px] font-bold text-slate-900 leading-tight">
                          {item.value}
                        </span>
                        <span className="text-[11.5px] sm:text-[12px] text-slate-500 font-medium leading-tight">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Hero Graphic & Floating Cards ================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative h-[420px] sm:h-[480px] lg:h-[540px] xl:h-[580px] flex items-center justify-center">
            {/* Mobile / Tablet Image Display */}
            <div className="lg:hidden w-full h-full relative rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-amber-50/50 to-orange-100/40">
              <img
                src={bgImageUrl}
                alt="MindPillar Trader"
                className="w-full h-full object-cover object-right"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Interactive Cards Overlay */}
            <div className="absolute inset-0 w-full h-full pointer-events-auto">
              <HeroFloatingCards onCardClick={onCardClick} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
