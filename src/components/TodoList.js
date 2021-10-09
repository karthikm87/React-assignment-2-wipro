import React, { useState } from "react";
import CreateTask from "../modals/CreateTask";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTasklist] = useState([]);
  const toggle = () => setModal(!modal);
  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    setTasklist(tempList);
    setModal(false);
  };
  return (
    <>
      <div className="header text-center">
        <h3 className>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Add an User
        </button>
      </div>
      <div className="task-container"></div>
      {taskList.map((obj) => (
        <li>{obj.Name}</li>
      ))}
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};
export default TodoList;
