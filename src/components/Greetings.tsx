import { useState } from "react";
import "./Greetings.css";

interface ButtonProps {
    title:string;  
    message: string;
}

const Greetings :React.FC<ButtonProps> = ({ title, message }) =>{
    const [alertlanzada, setAlertlanzada] = useState(false);

    return (
        
        <button 
        style={{ 
            backgroundColor: alertlanzada ? '#ebf21f' : '#3289a8',
            color: alertlanzada ? '#000000' : '#fafcfc'
        }}
        onClick={()=>{
            if(!alertlanzada){
                alert(message);
                setAlertlanzada(true)
            }else{
                alert(message)
                setAlertlanzada(false)
            }
        }}>
            {title}
        </button>
    )
}

export default Greetings;

/* Yo lo haria asi

const Greetings = ({ title, message }) => {
    return (
        <button onClick={() => alert(message)}>
            {title}
        </button>
    )
}

export default Greetings;
*/
    
