import React from 'react';
import "../styles/BadgeOne.css"
import Menu from '../components/BadgeMenu'
import img_one from '../images/img_one.jpg'
import { Link } from 'react-router-dom';

class BadgeOne extends React.Component {
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
                      className="btn-floating waves-effect waves-dark deep-orange accent-3 btn-cancel">
                        <i className="medium material-icons">clear</i></Link>
                        </div>
                    
                    )
                    }
            </span>
      <div className="row">
      <div className="one_title">
              <h4>Justificación</h4>
            </div>
            <div className="col s6">
                <img className="badge__One-img" src={img_one} alt="Logo de la presentación"></img>
            </div>
            <Link to="/"
                  class="btn-floating waves-effect waves-dark deep-orange accent-3 previous_one">
                  <i className="large material-icons">chevron_left</i>
            </Link>
            <div className="col s5">
        
              <p className="one_text">
                JustificaciónPositiva Compañía de Seguros S.A. te da la bienvenida al 
                curso Modelo de Ventas Positiva y agradece por ser parte de esta gran 
                familia de personas que valoramos la actividad comercial, entendemos 
                su mecánica y trabajamos cada día con amor, estructura y dedicación.
                Porque estamos seguros que 'Lo bueno debe ser para todos' te invitamos 
                a sumar esfuerzos con el fin de crecer y lograr las metas propuestas.
                Este curso te brindará aspectos claves de gestión comercial, ayudará 
                a incrementar tu productividad y permitirá que te proyectes como un
                aliado exitoso de Positiva.
               </p>


               <Link to="/badges/two"
                  class="btn-floating waves-effect waves-dark deep-orange accent-3 next_two">
                  <i class="large material-icons">chevron_right</i>
                </Link>

            </div>
            <div className="badge__one-btn-menu center-align">
                <div className="badge__one-btn-menu-content">   
                    <Link to="/badges/one"
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

export default BadgeOne;