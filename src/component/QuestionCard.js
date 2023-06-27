import React, { useState } from 'react';

export default function QuestionCard({ questionCard, handleScoreUpdate }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [answersSubmitted, setAnswersSubmitted] = useState(false);

  const handleOptionSelect = (e) => {
    if (!answersSubmitted) {
      setSelectedOption(e.target.value);
    }
  };

  const handleConfirm = () => {
    if (!answersSubmitted && selectedOption !== '') {
      const isCorrect = selectedOption === questionCard.answer;
      handleScoreUpdate(isCorrect);
      setAnswersSubmitted(true);
    }
  };

  return (
    <div className="question-card">
      <div className="front">
        {questionCard.question}
        <div className="flashcard-options">
          {questionCard.options.map((option, index) => (
            <label key={index} className="flashcard-option">
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionSelect}
                disabled={answersSubmitted}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      <button
          className={`confirm-button ${answersSubmitted ? 'disabled' : ''}`}
          onClick={handleConfirm}
          disabled={answersSubmitted}
        >
          Confirm
        </button>
    </div>
  );
}
