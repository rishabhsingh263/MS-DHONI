@echo off
title MS Dhoni Scrollytelling Server
echo ========================================================
echo   MS DHONI: THE CHRONICLES OF CAPTAIN COOL
echo   Starting local server at http://localhost:8080 ...
echo ========================================================
echo.
start http://localhost:8080
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1" -Port 8080
pause
