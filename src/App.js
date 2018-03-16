import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const child = { width: `300em`, height: `100%` };
    return (
      <div className="App">

        <header className="App-header App-border-text">
          <h1 className="App-title">DAVID GRAFT</h1>
        </header>

        <div className="main">
          <table className="main-table">
            <tr>
              <td className="main">
                <div className="contentWrapper">
                  <div className="content">
                    sampleText tab1
                  </div>
                  <div className="content">
                    sampleText tab2
                  </div>
                  <div className="content">
                    sampleText tab3
                  </div>
                  <div className="content">
                    sampleText tab14
                  </div>
                  <div className="content">
                    sampleText tab5
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <footer className="App-footer App-border-text">
          <h1 className="App-title">DAVID GRAFT</h1>
        </footer>

      </div>
    );
  }
}

export default App;
