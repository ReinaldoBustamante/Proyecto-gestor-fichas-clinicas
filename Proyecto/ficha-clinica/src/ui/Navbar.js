import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                ClinicaFedent
            </Link>

            <div className="navbar-collapse  ">
                <ul className="navbar-nav ml-auto">

                <Link 
                    className="navbar-item nav-link " 
                    to="/ficha-nueva"
                >
                    Nuevo
                </Link>

                  
                </ul>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >   
                        <button className = " btn btn-outline-danger">
                        <span>Cerrar Sesion</span>
                        </button>
                        
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}