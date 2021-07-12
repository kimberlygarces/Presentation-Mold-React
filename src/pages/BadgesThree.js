import React from 'react';
import BadgesThree from '../components/BadgesThree'

class BadgesNew extends React.Component {
    render(){
        return(
            <div className="container center-align">
                <div className="badge">
                <div className="badge__two">
                <BadgesThree/>
                </div>
                </div>
            </div>
        )
    }
}

export default BadgesNew;