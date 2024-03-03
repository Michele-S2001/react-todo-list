// barra in cui inserisco la task

import { useState } from "react";

function TaskInput ({ handleTask }) {

  const [inputValue, setInputValue] = useState('');

  //con questa funzione gestisco l'aggiornamento reattivo della mia variabile inputValue
  const HandleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  //TODO: Completare validazione con messaggio di errore ed eventualmente creare una funzione per i controlli per non ripetersi

  const addTaskToList = () => {
    const task = inputValue.trim();
    if(!(task.length === 0) && task.length > 3) {
      handleTask(inputValue);
      setInputValue('');
    } else {
      console.log('task non valida')
    }
  }

  const addTaskWithEnterKey = (event) => {
    if(event.key === 'Enter') {
      const task = inputValue.trim();
      if(!(task.length === 0) && task.length > 3) {
        handleTask(inputValue);
        setInputValue('');
      } else {
        console.log('task non valida')
      }
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