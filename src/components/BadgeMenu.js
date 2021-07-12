import React from 'react';
import "../styles/Badge.css"
// import { Link } from 'react-router-dom';


class Menu extends React.Component {

    render(){
        return(
            <React.Fragment>
            <div className="badge__menu-circle">
            <div className="badge__menu-shield center-align">
               <div className="badge__menu-shield-content">
                   <p>Curso virtual</p>
               </div>
           </div>
            <div className="badge__menu-circle-title">
               <h5>Modelo de Ventas Positiva  </h5>  
           </div>
           </div>
           <div className="badge__menu-list">
               <ul>
                   <li className="badge__menu-list-num num1"><h6>Bienvenido</h6></li>
                   <li className="badge__menu-list-num num2"><h6>Objetivos</h6></li>
                   <li className="badge__menu-list-num num3"><h6>Guia de navegación</h6></li>
                   <li className="badge__menu-list-num num4"><h6>Estructura general del Modelo de Ventas</h6></li>
                   <li className="badge__menu-list-num num5"><h6>Estrategia Personal - PEP</h6></li>
                   <li className="badge__menu-list-num num6"><h6>Tipos de Asesores</h6></li>
                   <li className="badge__menu-list-num num7"><h6>Cierre de Tema</h6></li>
               </ul>
           </div>

           </React.Fragment>

        )
    }
}

export default Menu;