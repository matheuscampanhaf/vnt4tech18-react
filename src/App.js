import React, { Component } from 'react';
import './App.css';

import Cabecalho from './components/navigation/Header/Header';
import Lista from './components/job/JobList/JobList';
import Main from './components/navigation/Main/Main';
import About from './components/about/About';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho />

        <Main>
          <Switch>
            <Route exact path='/' component={ Lista }></Route>
            <Route path='/vagas' component={ Lista }></Route>
            <Route path='/sobre' component={ About }></Route>
          </Switch>
        </Main>
          
      </div>
    );
  }
}

export default App;
