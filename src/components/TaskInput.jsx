// barra in cui inserisco la task

import { useState } from "react";

function TaskInput ({ handleTask }) {

  const [inputValue, setInputValue] = useState('');

  //con questa funzione gestisco l'aggiornamento reattivo della mia variabile inputValue
  const HandleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const addTaskToList = () => {
    handleTask(inputValue);
    setInputValue('');
  }

  const addTaskWithEnterKey = (event) => {
    if(event.key === 'Enter') {
      handleTask(inputValue);
      setInputValue('');
    }
  }

  return (
    <>
      <div className="input-wrap">
        <input 
          type="text" 
          onKeyUp={addTaskWithEnterKey} 
          onChange={HandleInputChange} 
          value={inputValue}
          required autoFocus/>
        <button onClick={addTaskToList}>Aggiungi</button>
      </div>

    </>
  )
}

export default TaskInput;