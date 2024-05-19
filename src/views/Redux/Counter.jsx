import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync, incrementByAmount } from "../../store/counter/counterSlice";

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h2>{count}</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button onClick={() => dispatch(increment())}>Increase</button>
                    <button onClick={() => dispatch(decrement())}>Decrease</button>
                    <button onClick={() => dispatch(incrementByAmount(10))}>Increase By 10</button>
                    <button onClick={() => dispatch(incrementAsync(10))}>Increase By 10 Asynchornously</button>
            </div>
        </div>
    )
}

export default Counter;