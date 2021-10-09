import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toggle, save }) => {
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
  const handleSave = () => {
    let taskObj = {};
    taskObj["Name"] = userName;
    taskObj["TaskName"] = taskName;

    save(taskObj);
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Task For the user {userName}</ModalHeader>
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
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
