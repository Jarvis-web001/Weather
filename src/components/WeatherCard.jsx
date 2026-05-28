import StatCard from './StatCard';
import { formatTime, metersToKm, mpsToKmh } from '../utils/weatherTheme';

export default function WeatherCard({ weather, theme, isNight }) {
  const { name, sys, main, weather: conditions, wind, clouds, visibility, timezone } = weather;
  const condition = conditions[0];

  return (
    <div className="space-y-4 animate-slide-up">
      <div className={`rounded-3xl p-8 ${theme.cardBg}`}>
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-white text-3xl font-display font-bold">
              {name}
              <span className="text-white/50 text-xl ml-2 font-body font-normal">{sys.country}</span>
            </h2>
            <p className="text-white/60 text-sm mt-1 capitalize">{condition.description}</p>
          </div>
          <div className="text-6xl animate-float">{theme.emoji}</div>
        </div>

        <div className="mt-6">
          <div className="flex items-end gap-2">
            <span className="text-white font-display font-bold leading-none" style={{ fontSize: '5rem' }}>
              {Math.round(main.temp)}°
            </span>
            <span className="text-white/60 text-2xl mb-2">C</span>
          </div>
          <p className="text-white/60 text-sm mt-1">
            Feels like {Math.round(main.feels_like)}°C · {condition.main}
          </p>
          <div className="flex gap-4 mt-1 text-white/50 text-sm font-mono">
            <span>H: {Math.round(main.temp_max)}°</span>
            <span>L: {Math.round(main.temp_min)}°</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <StatCard icon="💧" label="Humidity" value={`${main.humidity}%`} theme={theme} />
        <StatCard icon="💨" label="Wind" value={mpsToKmh(wind?.speed)} theme={theme} />
        <StatCard icon="📊" label="Pressure" value={`${main.pressure} hPa`} theme={theme} />
        <StatCard icon="☁️" label="Clouds" value={`${clouds.all}%`} theme={theme} />
        <StatCard icon="👁️" label="Visibility" value={metersToKm(visibility)} theme={theme} />
        <StatCard icon="🌅" label="Sunrise" value={formatTime(sys.sunrise, timezone)} theme={theme} />
        <StatCard icon="🌇" label="Sunset" value={formatTime(sys.sunset, timezone)} theme={theme} />
      </div>
    </div>
  );
}
