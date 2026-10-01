import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, BookOpen, Clock } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface FreeTrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeTrainingModal: React.FC<FreeTrainingModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('Beginner');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size={24} />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7064ea] bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Instant Free Access
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Start Free Training
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Get immediate access to the 4-part Foundation Course, high-probability setup blueprints, and the proprietary Trade Journal spreadsheet.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#7064ea] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#7064ea] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Current Trading Experience
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#7064ea] focus:border-transparent transition-all bg-white"
                >
                  <option value="Beginner">Beginner (0 - 6 months)</option>
                  <option value="Intermediate">Intermediate (6 months - 2 years)</option>
                  <option value="Advanced">Advanced (Struggling with consistency)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#7064ea] hover:bg-[#6052e4] text-white font-medium py-3.5 px-6 rounded-full shadow-[0_4px_14px_rgba(112,100,234,0.35)] hover:shadow-lg transition-all"
                >
                  <span>Unlock Training & Journal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="mt-5 flex items-center justify-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> 100% Free · No Card Needed
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#7064ea]" /> Lifetime Access
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-in zoom-in-50 duration-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Welcome to MindPillar, {name || 'Trader'}!</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
              Your free training curriculum and access link have been prepared. You can now start Module 1: The Rule-Based Blueprint.
            </p>
            <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-left mb-6 space-y-2">
              <div className="text-xs font-semibold text-indigo-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#7064ea]" /> Module 1: Market Structure & Order Flow
              </div>
              <p className="text-xs text-slate-600">
                Learn how institutional order flow drives price before touching a chart.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-[#7064ea] hover:bg-[#6052e4] text-white font-medium py-3 rounded-full transition-all"
            >
              Enter Member Portal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
