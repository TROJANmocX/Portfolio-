import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, MessageSquare } from 'lucide-react';
import { chatbotQuestions } from '../data/chatbotData';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: 'Greetings! I am JARVIS... I mean, ArishBot. How can I assist you?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (input.trim() === '') return;

    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: input }]);

    // Reset input and simulate bot typing
    setInput('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const response = getBotResponse(input);
      setMessages(prev => [...prev, { sender: 'bot', text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    // Check predefined questions
    const lowerInput = userInput.toLowerCase();

    for (const qaItem of chatbotQuestions) {
      if (lowerInput.includes(qaItem.question.toLowerCase())) {
        return qaItem.answer;
      }
    }

    // Check for keywords
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return 'Hello! Ready to explore Arish\'s portfolio?';
    }

    if (lowerInput.includes('thank')) {
      return 'You\'re welcome! Let me know if you need more intel.';
    }

    if (lowerInput.includes('bye')) {
      return 'Signing off. Have a great day!';
    }

    return "I don't have data on that. Try asking about Arish's skills, projects, or contact info.";
  };

  const getQuickResponseButtons = () => {
    // Return a subset of questions as quick response buttons
    return chatbotQuestions.slice(0, 4).map(item => (
      <button
        key={item.id}
        onClick={() => {
          setMessages(prev => [...prev, { sender: 'user', text: item.question }]);
          setIsTyping(true);

          setTimeout(() => {
            setMessages(prev => [...prev, { sender: 'bot', text: item.answer }]);
            setIsTyping(false);
          }, 800);
        }}
        className="text-xs font-bold uppercase tracking-wide bg-white dark:bg-[#111] border border-gray-300 dark:border-gray-700 hover:border-[#EC1D24] hover:text-[#EC1D24] text-slate-700 dark:text-slate-300 py-2 px-4 rounded-none transition-all whitespace-nowrap shadow-sm"
      >
        {item.question}
      </button>
    ));
  };

  return (
    <section id="chatbot" className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-2 text-slate-900 dark:text-white tracking-tight">
            ASK <span className="text-[#EC1D24]">ARISHBOT</span>
          </h2>
          <div className="w-24 h-1 bg-[#EC1D24] mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
            My AI assistant is online and ready to answer your queries.
          </p>
        </div>

        <div className="w-full bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white/20 shadow-[8px_8px_0px_0px_rgba(236,29,36,0.2)] rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-[#EC1D24] text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <MessageSquare size={20} className="mr-2" />
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm">ArishBot v2.0</h3>
                <div className="text-[10px] opacity-80 font-mono">STATUS: ONLINE</div>
              </div>
            </div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>

          {/* Chat Area */}
          <div className="h-96 p-4 overflow-y-auto bg-gray-50 dark:bg-[#111]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div
                    className={`w-8 h-8 flex items-center justify-center flex-shrink-0 mx-2 border border-black dark:border-white/20 ${message.sender === 'user'
                      ? 'bg-black dark:bg-white text-white dark:text-black'
                      : 'bg-[#EC1D24] text-white'
                      }`}
                  >
                    {message.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div
                    className={`py-3 px-4 text-sm font-medium border border-black dark:border-white/10 shadow-sm ${message.sender === 'user'
                      ? 'bg-white dark:bg-[#0a0a0a] text-slate-800 dark:text-slate-200'
                      : 'bg-white dark:bg-[#1a1a1a] text-slate-800 dark:text-slate-200'
                      }`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex mb-4 justify-start">
                <div className="flex max-w-[80%]">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mx-2 bg-[#EC1D24] text-white border border-black dark:border-white/20">
                    <Bot size={14} />
                  </div>
                  <div className="py-3 px-4 bg-white dark:bg-[#1a1a1a] border border-black dark:border-white/10">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-slate-400 animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-[#0a0a0a] border-t-2 border-black dark:border-white/10">
            <div className="overflow-x-auto pb-3 mb-2 flex items-center space-x-2 scrollbar-hide">
              {getQuickResponseButtons()}
            </div>

            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your command..."
                className="flex-1 p-3 border-2 border-gray-300 dark:border-gray-700 focus:border-[#EC1D24] dark:focus:border-[#EC1D24] focus:outline-none bg-transparent text-slate-900 dark:text-white text-sm font-medium placeholder-slate-400 transition-colors"
              />
              <button
                type="submit"
                className={`p-3 transition-all duration-200 border-2 border-transparent ${input.trim() === ''
                    ? 'bg-gray-300 dark:bg-gray-800 text-gray-500 cursor-not-allowed'
                    : 'bg-[#EC1D24] text-white hover:bg-red-700 hover:border-black dark:hover:border-white shadow-md hover:shadow-lg transform active:scale-95'
                  }`}
                disabled={input.trim() === ''}
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;