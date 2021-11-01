import React from 'react'

import { Navbar } from './components/Navbar'
import { Inicio } from './pages/Inicio'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { RegistraPaciente } from './pages/RegistraPaciente'




export const App = () => {


  return (
    <div className='container-flush'>
      <Router>
        <Navbar />

        <Switch>
          {/* RUTA REGISTRAR PACIENTE*/}
          <Route path='/registrar-paciente'>
            <RegistraPaciente />
          </Route>

          {/* RUTA INICIO */}
          <Route path='/'>
            <Inicio />
          </Route>

        </Switch>
          
      </Router>
      
      
    </div>
    
    
  )
}
