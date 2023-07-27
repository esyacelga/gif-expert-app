import {useState} from "react";
import {AddCategory} from "./commponents/AddCategory.jsx";
import {GifGrid} from "./commponents/GifGrid.jsx";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one punch']);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    return (
        <>
            <h1>Gifexpert</h1>
            <AddCategory
                onNewCategory={(event) => onAddCategory(event)}
            ></AddCategory>
            <button onClick={onAddCategory}>Agregar</button>
            {
                categories.map((category, index) => (
                    <GifGrid key={category} category={category}></GifGrid>
                ))
            }
        </>
    )

}