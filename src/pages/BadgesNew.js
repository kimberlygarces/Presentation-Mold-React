import React from 'react';
import BadgeBody from '../components/BadgeBody'

class BadgesNew extends React.Component {
    render(){
        return(
            <div className="container center-align">
                <div className="badge">
                <div className="badge__body">
                <BadgeBody/>
                </div>
                </div>
            </div>
        )
    }
}

export default BadgesNew;