import { useState } from "react"
import TaskInput from "./components/TaskInput"
import TasksList from "./components/TasksList"

function App() {

  const [myTasks, setMyTaks] = useState([]);

  const AddTask = (task) => {
    const newTasks = [...myTasks, task];
    setMyTaks(newTasks);
  }

  return (
    <>
      <h2>La mia prima todo list in React</h2>
      <TaskInput handleTask={AddTask} />
      <TasksList todos={myTasks} />
    </>
  )
}

export default App
