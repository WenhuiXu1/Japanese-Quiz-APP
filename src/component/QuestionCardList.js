import React, { useState } from 'react';
import QuestionCard from './QuestionCard';

export default function QuestionCardList({ questionCards }) {

  // console.log(questionCards)
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const maxWrongAnswers = 3;
  const hasFailed = wrongAnswers > maxWrongAnswers;


  const passingPercentage = 70;
  const percentage = (score / questionCards.length) * 100;
  const hasPassed = percentage >= passingPercentage;

  return (
    <>
    <p>Score: {score}/10</p>
    <div className="card-grid">
      {questionCards.map((questionCard) => {
        return <QuestionCard questionCard={questionCard} key={questionCard.id} score={score} setScore={setScore} wrongAnswers={wrongAnswers} setWrongAnswers = {setWrongAnswers}/>;
      })}
    </div>
    {hasFailed ? (<p>Sorry, you have failed the test.</p>) : null}
    {hasPassed ? <p>Congrats! You have passed the test.</p> : null}
    </>
  );
}
