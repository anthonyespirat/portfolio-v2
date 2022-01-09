import { BsMouse } from 'react-icons/bs'
import { BsArrowDown } from 'react-icons/bs'

const Mouse =({forwardRef}) => {

    return (
        <div ref={forwardRef} className=' mouse flex flex-col items-center'>
            <BsMouse className='text-4xl text-primary mb-4'/>
            <BsArrowDown className='text-3xl arrow-anim'/>
        </div>
    );
};

export default Mouse;