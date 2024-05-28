import { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const lightTheme = {
    background: '#ffffff', // white
    text: '#000000' // black
};

const darkTheme = {
    background: '#000000', // black
    text: '#ffffff' // white
};

const ThemeSetter = () => {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    return (
        <Box sx={{ backgroundColor: theme.background, color: theme.text, p: 2, borderRadius: 1 }}>
            <Button variant="contained" color="primary" onClick={toggleTheme}>
                Cambia Theme
            </Button>
            <Typography variant="body1" mt={2}>
                Prueba de texto
            </Typography>
        </Box>
    )
}

export default ThemeSetter;
