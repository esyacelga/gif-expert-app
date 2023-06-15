import {useState} from "react";

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('One punch');

    const onInputChange = ({target}) => {
        console.log(target.value);
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
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