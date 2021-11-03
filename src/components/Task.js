const Task = ({ task, index, handleComplete, handleRemove }) => {
  return (
    <div style={{ textDecoration: task.completed ? "line-through" : "" }}>
      {task.text}
      <br />
      <button onClick={() => handleComplete(index)}>Complete</button>
      <button onClick={() => handleRemove(index)}>Remove</button>
    </div>
  );
};

export default Task;
