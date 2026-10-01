import React, { useState } from 'react';
import { Calculator, Shield, ArrowRight, DollarSign, Percent, TrendingUp } from 'lucide-react';

export const RiskCalculatorSection: React.FC = () => {
  const [accountBalance, setAccountBalance] = useState<number>(10000);
  const [riskPercent, setRiskPercent] = useState<number>(1.0);
  const [stopLossPips, setStopLossPips] = useState<number>(15);
  const [pair, setPair] = useState<string>('EURUSD');

  // Pip value estimation ($10 per pip for 1 standard lot of EURUSD/GBPUSD)
  const pipValuePerLot = pair === 'USDJPY' ? 7.2 : pair === 'XAUUSD' ? 10 : 10;
  const capitalAtRisk = (accountBalance * riskPercent) / 100;
  const lotSize = Math.max(0.01, +(capitalAtRisk / (stopLossPips * pipValuePerLot)).toFixed(2));
  const targetProfit3R = +(capitalAtRisk * 3).toFixed(2);

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#7064ea] bg-indigo-50 px-3 py-1 rounded-full inline-block mb-3">
            Interactive Practical Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            MindPillar Position Size & Risk Calculator
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Professional traders calculate lot size down to the penny before entering the market. Never guess your risk again.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#fdfcfb] rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-lg shadow-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Inputs Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <Calculator className="w-5 h-5 text-[#7064ea]" />
                <h3 className="text-base font-bold text-slate-900">Trade Risk Parameters</h3>
              </div>

              {/* Account Balance */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex justify-between">
                  <span>Account Balance ($)</span>
                  <span className="text-slate-500 font-mono">${accountBalance.toLocaleString()}</span>
                </label>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {[2500, 5000, 10000, 25000].map((bal) => (
                    <button
                      key={bal}
                      type="button"
                      onClick={() => setAccountBalance(bal)}
                      className={`text-xs font-medium py-1.5 rounded-lg border transition-all ${
                        accountBalance === bal
                          ? 'bg-[#7064ea] text-white border-[#7064ea]'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      ${bal.toLocaleString()}
                    </button>
                  ))}
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="500"
                  value={accountBalance}
                  onChange={(e) => setAccountBalance(Number(e.target.value))}
                  className="w-full accent-[#7064ea]"
                />
              </div>

              {/* Risk Percentage */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex justify-between">
                  <span>Risk Per Trade (%)</span>
                  <span className="text-[#7064ea] font-bold font-mono">{riskPercent.toFixed(1)}%</span>
                </label>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {[0.5, 1.0, 1.5].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRiskPercent(r)}
                      className={`text-xs font-medium py-1.5 rounded-lg border transition-all ${
                        riskPercent === r
                          ? 'bg-[#7064ea] text-white border-[#7064ea]'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {r.toFixed(1)}% {r === 1.0 && '(Recommended)'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Currency Pair & Stop Loss Pips */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Currency Pair
                  </label>
                  <select
                    value={pair}
                    onChange={(e) => setPair(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#7064ea]"
                  >
                    <option value="EURUSD">EUR/USD</option>
                    <option value="GBPUSD">GBP/USD</option>
                    <option value="USDJPY">USD/JPY</option>
                    <option value="XAUUSD">XAU/USD (Gold)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex justify-between">
                    <span>Stop Loss (Pips)</span>
                    <span className="font-mono text-slate-500">{stopLossPips} pips</span>
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="100"
                    value={stopLossPips}
                    onChange={(e) => setStopLossPips(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#7064ea]"
                  />
                </div>
              </div>
            </div>

            {/* Results Output Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#1e1b4b] rounded-2xl p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                    Calculated Position
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Protected Risk</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-slate-400">Exact Recommended Lot Size</span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-0.5">
                      {lotSize} <span className="text-sm font-normal text-slate-400">Lots</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                      <span className="text-[11px] text-slate-400 block">Total Risk ($)</span>
                      <span className="text-lg font-bold text-rose-400 font-mono">
                        -${capitalAtRisk.toFixed(2)}
                      </span>
                    </div>

                    <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                      <span className="text-[11px] text-slate-400 block">Target at 1:3 R:R</span>
                      <span className="text-lg font-bold text-emerald-400 font-mono">
                        +${targetProfit3R.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 leading-relaxed">
                By maintaining this exact sizing on every trade, a string of 5 losses accounts for only 5% drawdown, effortlessly recovered by just 2 target wins.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
