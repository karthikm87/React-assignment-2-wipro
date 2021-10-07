import React from "react";

const TodoList = () => {
  return (
    <>
      <div className="header text-center">
        <h3 className>Todo List</h3>
        <button className="btn btn-primary mt-2">Add an User</button>
      </div>
      <div className="task-container"></div>
    </>
  );
};
export default TodoList;
