//Country component, that displays country name, capital, region, flag, population and currencies

import React from "react";
import { Card } from "react-bootstrap";

function Country(props) {
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={props.flag} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <b>Capital:</b> {props.capital}
          </Card.Text>
          <Card.Text>
            <b>Region:</b> {props.region}
          </Card.Text>
          <Card.Text>
            <b>Population:</b>{" "}
            {new Intl.NumberFormat().format(props.population) === "NaN"
              ? ""
              : new Intl.NumberFormat().format(props.population)}
          </Card.Text>
          <Card.Text>
            <b>Timezones:</b> {props.timezones}
          </Card.Text>
          <Card.Text>
            <b>Coat of arms:</b>
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={props.coatOfArms} />
      </Card>
    </div>
  );
}

export default Country;
