import React, { useEffect, useRef, useState } from 'react'
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

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window.visualViewport.width < 500 ) {
            setIsMobile(true)
        }
    }, [])

    return <Provider value={{ nosotras, servicios, contacto, scrollToSection, isMobile }}>{children}</Provider>
}

export default MyProvider