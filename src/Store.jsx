import React, { useState, useEffect } from "react";

//
function Store() {
  useEffect(() => {
    fetchItems();
  }, []);

  //function to get data, only set to variable data when response returned
  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    console.log(data);
  };
  return <div />;
}

export default Store;
