import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const [userName, setUserName] = useState("");
  const [taskName, setTaskName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "userName") {
      setUserName(value);
    } else {
      setTaskName(value);
    }
  };
  useEffect(() => {
    setUserName(taskObj.Name);
    setTaskName(taskObj.TaskName);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = userName;
    tempObj["TaskName"] = taskName;

    updateTask(tempObj);
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}> Update Task{userName}</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              value={userName}
              onChange={handleChange}
              name="userName"
            />
          </div>
          <div className="form-group">
            <label>Task</label>
            <input
              type="text"
              className="form-control"
              value={taskName}
              onChange={handleChange}
              name="taskName"
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
