import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class ShoppingList extends Component{
    render(){
        return(
            <div>
                <h1>Shopping List for {this.props.test}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

class Square extends Component{
    constructor(props){
        super(props);
        this.state = {
          value: null,
        };
    }
    render(){
        return(
            <button className="square" onClick={()=> {this.setState({value: 'X'}); alert(this.state.value)}} >
                {this.state.value}
            </button>
        )
    }
}

class Board extends Component{
    renderSquare(i){
        return <Square value={i}/>
    }

    render(){

        const status = 'Next player: x';
        return(
          <div>
              <div>{status}</div>
              <div className="board-row">
                  {this.renderSquare(0)}
                  {this.renderSquare(1)}
                  {this.renderSquare(2)}
              </div>
              <div className="board-row">
                  {this.renderSquare(3)}
                  {this.renderSquare(4)}
                  {this.renderSquare(5)}
              </div>
              <div className="board-row">
                  {this.renderSquare(6)}
                  {this.renderSquare(7)}
                  {this.renderSquare(8)}
              </div>
          </div>
        );
    }
}
class Test extends Component{
    render(){
        return(
            <div>
                <h2>Number: {this.props.number}</h2>
            </div>
        );
    }
}
export class App2 extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">TEST</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <ShoppingList test="Ivan"/>
                <Board />
                <Test number="0" />
                <Test number="1" />
                <Test number="2" />
                <App />
            </div>
        );
    }
}

export default App;
