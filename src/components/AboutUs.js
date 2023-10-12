import React, { useContext } from 'react'
import { navContext } from '../context/navContext'

function AboutUs() {

  const {nosotras} = useContext(navContext)

  return (
    <div ref={nosotras} className='aboutUsSection'>
      <div className='aboutUsContainer'>
        <h2>Sobre nosotras</h2>
        <div className='aboutUsInfo'>
          <h4>Somos dos apasionadas por los detalles que hacen la diferencia en los eventos</h4>
          <p>Nuestro objetivo es crear experiencias inolvidables sin perjudicar el futuro. Nos comprometemos a que las producciones sean sostenibles de principio a fin. Es nuestra manera de contribuir, a través de nuestra pasión a un mundo más sostenible y consciente.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs