import React from 'react';
import { BsMouse } from 'react-icons/bs'
import { BsArrowDown } from 'react-icons/bs'

const Mouse = () => {
    return (
        <div className=' mouse flex flex-col items-center'>
            <BsMouse className='text-4xl text-primary mb-4'/>
            <BsArrowDown className='text-3xl'/>
        </div>
    );
};

export default Mouse;