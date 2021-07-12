import React from 'react';
import Menu from '../components/BadgeMenu'
import BadgeSquare from '../components/BadgeSquare'
import BadgeCircle from '../components/BadgeCircle'
import "../styles/Badge.css"
import { Link } from 'react-router-dom';


class BadgeBody extends React.Component {
        constructor(props) {
        super(props);
        this.state = {isToggleOn: true}
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
           
            <div className="badge__body-square center-align">
               <BadgeSquare/> 
            </div>
             <BadgeCircle/>
            <div className="badge__body-btn-menu center-align">
                <div className="badge__body-btn-menu-content">   
                    <Link to="/"
                        onClick={() => this.handleClick()} 
                        className="btn-floating waves-effect waves-dark deep-orange accent-3">
                        <i className="medium material-icons">line_weight</i>
                      </Link>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default BadgeBody;