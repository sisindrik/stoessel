import React from 'react'
import { useState, useEffect } from 'react'

export default function Appsev() {
  const [run,setRun ] = useState(0);
  const [wickets,setWickets ] = useState(0)
  console.log("Component loaded");
  useEffect (()=>{
    console.log("Better Luck Next time");
  },[wickets])
  return (
    <div>
        <button onClick={()=>setRun((prevState) => prevState + 1)}>Runs({run})
        </button>
      

        <button onClick={()=>setWickets((prevState) => prevState + 1)}>wickets({wickets})
        </button>
    </div>
  )


}