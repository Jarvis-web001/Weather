# 🌤️ Atmos — Weather Explorer

A modern, responsive weather app built with **React + Vite + Tailwind CSS**.

## 🚀 Quick Start

### 1. Get a free API key
1. Go to [openweathermap.org](https://openweathermap.org/api)
2. Sign up (free) → My API Keys → copy your key
3. Open `src/hooks/useWeather.js` and replace:
   ```js
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```
   with your actual key.

> ⚠️ New keys take ~10 minutes to activate.

### 2. Install & run
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── SearchBar.jsx      # City search input + button
│   ├── WeatherCard.jsx    # Main weather data display
│   ├── StatCard.jsx       # Individual metric tile (humidity, wind…)
│   ├── LoadingSkeleton.jsx# Shimmer placeholder while fetching
│   ├── ErrorMessage.jsx   # Friendly error display
│   └── WelcomeState.jsx   # Initial empty state with city chips
├── hooks/
│   └── useWeather.js      # All API logic (useState + useCallback)
├── utils/
│   └── weatherTheme.js    # Colour themes, icons, helper functions
├── App.jsx                # Root: layout + component wiring
├── main.jsx               # React entry point
└── index.css              # Tailwind + custom animations
```

## 🛠 Tech Stack
- **React 18** — UI library
- **Vite 6** — Dev server + bundler
- **Tailwind CSS 3** — Utility-first styling
- **OpenWeather API** — Real-time weather data (free tier: 60 req/min)

## ✨ Features
- 🎨 Dynamic gradient background that changes with weather conditions
- 🌙 Day / night detection
- 💧 Humidity, 💨 Wind, 📊 Pressure, ☁️ Cloud cover, 👁️ Visibility, 🌅 Sunrise/Sunset
- ⏳ Skeleton loading state
- ❌ Friendly error messages
- 📱 Fully mobile responsive
- 🔮 Glassmorphism card design
