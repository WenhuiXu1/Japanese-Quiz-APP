import React, { useState } from 'react';

export default function QuestionCard({ flashcard, score, setScore, wrongAnswers, setWrongAnswers }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (e) => {
    setSelectedOption(e.target.value);
    const isCorrect = e.target.value === flashcard.answer;
    if (isCorrect) {
      setScore(score + 1);
    } else {
        setWrongAnswers(wrongAnswers + 1);
    }
  };

  return (
    <div className="card">
      <div className="front">
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map((option, index) => (
            <label key={index}>
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
      <div className="back">{flashcard.answer}</div>
    </div>
  );
}
