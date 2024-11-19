//import
import '../styles/ResponsiveBackground.css'
import {useState, useEffect} from "react";

const ResponsiveBackground = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [background, setBackground] = useState(width >= 800 ? "#ADD8E6" : "#FFC0CB")



    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth)
            setBackground(width >= 800 ? "#ADD8E6" : "#FFC0CB")
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    })


    return (
        <div className="container_responsive" style={{backgroundColor: background}}>
            <p>La largeur de l'écran: {width}</p>
        </div>
    )
}

export default ResponsiveBackground;