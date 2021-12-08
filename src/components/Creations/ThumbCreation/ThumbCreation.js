import './ThumbCreation.css'
import { Link } from 'react-router-dom'
const Creations = ({crea, api}) => {


const thumb = crea.thumb
    return (
        <div className="creation">
            <Link to={'/creation/' + crea.id}>
                 <img src={thumb ? api+thumb.url : ''} alt="" className="rounded w-full" />
            </Link>
        </div>
    );
};

export default Creations;