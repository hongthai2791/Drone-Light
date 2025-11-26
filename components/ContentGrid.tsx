import React from 'react';
import { Article } from '../types';
import { ArrowRight, Book, Camera, Wrench, Shield, Zap } from 'lucide-react';

const categories = [
  {
    id: 'intro',
    title: 'Nhập môn Drone',
    desc: 'Kiến thức nền tảng cho người mới bắt đầu.',
    icon: <Book className="w-6 h-6 text-purple-400" />,
    color: 'bg-purple-500/10 border-purple-500/20'
  },
  {
    id: 'tech',
    title: 'Công nghệ & Review',
    desc: 'Đánh giá chi tiết các mẫu flycam mới nhất.',
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    color: 'bg-yellow-500/10 border-yellow-500/20'
  },
  {
    id: 'app',
    title: 'Ứng dụng thực tế',
    desc: 'Nông nghiệp, quay phim, cứu hộ & khảo sát.',
    icon: <Camera className="w-6 h-6 text-pink-400" />,
    color: 'bg-pink-500/10 border-pink-500/20'
  },
  {
    id: 'guide',
    title: 'Kỹ thuật & Hướng dẫn',
    desc: 'Mẹo bay, bảo dưỡng và xử lý sự cố.',
    icon: <Wrench className="w-6 h-6 text-blue-400" />,
    color: 'bg-blue-500/10 border-blue-500/20'
  },
  {
    id: 'legal',
    title: 'Pháp luật & An toàn',
    desc: 'Quy định bay và vùng cấm bay tại Việt Nam.',
    icon: <Shield className="w-6 h-6 text-green-400" />,
    color: 'bg-green-500/10 border-green-500/20'
  }
];

const featuredArticles: Article[] = [
  {
    id: '1',
    title: 'Top 5 Flycam tốt nhất cho người mới bắt đầu 2024',
    excerpt: 'Đánh giá chi tiết DJI Mini 4 Pro, Air 3 và các lựa chọn giá rẻ khác phù hợp cho tập bay.',
    category: 'Review',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    readTime: '10 phút',
    tags: ['Review', 'Beginner']
  },
  {
    id: '2',
    title: 'Hướng dẫn xin cấp phép bay Flycam tại Việt Nam',
    excerpt: 'Quy trình chi tiết, biểu mẫu cần thiết và địa chỉ nộp hồ sơ xin phép bay theo Nghị định 36/2008/NĐ-CP.',
    category: 'Pháp luật',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    readTime: '15 phút',
    tags: ['Legal', 'Safety']
  },
  {
    id: '3',
    title: 'Ứng dụng Drone trong nông nghiệp thông minh 4.0',
    excerpt: 'Cách máy bay không người lái đang thay đổi bộ mặt nông nghiệp Việt Nam: Phun thuốc, gieo sạ, giám sát cây trồng.',
    category: 'Ứng dụng',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    readTime: '8 phút',
    tags: ['AgriTech', 'Industrial']
  },
  {
    id: '4',
    title: 'Kỹ thuật bay điện ảnh (Cinematic FPV) cơ bản',
    excerpt: 'Làm chủ các góc quay mượt mà, kỹ thuật bay lùi và cài đặt thông số camera để có những thước phim đẹp nhất.',
    category: 'Hướng dẫn',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    readTime: '12 phút',
    tags: ['FPV', 'Filming']
  }
];

const ContentGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Categories Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
          <span className="w-1 h-8 bg-drone-accent mr-3 rounded-full"></span>
          Chuyên mục nổi bật
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className={`p-6 rounded-xl border ${cat.color} hover:bg-opacity-20 transition-all cursor-pointer group`}>
              <div className="mb-4 p-3 bg-drone-dark/50 rounded-lg inline-block group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{cat.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Articles */}
      <div>
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <span className="w-1 h-8 bg-drone-accent mr-3 rounded-full"></span>
            Bài viết mới nhất
          </h2>
          <button className="hidden sm:flex items-center text-drone-accent hover:text-cyan-400 font-medium transition-colors">
            Xem tất cả <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredArticles.map((article) => (
            <div key={article.id} className="group bg-drone-light rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-drone-accent/10 transition-all border border-gray-800 hover:border-gray-700">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-drone-dark/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-drone-accent uppercase tracking-wider border border-drone-accent/20">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                  <span>{article.readTime} đọc</span>
                  <span>•</span>
                  {article.tags.map(tag => <span key={tag}>#{tag}</span>)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-drone-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-drone-accent font-medium text-sm group-hover:translate-x-1 transition-transform cursor-pointer">
                  Đọc tiếp <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex sm:hidden justify-center">
             <button className="flex items-center text-drone-accent hover:text-cyan-400 font-medium transition-colors">
                Xem tất cả <ArrowRight className="ml-2 w-4 h-4" />
             </button>
        </div>
      </div>
    </div>
  );
};

export default ContentGrid;