import React, { Component } from 'react';
import Header from './componants/header';
import Footer from './componants/footer';
import './App.css';
import RegisterationForm from './componants/RegisterationForm';

import UserTabel from './componants/tabel';
import NaveBar from './componants/navbar';
import RegistrationForm from './componants/RegisterationForm';
import Login from './componants/login';
import DefaultPostPage from './componants/defaultpostpage';
import PostHeader from './componants/postheader';
import User from './componants/User';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import MyFriends from './componants/myfriendssidebar';
import {Route,Router,BrowserRouter} from 'react-router-dom';
import Routing from './componants/Routing';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NaveBar/>
      <Routing/>
      
     </div>
    );
  }
}

export default App;
