import '../styles.css';
import profil from '../img/4758689.jpg'

const Hero = () => {
    return (
        <section className="hero container" id="home">
            <div className="hero-blue">
                <div>
                    <h1>
                        <small>Salut je suis</small>
                        Tariq Drewniak
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="call-to-action">
                        <a href="#" className="button black">Voir mon CV</a>
                        <a href="#" className="button white">Contactez-moi</a>
                    </div>
                    {/* <div className="social-links">
                        <a href="#"><i className="fa-brands fa-github"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div> */}
                </div>
            </div>
            <div className="hero-yellow">
                <img src={profil} alt="dev web" />
            </div>
        </section>
    );
};

export default Hero;
