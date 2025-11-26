import React, { useState, useRef, useEffect } from 'react';
import { generateDroneAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Bot, User, Loader2, Sparkles, AlertTriangle } from 'lucide-react';

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Chào bạn! Tôi là SkyGuide AI. Bạn cần tư vấn về loại drone nào, kỹ thuật bay, hay quy định pháp luật tại Việt Nam?',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await generateDroneAdvice(userMessage.text);
      const aiMessage: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Preset questions for quick access
  const presetQuestions = [
    "Người mới nên mua flycam nào?",
    "Thủ tục xin phép bay ở HN?",
    "DJI Mini 4 Pro bay được bao lâu?",
    "Vùng cấm bay là gì?"
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 h-[calc(100vh-100px)] flex flex-col">
      <div className="bg-drone-light rounded-2xl shadow-2xl border border-gray-700 flex flex-col overflow-hidden h-full">
        
        {/* Header */}
        <div className="p-4 bg-gray-800 border-b border-gray-700 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-drone-accent/20 rounded-lg">
              <Bot className="w-6 h-6 text-drone-accent" />
            </div>
            <div>
              <h3 className="text-white font-bold">SkyGuide AI</h3>
              <p className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Sẵn sàng hỗ trợ (Powered by Gemini 2.5)
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs text-gray-400 bg-gray-900 px-3 py-1 rounded-full border border-gray-700">
            <AlertTriangle className="w-3 h-3 text-yellow-500" />
            Thông tin mang tính tham khảo
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                msg.role === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' ? 'bg-blue-600' : 'bg-drone-accent'
                }`}
              >
                {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Sparkles className="w-5 h-5 text-white" />}
              </div>
              
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-sm'
                    : 'bg-gray-800 text-gray-100 rounded-tl-sm border border-gray-700'
                }`}
              >
                <div className="prose prose-invert prose-sm whitespace-pre-wrap">
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
             <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-drone-accent flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-800 rounded-2xl px-4 py-3 border border-gray-700 rounded-tl-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length < 3 && (
          <div className="px-4 py-2 bg-slate-900/50 flex gap-2 overflow-x-auto no-scrollbar">
            {presetQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => {
                  setInput(q);
                  // Optional: Auto-send or just fill input
                }}
                className="whitespace-nowrap px-3 py-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full text-xs text-gray-300 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 bg-gray-800 border-t border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Nhập câu hỏi của bạn về Drone..."
              className="flex-1 bg-gray-900 text-white rounded-xl px-4 py-3 border border-gray-700 focus:outline-none focus:border-drone-accent focus:ring-1 focus:ring-drone-accent transition-all"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-drone-accent hover:bg-cyan-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-xl px-4 flex items-center justify-center transition-colors"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </div>
          <p className="text-[10px] text-gray-500 mt-2 text-center">
            Trợ lý có thể mắc sai sót. Hãy luôn tuân thủ quy định bay địa phương.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;