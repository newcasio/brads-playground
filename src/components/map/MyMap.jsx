import React, { useState } from "react";
import MapInput from "./MapInput";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

// import mapData from "./mapData";
import mapStyles from "./mapStyles";

let mapData = [];

//get map coorindates
function Map() {
  //info window for marker, start with null as nothing clicked
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <GoogleMap
      defaultOptions={{ styles: mapStyles }}
      defaultZoom={10}
      defaultCenter={{ lat: -33.867, lng: 151.207 }}
    >
      {mapData.map(marker => (
        <Marker
          key={marker.id}
          position={{
            lat: marker.coords[0],
            lng: marker.coords[1]
          }}
          onClick={() => {
            setSelectedMarker(marker);
          }}
          //marker icon set
          icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        />
      ))}

      {/*this is an if statement, if selectedMarker is truthy do code block after && */}
      {selectedMarker && (
        <InfoWindow
          position={{
            lat: selectedMarker.coords[0],
            lng: selectedMarker.coords[1]
          }}
          onCloseClick={() => {
            setSelectedMarker(null);
          }}
        >
          <div>
            <h4>{selectedMarker.name}</h4>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

//get input coords from MapInput component

//wrap map function within other functions
const WrappedMap = withScriptjs(withGoogleMap(Map));

//call to google maps, render map only
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const mapUrlGoogle = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,draing,places&key=${API_KEY}`;

function MyMap() {
  const [markers, setMarkers] = useState(mapData);
  const inputCoords = data => {
    setMarkers(mapData.push(data));
  };

  if (markers.length === 0) {
    return (
      <div>
        <MapInput getInput={inputCoords} />
        <h3 style={{ textAlign: "center" }}>Please enter address</h3>
      </div>
    );
  } else {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <MapInput getInput={inputCoords} />
        <WrappedMap
          googleMapURL={mapUrlGoogle}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    );
  }
}

export default MyMap;
