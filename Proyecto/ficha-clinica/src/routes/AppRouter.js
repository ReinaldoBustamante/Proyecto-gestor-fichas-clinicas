import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import { ClinicaFedent } from "../ClinicaFedent";
import { AñadirFicha } from "../components/AñadirFicha";
import { LoginScreen } from "../login/LoginScreen";
import { Navbar } from "../ui/Navbar";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                    <Switch>
                        <Route path="/login">
                            <LoginScreen />
                        </Route>
                        <Route path="/ficha-nueva">
                            <AñadirFicha />
                        </Route>
                        <Route path="/">
                            <ClinicaFedent />
                        </Route>
                    </Switch>
            </div>
        </Router>
        
    )
}
