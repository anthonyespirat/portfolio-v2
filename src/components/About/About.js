import './About.css'
const About = () => {
    return (
        <div id='about' className='rounded'>
            <h2 className='font-semibold text-4xl tracking-wider'><span className='text-primary'>Q</span>ui suis je ?</h2>
            <p className='mt-4'>Je me nomme <b>Anthony Espirat</b>, je suis situé en Auvergne près de Clermont-Ferrand. Dans mes loisirs, j'aime m’adonner aux jeux vidéo, écouter de la musique, explorer la nature et sillonner tout ce qui est lié à l'univers du web.</p>
            <p>Autodidacte dans l’âme, j’aime apprendre et découvrir. En 2021, j'ai décidé d'intégrer la formation Web Design du GRETA Auvergne. Cette formation me permet aujourd'hui d'étudier et d’approfondir tout le cheminement que nécessite la création d'un site web (brainstorming, moodboard, maquette, code, etc.). Grâce à cette formation, j'ai pu validé le <b>Titre Pro Design Web</b></p>
            <p>
                Pour finaliser mon parcours d'apprentisage, j'ai intégré la formation <b>Développeur Fullstack JS</b> de l'école en ligne <b>O'Clock</b>.
            </p>
        </div>
    );
};

export default About;