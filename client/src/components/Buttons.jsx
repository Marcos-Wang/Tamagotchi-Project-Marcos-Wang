import '../styles/Buttons.css'
import { useState } from 'react'
import danuIdle from '../assets/DanuIdle.png'
import danuPlay from '../assets/DanuSing.png'
import danuSleep from '../assets/DanuSleep.png'
import danuSit from '../assets/DanuLazy.png'
import danuWave from '../assets/DanuWave.png'
import danuEat from '../assets/DanuEat.png'

function Buttons (){

    const [displayImage, setDisplayImage] = useState(danuWave)

    const handleButtonClickPlay = () => {

        setDisplayImage(danuPlay);
    
    }

    const handleButtonClickEat = () => {

        setDisplayImage(danuEat);
    
    }

    const handleButtonClickSit = () => {

        setDisplayImage(danuSit);
    
    }

    const handleButtonClickSleep = () => {

        setDisplayImage(danuSleep);
    
    }

    return (
        <>  
            <div className = "mainview">


                <section className="main">
                
                    <div>
                        { <img src={displayImage} className="logo react" alt="React logo" /> }
                    </div>
                
                </section>

                <div className = "buttons">

                    <button onClick={handleButtonClickPlay}>
                        Play
                    </button>

                    <button onClick={handleButtonClickEat}>
                        Feed
                    </button>

                    <button onClick={handleButtonClickSit}>
                        Sit
                    </button>

                    <button onClick={handleButtonClickSleep}>
                        Sleep
                    </button>

                </div>

            </div>
        </>
    )

}


export default Buttons;