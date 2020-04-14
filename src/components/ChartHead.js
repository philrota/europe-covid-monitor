import React, { Component } from "react";
class ChartHead extends Component {
  state = {};
  render() {
    return (
      <section>
        <h2>Chart of total Covid-19 cases in Europe</h2>
        <p>
          Below you can find a data chart representing the progression of the
          total coronavirus cases reported each day by the member countries.
          Data is split into columns, one for each month, starting from April.
          Numbers are provided by a reliable source (ECDC) and can be consulted
          at <a href="https://www.ecdc.europa.eu/en/geographical-distribution-2019-ncov-cases" target="_blank"> this link
           </a>
        </p>
      </section>
    );
  }
}
export default ChartHead;
