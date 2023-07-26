export const GifGrid = ({category}) => {
    const getFifs = async () => {
        const ulr = `https://api.giphy.com/v1/gifs/search?api_key=Od8yHVz27YJizJHMkoCfptKKBqA3sWdj&q=${category}&limit=20`
        const resp = await fetch(url)
        const {data} = await resp.json();
        const gifs = data.map(im)
    }

    getFifs();

    return (
        <><h3>{category}</h3>
            <p>Hola mundo</p>

        </>
    )
}