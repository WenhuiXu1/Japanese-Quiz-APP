import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";
import DefaultLayout from "./Layout/DefaultLayout.js"

export default function FlashcardList({ flashcards }) {
  const [displayedFlashcards, setDisplayedFlashcards] = useState([]);
  const [batchSize, setBatchSize] = useState(10); // Set the initial batch size to 5

  useEffect(() => {
    setDisplayedFlashcards(flashcards.slice(0, batchSize));
  }, [flashcards, batchSize]);

  const loadMoreFlashcards = () => {
    setBatchSize((prevBatchSize) => prevBatchSize + 5); // Increase the batch size by 5
  };

  return (
    <DefaultLayout>
      <br />
      <div className="card-grid">
        {displayedFlashcards.map((flashcard) => (
          <Flashcard flashcard={flashcard} key={flashcard.id} />
        ))}
      </div>
      {displayedFlashcards.length < flashcards.length && (
        <button className="load-more-btn" onClick={loadMoreFlashcards} >Load More</button>
      )}
    </DefaultLayout>
  );
}
