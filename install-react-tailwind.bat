@echo off
echo 🚀 Installing React + Tailwind in current folder...
echo.

REM Ensure we are running in the folder where the bat file is
cd /d "%~dp0"

REM Create React app with Vite in current directory
npm create vite@latest . -- --template react

IF %ERRORLEVEL% NEQ 0 (
  echo ❌ Failed to create Vite app
  pause
  exit /b
)

REM Install dependencies
npm install

REM Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

REM Write tailwind.config.js
(
echo export default {
echo   content: [
echo     "./index.html",
echo     "./src/**/*.{js,jsx}"
echo   ],
echo   theme: {
echo     extend: {},
echo   },
echo   plugins: [],
echo }
) > tailwind.config.js

REM Write src/index.css
(
echo @tailwind base;
echo @tailwind components;
echo @tailwind utilities;
) > src\index.css

echo.
echo ✅ Installation complete!
echo 👉 Run: npm run dev
echo.
pause
