import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {
    console.log('effect', {enable});
    const handleMove = (event) =>{
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
      console.log({clientX, clientY});
    }

    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }

    //se ejecuta siempre que deja de renderisarce y cuando cambie la dependencia []
    // es importante limpiar los eventos para que no pete en este caso con el window
    return () => {
      console.log('clean');
      window.removeEventListener('pointermove', handleMove)
    }
    
  },[enable])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
      <button onClick={() => setEnable(!enable)}>{enable ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </main>
  )
}

function App() {

  return(
    <FollowMouse/>  
  )
  
}

export default App
