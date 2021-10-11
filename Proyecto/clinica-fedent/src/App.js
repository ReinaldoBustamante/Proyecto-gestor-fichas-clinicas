import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
 
  } from "react-router-dom";
import { Inicio } from './pages/Inicio';
import { NuevaFicha} from './pages/NuevaFicha';

export const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/nueva-ficha'>
                        <NuevaFicha />
                    </Route>
                    <Route path='/'>
                        <Inicio />
                    </Route>
                </Switch>
            </Router>
            
        </div>
    )
}
