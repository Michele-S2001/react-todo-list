// lista delle task

function TasksList({ todos }) {

  return (
    <>
      <h4>Le mie cose da fare</h4>
      <ul className="tasksList">
        {todos.length > 0 ? (todos.map((task, i) => (
          <li key={i}> {task} </li>
        ))
        ) : (
          <p>Non ci sono cose da fare</p>
        )}
      </ul>
    </>
  )
}

export default TasksList;