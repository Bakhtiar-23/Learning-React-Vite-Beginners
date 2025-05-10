import React, { useState } from 'react';
import QuizzeNine from '../assessment/QuizzesNine'; // Adjust the path if needed
import '@styles/App.css'; // Ensure styles are applied

const headings = [
  { id: "intro", title: "Introduction", children: [] },
  { id: "what-is-useEffect", title: "What is useEffect?", children: [] },
  { id: "how-useEffect-works", title: "How useEffect Works", children: [] },
  { id: "useEffect-syntax", title: "useEffect Syntax", children: [] },
  { id: "common-use-cases", title: "Common useEffect Use Cases", children: [] },
  { id: "example", title: "Example", children: [] },
  { id: "quiz", title: "Take a Quiz", children: [] },
];

const Lesson9UseEffects = () => {
  const [copiedType, setCopiedType] = useState('');

  const useEffectExample = `import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h1>Timer: {time}s</h1>
    </div>
  );
};

export default Timer;`;

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
        <h1 id="intro">Introduction</h1>
        <p>
          The `useEffect` hook is one of the most important hooks in React. It allows you to perform side effects in function components, such as fetching data, setting up subscriptions, or manually changing the DOM.
        </p>

        <h1 id="what-is-useEffect">What is useEffect?</h1>
        <p>
          `useEffect` is a hook provided by React that lets you perform side effects in function components. Side effects are operations that interact with the outside world, such as making API calls or subscribing to events.
        </p>

        <h1 id="how-useEffect-works">How useEffect Works</h1>
        <p>
          By default, the `useEffect` hook runs after every render. However, you can control when it runs by providing a dependency array as the second argument. It can run:
        </p>
        <ul>
          <li>After every render (if the dependency array is empty)</li>
          <li>Only when certain values change (by passing a dependency array with specific values)</li>
          <li>Only once when the component mounts (by passing an empty array `[]`)</li>
        </ul>

        <h1 id="useEffect-syntax">useEffect Syntax</h1>
        <p>
          The syntax for the `useEffect` hook is as follows:
        </p>
        <pre className="code-block">
        <code>
            {`useEffect(() => {/* side effect */}, [/* dependencies */]);`}
        </code>
        </pre>

        <h1 id="common-use-cases">Common useEffect Use Cases</h1>
        <p>
          Some common use cases for `useEffect` include:
        </p>
        <ul>
          <li>Fetching data from an API when the component mounts</li>
          <li>Setting up event listeners and cleaning them up</li>
          <li>Updating the document title based on state changes</li>
          <li>Timers and intervals (like in the example below)</li>
        </ul>

        <h2 id="example">Example</h2>
        <div className="code-container">
          <button
            className="copy-button"
            onClick={() => handleCopy(useEffectExample, 'useEffectExample')}
          >
            {copiedType === 'useEffectExample' ? 'Copied!' : 'Copy Example Code'}
          </button>
          <pre className="code-block"><code>{useEffectExample}</code></pre>
        </div>

        <h2 id="quiz">Try a Quiz!</h2>
        <div className="lesson-quiz-section">
          <QuizzeNine />
        </div>
      </div>

      {/* Right Side: Resources */}
      <div className="resource-sidebar">
        <h4>Resources</h4>
        <button
          onClick={() =>
            window.open(
              "https://reactjs.org/docs/hooks-effect.html",
              "useEffect Documentation",
              "width=800,height=600"
            )
          }
        >
          📚 React Docs: useEffect
        </button>
        <a
          href="https://www.youtube.com/watch?v=htv11RUm7B8"
          target="_blank"
          rel="noopener noreferrer"
        >
          📺 Video Tutorial: useEffect
        </a>
        <a
          href="https://www.freecodecamp.org/news/react-useeffect-absolute-beginners/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📝 Blog Post: React useEffect Explained
        </a>
      </div>
    </div>
  );
};

export default Lesson9UseEffects;
