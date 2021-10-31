import React from 'react';
import './Hero.css'
import './Mouse/Mouse'

const Hero = () => {
    return (
        <>
        <div id='hero' className='flex flex-col items-center justify-center .tracking-wide'>
            <h1 className='text-4xl font-semibold text-center py-5 px-6 lg:px-32 text-6xl'>Web design et Dev Front dans un seul corps</h1>
            <p className='py-2 text-gray-400 text-xl tracking-wide'>Ma passion, c’est le web</p>
            <span className="background-1"></span>
        </div>
        <Mouse />
        </>
    );
};

export default Hero;