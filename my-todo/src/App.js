import React, { useState } from "react";
import "./App.css";

const initDashboards = [
  {
    id: 1,
    title: "Darren tasks",
    todoList: [
      { id: 2, name: "protect the priest", desc: "not let yourself deceive" },
      { id: 3, name: "sleep after breakfast", desc: "be ready!" },
    ],
  },
  {
    id: 4,
    title: "Luna tasks",
    todoList: [
      {
        id: 5,
        name: "go to all the host families",
        desc: "dont say yes to nobody",
      },
      {
        id: 6,
        name: "go to date with James Blonde",
        desc: "a promise is a promise",
      },
      {
        id: 7,
        name: "monsterhunters are still here?",
        desc: "also there is something wrong with the ground",
      },
    ],
  },
];

function App() {
  const [dashboards, setDashboards] = useState(initDashboards);

  const deleteDashboard = (id) => {
    /*     let newDashboard = [];
        for (let i = 0; i < dashboards.length; i++) {
          let currentDashboard = dashboards[i];
          if (currentDashboard.id !== id) newDashboard.push(currentDashboard);
        }
        setDashboards(newDashboard); */
    const newDashboard = dashboards.filter((dashboard) => dashboard.id !== id);
    setDashboards(newDashboard);

    /* setDashboards(dashboards.filter((dashboard) => dashboard.id !== id)); */
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      {dashboards.map((dashboard) => (
        <div className="dashboard" key={dashboard.id}>
          <h2>{dashboard.title}</h2>

          {dashboard.todoList.map((todo) => (
            <div className="todo-cards" key={todo.id}>
              <h3>{todo.name}</h3>
              <p>{todo.desc}</p>
            </div>
          ))}
          <button onClick={() => deleteDashboard(dashboard.id)}> - </button>
        </div>
      ))}

      {/*<div className="dashboard">
        <h2>{defaultState[1].name}</h2>
        <div className="todo-cards">
          <h3>{defaultState[1].todoList[0].name}</h3>
          <p>{defaultState[1].todoList[0].desc}</p>
          <h3>{defaultState[1].todoList[1].name}</h3>
          <p>{defaultState[1].todoList[1].desc}</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
