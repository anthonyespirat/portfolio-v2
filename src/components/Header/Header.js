import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="p-5 flex">
            {/* LOGO */}
            <div className="logo uppercase text-3xl font-light">Anthony <span className="text-primary">E</span>.</div>

            <nav className='flex-grow md:flex items-center justify-center text-lg hidden'>
                <NavLink exact to="/" className="px-5 text-gray-400 hover:text-white" activeClassName="current-page"> Accueil </NavLink> &bull;

                <NavLink exact to="/a-propos" className="px-5 text-gray-400 hover:text-white" activeClassName="current-page"> À propos </NavLink> &bull;
                
                <NavLink exact to="/creations" className="px-5 text-gray-400 hover:text-white" activeClassName="current-page"> Mes créations </NavLink>
            </nav>

            <button className="py-2 px-8 border border-gray-400 rounded font-semibold text -xl">Contact</button>
        </header>
    );
};

export default Header;