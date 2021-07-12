import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BadgesNew from '../pages/BadgesNew'
import BadgesOne from '../pages/BadgesOne'
import BadgesTwo from '../pages/BadgesTwo'
import BadgesThree from '../pages/BadgesThree'
import BadgesFour from '../pages/BadgesFour'
import Layaut from './Layout';


function App() {
    return (
        <BrowserRouter>  
        <Layaut>
            <Switch>
                <Route exact path="/" component={BadgesNew}/>
                <Route exact path="/badges/one" component={BadgesOne}/>
                <Route exact path="/badges/two" component={BadgesTwo}/>
                <Route exact path="/badges/three" component={BadgesThree}/>
                <Route exact path="/badges/four" component={BadgesFour}/>
            </Switch>
        </Layaut>
        </BrowserRouter>
    );
}

export default App;