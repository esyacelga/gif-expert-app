const getFifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Od8yHVz27YJizJHMkoCfptKKBqA3sWdj&q=${category}&limit=20`
    const resp = await fetch(url)
    const {data} = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs);
    return gifs;
}

export const GifGrid = ({category}) => {
    getFifs(category);
    return (
        <><h3>{category}</h3>
            <p>Hola mundo</p>

        </>
    )
}