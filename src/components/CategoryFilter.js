import React from "react";

function CategoryFilter({categories, currentCategory, onCurrentCategory}) {
  const categoryButton = categories.map((category) =>{
    const className = category === currentCategory ? "selected" : null;

    return(<button key={category} className={className} onClick={()=> onCurrentCategory(category)}>{category}</button>)
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
