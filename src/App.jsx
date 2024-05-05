import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState("olive");
  return (
      <div className="w-full h-screen flex justify-center" style={{backgroundColor : color}}>
        <div className='fixed bottom-10 w-4/5 h-12 rounded-xl flex justify-center items-center flex-wrap' style={{backgroundColor:'white'}}>
            <button className="py-1 px-4 rounded-full mx-3 shadow-lg" style={{color:"white",backgroundColor:"red"}} onClick={()=>setColor("red")}>
                Red
            </button>
            <button className="py-1 px-4 rounded-full mx-3 shadow-lg" style={{color:"white",backgroundColor:"green"}} onClick={()=>setColor("green")}>
                Green
            </button>
            <button className="py-1 px-4 rounded-full mx-3 shadow-lg" style={{color:"white",backgroundColor:"blue"}} onClick={()=>setColor("blue")}>
                Blue
            </button>
            <button className="py-1 px-4 rounded-full mx-3 shadow-lg" style={{color:"white",backgroundColor:"olive"}} onClick={()=>setColor("olive")}>
                Olive
            </button>
            <button className="py-1 px-4 rounded-full mx-3 shadow-lg" style={{color:"white",backgroundColor:"grey"}} onClick={()=>setColor("grey")}>
                Grey
            </button>
            <button className="py-1 px-4 rounded-full mx-3 shadow-lg" style={{color:"black",backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>
                Yellow
            </button>
            <button className="py-1 px-4 rounded-full mx-3 shadow-lg" style={{color:"black",backgroundColor:"pink"}} onClick={()=>setColor("pink")}>
                Pink
            </button>
            <button className="py-1 px-4 rounded-full mx-3 shadow-lg" style={{color:"white",backgroundColor:"purple"}} onClick={()=>setColor("purple")}>
                Purple
            </button>
            <button className="py-1 px-4 rounded-full mx-3 shadow-lg" style={{color:"black",backgroundColor:"lavender"}} onClick={()=>setColor("lavender")}>
                Lavender
            </button>
            <button className="py-1 px-4 rounded-full mx-3 shadow-lg" style={{color:"black",backgroundColor:"white"}} onClick={()=>setColor("white")}>
                White
            </button>
            <button className="py-1 px-4 rounded-full mx-3 shadow-lg" style={{color:"white",backgroundColor:"black"}} onClick={()=>setColor("black")}>
                Black
            </button>
        </div>
      </div>
  )
}

export default App
