import React, { Component } from "react";
import axios from "axios";
import './citySearch.css';
class CitySearch extends Component {
  constructor() {
    super();
    this.state = { city: '', cities: [] };//city and cities declared as emmpty
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({city: event.target.value, value: event.target.value});//value & city updated on change
  }

  handleSubmit(event){
    this.setState({ value: event.target.value, })//update the value = current state
    event.preventDefault()
    this.upperCase()
  }
  upperCase = () => {
    var text = this.state.value;
    var uppercasetext = text.toUpperCase();//To convert Upper Case
    this.setState({ value: uppercasetext});//value state is capitalize for output sidplay
    this.componentDidMount()
  }
  componentDidMount() {
    console.log(this)
    if ( typeof this.state.value == 'string')//only takes in string values
    {
      axios
        .get('http://ctp-zip-api.herokuapp.com/city/'+ this.state.value.toUpperCase())//capitalize user input without altering input
        .then((response) => {
          const data = response.data;
          const cities = data;
          const realCity = this.state.value
          this.setState({ cities, realCity });//update cities = data
          })
        .catch((err) => alert(err + " please type in a city"));
        
  }
}

  render() {
    let defList;
    if (this.state.cities.length === 0) {
      defList = <></>;
    } else {
      defList = (
        <ol className= "columns">
          {this.state.cities.map((def, index) => (
            <li key={index}>{def}</li>
          ))}
        </ol>
      );
    }

    return (
      <div className="city">
        <form onSubmit={this.handleSubmit} >
              <div>
                <label>
                  <input 
                    type="text" 
                    value={this.state.city} 
                    onChange={this.handleChange}>
                  </input>
                </label>
              </div>
            <input type="submit" value="Submit"/>           
         </form>
      <h3 className = "Pushbelow">{this.state.realCity} Zip Codes</h3>
     {defList}
      </div>
    );
  }
}

export default CitySearch;