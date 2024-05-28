import { useState } from "react";
import { Button, Box, Typography } from '@mui/material';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <Box textAlign="center">
            <Typography variant="h5">Counter: {counter}</Typography>
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={() => setCounter(counter + 1)} sx={{ mr: 1 }}>
                    Increment
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => setCounter(counter - 1)}>
                    Decrement
                </Button>
            </Box>
        </Box>
    )
}

export default Counter;
