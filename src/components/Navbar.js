import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { navContext } from '../context/navContext'

function Navbar() {

    const { scrollToSection, nosotras, servicios, contacto } = useContext(navContext)

    return (
        <div className='navbar'>
            <div>
                <img src='/assets/images/noi-logo.svg' alt='noi Logo' />
            </div>
            <nav>
                <ul>
                    <li><Link onClick={() => scrollToSection(nosotras)} to="/nosotras">Nosotras</Link></li>
                    <li><Link onClick={() => scrollToSection(servicios)} to="/servicios">Servicios</Link></li>
                    <li><Link onClick={() => scrollToSection(contacto)} to="contacto">Contacto</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar