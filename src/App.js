import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './component/Home';
import FlashcardList from './component/FlashcardList';
import QuestionCardList from './component/QuestionCardList';
import { Routes, Route, Link } from 'react-router-dom'

export default function App() {

  const [flashcards, setFlashcards] = useState([]);
  const [questionCards, setQustionCards] = useState([]);

  function getFlashCards() {
    fetch('/flashcards')
      .then(res => res.json())
      .then(res => setFlashcards(res))
  }

  // function updateFlashCards() {
  //     fetch('/flashcards', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ flashcards })
  //     })
  // }

  function getQustionCards() {
    fetch('/questionCards')
      .then(res => res.json())
      .then(res => setQustionCards(res))
  }
  
  useEffect(getFlashCards, [])
  // useEffect(updateFlashCards, [flashcards])

  useEffect(getQustionCards, [])
  // useEffect(updateQustionCards, [questionCards])
  
  return (
    <div className="App">
      <h1>Japanese Quiz App</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/flashcards'>Flashcards</Link>
        <Link to='/quiz'>Quiz</Link>
      </nav>

      <Routes>
      <Route 
          path='/' 
          element={
            <Home name='Friend' />
          }
        />
        <Route 
          path='/flashcards' 
          element={
            <FlashcardList flashcards = {flashcards} />
          }
        />
        <Route 
          path='/quiz' 
          element={
            <QuestionCardList questionCards = {questionCards}/>
          }
        />
      </Routes>
      
      
      
    </div>
  );
}
