import './ThumbCreation.css'
import { Link } from 'react-router-dom'

const Creations = ({crea, api, loading}) => {

const thumb = crea.thumb
    return (
        <>
            <Link to={'/creation/' + crea.id} className="thumb flex justify-center items-center">
                 <img src={thumb ? api+thumb.url : ''} alt="" className="rounded object-cover object-top" />
            </Link>
        </>
    );
};

export default Creations;