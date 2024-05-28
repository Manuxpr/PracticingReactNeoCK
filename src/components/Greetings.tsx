import { useState } from "react";
import { Button } from '@mui/material';

interface ButtonProps {
    title: string;
    message: string;
}

const Greetings: React.FC<ButtonProps> = ({ title, message }) => {
    const [alertlanzada, setAlertlanzada] = useState(false);

    return (
        <Button 
            variant="contained" 
            sx={{ 
                backgroundColor: alertlanzada ? '#ebf21f' : '#3289a8',
                color: alertlanzada ? '#000000' : '#fafcfc',
                margin: 1
            }}
            onClick={() => {
                alert(message);
                setAlertlanzada(!alertlanzada);
            }}
        >
            {title}
        </Button>
    )
}

export default Greetings;
