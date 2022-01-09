
import React, { useEffect, useState } from 'react';
import ThumbCreation from './ThumbCreation/ThumbCreation'
import Loading from './Loading/Loading'
import './Creations.css'
import { NavLink } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'



const Creations = ({renderBy}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getCrea() {
            await fetch(window.api + '/creations')
            .then(res=>res.json())
            .then(data=>{
                setLoading(true)
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
        
            <div id='creations' className={`flex flex-col ${renderBy === 'Home' ? "my-32" : "mb-12"}`}>
                <div className='text-center my-20'>
                    <h2 className='font-semibold text-4xl tracking-wider'><span className='text-primary'>M</span>es créations</h2>
                    <span className='py-2 text-gray-400 text-xl'>Découvrez mes plus récentes créations</span>
                </div>
                {
                    loading === false && <Loading/>
                }
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 min-h-screen'>



                { loading &&
                    data.map((crea,index) => (
                        <ThumbCreation className='lol' key={index} crea={crea} api={window.api}/>
                        )
                    )
                }

                </div>
                {renderBy === 'Home' && (
                    <button className='see-more flex items-center self-center my-10'> <NavLink to='creations' className='font-medium underline text-lg mr-2 tracking-wider'>Voir + de creations</NavLink><BsArrowRight className='text-xl'/> </button>
                )
                }
                <div className="background-1"></div>
            </div>
    );
};

export default Creations;