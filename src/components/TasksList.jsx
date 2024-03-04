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
          <p>Non ci sono cose da fare</p>
        )}
      </ul>
    </>
  )
}

export default TasksList;