# MatruKavach AI

**MatruKavach AI** is an advanced Agentic AI ecosystem designed to provide comprehensive support for maternal health. By leveraging a multi-agent orchestration pipeline, the system analyzes clinical reports, nutrition requirements, and geospatial data to ensure the well-being of expectant mothers.

## Key Features

* **Multi-Agent Orchestration**: Utilizes a specialized agent pipeline including Clinical, Geospatial, Nutrition, and Graph agents.
* **Clinical Report Analysis**: Processes medical documents (PDF/DOCX) to extract and interpret vital health metrics.
* **Intelligent Nutrition Planning**: Generates personalized dietary and wellness advice based on clinical risks and environmental conditions.
* **Telegram Integration**: Features a dedicated bot (`telegram_poller.py`) for real-time interaction and accessibility.
* **Real-time Infrastructure**: Built with a FastAPI backend and Socket.io for low-latency communication.

## Tech Stack

* **AI/ML**: Agentic AI Framework (LangChain), Gemini API.
* **Backend**: Python 3.12, FastAPI, SQLAlchemy.
* **Communication**: Telegram Bot API, Socket.io.
* **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS.

## Project Structure

```text
MatruKavach-AI/
├── backend/
│   ├── agents/            # AI Agents (clinical.py, geospatial.py, nutrition.py, etc.)
│   ├── routers/           # API and Telegram Bot routes
│   ├── uploads/           # Clinical reports and document storage
│   ├── main.py            # Entry point for the FastAPI server
│   ├── models.py          # Database models
│   └── seed_db.py         # Database initialization scripts
├── frontend/
│   ├── app/               # Next.js App Router (Admin, Asha, and Doctor portals)
│   ├── components/        # Reusable UI components
│   └── public/            # Static assets
└── .gitignore             # Secure file exclusion

## Installation & Setup

1. Clone the Repository
git clone [https://github.com/sumithshetty2005/-MatruKavach-AI.git](https://github.com/sumithshetty2005/-MatruKavach-AI.git)
cd MatruKavach-AI

2. Backend Setup
Navigate to backend: cd backend
Create Virtual Environment: python -m venv venv
Activate Environment:
Windows: .\venv\Scripts\activate
Mac/Linux: source venv/bin/activate
Install Dependencies: pip install -r requirements.txt
Environment Variables: Create a .env file in the backend/ folder:

Code snippet
GOOGLE_API_KEY=your_gemini_api_key
TELEGRAM_BOT_TOKEN=your_bot_token
DATABASE_URL=sqlite:///./matrukavach.db
3. Frontend Setup
Navigate to frontend: cd ../frontend

Install Dependencies: npm install

Running the Application
Start Backend: uvicorn main:socket_app --reload --port 8000 (from backend folder)
Start Telegram Bot: python telegram_poller.py (from backend folder)
Start Frontend: npm run dev (from frontend folder)

Testing
The repository includes several test scripts to verify the integrity of the AI agents and database:

Run python test_agent.py to test AI agent logic.

Run python test_db.py to verify database connectivity.
