export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  readTime: string;
  tags: string[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum PageView {
  HOME = 'HOME',
  GUIDES = 'GUIDES',
  TECH = 'TECH',
  APPLICATIONS = 'APPLICATIONS',
  COMMUNITY = 'COMMUNITY',
  AI_EXPERT = 'AI_EXPERT'
}