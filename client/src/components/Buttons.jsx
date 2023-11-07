import '../styles/Buttons.css'
import React, { useState, useEffect } from 'react';
import danuIdle from '../assets/DanuIdle.png'
import danuPlay from '../assets/DanuSing.png'
import danuSleep from '../assets/DanuSleep.png'
import danuSit from '../assets/DanuLazy.png'
import danuWave from '../assets/DanuWave.png'
import danuEat from '../assets/DanuEat.png'
import dayjs from 'dayjs';

function Buttons (){

    var now = dayjs();
    var nowHour = now.format('H');


    const [displayImage, setDisplayImage] = useState(danuWave)

    let timer = 0;

    useEffect(() => {
            
        const interval = setInterval(() => {
               
            timer--;
            
            if (timer == 0){
            
                setDisplayImage(danuIdle)
            
                setText("Danuki is just looking, enjoying your company!")
            
            }

            if (timer == -25){
            
                setDisplayImage(danuSit)
            
                setText("Danuki is sitting down, slowly calming down...")
            
            }

            if (timer == -60){
            
                setDisplayImage(danuSleep)
            
                setText("Danuki fell asleep... he's resting peacefully...")
            
            }

            }, 1000);

            
        
            return () => clearInterval(interval);
    
        }, []);

    const [text, setText] = useState("...")

    function hello (){
        useEffect(()=>{
            if(nowHour >= 22 || nowHour <= 10){
                
                setDisplayImage(danuSleep);
                setText("Danuki is a big sleeper, he goes to sleep at 10 and wakes up at 10, but you can wake him up if you want!")
                timer = -100;
            
            }

            else{

                setDisplayImage(danuWave);
                setText("Danuki is happy to see you. He's waving hello!")
                timer = 7;

            }
        
        }, []);
    
    }
    hello();



    const handleButtonClickPlay = () => {

        setDisplayImage(danuPlay);
        
        setText("Danuki is having fun with the microphone, he's humming his favorite elevator tunes...")
        
        timer = 7;
    
    }

    const handleButtonClickEat = () => {

        setDisplayImage(danuEat);
        setText("Danuki is eating a big walnut, but you can't see it, he chews with his mouth closed.")
        timer = 10;
    
    }

    const handleButtonClickSit = () => {

        setDisplayImage(danuSit);
        setText("Danuki is sitting down. He could stay like this for hours...")
        timer = -26;
    
    }

    const handleButtonClickSleep = () => {

        setDisplayImage(danuSleep);
        setText("Danuki has gone to sleep. He's gonna be full of energy again in no time!")
        timer = -100;
    
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

                <p className='responseText'>{text}</p>

            </div>
        </>
    )

}


export default Buttons;