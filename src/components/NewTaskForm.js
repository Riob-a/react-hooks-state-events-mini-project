import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit({text, category});
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(d) => setText(d.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(d)=> setCategory(d.target.value)}>
          {categories.map((kategory)=> (<option key={kategory}>{kategory}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
