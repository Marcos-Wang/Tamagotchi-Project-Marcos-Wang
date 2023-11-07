import { useState } from 'react'

import '../styles/Nav.css'
import About from './About.jsx'
import Contact from './Contact.jsx'



function Nav() {

        const [displayAbout, setDisplayAbout] = useState("none")

        const handleButtonClickAbout = () => {
        displayAbout === "none" ? setDisplayAbout("block") : setDisplayAbout("none");
        }
    
        const [displayContact, setDisplayContact] = useState("none")
    
        const handleButtonClickContact = () => {
        displayContact === "none" ? setDisplayContact("block") : setDisplayContact("none");
        }
        
    return (
        <>  
            <About show = {displayAbout} click = {handleButtonClickAbout}/>
            <Contact show = {displayContact} click = {handleButtonClickContact}/>
            <a href="#" onClick={handleButtonClickAbout}>
            About
            </a>
            <a href="#" onClick={handleButtonClickContact}>
            Contact Me
            </a>
            
        </>
    )
}

export default Nav