import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Badge.css"

class BadgeSquare extends React.Component {
    state = {
        titlesquare: 'Modelo de Ventas Positiva',
    }
    render(){    
       return(
            <div className="badge__body-square-content center-align">
                    <div className="badge__body-square-title">
                        <h3>{this.state.titlesquare}</h3>
                        <Link to="/badges/one"
                        className="btn-floating waves-effect waves-dark deep-orange accent-3 next">
                        <i className="large material-icons">chevron_right</i>
                        </Link>
                    </div>

                    <div  className="badge__body-square-btn">
                        <p>Haz clic para empezar</p>
                    </div>
            </div>
        )
    }
}

export default BadgeSquare;