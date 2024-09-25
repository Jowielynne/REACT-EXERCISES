const CreateToDo = ({textInput, setTextInput, item, setItem}) => {

  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitMessageHandler = (e) => {
    e.preventDefault();

    setItem([...item, textInput]);
    setTextInput('');
  };

  return ( 
    <form action=''>
      <input placeholder="What to do?" value={textInput} cols="50" rows="5" onChange={userInputHandler}></input>
      <button onClick={submitMessageHandler}>+</button>
    </form>
  );
};

export default CreateToDo;
  