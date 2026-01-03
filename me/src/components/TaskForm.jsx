import { useState } from "react";
import API from "../services/api";

export default function TaskForm({ reload }) {
  const [title, setTitle] = useState("");

  const submit = async () => {
    if (!title) return;
    await API.post("/tasks", { title });
    setTitle("");
    reload();
  };

  return (
    <div className="task-form">
      <input
        placeholder="Enter new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={submit}>Add</button>
    </div>
  );
}
