const quizDataNine = [
    {
      question: "What is the purpose of the `useEffect` hook in React?",
      options: [
        "To manage state within functional components",
        "To trigger side effects in function components",
        "To create a context for data sharing",
        "To handle routing in React applications"
      ],
      correctAnswer: "To trigger side effects in function components",
      explanation: "`useEffect` allows you to perform side effects in function components, such as fetching data, subscribing to events, or manually updating the DOM."
    },
    {
      question: "Which of the following is NOT a valid way to control when `useEffect` runs?",
      options: [
        "After every render",
        "Once when the component mounts",
        "Only when a specific prop changes",
        "Only when the component unmounts"
      ],
      correctAnswer: "Only when the component unmounts",
      explanation: "`useEffect` does not run only when the component unmounts. However, you can use the cleanup function in `useEffect` to handle unmounting effects."
    },
    {
      question: "How do you run `useEffect` only once when the component mounts?",
      options: [
        "By passing an empty array `[]` as the second argument",
        "By passing `null` as the second argument",
        "By using a cleanup function inside `useEffect`",
        "By passing the dependency array with all props"
      ],
      correctAnswer: "By passing an empty array `[]` as the second argument",
      explanation: "When an empty array `[]` is passed as the second argument to `useEffect`, the effect runs only once after the component mounts, and it does not run again unless the component unmounts."
    },
    {
      question: "What is a typical use case for the `useEffect` hook?",
      options: [
        "Handling form inputs",
        "Performing side effects like fetching data or DOM manipulation",
        "Managing state updates on click events",
        "Rendering components conditionally"
      ],
      correctAnswer: "Performing side effects like fetching data or DOM manipulation",
      explanation: "`useEffect` is commonly used to perform side effects, such as making API calls, updating the DOM, or subscribing to events in function components."
    },
    {
      question: "What does the cleanup function inside `useEffect` do?",
      options: [
        "It renders the component again when the component updates",
        "It fetches data asynchronously",
        "It cleans up resources like event listeners or intervals when the component unmounts or updates",
        "It calls an API when the component is mounted"
      ],
      correctAnswer: "It cleans up resources like event listeners or intervals when the component unmounts or updates",
      explanation: "The cleanup function returned by `useEffect` is responsible for cleaning up resources, such as removing event listeners or clearing intervals when the component unmounts or when `useEffect` is run again."
    },
    {
      question: "Which of these hooks can `useEffect` run after?",
      options: [
        "Every render",
        "Only the first render",
        "When a specific state changes",
        "When a prop value changes"
      ],
      correctAnswer: "Every render",
      explanation: "`useEffect` runs after every render by default. You can control its behavior by providing a dependency array to control when it should run."
    },
    {
      question: "What happens if you provide an empty array `[]` as the second argument to `useEffect`?",
      options: [
        "The effect runs after every render",
        "The effect runs once after the initial render",
        "The effect never runs",
        "The effect runs only when the component unmounts"
      ],
      correctAnswer: "The effect runs once after the initial render",
      explanation: "An empty dependency array `[]` passed to `useEffect` means that the effect runs only once after the initial render and does not re-run on subsequent renders."
    },
    {
      question: "Which hook is typically used to run an effect after rendering a component?",
      options: [
        "useEffect",
        "useMemo",
        "useState",
        "useCallback"
      ],
      correctAnswer: "useEffect",
      explanation: "`useEffect` is the correct hook for running side effects after a component renders. `useState` is for managing state, while `useMemo` and `useCallback` are for memoization."
    },
    {
      question: "How do you tell `useEffect` to only run when specific dependencies change?",
      options: [
        "By passing a list of state or props in the dependency array",
        "By using the `useMemo` hook",
        "By passing an empty dependency array",
        "By passing `null` as the second argument"
      ],
      correctAnswer: "By passing a list of state or props in the dependency array",
      explanation: "To control when `useEffect` runs based on specific values, you pass those values in the dependency array. If a value in the array changes, the effect runs."
    },
    {
      question: "Can `useEffect` hook return a value? If yes, what is its purpose?",
      options: [
        "Yes, it can return a cleanup function to remove resources",
        "Yes, it returns the component's render output",
        "No, `useEffect` doesn't return anything",
        "Yes, it returns data fetched from an API"
      ],
      correctAnswer: "Yes, it can return a cleanup function to remove resources",
      explanation: "`useEffect` can return a cleanup function. This function is executed when the component unmounts or before the effect runs again, allowing you to clean up side effects (like removing event listeners or clearing intervals)."
    }
  ];
  
  export default quizDataNine;
  