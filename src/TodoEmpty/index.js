import React from "react";
import "./TodoEmpty.css";
import { TodoContext } from "../TodoContext";

function TodoEmpty() {
  const { totalTodos, searchedTodos } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      {totalTodos === 0 && (
        <h2 className="emptyMessage">Create your first Task!</h2>
      )}
      {searchedTodos.length === 0 && totalTodos !== 0 && (
        <h2 className="emptyMessage">Didn't find any tasks</h2>
      )}
    </React.Fragment>
  );
}

export { TodoEmpty };
