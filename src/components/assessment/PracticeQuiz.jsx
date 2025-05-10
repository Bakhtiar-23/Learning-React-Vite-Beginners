// src/components/PostQuiz.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import practicalData from '../../data/curriculum/practicalData';

const getRandomQuestion = () => {
  return practicalData[Math.floor(Math.random() * practicalData.length)];
};

const Quizzes = () => {
  const navigate = useNavigate();
  const [questionData, setQuestionData] = useState(getRandomQuestion());
  const [selectedOption, setSelectedOption] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [quizEnded, setQuizEnded] = useState(false);

  const handleAnswer = () => {
    if (!selectedOption) return;

    const isCorrect = selectedOption === questionData.answer;
    const newScore = {
      correct: score.correct + (isCorrect ? 1 : 0),
      total: score.total + 1,
    };
    setScore(newScore);
    setShowFeedback(true);

    if (newScore.total >= 5) {
      setQuizEnded(true);
    }
  };

  const handleNextQuestion = () => {
    if (quizEnded) {
      if (score.correct >= 3) {
        navigate('/lesson/2'); // Navigate to next lesson
      } else {
        alert('You did not pass the quiz. Try again!');
        setScore({ correct: 0, total: 0 });
        setQuizEnded(false);
      }
    } else {
      setQuestionData(getRandomQuestion());
      setSelectedOption('');
      setShowFeedback(false);
    }
  };

  return (
    <div className="quiz-container">
      <h2>Post-Quiz for Lesson 1 (Practical)</h2>
      <p className="question">{questionData.question}</p>
      <div className="options">
        {questionData.options.map((option, idx) => (
          <label key={idx} className="option-label">
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
              disabled={showFeedback}
            />
            {option}
          </label>
        ))}
      </div>

      {!showFeedback ? (
        <button className="submit-btn" onClick={handleAnswer}>
          Submit Answer
        </button>
      ) : (
        <>
          <div className="feedback">
            {selectedOption === questionData.answer ? (
              <p className="correct">✅ Correct! {questionData.explanation}</p>
            ) : (
              <p className="incorrect">
                ❌ Incorrect. Correct answer: <strong>{questionData.answer}</strong>. {questionData.explanation}
              </p>
            )}
          </div>
          <button className="next-btn" onClick={handleNextQuestion}>
            {quizEnded ? 'Finish Quiz' : 'Next Question'}
          </button>
        </>
      )}

      <p className="score">Score: {score.correct}/{score.total}</p>
    </div>
  );
};

export default Quizzes;
