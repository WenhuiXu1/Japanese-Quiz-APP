import React, { useState } from 'react';
import QuestionCard from './QuestionCard';

export default function QuestionCardList({ questionCards }) {
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [answersSubmitted, setAnswersSubmitted] = useState(false);

  const maxCorrectAnswers = 7;
  const hasPassed = score >= maxCorrectAnswers;

  const handleScoreUpdate = (isCorrect) => {
    if (!answersSubmitted) {
      if (isCorrect) {
        setScore(score + 1);
      } else {
        setWrongAnswers(wrongAnswers + 1);
      }
    }
  };

  const handleSubmit = () => {
    if (questionCards.length === score + wrongAnswers) {
      setAnswersSubmitted(true);
    } else {
      alert('Please finish all the questions before submitting.');
    }
  };

  return (
    <>
      {!answersSubmitted && (
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      )}

      {answersSubmitted && (
        <>
          <p className="score-results">Score: {score}/10</p>
          {hasPassed ? (
            <p className="pass-message">Congrats! You have passed the test.</p>
          ) : (
            <p className="fail-message">Sorry, you have failed the test, try again!</p>
          )}
        </>
      )}
      <br />
      <div className="question-card-grid">
        {questionCards.map((questionCard) => (
          <QuestionCard
            questionCard={questionCard}
            key={questionCard.id}
            handleScoreUpdate={handleScoreUpdate}
            answersSubmitted={answersSubmitted}
          />
        ))}
      </div>
    </>
  );
}
