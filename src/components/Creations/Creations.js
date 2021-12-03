
import React, { useEffect, useState } from 'react';
import ThumbCreation from './ThumbCreation/ThumbCreation'
import Loading from './Loading/Loading';
import './Creations.css'
import { NavLink } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const Creations = ({renderBy}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getCrea() {
            await fetch(window.api + '/creations')
            .then(res=>res.json())
            .then(data=>{
                if (renderBy === 'Home'){
                    setData(data.slice(-6).reverse())
                } else {
                    setData(data.reverse())
                }
            })
        }
        getCrea()
    }, [renderBy]);


    return (
        
            <div id='creations' className={`flex flex-col ${renderBy === 'Home' ? "my-32" : ""}`}>
                <div className='text-center my-20'>
                    <h2 className='font-semibold text-4xl tracking-wider'><span className='text-primary'>M</span>es créations</h2>
                    <span className='py-2 text-gray-400 text-xl'>Découvrez mes plus récentes créations</span>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
                {
                    data ? (
                        data.map((crea,index) => (<ThumbCreation key={index} crea={crea} api={window.api} />)))
                        : (<Loading/>)
                }
                </div>
                {renderBy === 'Home' ? (
                    <button className='see-more flex items-center self-center my-10'> <NavLink to='creations' className='font-medium underline text-lg mr-2 tracking-wider'>Voir + de creations</NavLink><BsArrowRight className='text-xl'/> </button>
                ) : (
                    <></>
                )}
                <div className="background-1"></div>
            </div>
    );
};

export default Creations;