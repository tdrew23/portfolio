import '../styles.css';
import ohmyfood from '../img/ohmyfood.png'
import riding from '../img/riding.png'
import booki from '../img/booki.png'
import printIn from '../img/Print-in.png'
import architecte from '../img/architecte.png'
import kasa from '../img/kasa.png'

const Projects = () => {
    const projects = [
        { name: 'Ohmyfood', description: 'Site mobile avec des animations CSS', url: 'https://tdrew23.github.io/ohmyfood/', image: ohmyfood },
        { name: 'Riding Cities', description: 'Site HTML', url: ' https://tdrew23.github.io/Riding-cities/', image: riding },
        { name: 'Booki', description: " Page d'accueil d'une agence de voyage avec HTML & CSS", url: 'https://tdrew23.github.io/Booki/', image: booki },
        { name: 'Print-in', description: 'Print-in Javascript', url: ' https://tdrew23.github.io/Print-it-JS/', image: printIn },
        { name: 'Portfolio Architecte', description: 'Description du projet 3.', url: 'https://votre-utilisateur.github.io/projet-3/', image: architecte },
        { name: 'Kasa', description: 'Application web de location immobilière avec React', url: 'https://tdrew23.github.io/Kasa/', image: kasa },
        { name: 'Projet 3', description: 'Description du projet 3.', url: 'https://votre-utilisateur.github.io/projet-3/', image: 'https://via.placeholder.com/300x200.png?text=Projet+3' },
        { name: 'Projet 3', description: 'Description du projet 3.', url: 'https://votre-utilisateur.github.io/projet-3/', image: 'https://via.placeholder.com/300x200.png?text=Projet+3' },


    ];

    return (
        <section id="projects" className="bento">
            <h2>Projets complétés</h2>
            <div className="bento-grid">
                {projects.map((project, index) => (
                    <div className="bento-item" key={index}>
                        <img src={project.image} alt={project.name} />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="button">Voir le site</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
