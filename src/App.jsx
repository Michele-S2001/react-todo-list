import { useState } from "react"
import TaskInput from "./components/TaskInput"
import TasksList from "./components/TasksList"

function App() {

  const [myTasks, setMyTasks] = useState([]);

  const AddTask = (task) => {
    const newTasks = [...myTasks, task];
    setMyTasks(newTasks);
  }

  const DeleteTask = (task) => {
    const newTasks = myTasks.filter((el) => {
      return !(el === task);
    })
    setMyTasks(newTasks);
  }

  return (
    <>
      <h2>La mia prima todo list in React</h2>
      <TaskInput handleTask={AddTask} />
      <TasksList todos={myTasks} deleteTask={DeleteTask} />
    </>
  )
}

export default App
