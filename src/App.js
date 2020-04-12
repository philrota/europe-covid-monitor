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
  state = {};
  render() {
    return (
      <div className="grid-container">
        <DataBox country="Austria" flag={austriaFlag} />
        <DataBox country="Belgium" flag={belgiumFlag} />
        <DataBox country="Bulgaria" flag={bulgariaFlag} />
        <DataBox country="Croatia" flag={croatiaFlag} />
        <DataBox country="Cyprus" flag={cyprusFlag} />
        <DataBox country="Czechia" flag={czechFlag} />
        <DataBox country="Denmark" flag={denmarkFlag} />
        <DataBox country="Estonia" flag={estoniaFlag} />
        <DataBox country="Finland" flag={finlandFlag} />
        <DataBox country="France" flag={franceFlag} />
        <DataBox country="Germany" flag={germanFlag} />
        <DataBox country="Greece" flag={greeceFlag} />
        <DataBox country="Hungary" flag={hungaryFlag} />
        <DataBox country="Ireland" flag={irelandFlag} />
        <DataBox country="Italy" flag={italyFlag} />
        <DataBox country="Latvia" flag={latviaFlag} />
        <DataBox country="Lithuania" flag={lithuaniaFlag} />
        <DataBox country="Luxembourg" flag={luxembourgFlag} />
        <DataBox country="Malta" flag={maltaFlag} />
        <DataBox country="Netherlands" flag={NlFlag} />
        <DataBox country="Poland" flag={polandFlag} />
        <DataBox country="Portugal" flag={portugalFlag} />
        <DataBox country="Romania" flag={romaniaFlag} />
        <DataBox country="Slovakia" flag={slovakiaFlag} />
        <DataBox country="Slovenia" flag={sloveniaFlag} />
        <DataBox country="Spain" flag={spainFlag} />
        <DataBox country="Sweden" flag={swedenFlag} />
      </div>
    );
  }
}

export default App;
