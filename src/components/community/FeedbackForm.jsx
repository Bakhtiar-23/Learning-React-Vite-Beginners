import React, { useState } from 'react';
import '@styles/App.css';

export default function FeedbackForm() {
  // States for name, feedback input, and stored feedbacks
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);

  // Handle input changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && feedback) {
      const newFeedback = { name, feedback };

      // Add the new feedback to the state and limit to 5 feedbacks
      setFeedbacks((prevFeedbacks) => {
        const updatedFeedbacks = [newFeedback, ...prevFeedbacks];
        return updatedFeedbacks.slice(0, 5); // Keep only the most recent 5 feedbacks
      });

      // Clear input fields after submission
      setName('');
      setFeedback('');
    }
  };

  return (
    <div className="feedback-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h3>Send Us Your Feedback</h3>
        <input
          type="text"
          placeholder="Your Name"
          className="feedback-input"
          value={name}
          onChange={handleNameChange}
        />
        <textarea
          placeholder="Your Feedback"
          className="feedback-textarea"
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <button type="submit" className="feedback-button">
          Submit
        </button>
      </form>

      <div className="feedbacks-container">
        <h4>Recent Feedbacks:</h4>
        {feedbacks.length === 0 ? (
          <h4>No feedbacks yet.</h4>
        ) : (
          <ul>
            {feedbacks.map((feedbackItem, index) => (
              <li key={index} className="feedback-item">
                <strong>{feedbackItem.name}:</strong> {feedbackItem.feedback}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
