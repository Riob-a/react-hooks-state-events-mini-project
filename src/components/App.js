import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
   const [category, setCategory]= useState("All");
   const [tasks, setTasks] = useState(TASKS);

   function handleNewTask(newTask){
    setTasks([...tasks,newTask]);
   }

   function handleDelete(deletedText){
    setTasks(tasks.filter((task)=> task.text !== deletedText));
   }

   const availableTasks = tasks.filter(
    (task) => category ==="All" || task.category === category );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} currentCategory = {category} onCurrentCategory = {setCategory} />
      <div className="tasks">
        <h5>Tasks</h5>
      <NewTaskForm categories={CATEGORIES.filter((kategory)=> kategory !== "All")} onTaskFormSubmit= {handleNewTask}/>
      </div>
      <TaskList onDelete= {handleDelete} tasks= {availableTasks}/>
    </div>
  );
}

export default App;
