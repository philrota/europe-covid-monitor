import React, { Component } from "react";
import datas from '../data/datas.json'
import CanvasJSReact from "../canvasjs-2.3.2/canvasjs.react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Chart extends Component {
  state = {
    april: datas[0][0].totalCases,
    may: datas[0][1].totalCases,
    june: datas[0][2].totalCases,
    july: datas[0][3].totalCases,
    august: datas[0][4].totalCases,
    september: null,
    october: null,
    november: null,
    december: null,
  };
  
render() {
    const options = {
      title: {
        text: "Europe total active cases per month",
      },

      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: "column",
          dataPoints: [
            {
              label: " April 2020",
              y: this.state.april,
            },
            { label: `May 2020`, y: this.state.may },
            { label: `June 2020`, y: this.state.june },
            { label: `July 2020`, y: this.state.july },
            { label: `August 2020`, y: this.state.august },
            { label: `September 2020`, y: null },
            { label: `October 2020`, y: null },
            { label: `November 2020`, y: null },
            { label: `December 2020`, y: null },
          ],
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}
export default Chart;
