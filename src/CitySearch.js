import React, { Component } from "react";
import axios from "axios";

class CitySearch extends Component {
  constructor(props) {
    super(props);
    this.state = { city: '', cities: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.componentDidMount()
  }

  componentDidMount() {
    const city = this.state.value
    let bigCity = city//captilize all city input
    console.log(bigCity)
    if (city === "NYC")//conditions needs work
    {
      console.log("something happen")
      const url = `http://ctp-zip-api.herokuapp.com/city/${city}`;    
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        const cities = data;
        this.setState({ city, cities });//city = user input , cities = all zipcodes
      })
      .catch((err) => console.log(err));
  }

else{
  console.log("im here now")//needs a display for bad input
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
        <form onSubmit={this.handleSubmit}>
              <div>
                <label>
                  <input 
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange}>
                  </input>
                </label>
              </div>
            <input type="submit" value="Submit"/>           
         </form>
      <h3>{this.state.city}</h3>
     {defList}
      </div>
    );
  }
}

export default CitySearch;