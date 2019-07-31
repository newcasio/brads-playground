import React, { Component } from "react";

import axios from "axios";

import { myConfig } from "../../config.js";

import "./map.css";

function Confirm(props) {
  if (props.submitted === null && props.server) {
    return null;
  } else if (props.submitted) {
    return <h3>Marker added at {props.address}</h3>;
  } else if (!props.server && !props.submitted) {
    return <h3>Request denied. Please check you API key.</h3>;
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
      submittedOK: null,
      serverOK: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendCoords = () => {
    this.props.getInput(this.state);
  };

  async handleSubmit(e) {
    try {
      const API_KEY = myConfig.googleMapsApiKey;
      let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${
        this.state.searchString
      }&key=${API_KEY}`;
      e.preventDefault();
      let call = await axios.get(url);
      let newId = this.state.id + 1;
      if (call.data.status === "REQUEST_DENIED") {
        this.setState({ serverOK: false, submittedOK: false });
      } else {
        if (call.data.status === "ZERO_RESULTS") {
          this.setState({ submittedOK: false });
        } else {
          const addressData = call.data;
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
      }
      if (this.state.submittedOK) {
        this.sendCoords();
      }
    } catch (err) {
      console.log("catch clause");

      this.setState({ serverOK: false, submitted: true });
    }
  }

  handleChange = event => {
    this.setState({ searchString: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="addressInput">
        <label>Search for address </label>
        <input type="text" onChange={this.handleChange} />
        <button type="submit">Search</button>
        <Confirm
          submitted={this.state.submittedOK}
          address={this.state.name}
          server={this.state.serverOK}
        />
      </form>
    );
  }
}

export default MapInput;
