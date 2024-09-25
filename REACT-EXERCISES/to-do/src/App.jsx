import { useState } from "react";
import './App.css'
import CreateToDo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";

function App() {
  const [textInput, setTextInput] = useState('');
  const [item, setItem] = useState([]);
  let name = "Test Subject";

  return (
    <>
      <Header name={name} />

      <CreateToDo
        textInput={textInput}
        setTextInput={setTextInput}
        item={item}
        setItem={setItem}
      />

      <ToDoList item={item} />
    </>
  )
}

export default App

