import React, { useState } from 'react';
import LiveCodeEditor from '../components/learning/LiveCodeEditor'; // Assuming this supports HTML/CSS/JS
import practiceImage from '../assets/practice.jpg';
import '@styles/App.css';

export default function PracticingChallenging() {
  return (
    <div className="practicing-container">
      <h1>Step-by-Step Practice: HTML/CSS/JS Basics</h1>
      <div className="image-container">
        <img src={practiceImage} alt="Practice Example" className="practice-image" />
      </div>
      
      <section className="guidelines">
        <h3>Live Code Editor Guidelines</h3>
        <p>To help you practice and learn, we’ve set up an interactive Live Code Editor for each example. You can try the examples by copying and pasting the provided HTML, CSS, and JavaScript into the editor, or modify the code directly to see the live result. Follow the steps below for each practice example:</p>
        <ol>
          <li>Copy the code from each section (HTML, CSS, JavaScript).</li>
          <li>Paste the code into the respective areas in the Live Code Editor.</li>
          <li>Automatically code running to see the live output in the editor.</li>
          <li>Feel free to modify the code and experiment with different changes!</li>
          <li>Use the "Copy" buttons next to each code block to easily copy the code to your clipboard.</li>
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
        explanation="In this example, when the button is clicked, JavaScript updates the content of the paragraph with a message."
      />

      <Step
        number={2}
        title="Change Background Color"
        html={`<h2>Change the background color</h2>
<button onclick="changeColor()">Change Color</button>`}
        css={`body {
  transition: background-color 0.5s;
}`}
        js={`function changeColor() {
  const colors = ['#f8b400', '#6a2c70', '#00b894', '#0984e3'];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}`}
        explanation="This step demonstrates how to change the background color of the page by selecting a random color from an array when the button is clicked."
      />

      <Step
        number={3}
        title="Live Character Counter"
        html={`<h2>Live Character Counter</h2>
<textarea oninput="countChars()" rows="4" cols="30" placeholder="Type here..."></textarea>
<p>Characters: <span id="charCount">0</span></p>`}
        css={`textarea {
  width: 100%;
  font-size: 16px;
  padding: 10px;
}`}
        js={`function countChars() {
  const text = document.querySelector('textarea').value;
  document.getElementById('charCount').textContent = text.length;
}`}
        explanation="As you type into the text area, this JavaScript function counts the number of characters and displays the current count live."
      />

      <Step
        number={4}
        title="Simple Form Validation"
        html={`<h2>Simple Form Validation</h2>
<input type="text" id="nameInput" placeholder="Enter your name" />
<button onclick="validateName()">Submit</button>
<p id="validationMsg"></p>`}
        css={`input {
  padding: 8px;
  margin-right: 10px;
}

#validationMsg {
  font-weight: bold;
  color: red;
}`}
        js={`function validateName() {
  const name = document.getElementById('nameInput').value;
  const msg = document.getElementById('validationMsg');

  if (name.trim() === '') {
    msg.textContent = 'Name cannot be empty!';
  } else {
    msg.textContent = \`Welcome, \${name}!\`;
    msg.style.color = 'green';
  }
}`}
        explanation="This example shows how to validate user input in a simple form. If the user does not enter a name, an error message is displayed. If the input is valid, a welcome message is shown."
      />

      <section className="exercise-step">
        <h3>Step 5: Try It Yourself in Live Editor</h3>
        <p>You can experiment live with HTML, CSS, and JavaScript below:</p>
        <LiveCodeEditor />
      </section>
    </div>
  );
}

function Step({ number, title, html, css, js, explanation }) {
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
