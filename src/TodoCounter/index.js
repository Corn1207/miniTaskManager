import React from "react";
import './TodoCounter.css'
import { TodoContext } from "../TodoContext"

function TodoCounter() {
  const { totalTodos, completedTodos,} = React.useContext(TodoContext)
  return (<h2 className="TodoCounter">You have completed {completedTodos} from {totalTodos} tasks</h2>);
}

export { TodoCounter };
