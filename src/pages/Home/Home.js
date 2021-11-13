import React from 'react';
import './Home.css'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Creations from '../../components/Creations/Creations'
import Skill from '../../components/Skill/Skill';



const Home = () => {

    return (
        <>
        <Hero/>
        <div className="container mx-auto mt-24">
        <About/>
        <Creations renderBy='Home'/>
        <Skill />
        </div>
        </>
    );
};

export default Home;