import { useState } from "react";

const ApiSearch = () => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        const endpointUrl = import.meta.env.VITE_ENDPOINT_URL;
        const response = await fetch(endpointUrl);
        const data = await response.json();
        setData(data);
    }

    return (
        <>
            <button onClick={fetchData}> Traer datos de la API
            
            </button>
            <div>
            {data && JSON.stringify(data, null, 2)}
            </div>
        </>
    )
}
export default ApiSearch;