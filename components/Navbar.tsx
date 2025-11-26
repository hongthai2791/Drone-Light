import React, { useState } from 'react';
import { PageView } from '../types';
import { Menu, X, Plane, Cpu, BookOpen, Users, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: PageView.HOME, label: 'Trang chủ', icon: <Plane className="w-4 h-4" /> },
    { id: PageView.TECH, label: 'Công nghệ & Review', icon: <Cpu className="w-4 h-4" /> },
    { id: PageView.APPLICATIONS, label: 'Ứng dụng', icon: <BookOpen className="w-4 h-4" /> },
    { id: PageView.GUIDES, label: 'Hướng dẫn bay', icon: <BookOpen className="w-4 h-4" /> },
    { id: PageView.AI_EXPERT, label: 'Trợ lý AI', icon: <Sparkles className="w-4 h-4" />, highlight: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-drone-dark/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate(PageView.HOME)}>
            <div className="w-8 h-8 bg-gradient-to-br from-drone-accent to-drone-secondary rounded-lg flex items-center justify-center mr-2">
              <Plane className="text-white w-5 h-5 transform -rotate-45" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              SkyHorizon
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'bg-drone-light text-drone-accent'
                      : 'text-gray-300 hover:text-white hover:bg-drone-light'
                  } ${item.highlight ? 'border border-drone-accent/30 text-drone-accent' : ''}`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-drone-dark border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium ${
                  currentPage === item.id
                    ? 'bg-drone-light text-drone-accent'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;