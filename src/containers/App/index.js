import React, { Component } from 'react';
import Header from '../../components/Header/';
import Projects from '../../components/Projects/';
import About from '../../components/About/';
import Services from '../../components/Services/';
import KnowUs from '../../components/KnowUs/';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header /> 
        <Projects />
        <About />
        <Services />
        <KnowUs />
      </div>
    );
  }
}

export default App;
