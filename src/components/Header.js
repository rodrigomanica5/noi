import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div className='headerContainer'>
            <Navbar />
            <div className='titleContainer'>
                <h2>Somos una productora de experiencias, momentos y eventos con impacto, buscando la sustentabilidad en cada detalle.</h2>
                <img src='/assets/images/title.png' alt='Título' />
            </div>
        </div>
    )
}

export default Header