import {getFifs} from "../hepers/getGifs.js";
import {useEffect} from "react";


export const GifGrid = ({category}) => {
    useEffect(() => {
        getFifs(category);
    }, []);


    return (
        <><h3>{category}</h3>
            <p>Hola mundo</p>

        </>
    )
}