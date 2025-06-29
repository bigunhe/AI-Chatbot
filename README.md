Chatbot - Interactive AI Assistant

Chatbot is a React-based AI-powered chatbot application designed to provide interactive and dynamic conversations. Built with Vite and styled using Tailwind CSS, this project showcases a modular structure with components for chat functionality, AI integration, and user customization. It can be adapted to represent any user's profile or data, making it a versatile tool for portfolios or customer support.
Table of Contents

Features
Tech Stack
Setup Instructions
Usage
Project Structure
Contributing
License
Contact

Features

Dynamic User Support: Configurable to display any user's profile or data through customizable components.
AI Integration: Utilizes AI capabilities (e.g., via Gemini API) for intelligent responses.
Responsive Design: Styled with Tailwind CSS for a modern and adaptable interface.
Modular Components: Includes reusable elements like chat forms, messages, and icons.
Real-Time Interaction: Supports real-time messaging with a clean UI.

Tech Stack

Frontend: React, Tailwind CSS
Build Tool: Vite
AI Integration: Gemini API (configurable)
Assets: Managed in the assets folder
Tools: Git, VS Code, ESLint

Setup Instructions
To run the Chatbot locally, follow these steps:
Prerequisites

Node.js (v16 or higher)
npm or yarn
Gemini API key (optional, for AI features)

Installation

Clone the Repository:
git clone https://github.com/Daniru12/chatbot.git
cd chatbot


Install Dependencies:
npm install


Set Up Environment Variables:Create a .env file in the root directory and add:
VITE_GEMINI_API_KEY=your_gemini_api_key


Start the Development Server:
npm run dev


Access the Application:Open your browser and go to http://localhost:5173 (or the port specified by Vite).


Usage

Interact with the Chatbot: Open the app in your browser to start chatting. Customize the companyInfo.js file with user-specific data to adapt the bot.
Sample Queries:
"Tell me about the developer."
"What can this chatbot do?"
"Show me the latest project."


Customization: Update companyInfo.js with new user data to change the bot's context.

Project Structure
chatbot/
├── node_modules/          # Dependency files
├── public/                # Static assets (e.g., index.html)
├── src/                   # Source code
│   ├── AI/                # AI-related components
│   │   ├── ChartForm.jsx  # Form for chart interactions
│   │   ├── ChatForm.jsx   # Chat input form
│   │   ├── chatbot.css    # Chatbot styles
│   │   ├── chatbot.jsx    # Main chatbot component
│   │   ├── ChatbotIcon.jsx # Chatbot icon component
│   │   ├── ChatMessage.jsx # Individual message component
│   │   └── companyInfo.js # User data configuration
│   ├── assets/            # Project assets
│   ├── App.jsx            # Main app component
│   ├── index.css          # Global styles
│   ├── main.jsx           # Entry point
├── .env                   # Environment variables
├── .gitignore             # Git ignore file
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package-lock.json      # Lock file for dependencies
├── package.json           # Project metadata and scripts
├── README.md              # Project documentation
├── vite.config.js         # Vite configuration
└── README.md              # Duplicate README (optional)

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request with a clear description.

Please adhere to the project's coding standards and include tests where applicable.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For questions or collaboration, reach out to me:

Email: Punstthdaniru@gmail.com
LinkedIn: linkedin.com/in/daniru-ranathunga
GitHub: github.com/Daniru12
Portfolio: portfolio-mydaniru.vercel.app


⭐ If you find this Chatbot project helpful, please give it a star on GitHub!Built with 💻 by Daniru Ranathunga, a passionate software engineering student at SLIIT.
