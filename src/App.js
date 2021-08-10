import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "./components/Map";

function App() {
  const [launchPads, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios("https://api.spacexdata.com/v3/launchpads");
      setData(response.data);
    }
    fetchData();
  }, []);

  return <Map launchPads={launchPads}> </Map>;
}

export default App;
