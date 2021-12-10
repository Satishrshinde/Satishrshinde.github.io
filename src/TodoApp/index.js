import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./index.css";

function TodoApp() {
  const [inputValue, setInputValue] = useState("");
  const [inputValueErr, setInputValueErr] = useState(false);
  const [taskData, setTaskData] = useState([]);

  function handleSubmit() {
    if (inputValue === "") {
      setInputValueErr(true);
    } else {
      setInputValueErr(false);
      const oldTaskList = [...taskData];
      const currentTaskItem = { id: Math.random(), value: inputValue, isChecked: false };
      oldTaskList.push(currentTaskItem);
      setTaskData(oldTaskList);
    }
    setInputValue("");
  }

  function handleCheck(event, currentClickedItemId) {
    const newData = taskData.map(function (task) {
      // if currenClicked id matched with stored tasks id then only change isChecked
      if (task.id === currentClickedItemId) {
        return { ...task, isChecked: event.target.checked };
      } else {
        // otherwise return object as it is
        return task;
      }
    });
    setTaskData(newData);
  }

  function printTasks(inputArray) {
    return inputArray.map(function (task) {
      return (
        <li className={`list-group-item ${task.isChecked ? "completed" : ""}`}>
          <div id={task.id} className="d-flex align-items-center">
            <input
              className="cursor-pointer mx-2"
              type="checkbox"
              checked={task.isChecked}
              onClick={event => handleCheck(event, task.id)}
            />
            <span>{task.value}</span>
          </div>
        </li>
      );
    });
  }

  function getFilteredTask(isChecked) {
    return taskData.filter(function (item) {
      return item.isChecked === isChecked;
    });
  }

  return (
    <div className="container todoContainer my-10">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-6 d-flex">
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="add details"
            value={inputValue}
            onKeyUp={event => {
              if (event.keyCode === 13) {
                handleSubmit();
              }
            }}
            onChange={event => setInputValue(event.target.value)}
          />
          {inputValueErr && (
            <span className="text-danger text-left posAbsolute">Task should not be empty</span>
          )}
          <button className="btn btn-primary col-sm-2 mx-3" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <Tabs className="tabWrapper col-sm-6">
          <TabList class="row">
            <Tab class="col-sm-3">All Tasks</Tab>
            <Tab class="col-sm-3">Active Tasks</Tab>
            <Tab class="col-sm-3">completed Tasks</Tab>
          </TabList>

          <TabPanel>
            <ul className="list-group p-3">{printTasks(taskData)}</ul>
          </TabPanel>
          <TabPanel>
            <ul className="list-group p-3">{printTasks(getFilteredTask(false))}</ul>
          </TabPanel>
          <TabPanel>
            <ul className="list-group p-3">{printTasks(getFilteredTask(true))}</ul>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default TodoApp;
