import React, { Component } from "react";

import axios from "axios";

import "./map.css";

function Confirm(props) {
  if (props.submitted) {
    return <h3>Marker added</h3>;
  } else {
    return <h3>Cannot find address</h3>;
  }
}

class MapInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      address: "",
      coords: [],
      id: 3,
      submittedOK: false
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
        console.log(res);
        let newId = this.state.id + 1;
        if (res.data.status === "ZERO_RESULTS") {
          this.setState({ submittedOK: false });
          console.log("not found");
        } else {
          console.log("else running");
          const addressData = res.data;
          this.setState({
            submittedOK: true,
            coords: [
              addressData.results[0].geometry.location.lat,
              addressData.results[0].geometry.location.lng
            ],
            name: addressData.results[0].formatted_address,
            id: newId
          });
        }
      })
      .then(() => {
        if (this.state.submittedOK) {
          this.sendCoords();
        }
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
        <Confirm submitted={this.state.submittedOK} />
      </form>
    );
  }
}

export default MapInput;
