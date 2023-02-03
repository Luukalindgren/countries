import React, { useEffect, useState } from "react";
import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Country from "./Country";

// TODO:
// 1. Get all data from API
// 2. Dropdown for all countires with flags, no need for searchbar, only scrollable list
// 3. When country is clicked open important information (capital, population, etc.)
// All done!

function App() {
  //States
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});

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
        });
      });
    setCountries(fetchedCountries);
  }

  async function fetchCountry(props) {
    let fetchedCountry = {};
    await fetch(URL + "name/" + props)
      .then((response) => response.json())
      .then((data) => {
        fetchedCountry = data[0];
      });
    setCountry(fetchedCountry);
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
              <Dropdown.Item
                key={country}
                onClick={() =>
                  fetchCountry(country)
                } /*Make onClick to use fetchCountry(country) function*/
              >
                {country}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </header>
      <div className="App-main">
        {Object.keys(country).length === 0 ? (
          <Country />
        ) : (
          <Country
            flag={country.flags.png}
            name={country.name.common}
            region={country.region}
            capital={country.capital}
            population={country.population}
            timezones={country.timezones}
            coatOfArms={country.coatOfArms.png}
          />
        )}
      </div>
    </div>
  );
}

export default App;
