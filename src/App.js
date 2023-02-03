import React, { useEffect, useState } from "react";
import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";

// TODO:
// 1. Get all data from API
// 2. Droptable for all countires with flags, no need for searchbar, only scrollable list
// 3. When country is clicked open new page where is given important information (capital, population, etc.)
//  LÄHETÄ TÄMÄ VALMIINA ilkka@beanbakers.fi ja peter@beanbakers.fi

function App() {
  //States
  const [countries, setCountries] = useState([]);

  //API
  const URL = "https://restcountries.com/v3.1/";

  async function fetchAllCountries() {
    const fetchedCountries = [];
    const response = await fetch(URL + "all")
      .then((response) => response.json())
      .then((data) => {
        // fetchedCountries = data.map((country) =>
        // )
        console.log(data);
      });
    setCountries(fetchedCountries);
  }

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <div className="App">
      <div className="App-main">
        <Dropdown className="App-main-countries">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Countries
          </Dropdown.Toggle>

          <Dropdown.Menu>{/* MAP ALL COUNTRIES FROM API HERE */}</Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default App;
