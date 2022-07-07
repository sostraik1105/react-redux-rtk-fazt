import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../feature/task/taskSlice";
function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div>
      <header>
        <h1>Tasks {tasks.length}</h1>
        <Link to="/create-task">Create task</Link>
      </header>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>delete</button>
          <Link to={`/edit-task/${task.id}`}>edit</Link>
        </div>
      ))}
    </div>
  );
}

export default TasksList;
