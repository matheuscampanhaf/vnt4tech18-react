import React, { Component } from 'react';
import './App.css';

import Cabecalho from './components/navigation/Header/Header';
import Lista from './components/job/JobList/JobList';
import Form from './components/job/JobForm/JobForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho />
        <div className="container mt-3">
          <Form/>
          <Lista />
        </div>
      </div>
    );
  }
}

export default App;
