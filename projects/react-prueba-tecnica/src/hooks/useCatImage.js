import { useState, useEffect } from "react";

export function useCatImage({ fact }){
    const [imageRandomCat, setImageRandomCat] = useState(); 

    useEffect(() => {

        if(!fact) return;

        const threeFirstWords = fact.split(' ', 3).join(' ');

        //no tenemos ahora la url de la imagen por lo que la voy a poner directa
        // fetch(`https://cataas.com/cat/says/${threeFirstWords}`)
        //     .then(res => res)
        //     .then(data =>{
        //         const { url } = data;
        //         setImageRandomCat(url)
        //     })

        setImageRandomCat(`https://cataas.com/cat/says/${threeFirstWords}`)
    },[fact])

    return { imageRandomCat };
}