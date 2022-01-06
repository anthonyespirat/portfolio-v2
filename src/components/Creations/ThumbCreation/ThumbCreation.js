import './ThumbCreation.css'
import { Link } from 'react-router-dom'

const Creations = ({crea, api, loading}) => {
    

/*
    const [creaClass, setCreaClass] = useState("creation")

    useEffect(()=> {
      
        setTimeout(()=> {
            setCreaClass("creation opa")
        }, 100)
    }, [])
*/
const thumb = crea.thumb
    return (
        <>
            <Link to={'/creation/' + crea.id}>
                 <img src={thumb ? api+thumb.url : ''} alt="" className="rounded w-full" />
            </Link>
        </>
    );
};

export default Creations;