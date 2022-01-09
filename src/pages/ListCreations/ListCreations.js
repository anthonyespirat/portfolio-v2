import React from 'react';
import Creations from '../../components/Creations/Creations';
import PageTransition from '../../components/pageTransition.js';

const ListCreations = () => {
    return (
        <div className={'list-crea container mx-auto' + PageTransition(100, "opa")}>
            <Creations/>    
        </div>
    );
};

export default ListCreations;