import {useState} from "react";

function Counter2() {
    const [counter, setCounter] = useState(1)
    const handleIncrease = () => {
        setCounter(prevState =>prevState + 1)
        setCounter(prevState =>prevState + 1)
    }
    return (
        <div className="Counter" style={{padding: 20}}>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
}

export default Counter2;