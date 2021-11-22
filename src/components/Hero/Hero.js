import './Hero.css'
import Mouse from    './Mouse/Mouse'

const Hero = () => {
    return (
        <>
        <div id='hero' className='flex flex-col items-center justify-center .tracking-wide'>
            <h1 className='text-3em lg:text-6xl font-semibold text-center py-5 px-6 lg:px-32'>Web design et Dev Front dans un seul corps</h1>
            <p className='py-2 text-gray-400 text-xl tracking-wide'>Ma passion, c’est le web</p>
        </div>
        <Mouse className='mouse' />
        </>
    );
};

export default Hero;