import React from 'react';
import "../styles/BadgeThree.css"
import { Link } from 'react-router-dom';


class BadgesFour extends React.Component {
    
    render(){
        return(
            <React.Fragment>
            <div className="three_title">
            <h4>Guia de Navegación</h4>
            </div>
            <div className="row">

                    <div class="three_text">
                        guia de Navegación
                    </div>
              
                    <Link to="/badges/three"
                        className="btn-floating btn-large waves-effect waves-light orange lighten-2 previous_three">
                        <i className="material-icons large">arrow_back</i>
                    </Link>
             
            </div>
            </React.Fragment>
        )
    }
}

export default BadgesFour;