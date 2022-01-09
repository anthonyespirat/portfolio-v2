import { useRef, useEffect, useState} from 'react';
import './Hero.css'
import Mouse from    './Mouse/Mouse'

const Hero = () => {
    const refMouse = useRef()
    const [scrollY, setScrollY] = useState(0)
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollY(position);
      };

      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        const disparitionHeight = document.documentElement.scrollHeight/10
        if (scrollY > disparitionHeight) {
            refMouse.current.classList.add('opa-none')
        }
        if (refMouse.current.classList.contains('opa-none') && scrollY < disparitionHeight) {
            refMouse.current.classList.remove('opa-none')
        }
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [scrollY]);
      

    return (
        <>
        <div id='hero' className='flex flex-col items-center justify-center .tracking-wide'>
            <h1 className='text-3em lg:text-6xl font-semibold text-center py-5 px-6 lg:px-32'>Web design et Dev Front dans un seul corps</h1>
            <p className='py-2 text-gray-400 text-xl tracking-wide'>Ma passion, c’est le web</p>
        </div>
        <Mouse forwardRef={refMouse} className='mouse' />
        </>
    );
};

export default Hero;