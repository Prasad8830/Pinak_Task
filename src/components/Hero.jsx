export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-primary via-blue-500 to-accent flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-blue-100 border border-white border-opacity-30">
                ✨ Welcome to Innovation
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                Transform Your <span className="bg-gradient-to-r from-accent via-blue-100 to-white bg-clip-text text-transparent">Vision</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-50 font-light leading-relaxed max-w-lg">
                Unlock the power of innovation with cutting-edge digital solutions designed for growth.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-blue-50 hover:shadow-2xl transition-all duration-300 text-center transform hover:scale-105">
                🚀 Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary hover:shadow-2xl transition-all duration-300 text-center transform hover:scale-105">
                📚 Learn More
              </button>
            </div>
          </div>

          {/* Illustration / Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-100 opacity-10 rounded-3xl blur-3xl"></div>
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full p-8 relative z-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Modern illustration */}
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.4}} />
                    <stop offset="100%" style={{stopColor: '#00d4ff', stopOpacity: 0.2}} />
                  </linearGradient>
                </defs>
                {/* Main circle */}
                <circle cx="200" cy="200" r="120" fill="url(#grad1)" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
                {/* Inner elements */}
                <g opacity="0.8">
                  <path d="M200 100 L280 200 L200 300 L120 200 Z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
                  <circle cx="200" cy="200" r="50" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
                  <circle cx="200" cy="200" r="30" fill="rgba(255,255,255,0.2)" />
                </g>
                {/* Decorative elements */}
                <g opacity="0.5" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none">
                  <path d="M100 200 Q150 150 200 100" />
                  <path d="M300 200 Q250 150 200 100" />
                  <path d="M100 200 Q150 250 200 300" />
                  <path d="M300 200 Q250 250 200 300" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
