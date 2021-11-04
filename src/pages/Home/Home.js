import React from 'react';
import './Home.css'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Creations from '../../components/Creations/Creations'



const Home = () => {

    return (
        <>
        <Hero/>
        <div className="container mx-auto mt-24">
        <About/>
        <Creations renderBy='Home'/>
        </div>
        </>
    );
};

export default Home;