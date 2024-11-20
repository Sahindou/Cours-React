import Counter from './Counter';
import '../styles/MagicCounter.css'
import {useSelector} from "react-redux";


const Count = () => {
    const counter = useSelector((state) => state.counter.value)
    return (
        <div className={"container_counter"}>
            <h1>Compteur Magique</h1>
            <p> {counter} </p>
            <Counter/>
        </div>
    )
}

export default Count;