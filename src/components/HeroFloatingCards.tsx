import React, { useState } from 'react';
import {
  FileText,
  Play,
  BarChart2,
  CheckCircle2,
  Circle,
  Shield,
  ClipboardList,
  Target,
  Sliders,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { Logo } from './Logo.tsx';

interface HeroFloatingCardsProps {
  onCardClick?: (cardName: string) => void;
}

export const HeroFloatingCards: React.FC<HeroFloatingCardsProps> = ({ onCardClick }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [hoveredCandle, setHoveredCandle] = useState<number | null>(null);

  // Candlestick data for EURUSD card
  // high, low, open, close (percentage based coordinates for SVG)
  const candlesticks = [
    { type: 'bull', x: 18, high: 48, low: 72, open: 66, close: 52 },
    { type: 'bull', x: 28, high: 44, low: 68, open: 60, close: 48 },
    { type: 'bear', x: 38, high: 42, low: 76, open: 46, close: 70 },
    { type: 'bull', x: 48, high: 36, low: 62, open: 58, close: 42 },
    { type: 'bear', x: 58, high: 38, low: 70, open: 42, close: 64 },
    { type: 'bear', x: 68, high: 32, low: 65, open: 40, close: 60 },
    { type: 'bull', x: 78, high: 26, low: 55, open: 52, close: 32 },
    { type: 'bull', x: 88, high: 20, low: 48, open: 42, close: 25 },
    { type: 'bull', x: 98, high: 14, low: 40, open: 34, close: 18 },
    { type: 'bull', x: 108, high: 10, low: 34, open: 26, close: 12 },
  ];

  return (
    <>
      {/* ================= CARD 1: Plan -> Execute -> Review ================= */}
      <div
        onClick={() => onCardClick?.('plan-execute-review')}
        className="glass-card absolute -top-4 sm:top-2 md:top-4 left-[36%] sm:left-[38%] md:left-[39%] lg:left-[42%] xl:left-[44%] z-20 rounded-2xl p-3 sm:p-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.07)] border border-white/90 backdrop-blur-md animate-float-slow hover:shadow-[0_16px_40px_rgba(112,100,234,0.15)] hover:scale-[1.03] transition-all duration-300 cursor-pointer select-none max-w-[210px] sm:max-w-[230px]"
      >
        <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-[11.5px] font-semibold text-slate-800 mb-2 sm:mb-2.5">
          <span>Plan</span>
          <span className="text-slate-400 font-normal">→</span>
          <span>Execute</span>
          <span className="text-slate-400 font-normal">→</span>
          <span>Review</span>
        </div>

        <div className="flex items-center justify-between gap-1 sm:gap-2">
          {/* Step 1: Plan */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setActiveStep(0);
            }}
            className="flex flex-col items-center gap-1 group/step cursor-pointer"
          >
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${
                activeStep === 0
                  ? 'bg-indigo-100 text-[#7064ea] ring-2 ring-[#7064ea]/30'
                  : 'bg-indigo-50/90 text-[#7064ea] group-hover/step:bg-indigo-100'
              }`}
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <span className="text-[10px] sm:text-[10.5px] text-slate-600 font-medium">Plan</span>
          </div>

          <span className="text-slate-300 text-xs font-light">→</span>

          {/* Step 2: Execute */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setActiveStep(1);
            }}
            className="flex flex-col items-center gap-1 group/step cursor-pointer"
          >
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${
                activeStep === 1
                  ? 'bg-[#7064ea]/20 text-[#6052e4] ring-2 ring-[#7064ea]/40'
                  : 'bg-[#7064ea]/15 text-[#7064ea] group-hover/step:bg-[#7064ea]/25'
              }`}
            >
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#7064ea] ml-0.5" />
            </div>
            <span className="text-[10px] sm:text-[10.5px] text-slate-800 font-semibold">Execute</span>
          </div>

          <span className="text-slate-300 text-xs font-light">→</span>

          {/* Step 3: Review */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setActiveStep(2);
            }}
            className="flex flex-col items-center gap-1 group/step cursor-pointer"
          >
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${
                activeStep === 2
                  ? 'bg-amber-100 text-amber-600 ring-2 ring-amber-500/30'
                  : 'bg-amber-50 text-amber-600 group-hover/step:bg-amber-100'
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <span className="text-[10px] sm:text-[10.5px] text-slate-600 font-medium">Review</span>
          </div>
        </div>
      </div>

      {/* ================= CARD 2: EURUSD Candlestick Chart ================= */}
      <div
        onClick={() => onCardClick?.('eurusd-chart')}
        className="glass-card absolute bottom-[22%] sm:bottom-[24%] md:bottom-[26%] lg:bottom-[28%] left-[34%] sm:left-[36%] md:left-[37%] lg:left-[39%] xl:left-[41%] z-20 rounded-2xl p-3 sm:p-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.07)] border border-white/90 backdrop-blur-md animate-float-delayed hover:shadow-[0_16px_40px_rgba(112,100,234,0.15)] hover:scale-[1.03] transition-all duration-300 cursor-pointer select-none min-w-[170px] sm:min-w-[195px]"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[11px] sm:text-xs font-bold text-slate-900 tracking-wider">EURUSD</span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-600 flex items-center">
              +2.4%
            </span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        {/* Candlestick SVG */}
        <div className="relative w-full h-[60px] sm:h-[68px] overflow-hidden">
          <svg viewBox="0 0 125 80" className="w-full h-full overflow-visible">
            {/* Grid line subtle */}
            <line x1="10" y1="20" x2="120" y2="20" stroke="#f1f5f9" strokeDasharray="2 2" strokeWidth="0.8" />
            <line x1="10" y1="50" x2="120" y2="50" stroke="#f1f5f9" strokeDasharray="2 2" strokeWidth="0.8" />

            {/* Candlestick Elements */}
            {candlesticks.map((candle, idx) => {
              const isBull = candle.type === 'bull';
              const bodyY = Math.min(candle.open, candle.close);
              const bodyHeight = Math.max(Math.abs(candle.open - candle.close), 3);
              const color = isBull ? '#7064ea' : '#f59e0b';
              const isHovered = hoveredCandle === idx;

              return (
                <g
                  key={idx}
                  onMouseEnter={() => setHoveredCandle(idx)}
                  onMouseLeave={() => setHoveredCandle(null)}
                  className="cursor-pointer transition-transform"
                >
                  {/* Upper & Lower Wick */}
                  <line
                    x1={candle.x}
                    y1={candle.high}
                    x2={candle.x}
                    y2={candle.low}
                    stroke={color}
                    strokeWidth={isHovered ? '2' : '1.3'}
                    strokeLinecap="round"
                    className="transition-all"
                  />
                  {/* Candle Body */}
                  <rect
                    x={candle.x - 3}
                    y={bodyY}
                    width={6}
                    height={bodyHeight}
                    rx={1.5}
                    fill={color}
                    fillOpacity={isBull ? '0.9' : '0.85'}
                    stroke={color}
                    strokeWidth="0.5"
                    className="transition-all"
                  />
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* ================= CARD 3: My Trade Journal ================= */}
      <div
        onClick={() => onCardClick?.('trade-journal')}
        className="glass-card absolute top-1 sm:top-4 md:top-6 right-2 sm:right-4 md:right-6 lg:right-10 xl:right-14 z-20 rounded-2xl p-3 sm:p-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.07)] border border-white/90 backdrop-blur-md animate-float-delayed hover:shadow-[0_16px_40px_rgba(112,100,234,0.15)] hover:scale-[1.03] transition-all duration-300 cursor-pointer select-none min-w-[135px] sm:min-w-[150px]"
      >
        <div className="flex items-center gap-1.5 pb-2 border-b border-slate-100/90 mb-2">
          <Logo size={14} showText={false} />
          <span className="text-[10.5px] sm:text-[11.5px] font-bold text-slate-800 tracking-tight">
            My Trade Journal
          </span>
        </div>

        <div className="space-y-1.5 sm:space-y-2">
          {/* Plan */}
          <div className="flex items-center justify-between text-[10.5px] sm:text-xs">
            <div className="flex items-center gap-1.5 text-slate-700">
              <ClipboardList className="w-3 h-3 text-slate-500" />
              <span>Plan</span>
            </div>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-50" />
          </div>

          {/* Entry */}
          <div className="flex items-center justify-between text-[10.5px] sm:text-xs">
            <div className="flex items-center gap-1.5 text-slate-700">
              <Target className="w-3 h-3 text-slate-500" />
              <span>Entry</span>
            </div>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-50" />
          </div>

          {/* Manage */}
          <div className="flex items-center justify-between text-[10.5px] sm:text-xs">
            <div className="flex items-center gap-1.5 text-slate-700">
              <Sliders className="w-3 h-3 text-slate-500" />
              <span>Manage</span>
            </div>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-50" />
          </div>

          {/* Exit */}
          <div className="flex items-center justify-between text-[10.5px] sm:text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <LogOut className="w-3 h-3 text-slate-400" />
              <span>Exit</span>
            </div>
            <Circle className="w-3.5 h-3.5 text-slate-300" />
          </div>

          {/* Review */}
          <div className="flex items-center justify-between text-[10.5px] sm:text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <BarChart2 className="w-3 h-3 text-slate-400" />
              <span>Review</span>
            </div>
            <Circle className="w-3.5 h-3.5 text-slate-300" />
          </div>
        </div>
      </div>

      {/* ================= CARD 4: Better Risk Better Results ================= */}
      <div
        onClick={() => onCardClick?.('risk-results')}
        className="glass-card absolute bottom-2 sm:bottom-4 md:bottom-6 right-2 sm:right-4 md:right-6 lg:right-10 xl:right-14 z-20 rounded-2xl p-3 sm:p-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.07)] border border-white/90 backdrop-blur-md animate-float-slow hover:shadow-[0_16px_40px_rgba(112,100,234,0.15)] hover:scale-[1.03] transition-all duration-300 cursor-pointer select-none min-w-[170px] sm:min-w-[195px]"
      >
        <div className="flex items-center gap-2.5 mb-1.5">
          {/* Shield Badge */}
          <div className="w-8 h-8 rounded-xl bg-[#7064ea] flex items-center justify-center text-white shadow-sm shrink-0">
            <Shield className="w-4 h-4" />
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Better Risk</span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Better Results</span>
          </div>
        </div>

        {/* Upward Growth Curve Line */}
        <div className="relative w-full h-[36px] sm:h-[40px] pt-1">
          <svg viewBox="0 0 160 40" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="riskLineGrad" x1="0" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#c7d2fe" />
                <stop offset="50%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>

            {/* Ascending smooth spline */}
            <path
              d="M10 32 C 40 32, 60 26, 90 28 C 115 30, 130 18, 150 6"
              fill="none"
              stroke="url(#riskLineGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Final Arrowhead */}
            <path
              d="M142 6 L 152 5 L 149 14"
              fill="none"
              stroke="#6366f1"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
