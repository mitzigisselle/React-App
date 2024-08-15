import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import "./Astros.css";

function AstroCard({name, craft}) {
    return (
        <div className="card">
            <h3 className="astro-name">{name}</h3>
            <p className="astro-craft">{craft}</p>
        </div>
    )
}

function Astros() {
    const API_URL = 'http://api.open-notify.org/astros.json';
    const [astros, setAstros] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(API_URL);
            const res = await data.json();
            console.log(res.people);
            setAstros(res.people);
        };

        fetchData().catch((error) => console.error(error));

    }, []);

    console.log(astros);

    return (
        <div className="astros-container">

            {!astros ? (
                <CircularProgress sx={{ color: "#ffffff"}} />
            ) : (
                astros.map((astro, idx) => <AstroCard key={idx} {...astro} />)
                
            )}
            
        </div>
    );
}

export default Astros;