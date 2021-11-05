import './ThumbCreation.css'

const Creations = ({crea, api}) => {
    const thumb = crea.thumb

    return (
        <div className="creation">
             <img src={thumb ? api+thumb.url : ''} alt="" className="rounded w-full" />
        </div>
    );
};

export default Creations;