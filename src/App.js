import './App.css';
import React, { useState } from 'react';
import FlashcardList from './component/FlashcardList';
import QuestionCardList from './component/QuestionCardList';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARD);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const maxWrongAnswers = 3;
  const hasFailed = wrongAnswers > maxWrongAnswers;


  const passingPercentage = 70;
  const percentage = (score / flashcards.length) * 100;
  const hasPassed = percentage >= passingPercentage;
  
  return (
    <div className="App">
      <h1>Japanese Quiz App</h1>
      <FlashcardList flashcards = {flashcards} />
      <p>Score: {score}/10</p>
      <QuestionCardList flashcards = {flashcards} score={score} setScore={setScore} wrongAnswers = {wrongAnswers} setWrongAnswers = {setWrongAnswers}/>
      {hasFailed ? (
        <p>
          Sorry, you have failed the test.
        </p>
      ) : null}
      {hasPassed ? <p>Congratulations! You have passed the test.</p> : null}
    </div>
  );
}



const SAMPLE_FLASHCARD = [
  {
    id: 1,
    question:'Question 1: This is the content of question 1',
    answer: 'Answer',
    options:[
      'Answer',
      'Answer 1',
      'Answer 2',
      'Answer 3'
    ].sort(()=> Math.random() - .5)
  },
  {
    id: 2,
    question:'Question 2: this is the content of question 2',
    answer: 'Answer',
    options:[
      'Answer',
      'Answer 1',
      'Answer 2',
      'Answer 3'
    ].sort(()=> Math.random() - .5)
  },
  {
    id: 3,
    question:'Question 3: this is the content of question 3',
    answer: 'Answer',
    options:[
      'Answer',
      'Answer 1',
      'Answer 2',
      'Answer 3'
    ].sort(()=> Math.random() - .5)
  },
  {
    id: 4,
    question:'Question 4: this is the content of question 4',
    answer: 'Answer',
    options:[
      'Answer',
      'Answer 1',
      'Answer 2',
      'Answer 3'
    ].sort(()=> Math.random() - .5)
  },
  {
    id: 5,
    question:'Question 5: this is the content of question 5',
    answer: 'Answer',
    options:[
      'Answer',
      'Answer 1',
      'Answer 2',
      'Answer 3'
    ].sort(()=> Math.random() - .5)
  },
  {
    id: 6,
    question:'Question 6: this is the content of question 6',
    answer: 'Answer',
    options:[
      'Answer',
      'Answer 1',
      'Answer 2',
      'Answer 3'
    ].sort(()=> Math.random() - .5)
  },
  {
    id: 7,
    question:'Question 7: this is the content of question 7',
    answer: 'Answer',
    options:[
      'Answer',
      'Answer 1',
      'Answer 2',
      'Answer 3'
    ].sort(()=> Math.random() - .5)
  },
  {
    id: 8,
    question:'Question 8: this is the content of question 8',
    answer: 'Answer',
    options:[
      'Answer',
      'Answer 1',
      'Answer 2',
      'Answer 3'
    ].sort(()=> Math.random() - .5)
  },
  {
    id: 9,
    question:'Question 9: this is the content of question 9',
    answer: 'Answer',
    options:[
      'Answer',
      'Answer 1',
      'Answer 2',
      'Answer 3'
    ].sort(()=> Math.random() - .5)
  },
  {
    id: 10,
    question:'Question 10: this is the content of question 10',
    answer: 'Answer',
    options:[
      'Answer',
      'Answer 1',
      'Answer 2',
      'Answer 3'
    ].sort(()=> Math.random() - .5)
  }
]

export default App;
