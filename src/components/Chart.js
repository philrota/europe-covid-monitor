import React, { Component } from "react";
import totalCases from "../data/EuropeGrandTotal.json";
import CanvasJSReact from "../canvasjs-2.3.2/canvasjs.react";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Chart extends Component {
  render() {
    const options = {
      title: {
        text: "Europe total cases per month",
      },

      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: "column",
          dataPoints: [
            { label: "April 2020", y: totalCases[0][0].totalCases },
            { label: "May 2020", y: null },
            { label: "June 2020", y: null },
            { label: "July 2020", y: null },
            { label: "August 2020", y: null },
            { label: "September 2020", y: null },
            { label: "October 2020", y: null },
            { label: "November 2020", y: null },
            { label: "December 2020", y: null },
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
