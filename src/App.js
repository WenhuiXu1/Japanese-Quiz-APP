import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from "./component/Layout/NavBar";
import Footer from "./component/Layout/Footer";
import HomePage from './component/Pages/HomePage';
import FlashcardList from './component/FlashcardList';
import QuestionCardList from './component/QuestionCardList';
import { Routes, Route, Link } from 'react-router-dom';

export default function App() {

  const [flashcards, setFlashcards] = useState([]);
  const [questionCards, setQustionCards] = useState([]);
  const [hiraganaCards, setHiraganaCards] = useState([]);
  const [katakana, setKatakana] = useState([]);
  const [soundChange, setSoundChange] = useState([]);

  function getFlashCards() {
    fetch('/flashcards')
      .then(res => res.json())
      .then(res => setFlashcards(res))
  }

  function getHiraganaCards() {
    fetch('/flashcards/hiragana')
      .then(res => res.json())
      .then(res => setHiraganaCards(res))
  }

  function getKatakanaCards() {
    fetch('/flashcards/katakana')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        return setKatakana(res)})
  }

  function getSoundChangeCards() {
    fetch('/flashcards/sound-change')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        return setSoundChange(res)})
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
  useEffect(getHiraganaCards, [])
  useEffect(getKatakanaCards, [])
  useEffect(getSoundChangeCards, [])
  
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/flash-cards' element={<FlashcardList flashcards = {flashcards} />}/>
        <Route path='/flash-cards/hiragana' element={<FlashcardList flashcards = {hiraganaCards} />}/>
        <Route path='/flash-cards/katakana' element={<FlashcardList flashcards = {katakana} />}/>
        <Route path='/flash-cards/sound-change' element={<FlashcardList flashcards = {soundChange} />}/>
        <Route path='/quizzes' element={<QuestionCardList questionCards = {questionCards}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}
