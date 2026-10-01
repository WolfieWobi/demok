import React, { useState } from 'react';
import { Logo } from './Logo.tsx';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenLogin: () => void;
  onOpenFreeTraining: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLogin,
  onOpenFreeTraining,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <header className="relative z-30 w-full bg-transparent">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-7 pb-4">
        <div className="flex items-center justify-between">
          {/* Brand Zone */}
          <a href="#" className="group flex items-center focus:outline-none">
            <Logo />
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-slate-700 hover:text-slate-950 transition-colors tracking-[-0.01em]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions Zone (Desktop) */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            <button
              onClick={onOpenLogin}
              className="text-[15px] font-medium text-slate-800 hover:text-slate-950 transition-colors px-2 py-1 cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={onOpenFreeTraining}
              className="inline-flex items-center gap-2 bg-[#7064ea] hover:bg-[#6052e4] text-white text-[14.5px] font-medium px-6 py-2.5 rounded-full shadow-[0_4px_14px_rgba(112,100,234,0.35)] hover:shadow-[0_6px_20px_rgba(112,100,234,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Start Free Training</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-6 pt-3 px-4 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-700 hover:text-indigo-600 transition-colors py-1.5 px-2 rounded-lg hover:bg-slate-50"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFreeTraining();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#7064ea] hover:bg-[#6052e4] text-white text-sm font-medium py-3 rounded-full shadow-md"
              >
                <span>Start Free Training</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
