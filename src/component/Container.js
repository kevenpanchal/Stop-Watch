// import React, { useState } from 'react'
// import './style.css'

// const Container = () => {
//     const [hours, sethours] = useState(undefined);
//     const [minutes, setminutes] = useState(undefined);
//     const [seconds, setseconds] = useState(undefined);

//     // const timeid = setInterval(() => {
//     //     console.log(hours + ":" + minutes + ":" + seconds)

//     // }, 1000)
//     const startbutton = () => {
//         setInterval(countdown, 1000);



//     }
//     const countdown = () => {
//         setseconds(seconds - 1);
//         console.log(seconds + "helo")

//         // if (seconds !== 0) {
//         //     setseconds(seconds - 1)
//         //     if (seconds === 0 && minutes !== 0) {
//         //         setminutes(minutes - 1)
//         //         setseconds(60)
//         //     }
//         //     else if (seconds === 0 && minutes === 0 && hours !== 0) {
//         //         sethours(hours - 1)
//         //         setminutes(59)
//         //         setseconds(60)
//         //     }
//         // }
//         // else {

//         // }
//     }



//     return (
//         <div className='maincontainer'>
//             <div className='container'>
//                 <div className=' fortitle'>
//                     <span className='titlename'><h3>CountDown</h3></span>
//                 </div>


//                 <div className='headings'>
//                     <span className='heading1'><h2>Hours&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </h2> </span>
//                     <span className='heading2'><h2>Minutes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</h2></span>
//                     <span className='heading3'><h2>Seconds</h2></span>
//                 </div>


//                 <div className='inputs'>
//                     <div className='bx1'>
//                         <input
//                             type="number"
//                             className='input1'
//                             placeholder='00'
//                             value={hours}
//                             onChange={(e) => {
//                                 sethours(JSON.parse(e.target.value));
//                             }}

//                         /></div>
//                     <div c-lassName='bx2'>
//                         <input
//                             type="number"
//                             className='input2'
//                             placeholder='00'
//                             value={minutes}
//                             onChange={(e) => {
//                                 setminutes(JSON.parse(e.target.value));
//                             }}
//                         />
//                     </div>

//                     <div className='bx3'>
//                         <input
//                             type="number"
//                             className='input3'
//                             placeholder='00'
//                             value={seconds}
//                             onChange={(e) => {
//                                 setseconds(JSON.parse(e.target.value));
//                             }}
//                         /></div>
//                 </div>

//                 <div className='buttons'>
//                     <button className='start' onClick={startbutton}
//                     >Start</button>
//                     <button className='stop'>Stop</button>
//                     <button className='restart'>Restart</button>
//                 </div>
//             </div>
//         </div >

//     );
// }

// export default Container;
