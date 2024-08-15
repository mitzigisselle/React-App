import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import './Apod.css'; 

function ApodCard({ title, explanation, url, date }) {
    return (
        <div className="card">
            <h2 className="apod-title">{title}</h2>
            <img className="apod-image" src={url} alt={title} />
            <p className="apod-date">{date}</p>
            <p className="apod-explanation">{explanation}</p>
        </div>
    );
}


function Apod() {
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"; 
    const [apod, setApod] = useState(null);

    useEffect(() => {
        const fetchApod = async () => {
            const response = await fetch(API_URL);
            const data = await response.json();
            setApod(data);
        };

        fetchApod().catch((err) => console.error(err));
    }, []);

    return (
        <div className="apod-container">
            {!apod ? (
                <CircularProgress sx={{ color: "#271084" }} />
            ) : (
                <ApodCard {...apod} />
            )}
        </div>
    );
}

export default Apod;