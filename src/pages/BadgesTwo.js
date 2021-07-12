import React from 'react';
import BadgesTwo from '../components/BadgesTwo'

class BadgesNew extends React.Component {
    render(){
        return(
            <div className="container center-align">
                <div className="badge">
                <div className="badge__two">
                <BadgesTwo/>
                </div>
                </div>
            </div>
        )
    }
}

export default BadgesNew;