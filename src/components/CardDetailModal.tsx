import React from 'react';
import { X, CheckCircle2, Shield, TrendingUp, BarChart2, FileText, Play } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface CardDetailModalProps {
  cardName: string | null;
  onClose: () => void;
  onStartTraining: () => void;
}

export const CardDetailModal: React.FC<CardDetailModalProps> = ({
  cardName,
  onClose,
  onStartTraining,
}) => {
  if (!cardName) return null;

  const contentMap: Record<
    string,
    {
      title: string;
      subtitle: string;
      badge: string;
      desc: string;
      points: string[];
      stat: { label: string; value: string };
    }
  > = {
    'plan-execute-review': {
      title: 'Plan → Execute → Review',
      subtitle: 'The 3-Step Execution Loop that removes impulse and FOMO',
      badge: 'System Architecture',
      desc: 'Most traders lose because they make decisions in the heat of market volatility. The MindPillar framework forces cold pre-market planning, algorithmic entry triggers, and disciplined post-market forensic review.',
      points: [
        'Pre-Market Liquidity Mapping & Invalidation Levels',
        'Mechanical Execution Trigger with Fixed 1:3 Min Risk-to-Reward',
        'Daily Forensic Review to eliminate recurring psychological leaks',
      ],
      stat: { label: 'Trade Discipline Score', value: '94%' },
    },
    'eurusd-chart': {
      title: 'EURUSD +2.4% Execution Setup',
      subtitle: 'Institutional liquidity sweep & order block confirmation',
      badge: 'Live Market Example',
      desc: 'A live example of our signature London Session Sweep setup. Identifying where retail stop losses congregate, waiting for institutional absorption, and riding the expansion with tight 12-pip risk.',
      points: [
        'London Session opening range expansion',
        'Clean high-timeframe order block retest',
        'Partial profit scaling with risk-free stop loss trail',
      ],
      stat: { label: 'Average Risk:Reward', value: '1 : 3.4' },
    },
    'trade-journal': {
      title: 'My Trade Journal',
      subtitle: 'The professional trade tracker built into every member workspace',
      badge: 'Discipline Tool',
      desc: 'You cannot improve what you do not measure. The MindPillar Trade Journal tracks your setup classifications, emotional state, rule compliance, and expectancy metrics automatically.',
      points: [
        'Step-by-step checklist validation before entry button unlocks',
        'Automatic Sharpe ratio, drawdown, and expectancy calculation',
        'Tagging by session, market condition, and emotional state',
      ],
      stat: { label: 'Journaling Consistency', value: '98.2%' },
    },
    'risk-results': {
      title: 'Better Risk, Better Results',
      subtitle: 'Asymmetric compounding through mathematical capital preservation',
      badge: 'Risk Engineering',
      desc: 'Trading is not about being right on every trade; it is about keeping losses microscopic when wrong and extracting maximum asymmetric yield when right.',
      points: [
        'Strict 1% maximum account risk per position',
        'Asymmetric reward curve yielding profitability even with 40% win rate',
        'Consecutive drawdown circuit breakers to protect capital',
      ],
      stat: { label: 'Max Account Drawdown Limit', value: '< 4.5%' },
    },
  };

  const details = contentMap[cardName] || contentMap['plan-execute-review'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <Logo size={22} showText={false} />
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#7064ea] bg-indigo-50 px-2.5 py-0.5 rounded-full">
            {details.badge}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">
          {details.title}
        </h3>
        <p className="text-xs text-[#7064ea] font-medium mb-4">
          {details.subtitle}
        </p>

        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          {details.desc}
        </p>

        <div className="space-y-2.5 mb-6">
          {details.points.map((pt, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{pt}</span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between mb-6">
          <span className="text-xs text-slate-500 font-medium">{details.stat.label}</span>
          <span className="text-base font-bold text-[#7064ea] font-mono">{details.stat.value}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onStartTraining();
            }}
            className="flex-1 bg-[#7064ea] hover:bg-[#6052e4] text-white text-sm font-medium py-3 rounded-full transition-all text-center"
          >
            Learn This in Free Training
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
