import Task from "./Task";

const List = ({ tasks, handleComplete, handleRemove }) => {
  return (
    <div>
      {!tasks.length ? <p>No Tasks to Show</p> : tasks.map((task, index) => (
        <Task
          task={task}
          key={task.id}
          index={index}
          handleComplete={handleComplete}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default List;
