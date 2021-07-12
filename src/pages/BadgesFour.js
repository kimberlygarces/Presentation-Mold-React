import React from 'react';
import BadgesFour from '../components/BadgesFour'

class BadgesNew extends React.Component {
    render(){
        return(
            <div className="container center-align">
                <div className="badge">
                <div className="badge__two">
                <BadgesFour/>
                </div>
                </div>
            </div>
        )
    }
}

export default BadgesNew;