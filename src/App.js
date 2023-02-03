import React, { useEffect, useState } from "react";
import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

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

  useEffect(() => {
    fetchAllCountries();
  }, []);

  async function fetchAllCountries() {
    const fetchedCountries = [];
    await fetch(URL + "all")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) => {
          fetchedCountries.push(element.name.common);
          //console.log(element.name.common);
        });
      });
    console.log(fetchedCountries);
    setCountries(fetchedCountries);
  }

  async function fetchCountry(country) {
    await fetch(URL + "name/" + country)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Dropdown className="App-main-countries">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Countries
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {countries.map((country) => (
              <Dropdown.Item key={country} href="#/${asdasd}">
                {country}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </header>
      <div className="App-main">
        <p>Tähän tulee valitun maan tiedot</p>
      </div>
    </div>
  );
}

export default App;
