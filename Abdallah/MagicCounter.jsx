//importation
import '../styles/MagicCounter.css'
import {useState} from "react";

const MagicCounter = () => {
    const [count, setCount] = useState(0)

    //augmenter le nombre
    const increaseCount = () => setCount(count + 1 )
    //diminuer le nombre
    const decreaseCount = () => setCount(count - 1 )
    //Remettre à 0
    const resetCount = () => setCount(0 )

    return (
        <div className={count % 5 === 0 ? "container_counter" : "container_counter_active"}>
            <h1>Compteur Magique</h1>
            <p> {count} <span className={count % 5 === 0 ? '' : 'hidden_span'}>✨ Nombre magique atteint ! ✨</span> </p>
            <button onClick={increaseCount}>Augmenter</button>
            <button onClick={decreaseCount}>Diminuer</button>
            <button onClick={resetCount}>Rénitialiser</button>
        </div>
    )
}

export default MagicCounter;