import { useState, useCallback } from 'react';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || '';
const BASE = 'https://api.openweathermap.org/data/2.5/weather';

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (city) => {
    if (!city.trim()) return;
    if (!API_KEY) {
      setError('No API key configured. Add VITE_OPENWEATHER_API_KEY to your Netlify environment variables.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `${BASE}?q=${encodeURIComponent(city.trim())}&units=metric&appid=${API_KEY}`
      );
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        if (res.status === 404) throw new Error(`City "${city}" not found. Try a different spelling.`);
        if (res.status === 401) throw new Error('Invalid API key. Check your VITE_OPENWEATHER_API_KEY setting.');
        throw new Error(body.message || 'Failed to fetch weather data.');
      }
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { weather, loading, error, fetchWeather };
}
