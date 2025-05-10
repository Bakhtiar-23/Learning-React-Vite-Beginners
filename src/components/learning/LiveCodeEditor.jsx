import { useState, useEffect } from "react";
import '@styles/App.css'; // Ensure App.css contains the styles below

const LiveCodeEditor = () => {
  const [html, setHtml] = useState("<h1>Hello World</h1>");
  const [css, setCss] = useState("h1 { color: blue; }");
  const [js, setJs] = useState("console.log('Hello from JS')");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Dynamically inject the HTML, CSS, and JS
      const source = `
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>
              ${js}
            </script>
          </body>
        </html>
      `;
      setSrcDoc(source);
    }, 300);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="editor-container">
      <div className="editor-inputs">
        <div className="editor-section">
          <h3>HTML</h3>
          <textarea
            className="editor-textarea"
            placeholder="HTML"
            value={html}
            onChange={(e) => setHtml(e.target.value)}
          />
        </div>
        <div className="editor-section">
          <h3>CSS</h3>
          <textarea
            className="editor-textarea"
            placeholder="CSS"
            value={css}
            onChange={(e) => setCss(e.target.value)}
          />
        </div>
        <div className="editor-section">
          <h3>JavaScript</h3>
          <textarea
            className="editor-textarea"
            placeholder="JavaScript"
            value={js}
            onChange={(e) => setJs(e.target.value)}
          />
        </div>
      </div>

      <div className="preview-section">
        <h3 className="preview-title">Live Preview</h3>
        <iframe
          className="editor-preview"
          srcDoc={srcDoc}
          title="Live Preview"
          sandbox="allow-scripts"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default LiveCodeEditor;
