const CONDITIONS = {
  Clear: {
    day: { gradient: 'bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500', emoji: '☀️' },
    night: { gradient: 'bg-gradient-to-br from-indigo-900 via-slate-800 to-purple-900', emoji: '🌙' },
  },
  Clouds: {
    day: { gradient: 'bg-gradient-to-br from-slate-400 via-blue-500 to-slate-600', emoji: '☁️' },
    night: { gradient: 'bg-gradient-to-br from-slate-700 via-gray-800 to-slate-900', emoji: '☁️' },
  },
  Rain: {
    day: { gradient: 'bg-gradient-to-br from-blue-500 via-blue-600 to-slate-700', emoji: '🌧️' },
    night: { gradient: 'bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900', emoji: '🌧️' },
  },
  Drizzle: {
    day: { gradient: 'bg-gradient-to-br from-blue-400 via-cyan-500 to-slate-600', emoji: '🌦️' },
    night: { gradient: 'bg-gradient-to-br from-blue-800 via-cyan-900 to-slate-900', emoji: '🌦️' },
  },
  Thunderstorm: {
    day: { gradient: 'bg-gradient-to-br from-gray-700 via-purple-800 to-gray-900', emoji: '⛈️' },
    night: { gradient: 'bg-gradient-to-br from-gray-900 via-purple-900 to-black', emoji: '⛈️' },
  },
  Snow: {
    day: { gradient: 'bg-gradient-to-br from-blue-200 via-slate-300 to-blue-300', emoji: '❄️' },
    night: { gradient: 'bg-gradient-to-br from-blue-900 via-slate-700 to-indigo-900', emoji: '❄️' },
  },
  Mist: {
    day: { gradient: 'bg-gradient-to-br from-gray-400 via-slate-400 to-gray-500', emoji: '🌫️' },
    night: { gradient: 'bg-gradient-to-br from-gray-700 via-slate-800 to-gray-800', emoji: '🌫️' },
  },
  Fog: {
    day: { gradient: 'bg-gradient-to-br from-gray-400 via-slate-400 to-gray-500', emoji: '🌫️' },
    night: { gradient: 'bg-gradient-to-br from-gray-700 via-slate-800 to-gray-800', emoji: '🌫️' },
  },
  Haze: {
    day: { gradient: 'bg-gradient-to-br from-amber-200 via-yellow-300 to-orange-300', emoji: '🌫️' },
    night: { gradient: 'bg-gradient-to-br from-amber-900 via-orange-900 to-gray-800', emoji: '🌫️' },
  },
  Smoke: {
    day: { gradient: 'bg-gradient-to-br from-gray-500 via-slate-500 to-gray-600', emoji: '💨' },
    night: { gradient: 'bg-gradient-to-br from-gray-800 via-slate-800 to-gray-900', emoji: '💨' },
  },
  Dust: {
    day: { gradient: 'bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500', emoji: '🌪️' },
    night: { gradient: 'bg-gradient-to-br from-yellow-900 via-amber-900 to-orange-900', emoji: '🌪️' },
  },
  Tornado: {
    day: { gradient: 'bg-gradient-to-br from-gray-600 via-slate-700 to-gray-800', emoji: '🌪️' },
    night: { gradient: 'bg-gradient-to-br from-gray-800 via-slate-900 to-black', emoji: '🌪️' },
  },
};

const SHARED = {
  cardBg: 'bg-white/10 backdrop-blur-md border border-white/20',
  statBg: 'bg-white/5 border border-white/10',
};

const DEFAULT = {
  gradient: 'bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700',
  emoji: '🌤️',
};

export function getTheme(condition, isNight) {
  const cond = CONDITIONS[condition];
  const t = cond ? (isNight ? cond.night : cond.day) : DEFAULT;
  return { ...t, ...SHARED };
}

export function formatTime(unixTs, tzOffset) {
  const totalSecs = unixTs + tzOffset;
  const secsInDay = ((totalSecs % 86400) + 86400) % 86400;
  const h = Math.floor(secsInDay / 3600);
  const m = Math.floor((secsInDay % 3600) / 60);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, '0')} ${ampm}`;
}

export function metersToKm(m) {
  if (m == null) return 'N/A';
  return m >= 1000 ? `${(m / 1000).toFixed(1)} km` : `${m} m`;
}

export function mpsToKmh(mps) {
  if (mps == null) return 'N/A';
  return `${(mps * 3.6).toFixed(1)} km/h`;
}
