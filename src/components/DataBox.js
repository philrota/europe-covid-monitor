import React, { Component } from "react";
import { CircularProgress } from "@material-ui/core";

class DataBox extends Component {
  state = {
    confirmed: null,
    recovered: null,
    critical: null,
    deaths: null,
    loading: false,
  };
  componentDidMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    this.setState({ loading: true });

    fetch(
      `https://covid-19-data.p.rapidapi.com/country?format=undefined&name=${this.props.country}`,
      {
        method: "GET",
        mode: "cors",

        headers: {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key":
            "",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          confirmed: data[0].confirmed,
          recovered: data[0].recovered,
          critical: data[0].critical,
          deaths: data[0].deaths,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { loading } = this.state;

    return (
      <main className="box">
        <ul>
          <li>
            <img src={this.props.flag} alt="flag"></img> <b>Country:</b>{" "}
            {this.state.country} <br />
          </li>
          <li>
            <b>Confirmed:</b> {this.state.confirmed} <br />
          </li>
          <li style={{ color: "green" }}>
            <b>Recovered:</b> {this.state.recovered} <br />
          </li>
          <li style={{ color: "yellow", textShadow: "1px 1px 1px black" }}>
            <b>Criticals:</b> {this.state.critical} <br />
          </li>
          <li style={{ color: "red" }}>
            <b>Deaths:</b> {this.state.deaths} <br />
          </li>
          {loading ? <CircularProgress /> : null}
        </ul>
      </main>
    );
  }
}

export default DataBox;
