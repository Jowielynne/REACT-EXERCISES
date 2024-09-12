import Header from "./components/Header";
import './App.css';
import BookList from "./components/BookList";

function App() {
  console.log("Bruuuhhh....")
  
  return (
    <>
      <Header />
      <BookList />

      <h2>Getal</h2>
      <button>CLick me!</button>

    </>
  )
};

// SFC SHORTCUT
// COMPONENT = NEW FILE IN THE FOLDER. | eigen ontwikkelde html tag.. (this case, header & booklist)

export default App;
