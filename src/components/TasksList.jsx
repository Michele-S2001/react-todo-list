// lista delle task

function TasksList({ todos, deleteTask }) {

  const handleTaskDeleting = (taskText) => {
    deleteTask(taskText);
  }

  return (
    <>
      <h4>Le mie cose da fare</h4>
      <ul className="tasksList">
        {todos.length > 0 ? (todos.map((task, i) => (
          <li key={i}> 
            {task} 
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