import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { CurriculumSection } from './components/CurriculumSection.tsx';
import { RiskCalculatorSection } from './components/RiskCalculatorSection.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { BlogSection } from './components/BlogSection.tsx';
import { Footer } from './components/Footer.tsx';
import { VideoModal } from './components/VideoModal.tsx';
import { FreeTrainingModal } from './components/FreeTrainingModal.tsx';
import { LoginModal } from './components/LoginModal.tsx';
import { CardDetailModal } from './components/CardDetailModal.tsx';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isFreeTrainingModalOpen, setIsFreeTrainingModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedCardDetail, setSelectedCardDetail] = useState<string | null>(null);

  const handleOpenTraining = () => {
    setIsFreeTrainingModalOpen(true);
  };

  const handleOpenLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleOpenVideo = () => {
    setIsVideoModalOpen(true);
  };

  const handleCardClick = (cardName: string) => {
    setSelectedCardDetail(cardName);
  };

  return (
    <div className="min-h-screen bg-[#fdfcfb] text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Navigation Bar */}
      <Navbar
        onOpenLogin={handleOpenLogin}
        onOpenFreeTraining={handleOpenTraining}
      />

      {/* Main Hero Section matching the design */}
      <main className="flex-grow">
        <Hero
          onExploreCourse={handleOpenTraining}
          onSeeHowItWorks={handleOpenVideo}
          onCardClick={handleCardClick}
        />

        {/* Supporting Sections */}
        <AboutSection />
        <CurriculumSection onStartTraining={handleOpenTraining} />
        <RiskCalculatorSection />
        <ReviewsSection />
        <BlogSection />
      </main>

      {/* Footer */}
      <Footer
        onStartTraining={handleOpenTraining}
        onLogin={handleOpenLogin}
      />

      {/* Interactive Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onStartTraining={handleOpenTraining}
      />

      <FreeTrainingModal
        isOpen={isFreeTrainingModalOpen}
        onClose={() => setIsFreeTrainingModalOpen(false)}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToSignUp={handleOpenTraining}
      />

      <CardDetailModal
        cardName={selectedCardDetail}
        onClose={() => setSelectedCardDetail(null)}
        onStartTraining={handleOpenTraining}
      />
    </div>
  );
}
