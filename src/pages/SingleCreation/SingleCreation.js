import { React, useState, useEffect } from 'react';
import './SingleCreation.css'
import { useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import PageTransition from '../../components/pageTransition.ts';

const Images = ({crea, number}) => {
    let imgUrl; let imgAlt;
    if (crea.image1 && crea.image2) {
        if (number === 2) {
            imgUrl = crea.image2.url
            imgAlt = crea.image2.alternativeText
        }
        else if (number === 1) {
            imgUrl = crea.image1.url
            imgAlt = crea.image1.alternativeText  
        }
    }
    return (
        imgUrl ?
        <img className='object-cover min-h-full' src={window.api  + imgUrl} alt={
            imgAlt ? imgAlt : "Image création"} />
        : null
    )
}


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
        <div id='creation' className={'container mx-auto my-12' + PageTransition(100, 'opa')}>
            {data.map((crea,index) => <div key={crea.id}>

                {/* Titre de la création */}
            <h2 className='font-semibold text-4xl text-center tracking-wide'><span className='text-primary'>
                {crea.titre.charAt(0)}
            </span>
                {crea.titre.slice(1)}
            </h2>


                {/* Description #1 */}
            {crea.description1 ? 
            <ReactMarkdown className="text-center my-6">{crea.description1}</ReactMarkdown>
            : null}

                {/* Grandes images */}
            <div className="grid grid-cols-2 gap-4 lg:gap-8 mt-20 mb-32 xl:px-16">
                <div className='w-full'>

                 <Images crea={crea} number={1}/>
                        {/* Bouton site */}
                    {   
                        crea.url_site
                        ? <a href={crea.url_site} target='_blank'  rel='noreferrer' className='text-center btn rounded font-semibold py-4 mt-8'>Visiter le site</a>
                        : <a href='#creation'  className='disable text-center btn rounded font-semibold py-4 mt-8'>Visiter le site</a>
                    }
                </div>
                <div className='w-full'>
                <Images crea={crea} number={2}/>
                        {/* Bouton maquette */}
                    {   
                        crea.url_maquette
                        ? <a href={crea.url_maquette} target='_blank'  rel='noreferrer' className='text-center btn rounded font-semibold py-4 mt-8'>Voir la maquette</a>
                        : <a href='#creation'  className='disable text-center btn rounded font-semibold py-4 mt-8'>Voir la maquette</a>
                    }                    
                </div>
            </div>

                {/* Description #2 */}
            {crea.description2 ? 
            <ReactMarkdown className="text-center my-6">{crea.description2}</ReactMarkdown>
            : null}
                

            </div>)}
        </div>
    );
};

export default SingleCreation;