
import React, { useEffect, useState } from 'react';
import Creation from './ThumbCreation/ThumbCreation'
import Loading from './Loading/Loading';
import './Creations.css'
import { NavLink } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const Creations = ({renderBy}) => {
    const apiUrl = 'https://api.e-anthony.fr'
    const [data, setData] = useState([])

    useEffect(() => {
        async function getCrea() {
            await fetch('https://api.e-anthony.fr/creations')
            .then(res=>res.json())
            .then(data=>{
                if (renderBy === 'Home'){
                    let dataSliced = data.slice(-6).reverse()
                    setData(dataSliced)
                } else {
                    setData(data)
                }
            })
        }
        getCrea()
    }, [renderBy]);


    return (
        <div id='creations' className='my-32 flex flex-col'>
            <div className='text-center my-20'>
                <h2 className='font-semibold text-4xl tracking-wider'><span className='text-primary'>M</span>es créations</h2>
                <span className='py-2 text-gray-400 text-xl'>Découvrez mes plus récentes créations</span>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
            {
                data ? (
                    data.map((crea,index) => (<Creation key={index} crea={crea} api={apiUrl} />)))
                    : (<Loading/>)
            }
            </div>
            {renderBy === 'Home' ? (
                <button className='see-more flex items-center self-center my-10'> <NavLink to='creations' className='font-medium underline text-lg mr-2 tracking-wider'>Voir + de creations</NavLink><BsArrowRight className='text-xl'/> </button>
            ) : (
                <></>
            )}
            <span className="background-1"></span>
        </div>
    );
};

export default Creations;