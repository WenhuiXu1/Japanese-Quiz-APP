import React, { useState } from 'react';

export default function QuestionCard({ questionCard, score, setScore, wrongAnswers, setWrongAnswers }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (e) => {
    setSelectedOption(e.target.value);
    const isCorrect = e.target.value === questionCard.answer;
    if (isCorrect) {
      setScore(score + 1);
    } else {
        setWrongAnswers(wrongAnswers + 1);
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
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
