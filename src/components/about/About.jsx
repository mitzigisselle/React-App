import './About.css'; 

function About() {
    return (
        <div className="about-container">
            <div className="about-card">
                

                <h2 className="about-name">Mitzi Patiño</h2>
                <p className="about-contact">Correo: gisselle220495@gmail.com</p>

                {/* Pequeña descripción */}
                <p className="about-description">
                    Soy desarrolladora Java Full Stack. Me capacite el en bootcamp de Generation Mexico. Aqui Aprendi muchas cosas sobre el desarrollo web. Aunque fue un poco dificil, se ha logrado cada aprendizaje. 
                </p>
            </div>
        </div>
    );
}

export default About;