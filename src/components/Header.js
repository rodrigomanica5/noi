import React, { useContext } from 'react'
import Navbar from './Navbar'
import { navContext } from '../context/navContext'

function Header() {

    const { isMobile } = useContext(navContext)

    return (
        <div className='headerContainer'>
            <Navbar />
            <div className='titleContainer'>
                <h2>Somos una productora de experiencias, momentos y eventos con impacto, buscando la sustentabilidad en cada detalle.</h2>
                {
                    isMobile
                    ? <img src='/assets/images/titleMobile.png' alt='Título' />
                    : <img src='/assets/images/title.png' alt='Título' />
                }
            </div>
        </div>
    )
}

export default Header