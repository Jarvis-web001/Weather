const CITIES = ['London', 'New York', 'Tokyo', 'Sydney', 'Paris', 'Dubai', 'Mumbai', 'Toronto'];

export default function WelcomeState({ onSearch }) {
  return (
    <div className="text-center py-8 animate-fade-in">
      <div className="text-7xl mb-6 animate-float inline-block">🌤️</div>
      <h2 className="text-white/90 text-2xl font-display font-bold mb-2">
        Discover the weather
      </h2>
      <p className="text-white/60 mb-8 text-sm">Search any city on Earth for real-time conditions</p>
      <div className="flex flex-wrap justify-center gap-2">
        {CITIES.map((city) => (
          <button
            key={city}
            onClick={() => onSearch(city)}
            className="px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white/80 text-sm hover:bg-white/25 hover:text-white transition-all"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}
