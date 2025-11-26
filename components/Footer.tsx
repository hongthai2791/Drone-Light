import React from 'react';
import { Plane, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
               <div className="w-8 h-8 bg-gradient-to-br from-drone-accent to-drone-secondary rounded-lg flex items-center justify-center mr-2">
                <Plane className="text-white w-5 h-5 transform -rotate-45" />
              </div>
              <span className="text-xl font-bold text-white">SkyHorizon</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Kết nối cộng đồng đam mê máy bay không người lái. Nơi chia sẻ kiến thức, kinh nghiệm và công nghệ mới nhất.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Khám phá</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-drone-accent transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-drone-accent transition-colors">Tin tức Drone</a></li>
              <li><a href="#" className="hover:text-drone-accent transition-colors">Thư viện ảnh</a></li>
              <li><a href="#" className="hover:text-drone-accent transition-colors">Diễn đàn</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-drone-accent transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="hover:text-drone-accent transition-colors">Quy định bay</a></li>
              <li><a href="#" className="hover:text-drone-accent transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-drone-accent transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Đăng ký nhận tin</h3>
            <p className="text-xs text-gray-400 mb-4">Nhận những bài đánh giá và mẹo bay mới nhất vào hộp thư của bạn.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-drone-accent text-sm"
              />
              <button className="bg-drone-accent hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Đăng ký
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SkyHorizon Vietnam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;