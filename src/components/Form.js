const Form = ({ input, handleInput, addTask }) => {
  return (
    <form onSubmit={addTask}>
      <label>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Add Task..."
        />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
};

export default Form;
