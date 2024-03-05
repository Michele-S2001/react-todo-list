import { useEffect, useState } from "react"
import TaskInput from "./components/TaskInput"
import TasksList from "./components/TasksList"
import './style.scss';

function App() {

  const [myTasks, setMyTasks] = useState([]);

  useEffect(() => {
    if(!(myTasks.length === 0)) {
      saveTasksToStorage(myTasks);
    }
  }, [myTasks])

  useEffect(() => {
    recoverTasks();
  }, [])

  const recoverTasks = () => {
    const tasks = localStorage.getItem('tasks');
    if(tasks) {
      setMyTasks(JSON.parse(tasks));
    }
  }

  const AddTask = (task) => {
    const newTasks = [...myTasks, task];
    setMyTasks(newTasks);
  }

  const DeleteTask = (task) => {
    const newTasks = myTasks.filter((el) => {
      return !(el === task);
    })
    setMyTasks(newTasks);
    if(newTasks.length === 0) {
      saveTasksToStorage(newTasks);
    }
  }

  const saveTasksToStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  return (
    <>
      <h2 className="page-title">La mia prima todo list in React</h2>
      <div className="content">
        <TaskInput handleTask={AddTask} />
        <TasksList todos={myTasks} deleteTask={DeleteTask} />
      </div>
    </>
  )
}

export default App
