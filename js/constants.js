// ============================================
// PORTFOLIO DATA — Nagaraj Mahantesh Hallur
// ============================================

const PORTFOLIO_DATA = {

  // ── Personal Info ──────────────────────────
  personal: {
    name: "Nagaraj Mahantesh Hallur",
    firstName: "Nagaraj",
    title: "Full Stack Web Developer",
    roles: ["Developer", "Designer"],
    tagline: "Innovate the Tech",
    profilePic: "https://www.image2url.com/r2/default/images/1780942303890-498d1c77-1b06-4070-b0d1-c89d8a34b6c9.png",
    resumeUrl: "https://drive.google.com/uc?export=download&id=1RY72T8wumnIp1sqFYubkyS08ojJjs4OB",
    email: "nagarajhallur2003@gmail.com",
    location: "Bengaluru",
    experience: "Fresher",
    domain: "Full Stack Web Development",
    availability: "Open for opportunities",
    ctaMessage: "Let's work together!",
    shortAbout: "Passionate Full-Stack Web Developer and Computer Science student skilled in Java, React.js, Spring Boot, JavaScript, and REST APIs with experience in building responsive and scalable web applications.",
    detailedAbout: [
      "I am a Computer Science and Engineering student at KLE Institute of Technology with a CGPA of 9.32 and a strong passion for full-stack web development and software engineering. I have hands-on experience in building responsive and scalable web applications using Java, Spring Boot, React.js, JavaScript, Python, MySQL, HTML, CSS, and REST APIs.",
      "During my internship at TAP Academy, I worked on developing web applications, backend services, and database-integrated systems, which strengthened my problem-solving and development skills. I have also developed projects such as a Finance Management App, Store Indent Management System, and an AI-powered Smart Learning Companion, gaining practical exposure to frontend, backend, database, and AI technologies.",
      "I am a quick learner who enjoys exploring modern technologies and building user-friendly applications. My areas of interest include full-stack development, AI/ML, cloud technologies, and software development. I am eager to contribute my technical skills, creativity, and dedication to innovative projects while continuously learning and growing as a software professional.",
    ],
  },

  // ── Social Links ──────────────────────────
  social: {
    linkedin: "https://www.linkedin.com/in/nagaraj-hallur",
    github: "https://github.com/NagarajH1803",
    hackerrank: "https://www.hackerrank.com/profile/nagarajhallur201",
  },

  // ── Navigation ────────────────────────────
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],

  // ── Skills ────────────────────────────────
  skills: [
    {
      category: "Frontend",
      icon: "🎨",
      items: [
        { name: "HTML5", devicon: "devicon-html5-plain colored" },
        { name: "CSS3", devicon: "devicon-css3-plain colored" },
        { name: "JavaScript (ES6+)", devicon: "devicon-javascript-plain colored" },
        { name: "React.js", devicon: "devicon-react-original colored" },
        { name: "React Native", devicon: "devicon-react-original colored" },
        { name: "Tailwind CSS", devicon: "devicon-tailwindcss-original colored" },
        { name: "TypeScript", devicon: "devicon-typescript-plain colored" },
        { name: "Responsive Design", devicon: null },
        { name: "REST API Integration", devicon: null },
        { name: "UI/UX Basics", devicon: null },
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: [
        { name: "Java", devicon: "devicon-java-plain colored" },
        { name: "Spring Boot", devicon: "devicon-spring-original colored" },
        { name: "Node.js", devicon: "devicon-nodejs-plain colored" },
        { name: "Python", devicon: "devicon-python-plain colored" },
        { name: "Flask", devicon: "devicon-flask-original" },
        { name: "REST APIs", devicon: null },
        { name: "JWT Auth", devicon: null },
        { name: "API Development", devicon: null },
      ],
    },
    {
      category: "Databases",
      icon: "🗄️",
      items: [
        { name: "MySQL", devicon: "devicon-mysql-plain colored" },
        { name: "MongoDB", devicon: "devicon-mongodb-plain colored" },
      ],
    },
    {
      category: "Tools & DevOps",
      icon: "🛠️",
      items: [
        { name: "Git", devicon: "devicon-git-plain colored" },
        { name: "GitHub", devicon: "devicon-github-original" },
        { name: "VS Code", devicon: "devicon-vscode-plain colored" },
        { name: "Docker", devicon: "devicon-docker-plain colored" },
        { name: "Linux", devicon: "devicon-linux-plain" },
        { name: "Postman", devicon: "devicon-postman-plain colored" },
        { name: "CI/CD (Jenkins, GitLab CI)", devicon: null },
        { name: "Agile/Scrum", devicon: null },
      ],
    },
    {
      category: "AI Tools",
      icon: "🤖",
      items: [
        { name: "ChatGPT", devicon: null },
        { name: "GitHub Copilot", devicon: null },
        { name: "AI/ML", devicon: null },
        { name: "NLP", devicon: null },
        { name: "Prompt Engineering", devicon: null },
        { name: "Data Analytics", devicon: null },
      ],
    },
  ],

  // ── Projects ──────────────────────────────
  projects: [
    {
      title: "Finance Management System",
      status: "Completed",
      category: "Web App",
      description: "Designed and developed a full-stack finance management web application to help users track expenses, manage budgets, and visualize financial data through interactive dashboards and charts. Implemented secure JWT-based authentication, REST API integration, and database management for reliable data storage and analysis.",
      tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Python", "Flask", "MongoDB", "Chart.js", "JWT Authentication", "REST APIs", "AI Integration"],
      liveDemo: null,
      github: "https://github.com/NagarajH1803/Personal-Finance-Management-System",
      color: "#a855f7",
    },
    {
      title: "Store Indent Management System",
      status: "Completed",
      category: "Web App",
      description: "Designed and developed a web-based Store Indent Management System to streamline indent requests, approvals, and inventory tracking across departments. Implemented secure REST APIs and database integration to ensure efficient request handling and accurate record maintenance.",
      tech: ["Java", "Spring Boot", "MySQL", "HTML5", "CSS3", "JavaScript", "REST APIs"],
      liveDemo: "https://github.com/NagarajH1803/StoreManagementSystem",
      github: null,
      color: "#06b6d4",
    },
    {
      title: "Smart Learning Companion",
      status: "Completed",
      category: "AI",
      description: "Designed and developed an AI-powered learning assistant that provides personalized quizzes, adaptive study recommendations, and interactive question-answer support for students. Integrated AI/ML techniques and intelligent content generation to improve student engagement and learning efficiency.",
      tech: ["Python", "Flask", "JavaScript", "HTML5", "CSS3", "AI/ML", "NLP"],
      liveDemo: null,
      github: null,
      color: "#f59e0b",
    },
  ],

  // ── Education ─────────────────────────────
  education: [
    {
      degree: "B.E Computer Science Engineering",
      institute: "KLE Institute of Technology",
      location: "Hubballi",
      year: "2022 – 2026",
      description: "CGPA: 9.3",
    },
  ],

  // ── Certifications ────────────────────────
  certifications: [
    {
      name: "Cloud Computing Fundamentals",
      platform: "IBM SkillsBuild",
      date: "March 2025",
      skills: ["Cloud Computing", "Virtualization", "Cloud Services", "Infrastructure Basics"],
      verification: "https://www.credly.com/badges/cf073935-9ede-4ea1-b1c9-ed6dd54f7a54",
    },
    {
      name: "Cyber Security",
      platform: "1Stop.ai × IIT Guwahati",
      date: "September 2025",
      skills: ["Cyber Security", "Network Security", "Ethical Hacking Basics", "Security Awareness"],
      verification: "https://1stop.ai/verify-certificate",
    },
    {
      name: "Mastering DSA Using C and C++",
      platform: "Udemy",
      date: "March 2024",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "C", "C++"],
      verification: "https://ude.my/UC-7327d7da-e091-4305-96f9-f3428d28a632",
    },
    {
      name: "Introduction to Artificial Intelligence",
      platform: "Infosys Springboard",
      date: "December 2024",
      skills: ["Artificial Intelligence", "Machine Learning Basics", "AI Concepts"],
      verification: null,
    },
    {
      name: "GenAI Powered Data Analytics Job Simulation",
      platform: "TATA Forage",
      date: "September 2025",
      skills: ["Data Analytics", "Generative AI", "Data Storytelling", "Risk Profiling", "AI-driven Strategy"],
      verification: "https://www.theforage.com",
    },
  ],

  // ── Footer ────────────────────────────────
  footer: {
    tagline: "Designed & Built with 💜 by Nagaraj Mahantesh Hallur",
    year: new Date().getFullYear(),
  },
};
