import { useEffect, useState } from "react";
import { getRandomFact } from "../services/fact";

export function useCatFact(){
    const [fact, setFact] = useState();

    const refreshCat = () => {
        getRandomFact().then(setFact);
    }

    useEffect(refreshCat, []);

    return {fact, refreshCat};

    //en caso de que pidan asincronia
    // useEffect(() =>{
    //     async function getRandomFact(){
    //         const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    //         const data = await res.json()
    //         setFact(data.fact)
    //     }
        
    //     getRandomFact()
    // },[])
}