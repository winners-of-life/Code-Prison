import React, { Component } from 'react';
import {BrowserRouter,NavLink,Route} from 'react-router-dom';
class index extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    123
                    <NavLink to="/123">123</NavLink>
                    <Route path="/123" component={()=>{return <div>456</div>}}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default index;