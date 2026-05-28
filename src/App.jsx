import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSkeleton from './components/LoadingSkeleton';
import ErrorMessage from './components/ErrorMessage';
import WelcomeState from './components/WelcomeState';
import { useWeather } from './hooks/useWeather';
import { getTheme } from './utils/weatherTheme';

export default function App() {
  const { weather, loading, error, fetchWeather } = useWeather();

  const isNight = weather
    ? weather.dt < weather.sys.sunrise || weather.dt > weather.sys.sunset
    : false;

  const condition = weather?.weather?.[0]?.main || 'Default';
  const theme = getTheme(condition, isNight);

  return (
    <div className={`min-h-screen ${theme.gradient} transition-all duration-1000 font-body`}>
      <div className="flex flex-col items-center px-4 py-10 max-w-2xl mx-auto">
        <header className="text-center mb-8 animate-fade-in w-full">
          <h1 className="text-5xl font-display text-white font-bold tracking-tight">
            Atmos
          </h1>
          <p className="text-white/60 text-sm mt-1">Weather, beautifully</p>
        </header>

        <div className="w-full">
          <SearchBar onSearch={fetchWeather} loading={loading} />
        </div>

        <div className="w-full mt-8">
          {loading && <LoadingSkeleton />}
          {!loading && error && <ErrorMessage message={error} />}
          {!loading && !error && weather && (
            <WeatherCard weather={weather} theme={theme} isNight={isNight} />
          )}
          {!loading && !error && !weather && (
            <WelcomeState onSearch={fetchWeather} />
          )}
        </div>
      </div>
    </div>
  );
}
