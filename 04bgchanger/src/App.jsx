import { useState } from "react"
import Buttons from './components/Buttons'
function App() {
  const [color,setColor] = useState("lightblue")

  return (
    <>
      <div className='w-full h-screen duration-200' 
            style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center 
        bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center 
            gap-3 shadow-xl bg-white rounded-xl px-3 py-2">
              <Buttons color='Red' onClick={()=>setColor('red')} />
              <Buttons color='Green' onClick={()=>setColor('green')}/>
              <Buttons color='Blue' onClick={()=>setColor('blue')}/>
              <Buttons color='Olive' onClick={()=>setColor('olive')}/>
              <Buttons color='Gray' onClick={()=>setColor('gray')}/>
              <Buttons color='Yellow' textColor="black" onClick={()=>setColor('yellow')}/>
              <Buttons color='Pink' textColor="black" onClick={()=>setColor('pink')}/>
              <Buttons color='Purple' onClick={()=>setColor('purple')}/>
              <Buttons color='Lavender' textColor="black" onClick={()=>setColor('lavender')}/>
              <Buttons color='White' textColor="black" onClick={()=>setColor('white')}/>
              <Buttons color='Black' onClick={()=>setColor('black')}/>
            </div>
        </div>

      </div>
    </>
  )
}

export default App
