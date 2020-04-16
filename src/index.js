import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Heading from "./components/Heading";
import Chart from "./components/Chart";
import ChartHead from "./components/ChartHead";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Heading />
    <App />
    <ChartHead />
    <div id="chart">
      <Chart />
    </div>
    <footer>
      Created by Philippe Rota, data provided by <a href="https://rapidapi.com/user/Gramzivi" target="_blank"> Gramzivi. </a><br />
       <b>Contacts:</b> philippe.rota@outlook.it  <br /><b> Website:</b> <a href="https://philippe-rota.it">Philippe-Rota.it</a>
    </footer>
  </React.StrictMode>,
  document.getElementById("root")
);


serviceWorker.unregister();
