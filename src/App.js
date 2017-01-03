import React, { Component } from 'react';
import ControlPanel from './components/ControlPanel/index';
import Sandbox from './components/Sandbox/index';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentWillMount() {
      this.setState({
          squares : [1],
          margin : 0,
          mono : 'green',
          value : 1,
      })
  }

  addSquare = () => {
      let sq = this.state.squares.concat(1)
      this.setState({
          squares : sq
      })
  }

  removeSquare = () => {
      let sq = this.state.squares.slice(1)
      this.setState({
          squares : sq
      })
  }

  addMargin = (newValue) => {
      this.setState({
          margin : newValue
      })
  }

  changeMonoColor = (newValue) => {
      let colorMap = (value) => {
          const map = {
              1: 'red',
              2: 'green',
              3: 'yellow'
          }
          return map[value]
      }
      let newColor = colorMap(newValue)
      this.setState({
          mono : newColor,
          value : newValue
      })
  }


  render() {
    return (
      <div className="App">
        <ControlPanel addSquare={this.addSquare}
                      removeSquare={this.removeSquare}
                      addMargin={this.addMargin}
                      changeMonoColor={this.changeMonoColor}
                      mono={this.state.value}
                      />

        <Sandbox margin={this.state.margin}
                 squares={this.state.squares}
                 mono={this.state.mono}
                 />
      </div>
    );
  }
}

export default App;
