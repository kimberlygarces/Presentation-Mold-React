import React from 'react';
import img_two from '../images/agenda.png'
import "../styles/BadgeTwo.css"
import Menu from '../components/BadgeMenu'
import { Link } from 'react-router-dom';

class BadgesTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    render(){
        return(
            <React.Fragment>
                  <span>
                    {this.state.isToggleOn ? 
                    ''
                    :(<div className="badge__menu">
                            <Menu/>
                      <Link href="/" onClick={() => this.handleClick()} 
                      class="btn-floating waves-effect waves-dark deep-orange accent-3 btn-cancel">
                        <i class="medium material-icons">clear</i></Link>
                        </div>
                    
                    )
                    }
            </span>
            <div className="two_title">
            <h4>Unidades temáticas</h4>
            </div>
            <div className="row">

                    <div class="two_text">
                     <div className="col s6">
                        El curso <i className="bold"> Modelo de Ventas 
                        Positiva </i>está conformado por
                        los siguientes módulos o 
                        unidades temáticas:
                     </div>
                    </div>
                    <div class="two_text-two">
                        <div class="col s6">
                            Al final de cada módulo encontrarás 
                            algunas preguntas que deberás responder,
                            con el fin de validar tus nuevos 
                            conocimientos.
                        </div>
                    </div>

                    <img className="badge__img_two" src={img_two} alt="Logo de la presentación"></img>
                    
                    <div class="badge__higher"></div>
                    <div class="badge__lower">
                    </div>
                    <Link to="/badges/three"
                        class="btn-floating btn-large waves-effect waves-light orange lighten-2 next_three">
                        <i class="large material-icons">arrow_forward</i>
                    </Link>
                    <Link to="/badges/one"
                        class="btn-floating btn-large waves-effect waves-light orange previous_two">
                        <i class="material-icons large">chevron_left</i>
                    </Link>
                    <div className="badge__one-btn-menu center-align">
                <div className="badge__one-btn-menu-content">   
                    <Link to="/badges/two"
                        onClick={() => this.handleClick()} 
                        class="btn-floating waves-effect waves-dark deep-orange accent-3">
                        <i class="medium material-icons">line_weight</i>
                      </Link>
                </div>
            </div>
            </div>
            </React.Fragment>
        )
    }
}

export default BadgesTwo;