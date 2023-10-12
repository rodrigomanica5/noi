import React, { useContext } from 'react'
import { navContext } from '../context/navContext'

const handlerSubmit = (e) => {
  // e.preventDefault()
  console.log("sent");
}

function Form() {

  const { contacto } = useContext(navContext)

  return (
    <div ref={contacto} className='formSection'>
      <div className='formContainer'>
        <h2>Escríbenos para producir tu próximo evento</h2>
        <form onSubmit={handlerSubmit} action="https://formsubmit.co/noiproductora@gmail.com" method="POST">
        <input type="hidden" name="_next" value="https://noi.vercel.app"/>
        <input type="hidden" name="_subject" value="noi productora: Consulta"/>
        <input type="hidden" name="_template" value="table"></input>
          <div className='inputContainer'>
            <div>
              <label htmlFor="name">Nombre</label>
              <input id='name' type='text' name='nombre' />
            </div>
            <div>
              <label htmlFor="lastname">Apellido</label>
              <input id='lastname' type='text' name='apellido' />
            </div>
          </div>

          <div className='inputContainer'>
            <div>
              <label htmlFor="email">Email</label>
              <input id='email' type='text' name='email'/>
            </div>
            <div>
              <label htmlFor="telephone">Teléfono (opcional)</label>
              <input id='telephone' className='phoneInput' type='number' name='telefono'/>
            </div>
          </div>

          <div className='inputContainer'>
            <div>
              <label htmlFor="comments">Cuéntanos sobre el evento</label>
              <input id='comments' className='eventDescriptionArea' type='text' name='comentarios'/>
            </div>
          </div>
          <div className='formFooter'>
            <button className='submitButton' type='submit'>Enviar</button>
            <div className='socialMedia'>
              <p>Síguenos</p>
              <img src='/assets/images/instagramLogo.svg' alt='Instagram' />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form