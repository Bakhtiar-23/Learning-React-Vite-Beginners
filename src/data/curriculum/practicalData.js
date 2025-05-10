const practicalData = [
    {
      question: "What is the correct syntax to create a functional component in React?",
      options: [
        "function MyComponent() { return <div>Hello</div>; }",
        "component MyComponent() => <div>Hello</div>",
        "class MyComponent extends React.Component",
        "<MyComponent> => <div>Hello</div>",
      ],
      answer: "function MyComponent() { return <div>Hello</div>; }",
      explanation: "A functional component in React is defined using a plain JavaScript function that returns JSX."
    },
    {
      question: "How do you start a new React project with Vite?",
      options: [
        "npm start react",
        "vite-create react-app",
        "npm create vite@latest my-app -- --template react",
        "create-react-app my-app",
      ],
      answer: "npm create vite@latest my-app -- --template react",
      explanation: "This command scaffolds a new React project using Vite's official template."
    },
    {
      question: "Which hook is used to add state to a functional component?",
      options: [
        "useProps",
        "useState",
        "useEffect",
        "setState",
      ],
      answer: "useState",
      explanation: "`useState` is the React Hook that allows you to add state to functional components."
    },
    {
      question: "How do you display a variable in JSX?",
      options: [
        "{variable}",
        "{{ variable }}",
        "[variable]",
        "$(variable)",
      ],
      answer: "{variable}",
      explanation: "You use curly braces `{}` in JSX to embed JavaScript expressions like variables."
    },
    {
      question: "What is the correct way to pass a prop named 'title' to a component?",
      options: [
        "<Header title='Welcome' />",
        "<Header: title='Welcome' />",
        "<Header > title='Welcome' </Header>",
        "<Header.title='Welcome' />",
      ],
      answer: "<Header title='Welcome' />",
      explanation: "Props are passed in JSX like HTML attributes: `<Component propName='value' />`."
    },
    {
      question: "Which command runs the local development server in a Vite project?",
      options: [
        "npm run dev",
        "npm start",
        "vite serve",
        "npm run vite",
      ],
      answer: "npm run dev",
      explanation: "`npm run dev` starts the development server in Vite-based projects."
    },
    {
      question: "What is a fragment in React?",
      options: [
        "A component that fetches data",
        "A tool to run multiple apps",
        "A way to group multiple elements without extra nodes",
        "An event handler",
      ],
      answer: "A way to group multiple elements without extra nodes",
      explanation: "React Fragments (`<>...</>`) let you group elements without adding extra HTML elements."
    },
    {
      question: "Which statement is true about `useEffect()`?",
      options: [
        "It replaces JSX rendering",
        "It is used to add CSS",
        "It runs side effects like fetching data or updating the DOM",
        "It creates components dynamically",
      ],
      answer: "It runs side effects like fetching data or updating the DOM",
      explanation: "`useEffect()` is a hook that allows you to handle side effects in functional components."
    },
    {
      question: "How do you conditionally render JSX in React?",
      options: [
        "if condition { return <p>Yes</p> }",
        "{condition && <p>Yes</p>}",
        "<p>Yes</p> if condition",
        "condition ? <p>Yes</p>",
      ],
      answer: "{condition && <p>Yes</p>}",
      explanation: "You can use short-circuit logic with `&&` to conditionally render JSX."
    },
    {
      question: "Which file contains the main component that renders the app in a Vite-React project?",
      options: [
        "App.js",
        "main.jsx",
        "index.html",
        "vite.config.js",
      ],
      answer: "main.jsx",
      explanation: "`main.jsx` typically contains the `ReactDOM.createRoot(...).render(<App />)` logic in Vite."
    }
  ];
  
  export default practicalData;
  