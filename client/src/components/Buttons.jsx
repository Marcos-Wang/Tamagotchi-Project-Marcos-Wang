import "../styles/Buttons.css";
import React, { useState, useRef, useEffect } from "react";
import danuIdle from "../assets/DanuIdle.png";
import danuPlay from "../assets/DanuSing.png";
import danuSleep from "../assets/DanuSleep.png";
import danuSit from "../assets/DanuLazy.png";
import danuWave from "../assets/DanuWave.png";
import danuEat from "../assets/DanuEat.png";
import dayjs from "dayjs";

function Buttons() {
  var now = dayjs();
  var nowHour = now.format("H");

  const [counterFed, setCounterFed] = useState(1);

  const [counterPlay, setCounterPlay] = useState(1);

  const [counterSleep, setCounterSleep] = useState(1);

  const [energy, setEnergy] = useState(5);

  const [displayImage, setDisplayImage] = useState(danuWave);


const [timed, setTimed] = useState (10)

  const intvl = useRef(null);

  const inc = () =>{


    setTimed(preVal => preVal - 1);
    

    if (timed == 0) {
        setDisplayImage(danuIdle);

        setText("Danuki is just looking, enjoying your company!");
      }

      if (timed == -25) {
        setDisplayImage(danuSit);

        setText("Danuki is sitting down, slowly calming down...");
      }

      if (timed%60 == 0) {
        setText(
            "Danuki has gone to sleep. He's gonna be full of energy again in no time! \n He's been sleeping for a total of " + parseInt(counterSleep/60) + " minute(s)... What a sleepy guy... His current energy is enough to play again " + energy + " times."
          );
      }

      if (timed%65 == 0) {
        setEnergy(preVal => preVal + 1)
        setText(
            "Danuki has gone to sleep. He's gonna be full of energy again in no time! \n He's been sleeping for a total of " + parseInt(counterSleep/60) + " minute(s)... What a sleepy guy... His current energy is enough to play again " + energy + " times."
          );
      }

    if (displayImage == danuSleep){

        setCounterSleep(preVal => preVal + 1)

        setText(
            "Danuki has gone to sleep. He's gonna be full of energy again in no time! \n He's been sleeping for a total of " + parseInt(counterSleep/60) + " minute(s)... What a sleepy guy... His current energy is enough to play again " + energy + " times."
          );

        

    }
    console.log(timed);
  }

  if (intvl?.current) {

    clearInterval(intvl.current);
  }

  intvl.current = setInterval(inc, 1000);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       timer--;

//       if (timer == 0) {
//         setDisplayImage(danuIdle);

//         setText("Danuki is just looking, enjoying your company!");
//       }

//       if (timer == -25) {
//         setDisplayImage(danuSit);

//         setText("Danuki is sitting down, slowly calming down...");
//       }

//       if (timer == -60) {
//         setDisplayImage(danuSleep);

//         setText("Danuki fell asleep... he's resting peacefully...");
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

  const [text, setText] = useState("...");

  function hello() {
    useEffect(() => {
      if (nowHour >= 22 || nowHour <= 8) {
        setDisplayImage(danuSleep);
        setText(
            "Danuki has gone to sleep. He's gonna be full of energy again in no time! \n He's been sleeping for a total of " + parseInt(counterSleep/60) + " minute(s)... What a sleepy guy... His current energy is enough to play again " + energy + " times."
          );
        setTimed(-100);
      } else {
        setDisplayImage(danuWave);
        setText("Danuki is happy to see you. He's waving hello!");
        setTimed(7);
      }
    }, []);
  }
  hello();

  const handleButtonClickPlay = () => {
    setDisplayImage(danuPlay);
    if (energy <= 0) {

        setDisplayImage(danuSit);
        setText("Danuki is too tired, he wants to rest for a little bit before playing again...");
    setTimed(-26);

    } else{
    setCounterPlay(preVal => preVal + 1);
    setEnergy(preVal => preVal - 1);

    setText(
      "Danuki is having fun with the microphone, he's humming his favorite elevator tunes...\n You have played with him " + counterPlay + " time(s)! He appreciates it"
    );

    setTimed(7);
    }
  };

  const handleButtonClickEat = () => {
    setDisplayImage(danuEat);
    setCounterFed(preVal => preVal + 1);
    setText(
      "Danuki is eating a big walnut, but you can't see it, he chews with his mouth closed.\n You have fed him " + counterFed + " time(s)! He might get a bit chubby..."
    );
    setTimed(10);
  };

  const handleButtonClickSit = () => {
    setDisplayImage(danuSit);
    setText("Danuki is sitting down. He could stay like this for hours...");
    setTimed(-26);
  };

  const handleButtonClickSleep = () => {
    setDisplayImage(danuSleep);
    setText(
        "Danuki has gone to sleep. He's gonna be full of energy again in no time! \n He's been sleeping for a total of " + parseInt(counterSleep/60) + " minute(s)... What a sleepy guy... His current energy is enough to play again " + energy + " times."
      );
    setTimed(-100);
  };

  return (
    <>
      <div className="mainview">
        <section className="main">
          <div>
            {<img src={displayImage} className="logo react" alt="React logo" />}
          </div>
        </section>

        <div className="buttons">
          <button onClick={handleButtonClickPlay}>Play</button>

          <button onClick={handleButtonClickEat}>Feed</button>

          <button onClick={handleButtonClickSit}>Sit</button>

          <button onClick={handleButtonClickSleep}>Sleep</button>
        </div>

        <p className="responseText">{text}</p>
      </div>
    </>
  );
}

export default Buttons;
