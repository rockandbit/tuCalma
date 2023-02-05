import React, { Component } from "react";
import locationImage from "../../assets/img/location.png";

class Location extends Component {
  render() {
    return (
      <div>
        <h3>
          <span className="line">Ubicación</span>
        </h3>
        <a href="https://goo.gl/maps/tAdykMvtcADoKpC89" target="_blank" rel="noreferrer">
          <img src={locationImage} alt="tuCalma psicología ubicación" />
        </a>
      </div>
    );
  }
}

export default Location;
