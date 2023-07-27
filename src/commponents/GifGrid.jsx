import {getFifs} from "../hepers/getGifs.js";


export const GifGrid = ({category}) => {
    getFifs(category);
    return (
        <><h3>{category}</h3>
            <p>Hola mundo</p>

        </>
    )
}