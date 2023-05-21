import './App.css';
import React, { useState, useRef } from 'react'
import './style.css'

let counting = null;

function App() {
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);
  // const [counting, setcounting] = useState();
  const hour = useRef();
  const second = useRef();
  const minute = useRef();
  const start = useRef();
  const stop = useRef();

  const countdown = () => {

    if (parseInt(second.current.value) > 0) {
      setseconds((parseInt(second.current.value)) - 1);
    }
    else if (parseInt(second.current.value) === 0 && parseInt(minute.current.value) > 0) {
      setminutes((parseInt(minute.current.value)) - 1);
      setseconds(59);
    }
    else if (parseInt(second.current.value) === 0 && parseInt(minute.current.value) === 0 && parseInt(hour.current.value) > 0) {
      sethours((parseInt(hour.current.value)) - 1);
      setminutes(59);
      setseconds(59);
    }

    else if ((parseInt(second.current.value) === 0) && (parseInt(minute.current.value) === 0) && (parseInt(hour.current.value) === 0)) {
      clearInterval(counting);
      start.current.style.display = "inline";
      stop.current.style.display = "none";
    }

    console.log(second.current.value)

  }


  const startbutton = () => {
    counting = setInterval(countdown, 1000);
    start.current.style.display = "none";
    stop.current.style.display = "inline";

  }
  const stopbutton = () => {
    clearInterval(counting);
    start.current.style.display = "inline";
    stop.current.style.display = "none";
  }









  const restart = () => {
    clearInterval(counting);
    start.current.style.display = "inline";
    stop.current.style.display = "none";
    setseconds(0)
    setminutes(0)
    sethours(0)
  }


  return (
    <div className='maincontainer'>
      <div className='container'>
        <div className=' fortitle'>
          <span className='titlename'><h3>CountDown</h3></span>
        </div>


        <div className='headings'>
          <span className='heading1'><h2>Hours&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </h2> </span>
          <span className='heading2'><h2>Minutes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</h2></span>
          <span className='heading3'><h2>Seconds</h2></span>
        </div>


        <div className='inputs'>
          <div className='bx1'>
            <input
              type="number"
              className='input1'
              placeholder='00'
              value={hours}
              ref={hour}
              onChange={(e) => {
                sethours(JSON.parse(e.target.value));
              }}

            /></div>
          <div className='bx2'>
            <input
              type="number"
              className='input2'
              placeholder='00'
              value={minutes}
              ref={minute}
              onChange={(e) => {
                console.log(typeof parseInt(e.target.value));
                setminutes(JSON.parse(e.target.value));
              }}
            />
          </div>

          <div className='bx3'>
            <input
              type="number"
              className='input3'
              placeholder='00'
              value={seconds}
              ref={second}
              onChange={(e) => {
                console.log(typeof parseInt(e.target.value));
                setseconds(JSON.parse(e.target.value));

              }}
            /></div>
        </div>

        <div className='buttons'>
          <button className="start" role="button" ref={start} onClick={startbutton}>Start</button>
          <button className="stop" role="button" ref={stop} onClick={stopbutton}>Stop</button>
          <button className="restart" role="button" onClick={restart}>Restart</button>
        </div>
      </div>
    </div >

  );
}

export default App;
