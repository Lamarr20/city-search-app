import React, { Component } from "react";
import logo from './logo.svg';
import CitySearch from './components/CitySearch'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>City Search</h1>
        <CitySearch />
      </div>
    );
  }
}
export default App;
