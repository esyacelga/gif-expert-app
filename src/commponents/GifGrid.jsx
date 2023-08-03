import {getFifs} from "../hepers/getGifs.js";
import {useEffect, useState} from "react";
import {GifItem} from "./GifItem.jsx";


export const GifGrid = ({category}) => {
    const [images, setImages] = useState([]);
    const getImages = async () => {
        const newImages = await getFifs(category);
        setImages(newImages);
    }
    useEffect(() => {
        getImages();
    }, []);


    return (
        <><h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem key={image.id}
                                 {...image}
                        ></GifItem>
                    ))
                }
            </div>
        </>
    )
}