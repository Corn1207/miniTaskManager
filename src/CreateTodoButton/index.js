import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  /* const message = "Modal will be displayed here..."; */
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState)
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
