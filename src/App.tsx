import React, { useState, useEffect } from 'react';
import { Code, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  const fullText = 'console.log("Coming Soon...");';

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  

return (
  <div className="fixed inset-0 bg-black text-white overflow-auto">
    {/* Force-center container (fixed + transform) */}
    <div className="absolute left-1/2 lg:top-[80%] top-[60%] transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl px-6">
      {/* Background orbs (kept but outside of flow) */}
      <div className="pointer-events-none">
        <div className="absolute top-10 left-5 w-48 h-48 md:w-96 md:h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse"
             style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-10 right-5 w-40 h-40 md:w-80 md:h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse"
             style={{ animationDuration: '7s', animationDelay: '1s' }} />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-white opacity-5 rounded-full blur-3xl animate-pulse"
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-8 md:mb-12 transform hover:scale-110 transition-transform duration-300">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-white flex items-center justify-center group hover:bg-white transition-all duration-500 rotate-45">
            <Code className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:text-black transition-colors -rotate-45" />
          </div>
        </div>

        {/* Heading */}
        <div className="w-full mb-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent leading-tight mb-6">
            COMING SOON
          </h1>

          <div className="font-mono text-green-400 text-base md:text-xl mb-6 break-words">
            {displayText}
            <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
          </div>

          <p className="text-lg md:text-2xl text-white mb-2 font-light">Crafting Digital Excellence</p>
          <p className="text-sm md:text-lg text-gray-400 font-light">Software Engineering Student · Innovator · Creator</p>
        </div>

        {/* Progress bar */}
        <div className="w-full mb-10">
          <div className="h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-white to-gray-400 animate-pulse" style={{ width: '70%' }} />
          </div>
          <div className="flex justify-between mt-2 text-xs sm:text-sm text-gray-500 font-mono">
            <span>Launching Soon</span>
            <span>70% Ready</span>
          </div>
        </div>

        {/* Email */}
        <div className="w-full mb-10">
          <p className="text-gray-300 mb-4 text-base sm:text-lg">Get notified when we go live</p>
          <div className="flex flex-col gap-3 backdrop-blur-sm bg-white/5 p-3 border border-white/10">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all text-sm sm:text-base"
            />
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto px-8 py-3 bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group text-sm sm:text-base"
            >
              {isSubmitted ? <> <span>Subscribed!</span><span className="text-lg sm:text-xl">✓</span> </>
                           : <> <span>NOTIFY ME</span><ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" /> </>}
            </button>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-5 mb-6">
          <a href="#" className="w-12 h-12 border-2 border-white/30 hover:border-white hover:bg-white hover:text-black flex items-center justify-center rounded transition-all transform hover:scale-110"><Github className="w-5 h-5" /></a>
          <a href="#" className="w-12 h-12 border-2 border-white/30 hover:border-white hover:bg-white hover:text-black flex items-center justify-center rounded transition-all transform hover:scale-110"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="w-12 h-12 border-2 border-white/30 hover:border-white hover:bg-white hover:text-black flex items-center justify-center rounded transition-all transform hover:scale-110"><Mail className="w-5 h-5" /></a>
        </div>

        <p className="text-gray-500 text-xs sm:text-sm font-light">© 2025 · Designed with passion</p>
      </div>
    </div>
  </div>
);


};

export default App;