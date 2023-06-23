import React from 'react';
import QuestionCard from './QuestionCard';

export default function QuestionCardList({ flashcards, score, setScore, wrongAnswers, setWrongAnswers }) {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        return <QuestionCard flashcard={flashcard} key={flashcard.id} score={score} setScore={setScore} wrongAnswers={wrongAnswers} setWrongAnswers = {setWrongAnswers}/>;
      })}
    </div>
  );
}
