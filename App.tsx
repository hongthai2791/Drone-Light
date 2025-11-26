import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentGrid from './components/ContentGrid';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);

  const renderContent = () => {
    switch (currentPage) {
      case PageView.HOME:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <ContentGrid />
          </>
        );
      case PageView.AI_EXPERT:
        return <AiAssistant />;
      
      // For this demo, other pages (Guides, Tech, etc.) will just re-render the ContentGrid
      // In a full app, these would have their own dedicated components
      case PageView.GUIDES:
      case PageView.TECH:
      case PageView.APPLICATIONS:
      case PageView.COMMUNITY:
        return (
          <div className="min-h-screen pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
               <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
                  <h2 className="text-xl font-semibold text-blue-400 mb-2">Đang phát triển</h2>
                  <p className="text-gray-300">
                    Chuyên mục này đang được xây dựng. Dưới đây là nội dung tổng hợp từ trang chủ.
                  </p>
               </div>
            </div>
            <ContentGrid />
          </div>
        );
      default:
        return <ContentGrid />;
    }
  };

  return (
    <div className="min-h-screen bg-drone-dark flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;