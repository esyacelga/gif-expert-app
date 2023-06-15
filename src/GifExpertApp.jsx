import {useState} from "react";
import {AddCategory} from "./AddCategory.jsx";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one punch', 'dragon ball']);

    const onAddCategory = () => {
            setCategories([...categories, 'Valor ant']);
    }
    console.log(categories);
    return (
        <>
            <h1>Gifexpert</h1>
            <AddCategory></AddCategory>
            <button onClick={onAddCategory}>Agregar</button>
            {
                categories.map( ( category, index ) => (
                    <li
                        key={ index }
                    >
                        { category }
                    </li>
                ))
            }
        </>
    )

}