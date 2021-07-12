import React from 'react';
import "../styles/Badge.css"



class BadgeCircle extends React.Component {
    // estados de la pagina princiapal
    // TITULO DEL CIRCULO
    state = {
        titleCircle: 'Curso virtual', 
        titleshield: 'Escuela de Ventas',
    }

    render(){
        return(
            <React.Fragment>
            <div className="badge__body-circle center-align">
                    <div className="badge__body-circle-title">
                        <h4>{this.state.titleCircle}</h4>
                    </div>
                </div>
                <div className="badge__body-shield center-align">
                    <div className="badge__body-shield-content">
                        <p>{this.state.titleshield}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeCircle;