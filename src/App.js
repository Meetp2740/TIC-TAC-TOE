import './App.css'
import circle from './images/circle.png'
import cross from './images/cross.png'
import { useRef, useState } from 'react';


function App() {
  let [count, setCount] = useState(0)
  let seq = ["", "", "", "", "", "", "", "", ""]
  const [lock, setLock] = useState(false)
  const titleRef = useRef(null)

  let box1 = useRef(null)
  let box2 = useRef(null)
  let box3 = useRef(null)
  let box4 = useRef(null)
  let box5 = useRef(null)
  let box6 = useRef(null)
  let box7 = useRef(null)
  let box8 = useRef(null)
  let box9 = useRef(null)

  let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];


  function gameHandler(event, num) {
    if (lock) {
      return 0
    }
    if (count % 2 === 0) {
      event.target.innerHTML = `<img src=${cross}></img>`;
      seq[num] = "x";
      count++;
      console.log(event.target.classList)
    } else {
      event.target.innerHTML = `<img src='${circle}'>`;
      seq[num] = "0";
      count++;
      event.target.className += " verified" // Add the "verified" class
      console.log(event.target.classList)
    }
    checkWin();
  }



  const checkWin = () => {
    if (seq[0] === seq[1] && seq[1] === seq[2] && seq[2] !== '') {
      win(seq[2])
    }
    else if (seq[3] === seq[4] && seq[4] === seq[5] && seq[5] !== '') {
      win(seq[5])
    }
    else if (seq[6] === seq[7] && seq[7] === seq[8] && seq[8] !== '') {
      win(seq[8])
    }
    else if (seq[0] === seq[4] && seq[4] === seq[8] && seq[8] !== '') {
      win(seq[8])
    }
    else if (seq[2] === seq[4] && seq[4] === seq[6] && seq[6] !== '') {
      win(seq[6])
    }
    else if (seq[0] === seq[3] && seq[3] === seq[6] && seq[6] !== '') {
      win(seq[6])
    }
    else if (seq[1] === seq[4] && seq[4] === seq[7] && seq[7] !== '') {
      win(seq[7])
    }
    else if (seq[2] === seq[5] && seq[5] === seq[8] && seq[8] !== '') {
      win(seq[8])
    }
  }

  const win = (winner) => {
    setLock(true)
    if (winner === "x") {
      console.log("x is winner")
      titleRef.current.innerHTML = "Winner : X";
    } else {
      console.log("0 is winner")
      titleRef.current.innerHTML = "Winner : O";
    }
  }

  function reset() {
    boxes.map((e) => {
      e.current.innerHTML = ""
    })
    let seq = ["", "", "", "", "", "", "", "", ""]
    setLock(false)
    titleRef.current.innerHTML = "TIC TAC TOE"
  }

  return (

      <div className='mx-16'>
        <h1 className='text-3xl font-bold text-center my-10' ref={titleRef}>TIC TAC TOE</h1>

        <div className='flex gap-2 justify-center'>
          <div className='flex flex-col gap-2'>

            <div className='bg-slate-300 h-24 w-28' ref={box1} onClick={(event) => { gameHandler(event, 0) }}></div>
            <div className='bg-slate-300 h-24 w-28' ref={box2} onClick={(event) => { gameHandler(event, 1) }}></div>
            <div className='bg-slate-300 h-24 w-28' ref={box3} onClick={(event) => { gameHandler(event, 2) }}></div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='bg-slate-300 h-24 w-28' ref={box4} onClick={(event) => { gameHandler(event, 3) }}></div>
            <div className='bg-slate-300 h-24 w-28' ref={box5} onClick={(event) => { gameHandler(event, 4) }}></div>
            <div className='bg-slate-300 h-24 w-28' ref={box6} onClick={(event) => { gameHandler(event, 5) }}></div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='bg-slate-300 h-24 w-28' ref={box7} onClick={(event) => { gameHandler(event, 6) }}></div>
            <div className='bg-slate-300 h-24 w-28' ref={box8} onClick={(event) => { gameHandler(event, 7) }}></div>
            <div className='bg-slate-300 h-24 w-28' ref={box9} onClick={(event) => { gameHandler(event, 8) }}></div>
          </div>
        </div>
        <div className='flex justify-center my-8'>
          <button className='bg-slate-700 text-white px-5 rounded-lg py-2 hover:opacity-80' onClick={reset}>Reset</button>
        </div>
      </div>
  );
}

export default App;
