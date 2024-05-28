import { useState } from "react";
import { Button, Typography, Box } from '@mui/material';

const ApiSearch = () => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        const endpointUrl = import.meta.env.VITE_ENDPOINT_URL;
        const response = await fetch(endpointUrl);
        const data = await response.json();
        setData(data);
    }

    return (
        <Box>
            <Button variant="contained" color="primary" onClick={fetchData} fullWidth>
                Traer datos de la API
            </Button>
            <Typography variant="body1" mt={2} whiteSpace="pre-wrap">
                {data && JSON.stringify(data, null, 2)}
            </Typography>
        </Box>
    )
}

export default ApiSearch;
