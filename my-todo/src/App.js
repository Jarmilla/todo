import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

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
  const [dashboardInput, setDashboardInput] = useState("");

  const deleteDashboard = (id) => {
    /*let newDashboard = [];
        for (let i = 0; i < dashboards.length; i++) {
          let currentDashboard = dashboards[i];
          if (currentDashboard.id !== id) newDashboard.push(currentDashboard);
        }
        setDashboards(newDashboard); */
    const newDashboard = dashboards.filter((dashboard) => dashboard.id !== id);
    setDashboards(newDashboard);

    /* setDashboards(dashboards.filter((dashboard) => dashboard.id !== id)); */
  };
  const createDashboard = () => {
    /*const newDashboard = {
      id: new Date().getTime(),
      title: dashboardInput,
      todoList: [],
    };
    const newDashboards = [];

    for (let i = 0; i < dashboards.length; i++) {
      let currentElement = dashboards[i];
      newDashboards.push(currentElement);
    }
    newDashboards.push(newDashboard);
    setDashboards(newDashboards); */

    const newDashboards = [
      ...dashboards,
      {
        id: new Date().getTime(),
        title: dashboardInput,
        todoList: [],
      },
    ];
    setDashboards(newDashboards);
    setDashboardInput("");
  };

  return (
    <div className="App">
      <nav>
        <input
          value={dashboardInput}
          onChange={(e) => setDashboardInput(e.target.value)}
        ></input>
        <button onClick={() => createDashboard()}>Add</button>
      </nav>
      <h1>Hello world</h1>
      <main>
        {dashboards.map((dashboard) => (
          <Dashboard
            key={dashboards.id}
            dashboard={dashboard}
            deleteDashboard={deleteDashboard}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
