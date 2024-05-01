import React from "react";
import Task from "./Task";

function TaskList({tasks, onDelete}) {
  const list = tasks.map((task)=> (
    <Task key={task.text} text= {task.text} category={task.category} onDelete={onDelete}/>
  ))
  return (
    <div className="tasks">
      {list}
    </div>
  );
}

export default TaskList;
