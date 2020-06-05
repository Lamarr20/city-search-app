import React, { Component } from "react";
import axios from "axios";

class CitySearch extends Component {
  constructor() {
    super();
    this.state = { city: '', cities: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({city: event.target.value, value: event.target.value});//value updated on change
  }

  handleSubmit(event){
    this.setState({ value: event.target.value, })
    event.preventDefault()
    this.upperCase()
  }
  upperCase = () => {
    var text = this.state.value;
    var uppercasetext = text.toUpperCase();//To convert Upper Case
    this.setState({ value: uppercasetext});
    this.componentDidMount()
  }
  componentDidMount() {
    console.log(this)
    if ( typeof this.state.value == 'string')//only takes in string values
    {
      axios
        .get('http://ctp-zip-api.herokuapp.com/city/'+ this.state.value.toUpperCase())
        .then((response) => {
          const data = response.data;
          const cities = data;
          this.setState({ cities });//update cities = data
          })
        .catch((err) => console.log(err));
  }
}

  render() {
    let defList;
    if (this.state.cities.length === 0) {
      defList = <></>;
    } else {
      defList = (
        <ol>
          {this.state.cities.map((def) => (
            <li>{def}</li>
          ))}
        </ol>
      );
    }

    return (
      <div className="city">
        <h1>city</h1>
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
      <h3>{this.state.value}</h3>
     {defList}
      </div>
    );
  }
}

export default CitySearch;