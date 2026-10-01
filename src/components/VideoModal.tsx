import React, { useState } from 'react';
import { X, Play, Pause, CheckCircle2, Shield, ArrowRight, RotateCcw } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTraining: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onStartTraining,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentStep, setCurrentStep] = useState<number>(1);

  if (!isOpen) return null;

  const steps = [
    {
      title: 'Phase 1: Pre-Market Planning',
      desc: 'Map institutional liquidity pools, key supply/demand zones, and daily bias before markets open. Never trade without clear invalidation.',
      tag: 'Step 1: Plan',
      timestamp: '00:45',
    },
    {
      title: 'Phase 2: Systematic Execution',
      desc: 'Wait for the confirmed trigger candle. Calculate exact risk units (1% account max) and enter with bracketed stop loss and multi-target orders.',
      tag: 'Step 2: Execute',
      timestamp: '02:30',
    },
    {
      title: 'Phase 3: Post-Trade Review & Logging',
      desc: 'Record setup classification, emotional score, and execution slippage into the MindPillar Journal. Continuously refine your statistical expectancy.',
      tag: 'Step 3: Review',
      timestamp: '04:15',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <Logo size={24} />
            <div className="h-4 w-px bg-slate-200" />
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              System Walkthrough (5-Minute Masterclass)
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Mockup Simulation */}
        <div className="relative aspect-video w-full bg-slate-900 overflow-hidden flex flex-col justify-between p-6">
          {/* Mock Video Graphic with Candlestick & UI Animation */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#7064ea_1px,transparent_1px)] [background-size:24px_24px]" />
          
          {/* Simulated chart animation */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4">
            <div className="w-16 h-16 rounded-full bg-[#7064ea]/90 text-white flex items-center justify-center shadow-lg mb-4 hover:scale-110 transition-transform cursor-pointer"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 fill-white ml-1" />}
            </div>
            <span className="text-white text-lg font-bold tracking-tight mb-1">
              {steps[currentStep].title}
            </span>
            <p className="text-slate-300 text-sm max-w-lg mb-4">
              {steps[currentStep].desc}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Simulating Real Execution · 1:3.2 Risk-to-Reward
            </div>
          </div>

          {/* Interactive Player Controls */}
          <div className="relative z-10 w-full pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-white transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setCurrentStep((s) => (s + 1) % steps.length)}
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Next Section
              </button>
              <span>{steps[currentStep].timestamp} / 05:00</span>
            </div>

            <div className="flex items-center gap-2">
              {steps.map((st, i) => (
                <button
                  key={st.tag}
                  onClick={() => setCurrentStep(i)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    currentStep === i
                      ? 'bg-[#7064ea] text-white shadow-sm'
                      : 'bg-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {st.tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Ready to master the complete system?</p>
              <p className="text-xs text-slate-500">Access all 4 modules, proprietary journal template, and private trader community.</p>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onStartTraining();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#7064ea] hover:bg-[#6052e4] text-white text-sm font-medium px-6 py-3 rounded-full shadow-md hover:shadow-indigo-200 transition-all"
          >
            <span>Start Free Training</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
