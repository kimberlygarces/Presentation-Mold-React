import React from 'react';
import logo from '../images/logo.png'
import "../styles/Navbar.css"

class Navbar extends React.Component {
    
    render(){
        return(
            <div className="badge__header center-align">
                <img className="badge__header-img" src={logo} alt="Logo de la presentación"></img>
            </div>
        )
    }
}

export default Navbar;