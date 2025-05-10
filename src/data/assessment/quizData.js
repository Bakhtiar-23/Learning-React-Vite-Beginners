const quizData = [
    {
      question: "What is React?",
      options: [
        "A CSS framework",
        "A JavaScript library for building UI",
        "A database tool",
        "A server-side scripting language",
      ],
      answer: "A JavaScript library for building UI",
      explanation: "React is a JavaScript library that helps you build parts of a website like components (blocks)."
    },
    {
      question: "What is Vite?",
      options: [
        "A tool to build and test React apps quickly",
        "A CSS preprocessor",
        "A type of database",
        "A React component",
      ],
      answer: "A tool to build and test React apps quickly",
      explanation: "Vite is a build tool that helps start, build, and test React apps quickly."
    },
    {
      question: "Why is React useful?",
      options: [
        "Makes websites slower",
        "Only good for backend",
        "Helps write organized, interactive, reusable code",
        "Replaces all HTML elements",
      ],
      answer: "Helps write organized, interactive, reusable code",
      explanation: "React makes it easier to reuse components, manage code structure, and build interactive UIs."
    },
    {
      question: "What does Vite provide when used with React?",
      options: [
        "Database integration",
        "Server hosting",
        "Super fast start and hot reloading",
        "Advanced routing system",
      ],
      answer: "Super fast start and hot reloading",
      explanation: "Vite offers fast startup and live changes (hot reloading) when working with React."
    },
    {
      question: "How does React update the UI efficiently?",
      options: [
        "By editing HTML files directly",
        "By modifying the real DOM every time",
        "By using the Virtual DOM",
        "By compiling to native code",
      ],
      answer: "By using the Virtual DOM",
      explanation: "React uses a Virtual DOM to track changes and update the actual DOM efficiently."
    },
    {
      question: "What is the role of components in React?",
      options: [
        "They are used only for styling",
        "They replace all HTML tags",
        "They are reusable building blocks of the UI",
        "They store data permanently",
      ],
      answer: "They are reusable building blocks of the UI",
      explanation: "Components are like LEGO blocks used to build parts of the user interface in React."
    },
    {
      question: "Which analogy best explains how React components work?",
      options: [
        "Like a painting palette",
        "Like LEGO blocks you can reuse",
        "Like a recipe with steps",
        "Like a finished house",
      ],
      answer: "Like LEGO blocks you can reuse",
      explanation: "React components can be combined and reused like LEGO blocks to build UIs."
    },
    {
      question: "Which tool does Vite use for production bundling?",
      options: [
        "Webpack",
        "Babel",
        "Parcel",
        "Rollup",
      ],
      answer: "Rollup",
      explanation: "Vite uses Rollup to optimize and bundle your application for production."
    },
    {
      question: "What makes Vite fast during development?",
      options: [
        "It skips rendering",
        "It avoids using ES modules",
        "It uses native ES modules for faster startup",
        "It requires complex setup",
      ],
      answer: "It uses native ES modules for faster startup",
      explanation: "Vite takes advantage of native ES modules to enable fast server startup and live updates."
    },
    {
      question: "Which of the following is NOT true about React?",
      options: [
        "It is used to build interactive UIs",
        "It is good for organizing code with components",
        "It replaces the need for all CSS",
        "It helps in building reusable code",
      ],
      answer: "It replaces the need for all CSS",
      explanation: "React doesn't replace CSS. It helps build UIs, but styling is still done with CSS or CSS-in-JS."
    }
  ];
  
  export default quizData;
  