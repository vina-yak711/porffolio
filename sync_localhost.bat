@echo off
echo ===================================================
echo   Syncing Portfolio to Localhost (XAMPP Apache)
echo ===================================================
call npm run sync:local
echo.
echo Open in browser: http://localhost/portfolio/ or http://localhost/
pause
