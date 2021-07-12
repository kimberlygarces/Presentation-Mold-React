import React from 'react';
import img_tree from '../images/img_three.jpg'
import "../styles/BadgeThree.css"
import { Link } from 'react-router-dom';

class BadgesThree extends React.Component {
    
    render(){
        return(
            <React.Fragment>
            <div className="three_title">
            <h4>Objetivos</h4>
            </div>
            <div className="row">

                    <div class="three_text">
                     <div className="col s7">
                     Una vez termines el curso Modelo de Ventas Positiva, estarás en capacidad de:
                     <ul className="Badges_list_three">
                        <li className="list_one list"><span>
                        <i>Conocer</i>los conceptos básicos y etapas del Modelo de Ventas Positiva.
                        </span>
                        </li>
                        <li className="list_two list"><span>
                        <i>Emplear</i> las herramientas de preventa con el fin de estructurar tu gestión comercial.
                        </span>
                        </li>
                        <li className="list_three list"><span>
                        <i>Aplicar</i> el Modelo de Entrevista de Venta Positiva para lograr una mayor productividad comercial   
                        </span>
                        </li>
                        <li className="list_four list"><span>
                        <i>Realizar</i> una adecuada posventa para desarrollarte como un aliado exitoso de Positiva 
                        </span>
                        </li>
                     </ul>
                     </div>
                    </div>
                    <div class="two_text-three">
                        <img className="badge__img_three" src={img_tree} alt="Logo de la presentación"></img>
                    </div>

                    <Link to="/badges/four"
                        class="btn-floating btn-large waves-effect waves-light orange lighten-2 next_four">
                        <i class="large material-icons">arrow_forward</i>
                    </Link>
                    <Link to="/badges/two"
                        class="btn-floating btn-large waves-effect waves-light orange lighten-2 previous_three">
                        <i class="material-icons large">arrow_back</i>
                    </Link>
            </div>
            </React.Fragment>
        )
    }
}

export default BadgesThree;