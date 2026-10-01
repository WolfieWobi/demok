import React from 'react';
import { Logo } from './Logo.tsx';
import { ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onStartTraining: () => void;
  onLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStartTraining, onLogin }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <Logo textColor="text-white" size={28} />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Structured trading education engineered to help retail participants build discipline, master repeatable execution, and manage capital with institutional rigor.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Dedicated to rule-based trading & financial literacy.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">Philosophy</a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">Market Insights</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Tools & Access
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={onStartTraining} className="hover:text-white transition-colors text-left cursor-pointer">
                  Free Training
                </button>
              </li>
              <li>
                <button onClick={onLogin} className="hover:text-white transition-colors text-left cursor-pointer">
                  Student Login
                </button>
              </li>
              <li>
                <span className="text-slate-500">Trade Journal (Web)</span>
              </li>
              <li>
                <span className="text-slate-500">Risk Matrix</span>
              </li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="lg:col-span-3 bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1">
                Start Today
              </span>
              <p className="text-sm font-semibold text-white mb-2">
                Join 1,000+ traders mastering the system.
              </p>
              <p className="text-xs text-slate-400 mb-4">
                Access Module 1 and the Trade Journal with zero cost.
              </p>
            </div>
            <button
              onClick={onStartTraining}
              className="w-full bg-[#7064ea] hover:bg-[#6052e4] text-white text-xs font-semibold py-2.5 rounded-full transition-colors cursor-pointer text-center"
            >
              Get Instant Access
            </button>
          </div>

        </div>

        {/* Regulatory & Risk Disclaimer (Standard for financial & trading education) */}
        <div className="py-8 border-b border-slate-800 text-[11.5px] leading-relaxed text-slate-500 space-y-2">
          <p>
            <strong className="text-slate-400">Risk Disclosure:</strong> Trading foreign exchange (Forex), CFDs, indices, commodities, and futures involves substantial risk of loss and is not suitable for every investor. An investor could potentially lose all or more than the initial investment. Past performance is not indicative of future results.
          </p>
          <p>
            MindPillar provides educational materials, research tools, and simulated case studies for informational and training purposes only. MindPillar does not provide investment advice, brokerage services, or portfolio management.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MindPillar Education Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
