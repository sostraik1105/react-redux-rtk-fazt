import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../feature/task/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TasksForm() {
  const [task, setTask] = useState({ title: "", description: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({ ...task, id: uuid() }));
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((el) => el.id === params.id));
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
        value={task.title}
      />
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
      ></textarea>
      <button>save</button>
    </form>
  );
}

export default TasksForm;
