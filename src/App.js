import React, { Component } from "react";
import DataBox from "./components/DataBox";
import "./index.css";
import belgiumFlag from "./assets/belgium.png";
import germanFlag from "./assets/DE.png";
import finlandFlag from "./assets/finland.png";
import franceFlag from "./assets/France.png";
import italyFlag from "./assets/Italy.png";
import NlFlag from "./assets/Nl.png";
import polandFlag from "./assets/PL.png";
import spainFlag from "./assets/spain.png";
import swedenFlag from "./assets/sweden.png";
import austriaFlag from "./assets/austria.png";
import bulgariaFlag from "./assets/bulgaria.png";
import croatiaFlag from "./assets/croatia.png";
import cyprusFlag from "./assets/cyprus.png";
import czechFlag from "./assets/czech-republic.png";
import denmarkFlag from "./assets/denmark.png";
import estoniaFlag from "./assets/estonia.png";
import greeceFlag from "./assets/greece.png";
import hungaryFlag from "./assets/hungary.png";
import irelandFlag from "./assets/ireland.png";
import latviaFlag from "./assets/latvia.png";
import lithuaniaFlag from "./assets/lithuania.png";
import luxembourgFlag from "./assets/luxembourg.png";
import maltaFlag from "./assets/malta.png";
import portugalFlag from "./assets/portugal.png";
import romaniaFlag from "./assets/romania.png";
import slovakiaFlag from "./assets/slovakia.png";
import sloveniaFlag from "./assets/slovenia.png";

class App extends Component {
  state = {
    countries: [
      { country: "Austria", flag: austriaFlag },
      { country: "Belgium", flag: belgiumFlag },
      { country: "Bulgaria", flag: bulgariaFlag },
      { country: "Croatia", flag: croatiaFlag },
      { country: "Cyprus", flag: cyprusFlag },
      { country: "Czechia", flag: czechFlag },
      { country: "Denmark", flag: denmarkFlag },
      { country: "Estonia", flag: estoniaFlag },
      { country: "Finland", flag: finlandFlag },
      { country: "France", flag: franceFlag },
      { country: "Germany", flag: germanFlag },
      { country: "Greece", flag: greeceFlag },
      { country: "Hungary", flag: hungaryFlag },
      { country: "Ireland", flag: irelandFlag },
      { country: "Italy", flag: italyFlag },
      { country: "Latvia", flag: latviaFlag },
      { country: "Lithuania", flag: lithuaniaFlag },
      { country: "Luxembourg", flag: luxembourgFlag },
      { country: "Malta", flag: maltaFlag },
      { country: "Netherlands", flag: NlFlag },
      { country: "Poland", flag: polandFlag },
      { country: "Portugal", flag: portugalFlag },
      { country: "Romania", flag: romaniaFlag },
      { country: "Slovakia", flag: slovakiaFlag },
      { country: "Slovenia", flag: sloveniaFlag },
      { country: "Spain", flag: spainFlag },
      { country: "Sweden", flag: swedenFlag },
    ],
  };
  render() {
    return (
      <div className="grid-container">
        {this.state.countries.map((el) => (
          <DataBox country={el.country} flag={el.flag} />
        ))}
      </div>
    );
  }
}

export default App;
