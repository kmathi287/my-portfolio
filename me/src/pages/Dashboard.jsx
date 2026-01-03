import { useEffect, useState } from "react";
import API from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskTable from "../components/TaskTable";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const load = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="container">
      <h1>📌 Task Dashboard</h1>
      <TaskForm reload={load} />
      <TaskTable tasks={tasks} reload={load} />
    </div>
  );
}
