import {useState} from "react";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one punch', 'dragon ball']);

    const onAddCategory = () => {
            setCategories([...categories, 'Valor ant']);
    }
    console.log(categories);
    return (
        <>
            <h1>Gifexpert</h1>
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