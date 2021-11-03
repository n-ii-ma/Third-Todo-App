import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

const LOCAL_STORAGE_KEY = "todoApp.tasks";

function App() {
  const [input, setInput] = useState("");
  const [remaining, setRemaining] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    setRemaining(tasks.filter((task) => !task.completed).length);
  }, [tasks]);

  const handleInput = (e) => setInput(e.target.value);

  const addTask = (e) => {
    e.preventDefault();

    if (!input) return;

    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        text: input,
        completed: false,
      },
    ]);

    setInput("");
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;

    setTasks(newTasks);
  };

  const handleRemove = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    setTasks(newTasks);
  };

  const numRemaining = () => {
    if (remaining === 0) {
      return <p>No Task Remaining</p>;
    } else if (remaining === 1) {
      return <p>{remaining} Task Remaining</p>;
    } else {
      return <p>{remaining} Tasks Remaining</p>;
    }
  };

  return (
    <div className="App">
      <header>{numRemaining()}</header>
      <Form input={input} handleInput={handleInput} addTask={addTask} />
      <List
        tasks={tasks}
        handleComplete={handleComplete}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default App;
