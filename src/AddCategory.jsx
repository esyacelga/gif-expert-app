import {useState} from "react";

export const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState('One punch');

    const onInputChange = ({target}) => {
        console.log(target.value);
        setInputValue(target.value)
    }


    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onAddCategory(categories => [inputValue, ...categories])
        setInputValue('');
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text"
                   value={inputValue}
                   onChange={(event) => onInputChange(event)}
                   placeholder="Buscar gifs">

            </input>
        </form>
    )
}