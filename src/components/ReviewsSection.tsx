import React from 'react';
import { Star, CheckCircle, TrendingUp, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Marcus Vance',
      role: 'Full-Time FX Trader',
      country: 'United Kingdom',
      rating: 5,
      profitFactor: '2.64 Profit Factor',
      text: 'Before MindPillar, I blew two prop firm challenges because I kept trading during the Asia session with no setup. Learning the London Session Sweep and sticking to the 1% risk rule changed everything. Funded for 6 months now.',
      initials: 'MV',
      accent: 'from-indigo-500 to-purple-600',
    },
    {
      name: 'Elena Rostova',
      role: 'Swing Trader',
      country: 'Canada',
      rating: 5,
      profitFactor: '+34% Q1 Return',
      text: 'The Trade Journal template alone is worth ten times the time invested. Seeing my emotional leaks laid out in black and white stopped my revenge trading in its tracks. A truly systematic education.',
      initials: 'ER',
      accent: 'from-amber-500 to-orange-600',
    },
    {
      name: 'David Chen',
      role: 'Index & Futures Trader',
      country: 'Singapore',
      rating: 5,
      profitFactor: '82% Rule Compliance',
      text: 'I spent 3 years hopping between indicators: MACD, RSI, Bollinger Bands. MindPillar stripped all the nonsense away. When you know where the real liquidity lies, trading finally feels peaceful.',
      initials: 'DC',
      accent: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#fdfcfb] border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#7064ea] bg-indigo-50 px-3 py-1 rounded-full inline-block mb-3">
            Real Proof
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Tested by 1,000+ Disciplined Traders
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hear from retail traders who stopped guessing signals and adopted our structured execution system.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Profit Factor Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    {rev.profitFactor}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-indigo-100 mb-2" />

                <p className="text-sm text-slate-600 leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${rev.accent} text-white flex items-center justify-center font-bold text-xs shadow-sm`}>
                  {rev.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-slate-900">{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 fill-blue-50" />
                  </div>
                  <span className="text-xs text-slate-500 block">
                    {rev.role} · {rev.country}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
