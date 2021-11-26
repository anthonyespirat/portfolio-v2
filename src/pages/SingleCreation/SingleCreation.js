import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router';

const SingleCreation = () => {
    const apiUrl = 'https://api.e-anthony.fr/'
    const { id } = useParams();
    // eslint-disable-next-line
    const [data, setData] = useState();

    useEffect(()=> {
        async function getSingleCreation() {
            await fetch(apiUrl + "creations/" + id)
            .then(res=>res.json())
            .then(data => {
                setData([data])
            })
        }
        getSingleCreation()
    }, [id])

    return (
        <div>
            {data.map((crea,index) => <div></div>)}
        </div>
    );
};

export default SingleCreation;