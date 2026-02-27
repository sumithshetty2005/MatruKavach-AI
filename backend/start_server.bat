@echo off
REM Replace the placeholder below with your actual Gemini API Key
set GOOGLE_API_KEY=AIzaSyBaCcXasTWjohABtG4HngH0U0yHTbDgToI

REM Start the server
venv\Scripts\python.exe -m uvicorn main:socket_app --reload --port 8000
