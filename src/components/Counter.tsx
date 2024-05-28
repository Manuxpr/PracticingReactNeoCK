import { useState } from "react";
import Button from '@mui/material/Button';




const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <Button variant="contained" onClick={() => setCounter(counter + 1)}>Increment</Button>
            <Button variant="outlined" onClick={() => setCounter(counter - 1)}>Decrement</Button>
        </div>
    )
}
export default Counter;