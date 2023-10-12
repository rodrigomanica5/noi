import React, { useRef } from 'react'
import { createContext } from 'react'

export const navContext = createContext()

const { Provider } = navContext

function MyProvider({ children }) {

    const nosotras = useRef(null);
    const servicios = useRef(null);
    const contacto = useRef(null)

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return <Provider value={{ nosotras, servicios, contacto, scrollToSection }}>{children}</Provider>
}

export default MyProvider