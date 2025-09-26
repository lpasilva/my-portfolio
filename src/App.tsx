import { Wrench, Clock, ArrowRight } from "lucide-react";

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Icon container with glow effect */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-2xl">
              <Wrench className="w-12 h-12 text-emerald-400 animate-spin" style={{
                animation: 'spin 3s linear infinite'
              }} />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Under
          <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Maintenance
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto">
          We're working behind the scenes to bring you something amazing. 
          Your patience is appreciated while we make improvements.
        </p>

        {/* Status indicators */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-5 h-5" />
            <span className="text-sm">Est. 2-4 days</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">Systems updating</span>
          </div>
        </div>

        {/* Call to action */}
        <div className="space-y-4">
          <button className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25">
            <span>Get Notified When Ready</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <p className="text-sm text-gray-500">
            Follow us for updates or check back soon
          </p>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500">
            Powered by React + Tailwind CSS
          </p>
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-teal-400/50 rounded-full animate-ping delay-700"></div>
      <div className="absolute top-40 right-16 w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-ping delay-300"></div>
    </div>
  );
}

export default App;