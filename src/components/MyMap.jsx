import React from "react";

function MyMap() {
  let API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  let url = `https://www.google.com/maps/embed/v1/place?q=glenelg&key=${API_KEY}`;
  return (
    <div>
      <iframe title="map" src={url} allowFullscreen />
    </div>
  );
}

export default MyMap;
