import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

import mapData from "./mapData";
import mapStyles from "./mapStyles";

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
            lat: marker.coord[0],
            lng: marker.coord[1]
          }}
          onClick={() => {
            setSelectedMarker(marker);
          }}
          //marker icon set
          icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        />
      ))}

      {/*this is a if statement, if selectedMarker is truthy do code block after && */}
      {selectedMarker && (
        <InfoWindow
          position={{
            lat: selectedMarker.coord[0],
            lng: selectedMarker.coord[1]
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

//wrap map function within other functions
const WrappedMap = withScriptjs(withGoogleMap(Map));

//call to google maps
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const mapUrlGoogle = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,draing,places&key=${API_KEY}`;

function MyMap() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={mapUrlGoogle}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}

// function MyMap() {
//   let API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
//   let url = `https://www.google.com/maps/embed/v1/place?q=glenelg&key=${API_KEY}`;
//   return (
//     <div>
//       <Map
//         google={this.props.google}
//         zoom={8}
//         initialCenter={{ lat: 47.444, lng: -122.176 }}
//       />
//     </div>
//   );
// }

export default MyMap;
