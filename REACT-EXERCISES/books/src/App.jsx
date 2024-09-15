import Header from "./components/Header";
import './App.css';
import BookList from "./components/BookList";
import { useState } from "react";

function App() {

  const [number, setNumber] = useState([
    {
      title: 'Help!',
      author: 'Je vader.',
    },
  ]);

  // let number = 0;
  const counterHandler = () => {
    setNumber(number + 1)
  };

  return (
    <>
      <Header />
      <BookList />

      <button onClick={counterHandler}>Click Marc</button>

    </>
  )
};

// SFC SHORTCUT
// COMPONENT = NEW FILE IN THE FOLDER. | eigen ontwikkelde html tag.. (this case, header & booklist)

export default App;
