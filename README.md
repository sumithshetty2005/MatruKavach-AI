<?xml version="1.0" encoding="UTF-8"?>
<project>
    <metadata>
        <title>MatruKavach AI 🛡️🤰</title>
        <author>Sumith Shetty</author>
        <institution>Lokmanya Tilak College of Engineering (LTCE)</institution>
        <specialization>Artificial Intelligence and Machine Learning</specialization>
        <status>Pre-final Year BE Project</status>
    </metadata>

    <description>
        MatruKavach AI is an advanced Agentic AI ecosystem designed to provide comprehensive support for maternal health. By leveraging a multi-agent orchestration pipeline, the system analyzes clinical reports, nutrition requirements, and geospatial data to ensure the well-being of expectant mothers.
    </description>

    <features>
        <feature>
            <name>Multi-Agent Orchestration</name>
            <detail>Utilizes a specialized agent pipeline including Clinical, Nutrition, Geospatial, and Graph agents.</detail>
        </feature>
        <feature>
            <name>Clinical Report Analysis</name>
            <detail>Processes medical documents (PDF/DOCX) to extract and interpret vital health metrics.</detail>
        </feature>
        <feature>
            <name>Intelligent Nutrition Planning</name>
            <detail>Generates personalized dietary recommendations based on individual health profiles.</detail>
        </feature>
        <feature>
            <name>Real-time Infrastructure</name>
            <detail>Built with a FastAPI backend and Socket.io for low-latency communication.</detail>
        </feature>
    </features>

    <tech_stack>
        <category name="AI_ML">
            <item>Agentic AI Framework</item>
            <item>Gemini API</item>
        </category>
        <category name="Backend">
            <item>Python</item>
            <item>FastAPI</item>
            <item>Uvicorn</item>
        </category>
        <category name="Communication">
            <item>Telegram Bot API</item>
            <item>Socket.io</item>
        </category>
    </tech_stack>

    <directory_structure>
        <folder name="backend">
            <subfolder name="agents">Specialized AI Agents</subfolder>
            <subfolder name="routers">API and Telegram Bot routes</subfolder>
            <file name="main.py">Entry point for the FastAPI server</file>
        </folder>
        <folder name="frontend">React source code</folder>
    </directory_structure>

    <setup_commands>
        <command>git clone https://github.com/sumithshetty2005/-MatruKavach-AI.git</command>
        <command>pip install -r requirements.txt</command>
        <command>python backend/main.py</command>
    </setup_commands>
</project>
