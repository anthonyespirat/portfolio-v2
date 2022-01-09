import React from 'react';
import './Home.css'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Creations from '../../components/Creations/Creations'
import Skill from '../../components/Skill/Skill';
import Quote from '../../components/Quote/Quote';
import Contact from '../../components/Contact/Contact';
import PageTransition from '../../components/pageTransition.js';



const Home = () => {

    return (
        <div className={'home ' + PageTransition(100, "opa")}>
            <Hero/>
            <div className="container mx-auto mt-24">
            <About/>
            <Creations renderBy='Home'/>
            <Skill />
            <Quote />
            <Contact />
            </div>
        </div>
    );
};

export default Home;