const CreateToDo = ({ textInput, setTextInput, item, setItem }) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitMessageHandler = (e) => {
    e.preventDefault();

    setItem([...item, textInput]);
    setTextInput("");
  };

  return (
    <form
      action=""
      className="my-11 flex items-center flex-row justify-center"
    >
      <input
        className="px-2 pr-24 h-12"
        placeholder="What to do?"
        value={textInput}
        cols="50"
        rows="5"
        onChange={userInputHandler}
      ></input>
      <button
        className="bg-blue-400 font-thin text-white text-5xl px-2"
        onClick={submitMessageHandler}
      >
        +
      </button>
    </form>
  );
};

export default CreateToDo;
