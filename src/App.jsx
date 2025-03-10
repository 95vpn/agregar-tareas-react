import { useState } from 'react'
import './App.css'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Tarea from './componentes/Tarea'
import TareaFormulario from './componentes/TareaFormulario'
import ListaDeTareas from './componentes/ListaDeTareas'



function App() {

  return (
    <>
      <div className='aplicacion-tareas'>
        <div className='freecodecamp-logo-contenedor'>
          <img src={freeCodeCampLogo}
            className='freecodecamp-logo'/>
        </div>
        <div className='tareas-lista-principal'>
          <h1>Mis tareas</h1>
          <ListaDeTareas/>
        </div>
      </div>
    </>
  )
}

export default App
