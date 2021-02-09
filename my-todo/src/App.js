import "./App.css";

const defaultState = [
  {
    id: 1,
    name: "Darren tasks",
    todoList: [
      { id: 1, name: "protect the priest", desc: "not let yourself deceive" },
      { id: 2, name: "sleep after breakfast", desc: "be ready!" },
    ],
  },
  {
    id: 1,
    name: "Luna tasks",
    todoList: [
      {
        id: 1,
        name: "go to all the host families",
        desc: "dont say yes to nobody",
      },
      {
        id: 2,
        name: "go to date with James Blonde",
        desc: "a promise is a promise",
      },
      {
        id: 3,
        name: "monsterhunters are still here?",
        desc: "also there is something wrong with the ground",
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      {defaultState.map((dashboard) => (
        <article className="dashboard" key={dashboard.id}>
          <h2>{dashboard.name}</h2>
          {dashboard.todoList.map((todo) => (
            <div className="todo-cards">
              <h3>{todo.name}</h3>
              <p>{todo.desc}</p>
            </div>
          ))}
        </article>
      ))}

      {/*       <div className="dashboard">
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
