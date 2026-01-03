import API from "../services/api";

export default function TaskTable({ tasks, reload }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task._id}>
          <span>{task.title}</span>
          <button
            className="delete"
            onClick={async () => {
              await API.delete(`/tasks/${task._id}`);
              reload();
            }}
          >
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
}
