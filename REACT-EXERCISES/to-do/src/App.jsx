import { useState } from "react";
import "./App.css";
import CreateToDo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";

function App() {
  const [textInput, setTextInput] = useState("");
  const [item, setItem] = useState([]);
  let name = "Name";

  return (
    <>
      <main
        className="flex flex-col items-center justify-center min-h-screen
        bg-gradient-to-r from-blue-700 to-neutral-950"
      >
        <Header name={name} />
        <CreateToDo
          textInput={textInput}
          setTextInput={setTextInput}
          item={item}
          setItem={setItem}
        />

        <ToDoList item={item} />
      </main>
    </>
  );
}

export default App;
