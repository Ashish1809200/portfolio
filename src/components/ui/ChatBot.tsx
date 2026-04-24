// src/components/ui/ChatBot.tsx
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { IoSend, IoClose, IoChatbubbleEllipses, IoChevronDown } from "react-icons/io5";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

const sendMessage = async () => {
  if (!input.trim() || isLoading) return;

  const userMessage: Message = { role: 'user', content: input };
  setMessages((prev) => [...prev, userMessage]);
  setInput('');
  setIsLoading(true);

  try {
    // CALL YOUR PROXY INSTEAD OF THE EXTERNAL URL
    const response = await fetch('/api/chat', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-oss:120b',
        messages: [...messages, userMessage],
        stream: false,
      }),
    });

    if (!response.ok) throw new Error(`Server error: ${response.status}`);

    const data = await response.json();
    setMessages((prev) => [...prev, {
      role: 'assistant',
      content: data.message.content,
    }]);
  } catch (error) {
    console.error('Chat Error:', error);
    setMessages((prev) => [...prev, { role: 'assistant', content: 'Offline: Check connection.' }]);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">      
      {isOpen && (
        <div className="mb-4 flex h-[550px] w-[90vw] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-4 sm:w-[420px]">
          <div className="flex items-center justify-between bg-blue-600 p-4 text-white shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <IoChatbubbleEllipses size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-none">AI Assistant</h3>
                <span className="text-[10px] opacity-80">Powered by Llama 3</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="rounded-full p-1 transition-colors hover:bg-white/20"
            >
              <IoClose size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 mt-10 text-sm">
                Hello! How can I help you today?
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                  m.role === 'user' 
                    ? 'ml-auto bg-blue-600 text-white rounded-br-none' 
                    : 'mr-auto bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                }`}
              >
                {m.content}
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto flex items-center gap-2 max-w-[80%] rounded-2xl bg-white border border-gray-100 px-4 py-3 text-sm text-gray-400 animate-pulse">
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
                </div>
                <span>Thinking...</span>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          <div className="bg-white p-4 border-t border-gray-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                disabled={isLoading}
                placeholder={isLoading ? "Please wait..." : "Type a message..."}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-4 pr-12 text-sm transition-all focus:border-blue-500 focus:bg-white focus:outline-none disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white transition-all hover:bg-blue-700 disabled:bg-gray-300"
              >
                <IoSend size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-gray-800 rotate-180' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isOpen ? <IoChevronDown size={28} /> : <IoChatbubbleEllipses size={28} />}
      </button>
    </div>
  );
};

export default ChatBot;