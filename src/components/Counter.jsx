import {increment, decrement, reset} from "../features/counter/counterSlice";
import {useDispatch} from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={() => dispatch(increment())}>Augmenter</button>
            <button onClick={() => dispatch(decrement())}>Diminuer</button>
            <button onClick={() => dispatch(reset())}>Rénitialiser</button>
        </>
    )
}

export default Counter;