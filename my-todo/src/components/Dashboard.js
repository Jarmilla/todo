import React, { useState } from "react";

function Dashboard({ dashboard, deleteDashboard }) {
  const [isEdited, setIsEditet] = useState(false);
  const [value, setValue] = useState("");

  const toggle = () => {
    setIsEditet(!isEdited);
    setValue(dashboard.title);
  };

  return (
    <div className="dashboard" key={dashboard.id}>
      {isEdited ? (
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      ) : (
        <h2>{dashboard.title}</h2>
      )}
      <button onClick={toggle}>{isEdited ? "Cancel" : "Edit"}</button>
      {dashboard.todoList.map((todo) => (
        <div className="todo-cards" key={todo.id}>
          <h3>{todo.name}</h3>
          <p>{todo.desc}</p>
        </div>
      ))}
      <button onClick={() => deleteDashboard(dashboard.id)}>Delete</button>
    </div>
  );
}

export default Dashboard;
