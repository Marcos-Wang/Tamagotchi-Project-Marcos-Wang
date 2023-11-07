import '../styles/Clock.css'

import React, { useState, useEffect } from 'react';
function Clock (){

    // .format('dddd, MMMM D YYYY, h:mm a')
    
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='time'>
                <h2>{time.toLocaleTimeString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour:'2-digit', minute: "2-digit"})}</h2>
            </div>
        </>
    )

}



export default Clock;