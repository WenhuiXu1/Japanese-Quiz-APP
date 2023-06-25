import './App.css';
import React, { useState, useEffect } from 'react';
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
      <FlashcardList flashcards = {flashcards} />
      <QuestionCardList questionCards = {questionCards}/>
    </div>
  );
}
