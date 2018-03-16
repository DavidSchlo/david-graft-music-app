import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const child = { width: '200%', height: '100%' };
    return (
      <div className="App">

        <header className="App-header App-border-text">
          <h1 className="App-title">DAVID GRAFT</h1>
        </header>

        <HorizontalScroll>
          <div style={child}>Hey there1</div>
          <div style={child}>Hey there2</div>
        </HorizontalScroll>

        <footer className="App-footer App-border-text">
          <h1 className="App-title">DAVID GRAFT</h1>
        </footer>

      </div>
    );
  }
}

export default App;
