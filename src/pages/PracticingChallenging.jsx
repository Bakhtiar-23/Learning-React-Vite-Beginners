import React, { useState } from 'react';
import LiveCodeEditor from '../components/learning/LiveCodeEditor';
import practiceImage from '../assets/practice.jpg';
import '@styles/App.css';

// Step component definition
export function Step({ number, title, html, css, js, explanation }) {
  const [copiedType, setCopiedType] = useState('');

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="exercise-step">
      <h3>Step {number}: {title}</h3>

      <div className="code-container">
        <h4>HTML</h4>
        <button className="copy-button" onClick={() => handleCopy(html, 'html')}>
          {copiedType === 'html' ? 'Copied!' : 'Copy HTML'}
        </button>
        <pre className="code-block"><code>{html}</code></pre>
      </div>

      <div className="code-container">
        <h4>CSS</h4>
        <button className="copy-button" onClick={() => handleCopy(css, 'css')}>
          {copiedType === 'css' ? 'Copied!' : 'Copy CSS'}
        </button>
        <pre className="code-block"><code>{css}</code></pre>
      </div>

      <div className="code-container">
        <h4>JavaScript</h4>
        <button className="copy-button" onClick={() => handleCopy(js, 'js')}>
          {copiedType === 'js' ? 'Copied!' : 'Copy JavaScript'}
        </button>
        <pre className="code-block"><code>{js}</code></pre>
      </div>

      <div className="explanation">
        <h4>Explanation:</h4>
        <p>{explanation}</p>
      </div>
    </section>
  );
}

// Main component
export default function PracticingChallenging() {
  return (
    <div className="practicing-container">
      <h1>Step-by-Step Practice: HTML/CSS/JS Basics</h1>
      <div className="image-container">
        <img src={practiceImage} alt="Practice Example" className="practice-image" />
      </div>
      
      <section className="guidelines">
        <h2>Live Code Editor Guidelines</h2>
        <p>To help you practice and learn, we've set up an interactive Live Code Editor for each example.</p>
        <ol>
          <li>Copy the code from each section (HTML, CSS, JavaScript)</li>
          <li>Paste the code into the respective areas in the Live Code Editor</li>
          <li>See the live output in the editor</li>
          <li>Experiment with different changes!</li>
          <li>Use the "Copy" buttons to easily copy the code</li>
        </ol>
      </section>

      <Step
        number={1}
        title="Show Text on Button Click"
        html={`<h2>Click the button to show a message</h2>
<button onclick="showMessage()">Click Me</button>
<p id="message"></p>`}
        css={`button {
  padding: 10px 20px;
  font-size: 16px;
}

p {
  font-weight: bold;
  color: green;
}`}
        js={`function showMessage() {
  document.getElementById('message').textContent = "Hello, this is your message!";
}`}
        explanation="When the button is clicked, JavaScript updates the paragraph content."
      />

      {/* Other Step components remain the same */}
      
      <section className="exercise-step">
        <h3>Step 5: Try It Yourself in Live Editor</h3>
        <p>Experiment live with HTML, CSS, and JavaScript below:</p>
        <LiveCodeEditor />
      </section>
    </div>
  );
}