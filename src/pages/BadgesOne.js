import React from 'react';
import BadgeOne from '../components/BadgeOne'


class BadgesNew extends React.Component {
    render(){
        return(
            <div className="container center-align">
                <div className="badge">
                <div className="badge__one">
                <BadgeOne/>
                </div>
                </div>
            </div>
        )
    }
}

export default BadgesNew;