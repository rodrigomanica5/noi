import React, { useContext } from 'react'
import { navContext } from '../context/navContext'

const servicesArray = [
  {
    title: 'Experiencias Empresariales In Situ y virtuales',
    description: 'Desplegamos un enfoque meticuloso para brindarte una ejecución impecable, donde cada elemento converge en la perfección. Desde summit, conversatorios, conferencias, ferias, hasta lanzamientos, presentamos alternativas integrales de eventos sin límites para dejar una huella duradera en tu audiencia.',
  },
  {
    title: 'Celebraciones Especiales',
    description: 'Cada ocasión merece una celebración única y significativa. Nuestra experiencia en la producción de eventos nos permite diseñar y ejecutar celebraciones extraordinarias. Ya sea un aniversario, un lanzamiento, un cumpleaños o cualquier hito importante, creamos un ambiente especial que emociona a tus invitados e invitadas.',
  },
  {
    title: 'Asesoría',
    description: 'Súmale conciencia a tus eventos, elevamos tu evento al nivel sostenible: trazamos la ruta hacia celebraciones en armonía con el planeta y socialmente conscientes. Nuestra asesoría  fusiona la sostenibilidad con tus eventos. Desde selección de proveedores sustentable,  tratamiento de residuos y  herramientas que generan un impacto positivo, sin bajar la calidad y la vivencia única para tu público.',
  }

]

function Services() {

  const { servicios, isMobile } = useContext(navContext)

  return (
    <div ref={servicios} className='servicesSection'>
      <div className='servicesContainer'>
        <h2>Nuestros servicios</h2>
        <div className='servicesInfo'>
          {
            servicesArray.map((element, index) => {
              return <div key={index}>
                <div className='dot'>
                  <img src='/assets/images/dot.svg' alt='dot' width={isMobile ? 32 : 60} height={isMobile ? 32 : 60} />
                </div>
                <div>
                  <h5 className='serviceTitle'>{element.title}</h5>
                  <img src='/assets/images/Line.svg' alt='vector' width={isMobile && 270}/>
                  <p className='serviceDescription'>{element.description}</p>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Services