import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
// import { GifGrid } from "./components/GifGrid";

const GitExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if ( categories.includes(newCategory) ) return;
    // setCategories([...categories, 'new item'])
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory 
        // setCategories={setCategories} 
        onNewCategory={ value => onAddCategory(value)}
      />

      {/* Listado de Gif */}
      <button onClick={onAddCategory}>Agregar</button>
        {categories.map((category) => (
            <GifGrid 
              key={ category } 
              category={ category } />
          ))
        }
    </>
  );
};

export default GitExpertApp;
