import { React, useState, useEffect } from 'react';
import './SingleCreation.css'
import { useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';

const SingleCreation = () => {
    const { id } = useParams();
    // eslint-disable-next-line
    const [data, setData] = useState([]);

    useEffect(()=> {
        async function getSingleCreation() {
            await fetch(window.api + "/creations/" + id)
            .then(res=>res.json())
            .then(data => {
                setData([data])
            })
        }
        getSingleCreation()
    }, [id])

    return (
        <div id='creation' className='container mx-auto my-12'>
            {data.map((crea,index) => <div key={crea.id}>

                {/* Titre de la création */}
            <h2 className='font-semibold text-4xl text-center tracking-wide'><span className='text-primary'>
                {crea.titre.charAt(0)}
            </span>
                {crea.titre.slice(1)}
            </h2>

                {/* Description #1 */}
            <ReactMarkdown className="text-center my-6">{crea.description1}</ReactMarkdown>

                {/* Grandes images */}
            <div className="grid grid-cols-2 gap-4 lg:gap-8 mt-20 mb-32 xl:px-16">
                <div className='w-full'>
                    <img className='object-cover min-h-full' src={window.api  + crea.image1.url} alt={
                        crea.image1.alternativeText ? crea.image1.alternativeText : "Image création"
                    } />
                    <a href={crea.url_site} target='_blank'  rel='noreferrer' className='text-center btn rounded font-semibold py-4 mt-8'>Visiter le site</a>
                </div>
                <div className='w-full'>
                    <img className="object-cover min-h-full" src={window.api  + crea.image2.url} alt={
                        crea.image2.alternativeText ? crea.image2.alternativeText : "Image création"
                    } />
                    
                    <a href={crea.url_maquette} target='_blank'  rel='noreferrer' className='text-center btn rounded font-semibold py-4 mt-8'>Voir la maquette</a>
                </div>
            </div>

                {/* Description #2 */}
            <ReactMarkdown className="text-center my-6">{crea.description2}</ReactMarkdown>
                

            </div>)}
        </div>
    );
};

export default SingleCreation;