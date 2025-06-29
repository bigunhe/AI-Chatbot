
# 🤖 Chatbot - Interactive AI Assistant

**Chatbot** is a React-based AI-powered chatbot application designed to provide interactive and dynamic conversations. Built with **Vite** and styled using **Tailwind CSS**, this project showcases a modular structure with components for chat functionality, AI integration, and user customization. It can be adapted to represent any user's profile or data, making it a versatile tool for portfolios or customer support.

---

## 📑 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🚀 Features

- **Dynamic User Support**: Configurable to display any user's profile or data through customizable components.
- **AI Integration**: Utilizes AI capabilities (e.g., via Gemini API) for intelligent responses.
- **Responsive Design**: Styled with Tailwind CSS for a modern and adaptable interface.
- **Modular Components**: Includes reusable elements like chat forms, messages, and icons.
- **Real-Time Interaction**: Supports real-time messaging with a clean UI.

---

## 🛠 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Build Tool**: Vite
- **AI Integration**: Gemini API (configurable)
- **Assets**: Managed in the `assets` folder
- **Tools**: Git, VS Code, ESLint

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Gemini API key (optional, for AI features)

### Installation

1. **Clone the Repository**  
```bash
git clone https://github.com/Daniru12/chatbot.git
cd chatbot
````

2. **Install Dependencies**

```bash
npm install
```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add:

```
VITE_GEMINI_API_KEY=your_gemini_api_key
```

4. **Start the Development Server**

```bash
npm run dev
```

5. **Access the Application**
   Open your browser and navigate to:
   [http://localhost:5173](http://localhost:5173)

---

## 💬 Usage

* **Interact with the Chatbot**: Open the app in your browser and start chatting.
* **Customize Context**: Update `companyInfo.js` with your profile data or project info.

### 🔍 Sample Queries

* "Tell me about the developer."
* "What can this chatbot do?"
* "Show me the latest project."

---

## 📁 Project Structure

```
chatbot/
├── node_modules/            # Dependency files
├── public/                  # Static assets (e.g., index.html)
├── src/                     # Source code
│   ├── AI/                  # AI-related components
│   │   ├── ChartForm.jsx
│   │   ├── ChatForm.jsx
│   │   ├── chatbot.css
│   │   ├── chatbot.jsx
│   │   ├── ChatbotIcon.jsx
│   │   ├── ChatMessage.jsx
│   │   └── companyInfo.js
│   ├── assets/              # Project assets
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package-lock.json        # Dependency lock file
├── package.json             # Project metadata and scripts
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/your-feature
```

3. Make your changes and commit:

```bash
git commit -m "Add your feature"
```

4. Push to the branch:

```bash
git push origin feature/your-feature
```

5. Open a pull request with a clear description.

Please follow the project’s coding standards and add tests if applicable.

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

Feel free to reach out for questions or collaboration:

* 📧 Email: [Punstthdaniru@gmail.com](mailto:Punstthdaniru@gmail.com)
* 💼 LinkedIn: [linkedin.com/in/daniru-ranathunga](https://linkedin.com/in/daniru-ranathunga)
* 💻 GitHub: [github.com/Daniru12](https://github.com/Daniru12)
* 🌐 Portfolio: [portfolio-mydaniru.vercel.app](https://portfolio-mydaniru.vercel.app)

---

⭐ If you find this Chatbot project helpful, please give it a **star** on GitHub!

Built with 💻 by **Daniru Ranathunga**, a passionate Software Engineering student at SLIIT.

