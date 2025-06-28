export const companyInfo = {
  meta: {
    type: "personal_profile",
    version: "2.0",
    updatedAt: "2025-06-29",
    language: "en-US",
    tone: "professional, enthusiastic, confident",
    searchableTags: [
      "software engineer",
      "full-stack developer",
      "SLIIT",
      "MERN stack",
      "AI developer",
      "Kotlin developer",
      "Gemini API",
      "React",
      "Node.js",
      "Python",
      "computer vision",
      "cloud computing",
      "DevOps",
      "student portfolio"
    ]
  },

  identity: {
    fullName: "Daniru Ranathunga",
    shortIntro:
      "Ambitious full-stack software engineering student at SLIIT with expertise in AI integration, scalable web and mobile applications, and intuitive UI/UX design. Passionate about leveraging modern technologies to solve real-world problems.",
    profileImage: "https://portfolio-mydaniru.vercel.app/profile.jpg",
    age: 20,
    nationality: "Sri Lankan",
    languagesSpoken: ["English (Fluent)", "Sinhala (Native)"],
    elevatorPitch:
      "I'm a driven software engineering student specializing in MERN stack, AI-driven applications, and Android development. With a strong foundation in both front-end and back-end technologies, I build scalable, user-focused solutions and thrive in collaborative, innovative environments."
  },

  academicBackground: {
    university: {
      name: "Sri Lanka Institute of Information Technology (SLIIT)",
      location: "Malabe, Sri Lanka",
      degree: "BSc (Hons) in Information Technology - Software Engineering",
      gpa: 3.68,
      expectedGraduation: "2027-06",
      achievements: [
        "Dean's List 2024",
        "Top 10% in Software Engineering cohort",
        "SLIIT Coding Competition Finalist 2024",
        "Recipient of SLIIT Merit Scholarship"
      ],
      relevantCoursework: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Software Engineering Principles",
        "Artificial Intelligence Fundamentals",
        "Mobile Application Development"
      ]
    }
  },

  technicalSkills: {
    programmingLanguages: [
      { name: "JavaScript", proficiency: "Advanced", years: 3 },
      { name: "Python", proficiency: "Advanced", years: 2 },
      { name: "Java", proficiency: "Intermediate", years: 2 },
      { name: "Kotlin", proficiency: "Intermediate", years: 1 },
      { name: "C++", proficiency: "Beginner", years: 1 },
      { name: "C", proficiency: "Beginner", years: 1 }
    ],
    frontend: [
      { name: "React", proficiency: "Advanced", tools: ["React Router", "Redux", "Context API"] },
      { name: "Tailwind CSS", proficiency: "Advanced" },
      { name: "HTML5", proficiency: "Advanced" },
      { name: "CSS3", proficiency: "Advanced" }
    ],
    backend: [
      { name: "Node.js", proficiency: "Advanced", tools: ["Express.js", "REST APIs"] },
      { name: "Spring Boot", proficiency: "Intermediate" }
    ],
    databases: [
      { name: "MongoDB", proficiency: "Advanced", tools: ["Mongoose"] },
      { name: "MySQL", proficiency: "Intermediate" }
    ],
    mobile: [
      { name: "Kotlin", proficiency: "Intermediate", tools: ["Android Studio", "Jetpack Compose"] }
    ],
    toolsAndPlatforms: [
      "Git (Version Control)",
      "GitHub",
      "VS Code",
      "IntelliJ IDEA",
      "Postman",
      "Vercel",
      "Firebase",
      "Docker (Beginner)"
    ],
    aiAndCloud: [
      "Gemini API (Conversational AI)",
      "OpenCV (Computer Vision)",
      "MediaPipe (Gesture Recognition)",
      "HuggingFace (ML Models)",
      "Firebase Hosting",
      "AWS (Beginner)"
    ],
    softSkills: [
      "Team Collaboration",
      "Effective Communication",
      "Problem-Solving",
      "Time Management",
      "Adaptability",
      "Public Speaking"
    ],
    initializationGuides: {
      frontend: {
        react: {
          description: "Initialize a React project with Vite for fast development and Tailwind CSS for styling.",
          setup: [
            "Run `npm create vite@latest` and select React template",
            "Install Tailwind: `npm install -D tailwindcss postcss autoprefixer`",
            "Initialize Tailwind: `npx tailwindcss init -p`",
            "Configure `tailwind.config.js` with content paths",
            "Add Tailwind directives to `index.css`",
            "Start dev server: `npm run dev`"
          ]
        }
      },
      backend: {
        nodejs: {
          description: "Set up a Node.js backend with Express and MongoDB.",
          setup: [
            "Initialize project: `npm init -y`",
            "Install dependencies: `npm install express mongoose dotenv`",
            "Create `index.js` and set up Express server",
            "Configure MongoDB connection with environment variables",
            "Define REST API routes and test with Postman"
          ]
        }
      },
      mobile: {
        kotlin: {
          description: "Set up an Android project with Kotlin in Android Studio.",
          setup: [
            "Install Android Studio and configure Android SDK",
            "Create new project with Kotlin and Jetpack Compose",
            "Set up `build.gradle` with dependencies",
            "Configure emulators or physical device for testing",
            "Run app: `Run > Run 'app'`"
          ]
        }
      }
    }
  },

  projectPortfolio: [
    {
      name: "PawGo",
      type: "Web Application",
      description:
        "A full-stack pet care marketplace built with MERN stack, featuring an AI-powered chatbot using Gemini API for enhanced user engagement. Supports pet service bookings and secure payments.",
      techUsed: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "Tailwind CSS", "JWT"],
      liveLink: "https://paw-go.vercel.app/",
      github: "https://github.com/Daniru12/pawgo",
      highlights: [
        "Role: Lead Developer & AI Integrator",
        "Developed responsive UI with React and Tailwind CSS",
        "Integrated Gemini API for conversational chatbot, boosting engagement by 30%",
        "Built secure REST API with JWT authentication",
        "Deployed on Vercel with CI/CD pipeline"
      ],
      challenges: [
        "Optimized API response time by implementing caching",
        "Ensured cross-browser compatibility for UI components"
      ]
    },
    {
      name: "Tasty Street Eats",
      type: "Cross-Platform Food Ordering System",
      description:
        "A mobile-first food ordering platform with a web admin panel. Features include image uploads, order tracking, and secure authentication. Built for Android and web.",
      techUsed: ["React", "Node.js", "Express", "MongoDB", "Kotlin", "Firebase", "JWT"],
      liveLink: null,
      github: "https://github.com/Daniru12/tasty-street-eats",
      highlights: [
        "Role: Full-Stack Developer",
        "Developed mobile UI with Kotlin and Jetpack Compose",
        "Built scalable backend with Express and MongoDB",
        "Implemented JWT-based authentication for secure access",
        "Integrated Firebase for image storage and push notifications"
      ],
      challenges: [
        "Ensured seamless cross-platform compatibility",
        "Optimized image upload performance with Firebase"
      ]
    },
    {
      name: "Gesture-Controlled Game Automation",
      type: "Computer Vision Project",
      description:
        "A Python-based system using OpenCV and MediaPipe to interpret hand gestures for real-time game control. Designed for accessibility and gaming automation.",
      techUsed: ["Python", "OpenCV", "MediaPipe"],
      liveLink: null,
      github: "https://github.com/Daniru12/gesture-game-control",
      highlights: [
        "Role: Developer",
        "Built real-time gesture classifier with 95% accuracy",
        "Mapped gestures to keyboard events for game control",
        "Optimized performance for low-latency response"
      ],
      challenges: [
        "Improved gesture detection under varying lighting conditions",
        "Reduced false positives in gesture recognition"
      ]
    }
  ],

  industryKnowledge: {
    softwareEngineering: [
      "Agile and Scrum methodologies for project management",
      "RESTful API design and best practices",
      "Microservices architecture principles",
      "Test-Driven Development (TDD) with Jest and JUnit",
      "CI/CD pipelines with GitHub Actions and Vercel"
    ],
    aiAndMachineLearning: [
      "Natural Language Processing (NLP) with Gemini API",
      "Computer vision with OpenCV and MediaPipe",
      "Model deployment with HuggingFace",
      "Ethical AI principles and bias mitigation"
    ],
    cloudAndDevOps: [
      "Firebase for hosting and real-time databases",
      "AWS basics (EC2, S3, Lambda)",
      "Docker for containerization",
      "Basic Kubernetes concepts for orchestration"
    ],
    mobileDevelopment: [
      "Android app development with Kotlin and Jetpack Compose",
      "Responsive UI design for multiple screen sizes",
      "Integration with Firebase for push notifications"
    ]
  },

  atsFriendlyCV: {
    guidelines: [
      "Use standard fonts (Arial, Times New Roman) and clear section headings",
      "Include keywords from job descriptions (e.g., 'React', 'Node.js', 'AI integration')",
      "List skills explicitly in a dedicated 'Skills' section",
      "Quantify achievements (e.g., 'Increased engagement by 30%')",
      "Avoid headers, footers, or complex formatting",
      "Save as PDF with a filename like 'Daniru_Ranathunga_Resume.pdf'"
    ],
    sampleStructure: {
      header: {
        name: "Daniru Ranathunga",
        contact: "Punstthdaniru@gmail.com | +94 71 383 7375 | linkedin.com/in/daniru-ranathunga | github.com/Daniru12"
      },
      sections: [
        {
          title: "Education",
          content: "BSc (Hons) in Information Technology - Software Engineering, SLIIT, Expected 2027, GPA: 3.68"
        },
        {
          title: "Skills",
          content: "JavaScript, React, Node.js, MongoDB, Python, Kotlin, Gemini API, OpenCV, Firebase, Git"
        },
        {
          title: "Projects",
          content: [
            "PawGo: Developed MERN-stack pet care platform with AI chatbot, increasing engagement by 30%",
            "Tasty Street Eats: Built cross-platform food ordering app with Kotlin and Firebase",
            "Gesture-Controlled Game Automation: Created real-time gesture recognition system using OpenCV"
          ]
        },
        {
          title: "Achievements",
          content: ["Dean's List 2024", "SLIIT Coding Competition Finalist"]
        }
      ]
    }
  },

  academicProjectPreparation: {
    planning: [
      "Define clear objectives and scope (e.g., solve a specific problem like accessibility or automation)",
      "Choose relevant technologies based on project goals (e.g., MERN for web, Python for AI)",
      "Create a timeline with milestones (e.g., Week 1: Research, Week 2: Prototype)",
      "Document requirements using tools like Trello or Notion"
    ],
    development: [
      "Follow modular coding practices for reusability",
      "Write unit tests for critical components (e.g., Jest for React, Pytest for Python)",
      "Use version control with Git and maintain a clean commit history",
      "Document code with comments and maintain a README"
    ],
    presentation: [
      "Create a slide deck with clear visuals (e.g., architecture diagrams, screenshots)",
      "Highlight technical challenges and solutions",
      "Quantify outcomes (e.g., 'Reduced processing time by 20%')",
      "Practice demo to ensure smooth delivery"
    ],
    tools: [
      "Use Figma for UI/UX prototyping",
      "Leverage GitHub for collaboration and version control",
      "Use Postman for API testing",
      "Document with Google Docs or Markdown"
    ]
  },

  internshipPreparation: {
    findingOpportunities: [
      "Search on LinkedIn, Internshala, and local platforms like YarlJobs",
      "Leverage SLIIT career services for industry connections",
      "Contribute to open-source projects on GitHub to build credibility",
      "Network at tech meetups or hackathons in Sri Lanka"
    ],
    application: [
      "Tailor CV for each role using ATS guidelines",
      "Write a cover letter highlighting relevant projects and skills",
      "Showcase portfolio with live links and GitHub repositories",
      "Prepare a 30-second elevator pitch for interviews"
    ],
    interviewPrep: [
      "Practice common technical questions (e.g., algorithms, system design)",
      "Review projects in portfolio and be ready to explain challenges",
      "Demonstrate soft skills like teamwork and problem-solving",
      "Prepare questions for interviewer (e.g., 'What tech stack does your team use?')"
    ]
  },

  chatbotPersona: {
    aiName: "DaniruBot",
    personality: "Friendly, professional, and passionate about technology and innovation.",
    sampleIntros: [
      "Hi, I'm DaniruBot! Ready to dive into Daniru’s world of full-stack development, AI, and more?",
      "Hey there! I'm DaniruBot, here to showcase Daniru’s skills, projects, and tech journey. What's up?",
      "Welcome! I'm DaniruBot, your guide to Daniru’s portfolio. Ask about projects, skills, or internships!"
    ],
    firstMessage: "Hey there! 👋 Excited to share Daniru’s tech journey. Ask me about his projects, skills, or how he’s prepping for internships!"
  },

  contactDetails: {
    phone: "+94 71 383 7375",
    email: "Punstthdaniru@gmail.com",
    github: "https://github.com/Daniru12",
    portfolio: "https://portfolio-mydaniru.vercel.app",
    linkedin: "https://linkedin.com/in/daniru-ranathunga",
    address: {
      street: "Punstth, Kendapitiya Watta",
      city: "Molagoda, Regalle",
      country: "Sri Lanka",
      postalCode: "71000"
    }
  },

  interests: [
    "Full-stack web development with MERN",
    "Android app development with Kotlin",
    "AI and machine learning integration",
    "UI/UX design with Figma",
    "Cloud computing and DevOps with AWS and Docker",
    "Open-source contributions on GitHub",
    "Competitive programming and algorithmic problem-solving"
  ]
};