import React, { Component } from "react";

import axios from "axios";

import "./map.css";

class MapInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      address: "",
      coords: [],
      id: 3
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendCoords = this.sendCoords.bind(this);
  }

  sendCoords() {
    this.props.getInput(this.state);
  }

  handleSubmit(e) {
    const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    e.preventDefault();
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${
          this.state.searchString
        }&key=${API_KEY}`
      )
      .then(res => {
        const addressData = res.data;
        this.setState({
          coords: [
            addressData.results[0].geometry.location.lat,
            addressData.results[0].geometry.location.lng
          ],
          name: addressData.results[0].formatted_address
        });
      })
      .then(() => {
        this.sendCoords();
      });
  }

  handleChange(event) {
    this.setState({ searchString: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="addressInput">
        <label>Search for address </label>
        <input type="text" onChange={this.handleChange} />

        <button type="submit">Search</button>
      </form>
    );
  }
}

export default MapInput;
