import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quizDataNine from '../../data/assessment/quizDataNine'; // Adjust if needed

const getRandomQuestion = () => {
  return quizDataNine[Math.floor(Math.random() * quizDataNine.length)];
};

const QuizzeNine = () => {
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

    // End quiz after 5 questions
    if (newScore.total >= 5) {
      setQuizEnded(true);
    }
  };

  const handleNextQuestion = () => {
    if (quizEnded) {
      // Navigate if passed, else stay or show retry option
      if (score.correct >= 4) {
        navigate('/lesson/10');
      } else {
        alert('You did not pass the quiz. Try again!');
        // Optional: Reset quiz
        setScore({ correct: 0, total: 0 });
        setQuizEnded(false);
        setQuestionData(getRandomQuestion());
      }
    } else {
      setQuestionData(getRandomQuestion());
      setSelectedOption('');
      setShowFeedback(false);
    }
  };

  return (
    <div className="quiz-container">
      <h2>Pre-Quiz for Lesson 9 (Theorical)</h2>
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
            {selectedOption === questionData.Answer ? (
              <p className="correct">✅ Correct! {questionData.explanation}</p>
            ) : (
              <p className="incorrect">
                ❌ Incorrect. Correct answer: <strong>{questionData.Answer}</strong>. {questionData.explanation}
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

export default QuizzeNine;
