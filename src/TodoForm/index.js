import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";
import { useDetectClickOutside } from 'react-detect-click-outside';


function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(newTodoValue);
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const closeModal = () => {
    setOpenModal(false);
  }

  const ref = useDetectClickOutside({ onTriggered: closeModal });

  return (
    <form onSubmit={onSubmit} ref={ref}>
      <label>Add a new Task</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Write a task that you don't want to forget
"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
