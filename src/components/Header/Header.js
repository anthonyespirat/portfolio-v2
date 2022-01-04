import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="p-5 flex justify-between">
            {/* LOGO */}
            <div className="logo uppercase text-3xl font-light">Anthony <span className="text-primary">E</span>.</div>

            <nav className='flex-grow md:flex items-center justify-center text-lg hidden'>
                <NavLink exact to="/" className="px-5 text-gray-400 hover:text-white" activeClassName="current-page"> Accueil </NavLink> &bull;

                <a href='/#about' className="px-5 text-gray-400 hover:text-white"> À propos </a> &bull;
                
                <NavLink exact to="/creations" className="px-5 text-gray-400 hover:text-white" activeClassName="current-page"> Mes créations </NavLink>
            </nav>
            <button id='mobile-menu' className='md:hidden'> <span></span><span></span><span></span> </button>
            <a href="#contact"><button className="py-2 px-8 border border-gray-400 rounded font-semibold hidden md:block hover:bg-gray-400 hover:bg-opacity-10 transition duration-500">Contact</button></a>
        </header>
    );
};

export default Header;