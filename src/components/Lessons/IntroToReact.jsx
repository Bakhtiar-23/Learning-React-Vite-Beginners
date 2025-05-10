import React, { useState } from 'react';
import Quizze from '../assessment/Quizzes.jsx'; // Adjust the path if needed
import '@styles/App.css'; // Ensure styles are applied

const headings = [
  { id: "intro", title: "Introduction", children: [] },
  { id: "what-is-react", title: "What is React?", children: [] },
  { id: "what-is-vite", title: "What is Vite?", children: [] },
  { id: "why-use-vite-react", title: "Why Use Vite with React?", children: [] },
  { id: "how-vite-react-work", title: "How Do Vite and React Work Together?", children: [] },
  { id: "lego", title: "Think of React like LEGO", children: [] },
  {
    id: "why-react-useful",
    title: "Why is React Useful?",
    children: [
      { id: "example", title: "Example" },
      { id: "quiz", title: "Take a Quiz" }
    ],
  },
];

const IntroToReact = () => {
  const [copiedType, setCopiedType] = useState('');

  const jsExample = `import React from 'react';

const Welcome = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to React!</p>
    </div>
  );
};

export default Welcome;`;

  const handleCopy = (code, type) => {
    navigator.clipboard.writeText(code).then(
      () => {
        setCopiedType(type);
        setTimeout(() => setCopiedType(''), 2000);
      },
      () => alert('Failed to copy text')
    );
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-layout">
      {/* Left Side: Table of Contents */}
      <div className="toc-container">
        <ul className="toc-list">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button onClick={() => scrollToSection(heading.id)}>{heading.title}</button>
              {heading.children.length > 0 && (
                <ul className="toc-sublist">
                  {heading.children.map((child) => (
                    <li key={child.id}>
                      <button onClick={() => scrollToSection(child.id)}>{child.title}</button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="content-container">
        <h2 id="intro">Introduction</h2>
        <p>When you're learning how to build websites using React, you'll want tools that make development faster, cleaner, and easier. That’s where Vite comes in.</p>

        <h2 id="what-is-react">What is React?</h2>
        <p>
          React is a popular open-source JavaScript library developed by Facebook for building user interfaces — especially for single-page applications where performance and responsiveness matter.
        </p>
        <p>
          Instead of dealing directly with HTML and the DOM (Document Object Model), React uses a <strong>component-based architecture</strong>. Components are like reusable building blocks — each component manages its own state and logic, making large applications easier to maintain and scale.
        </p>
        <p>
          With React, changes in the application state automatically update the user interface through something called the <strong>Virtual DOM</strong>, which efficiently updates only the parts of the UI that changed.
        </p>

        <h2 id="what-is-vite">What is Vite?</h2>
        <p>
          Vite (pronounced "veet") is a next-generation frontend build tool that significantly improves the development experience compared to traditional bundlers like Webpack.
        </p>
        <p>
          It starts your project instantly using native ES modules in the browser during development, and when you’re ready to ship, it uses lightning-fast bundling powered by <strong>Rollup</strong>.
        </p>
        <p>
          Vite also supports hot module replacement (HMR), meaning changes you make in your code are reflected in the browser without reloading the whole page. This helps you iterate faster.
        </p>
        <p>
          It has built-in support for popular frameworks like React, Vue, and Svelte and makes project setup as simple as running:
        </p>
        <pre className="code-block"><code>npm create vite@latest my-app --template react</code></pre>

        <h2 id="why-use-vite-react">Why Use Vite with React?</h2>
        <p>
          – <strong>Super Fast Start:</strong> Vite starts your dev server instantly. <br />
          – <strong>Live Changes (Hot Reloading):</strong> You see your edits live as you type. <br />
          – <strong>Easy to Use:</strong> Simple setup with almost no configuration. <br />
          – <strong>Builds Small & Fast Apps:</strong> Optimized for performance when deploying.
        </p>

        <h2 id="how-vite-react-work">How Do Vite and React Work Together?</h2>
        <p>
          – Vite gives you tools to quickly serve and build your project. <br />
          – React lets you build the content, structure, and interactions. <br />
          – Together, they create a blazing-fast and smooth development experience.
        </p>

        <h2 id="lego">Think of React like LEGO</h2>
        <p>
          Imagine building a house with LEGO blocks. Each block is a reusable part that you can move, stack, and connect. React components work the same way — small, reusable pieces that you put together to build a website.
        </p>

        <h2 id="why-react-useful">Why is React Useful?</h2>
        <p>
          – <strong>Reusable Pieces:</strong> Build once, reuse anywhere. <br />
          – <strong>Interactive Websites:</strong> Create dynamic interfaces easily. <br />
          – <strong>Organized Code:</strong> Structure your project with clarity.
        </p>

        <h3 id="example">Example</h3>
        <div className="code-container">
          <button
            className="copy-button"
            onClick={() => handleCopy(jsExample, 'jsExample')}
          >
            {copiedType === 'jsExample' ? 'Copied!' : 'Copy JavaScript'}
          </button>
          <pre className="code-block"><code>{jsExample}</code></pre>
        </div>

        <h3 id="quiz">Try a Quiz!</h3>
        <div className="lesson-quiz-section">
          <Quizze />
        </div>
      </div>

      {/* Right Side: Resources */}
      <div className="resource-sidebar">
        <h4>Resources</h4>
        <button
          onClick={() =>
            window.open(
              "https://www.youtube.com/watch?v=Ke90Tje7VS0",
              "VideoTutorial",
              "width=800,height=600"
            )
          }
        >
          📺 Video Tutorial
        </button>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          📘 React Documentation
        </a>
        <a
          href="https://blog.logrocket.com/what-is-react-a-beginners-guide/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📝 Blog Post: What is React?
        </a>
      </div>
    </div>
  );
};

export default IntroToReact;
