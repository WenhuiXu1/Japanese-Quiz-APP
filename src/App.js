import './App.css';
import React, { useState } from 'react';
import FlashcardList from './component/FlashcardList';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARD);
  return (
    <div className="App">
      <h1>Japanese Quiz App</h1>
      <FlashcardList flashcards = {flashcards} />
    </div>
  );
}

const SAMPLE_FLASHCARD = [
  {
    id: 1,
    question:'Question 1',
    answer: 'Answer',
    options:[
      'Answer',
      'Answer 1',
      'Answer 2',
      'Answer 3'
    ]
  },
  {
    id: 2,
    question:'Question 2',
    answer: 'Answer',
    options:[
      'Answer',
      'Answer 1',
      'Answer 2',
      'Answer 3'
    ]
  }
]

export default App;
