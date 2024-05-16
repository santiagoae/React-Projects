import './App.css'
import { useCatFact } from './hooks/useCatFact';
import { useCatImage } from "./hooks/useCatImage";

export function App(){
    
    const { fact, refreshCat } = useCatFact(); 
    const { imageRandomCat } = useCatImage({ fact });

    const handleClick = () => {
        refreshCat();
    }

    return(
        <main className="container">
            <h1>App de gatitos</h1>

            <button onClick={handleClick}>Get new fact</button>

            { fact && <p>{ fact }</p> }
            { imageRandomCat && <img src={imageRandomCat} alt={`Image extracted using three first words of the firs API text \/ ${fact} \/`} /> }
        </main>
    )
}