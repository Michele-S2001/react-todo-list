// lista delle task

function TasksList({ todos, deleteTask }) {

  const handleTaskDeleting = (taskText) => {
    deleteTask(taskText);
  }

  return (
    <>
      <ul className="tasksList">
        {todos.length > 0 ? (todos.map((task, i) => (
          <li className="current-task" key={i}> 
            <p className="inner-text">{task}</p>
            <span className="deleteTask" onClick={() => handleTaskDeleting(task)}>cancella</span>
          </li>
        ))
        ) : (
          <li className="no-tasks">
            <img src="./empty-box.png" alt="Niente da fare" />
            <p>Sembra che tu non abbia nulla da fare 😒</p>
          </li>
        )}
      </ul>
    </>
  )
}

export default TasksList;