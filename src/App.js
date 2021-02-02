import './App.css';
import Nav from './Nav/Nav';
import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Registration from './Registration/Registration'
import HomePage from './HomePage/HomePage'
class App extends Component {
  render(){
    return (
      <div className="App">
        <Nav/>
        <Switch>
        <Route path="/registration" component={Registration}/>
        <Route path="/" component={HomePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
