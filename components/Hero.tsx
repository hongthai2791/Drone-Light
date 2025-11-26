import React from 'react';
import { PageView } from '../types';
import { ChevronRight, PlayCircle } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageView) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden bg-drone-dark">
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Drone Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-drone-dark via-drone-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-drone-accent/30 bg-drone-accent/10 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-drone-accent mr-2 animate-pulse"></span>
            <span className="text-drone-accent text-sm font-semibold tracking-wide uppercase">Công nghệ tương lai</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Khám phá thế giới từ <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-drone-accent to-blue-500">
              Góc nhìn trên cao
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Chuyên trang thông tin toàn diện về Drone tại Việt Nam. Từ kiến thức cơ bản cho người mới bắt đầu đến giải pháp công nghệ cao cho doanh nghiệp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate(PageView.GUIDES)}
              className="px-8 py-4 bg-drone-accent hover:bg-cyan-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 group"
            >
              Bắt đầu ngay
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate(PageView.AI_EXPERT)}
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg border border-gray-600 hover:border-gray-500 transition-all flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-5 h-5" />
              Hỏi chuyên gia AI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;