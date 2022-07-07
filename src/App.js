import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TasksForm from "./components/TasksForm";
import TasksList from "./components/TasksList";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksList />} />
          <Route path="/create-task" element={<TasksForm />} />
          <Route path="/edit-task/:id" element={<TasksForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
