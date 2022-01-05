import { NavLink } from "react-router-dom"



const menuMobile = ({isOpen, setIsOpen}) => {

    const removeMenu = () => {
        setIsOpen(isOpen = false)
    }

    return (
        <div className={`mobile-menu overflow-hidden md:hidden block left-0 top-0 ${isOpen ? "active" : ""}`}>
            <nav className='flex'>
                <NavLink onClick={() => removeMenu()} exact to="/" className="px-5 text-gray-400 hover:text-white" activeClassName="current-page"> Accueil </NavLink> &bull;

                <a onClick={() => removeMenu()}  href='/#about' className="px-5 text-gray-400 hover:text-white"> À propos </a> &bull;
                
                <NavLink onClick={() => removeMenu()} exact to="/creations" className="px-5 text-gray-400 hover:text-white" activeClassName="current-page"> Mes créations </NavLink>
            </nav>
        </div> 
    )
}
export default menuMobile