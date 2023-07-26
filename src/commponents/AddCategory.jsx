import {useState} from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('One punch');

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }


    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        //onAddCategory(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('');
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text"
                   required={true}
                   maxLength={10}
                   value={inputValue}
                   onChange={(event) => onInputChange(event)}
                   placeholder="Buscar gifs">

            </input>
        </form>
    )
}