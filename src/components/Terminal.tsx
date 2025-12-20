import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, Minimize2, Terminal as TerminalIcon } from 'lucide-react';

interface TerminalHistory {
  type: 'input' | 'output';
  content: string | React.ReactNode;
}

const Terminal: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalHistory[]>([]);
  const [isBooting, setIsBooting] = useState(true);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [isMatrixMode, setIsMatrixMode] = useState(false);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const bootSequence = [
    "Initializing ArishOS kernel v1.0.0...",
    "Loading system dependencies...",
    "Mounting file system...",
    "Verifying user permissions...",
    "Access granted.",
    "Welcome to the mainframe."
  ];

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Boot Animation
  useEffect(() => {
    let delay = 0;
    bootSequence.forEach((line, index) => {
      delay += Math.random() * 500 + 200;
      setTimeout(() => {
        setBootLines(prev => [...prev, line]);
        if (index === bootSequence.length - 1) {
          setTimeout(() => {
            setIsBooting(false);
            setHistory([
              { type: 'output', content: 'Welcome to ArishOS v1.0.0' },
              { type: 'output', content: 'Type "help" to see available commands.' },
            ]);
          }, 800);
        }
      }, delay);
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, bootLines]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let response: string | React.ReactNode = '';

    switch (trimmedCmd) {
      case 'help':
        response = (
          <div className="space-y-1">
            <div>Available commands:</div>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className={isMatrixMode ? "text-green-400" : "text-[#EC1D24]"}>about</span>
              <span>Who am I?</span>
              <span className={isMatrixMode ? "text-green-400" : "text-[#EC1D24]"}>projects</span>
              <span>See what I've built</span>
              <span className={isMatrixMode ? "text-green-400" : "text-[#EC1D24]"}>skills</span>
              <span>My technical arsenal</span>
              <span className={isMatrixMode ? "text-green-400" : "text-[#EC1D24]"}>contact</span>
              <span>Get in touch</span>
              <span className={isMatrixMode ? "text-green-400" : "text-[#EC1D24]"}>sudo</span>
              <span>Admin privileges</span>
              <span className={isMatrixMode ? "text-green-400" : "text-[#EC1D24]"}>matrix</span>
              <span>Enter the matrix</span>
              <span className={isMatrixMode ? "text-green-400" : "text-[#EC1D24]"}>clear</span>
              <span>Clear terminal</span>
            </div>
          </div>
        );
        break;
      case 'about':
        response = "I'm Arish, a Computer Science student passionate about building scalable web applications and exploring AI. I love turning complex problems into elegant code.";
        break;
      case 'projects':
        response = (
          <ul className="list-disc pl-5 space-y-1">
            <li><span className={isMatrixMode ? "text-green-400" : "text-[#EC1D24]"}>AURA</span> - Advanced AI Assistant</li>
            <li><span className={isMatrixMode ? "text-green-400" : "text-[#EC1D24]"}>MIA</span> - Desktop Automation Tool</li>
            <li><span className={isMatrixMode ? "text-green-400" : "text-[#EC1D24]"}>Portfolio</span> - This website!</li>
            <li>Type <span className="text-gray-400">help</span> for more options.</li>
          </ul>
        );
        break;
      case 'skills':
        response = "Python, JavaScript, React, Node.js, TypeScript, C++, Java, SQL, Git, Docker";
        break;
      case 'contact':
        response = (
          <div>
            <div>Email: arish@example.com</div>
            <div>GitHub: github.com/arish</div>
            <div>LinkedIn: linkedin.com/in/arish</div>
          </div>
        );
        break;
      case 'sudo':
        response = "Permission denied: You are not Arish. Nice try though.";
        break;
      case 'matrix':
        setIsMatrixMode(!isMatrixMode);
        response = isMatrixMode ? "Matrix mode deactivated." : "Wake up, Neo... The Matrix has you.";
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        return;
      default:
        response = `Command not found: ${trimmedCmd}. Type "help" for assistance.`;
    }

    setHistory(prev => [
      ...prev,
      { type: 'input', content: cmd },
      { type: 'output', content: response }
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleTerminalClick = () => {
    if (!isBooting) {
      inputRef.current?.focus();
    }
  };

  return (
    <section id="terminal" className="py-20 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-2 text-slate-900 dark:text-white tracking-tight">
            INTERACTIVE <span className="text-[#EC1D24]">TERMINAL</span>
          </h2>
          <div className="w-24 h-1 bg-[#EC1D24] mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Access the mainframe directly.
          </p>
        </div>

        <div
          className={`mx-auto w-full ${isFullscreen
            ? 'fixed top-0 left-0 right-0 bottom-0 z-50 m-0 rounded-none'
            : isMinimized
              ? 'max-w-sm transform -translate-y-20 scale-75 opacity-80'
              : ''
            } transition-all duration-300`}
        >
          <div
            className={`bg-[#0a0a0a] border-2 ${isMatrixMode ? 'border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]' : 'border-black dark:border-white/20 shadow-[8px_8px_0px_0px_rgba(236,29,36,0.2)]'} rounded-lg overflow-hidden font-mono flex flex-col h-full transition-all duration-500`}
            onClick={handleTerminalClick}
          >
            {/* Terminal Header */}
            <div className={`flex items-center justify-between px-4 py-2 ${isMatrixMode ? 'bg-green-900/20 border-green-500/30' : 'bg-[#111] border-gray-800'} border-b flex-shrink-0 transition-colors duration-500`}>
              <div className="flex items-center space-x-2">
                <TerminalIcon size={14} className={isMatrixMode ? "text-green-500" : "text-[#EC1D24]"} />
                <span className={`text-xs font-bold tracking-wider uppercase ${isMatrixMode ? "text-green-500" : "text-white"}`}>arish@dev:~</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={toggleMinimize}
                  className="text-gray-500 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                  title={isMinimized ? "Restore" : "Minimize"}
                >
                  {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="text-gray-500 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                >
                  {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div
              className={`p-6 overflow-y-auto text-sm md:text-base flex-grow cursor-text ${isFullscreen ? 'h-[calc(100vh-40px)]' : 'h-96'} ${isMatrixMode ? 'text-green-500' : 'text-gray-300'}`}
            >
              {isBooting ? (
                <div className="space-y-1">
                  {bootLines.map((line, index) => (
                    <div key={index} className={isMatrixMode ? "text-green-500" : "text-gray-300"}>
                      <span className={isMatrixMode ? "text-green-500" : "text-green-500"}>[OK]</span> {line}
                    </div>
                  ))}
                  <div className="animate-pulse">_</div>
                </div>
              ) : (
                <>
                  {history.map((entry, index) => (
                    <div key={index} className="mb-2">
                      {entry.type === 'input' ? (
                        <div className="flex items-center">
                          <span className={`${isMatrixMode ? "text-green-500" : "text-[#EC1D24]"} mr-2 font-bold`}>➜</span>
                          <span className={isMatrixMode ? "text-green-500" : "text-white"}>~</span>
                          <span className={`${isMatrixMode ? "text-green-400" : "text-gray-400"} ml-2`}>{entry.content}</span>
                        </div>
                      ) : (
                        <div className={`ml-6 whitespace-pre-wrap ${isMatrixMode ? "text-green-500" : "text-gray-300"}`}>{entry.content}</div>
                      )}
                    </div>
                  ))}

                  <form onSubmit={handleSubmit} className="flex items-center ml-0">
                    <span className={`${isMatrixMode ? "text-green-500" : "text-[#EC1D24]"} mr-2 font-bold`}>➜</span>
                    <span className={isMatrixMode ? "text-green-500" : "text-white"}>~</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className={`bg-transparent border-none outline-none ml-2 flex-grow font-mono ${isMatrixMode ? "text-green-500" : "text-white"}`}
                      spellCheck={false}
                      autoComplete="off"
                      autoFocus
                    />
                  </form>
                </>
              )}
              <div ref={terminalEndRef} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;