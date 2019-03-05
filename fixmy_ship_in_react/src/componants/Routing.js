import React from 'react';
import { Switch,Route } from "react-router-dom";
import NaveBar from './navbar';
import Login from './login';
import User from './User';
import PostHeader from './postheader';
import DefaultPostPage from './defaultpostpage';

const Routing = ()=>{
    return(
        <main>
            <div>
                <Switch>
                     
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={User} />
                    <Route path='/post' component={DefaultPostPage}/>
                  
                </Switch>
            </div>
        </main>
    )
}

export default Routing