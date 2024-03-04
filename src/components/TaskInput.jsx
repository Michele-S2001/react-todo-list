// barra in cui inserisco la task

import { useState } from "react";

function TaskInput ({ handleTask }) {

  const [inputValue, setInputValue] = useState('');
  const [messageError, setMessageError] = useState(false);

  const HandleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const addTaskToList = () => {
    verifyInputValue(inputValue);
  }

  const addTaskWithEnterKey = (event) => {
    if(event.key === 'Enter') {
      verifyInputValue(inputValue);
    }
  }

  const verifyInputValue = (taskText) => {
    const task = taskText.trim();
    if(!(task.length === 0) && task.length > 3) {
      handleTask(task);
      setInputValue('');
    } else {
      showMessageError();
    }
  }

  const showMessageError = () => {
    setMessageError(true);
    setTimeout(() => {
      setMessageError(false);
    }, 2500);
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
      {messageError === false ? ('') : (
        <span className="errorMessage">
          ⚠️ Testo non valido o più corto di 3 caratteri ⚠️
        </span>
      )}
    </>
  )
}

export default TaskInput;