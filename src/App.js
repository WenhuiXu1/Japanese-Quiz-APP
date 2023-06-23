import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Japanese Quiz App</h1>
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
