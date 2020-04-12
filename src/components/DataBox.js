import React, { Component } from "react";
class DataBox extends Component {
  state = {
    country: this.props.country,
    confirmed: null,
    recovered: null,
    critical: null,
    deaths: null,
    loading: false,
  };

  componentDidMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    this.setState({ loading: true });

    /*fetch(
      `https://covid-19-data.p.rapidapi.com/country?format=undefined&name=${this.state.country}`,
      {
        method: "GET",
        mode: "cors",

        headers: {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key":
            "9b08cf8676msh77975a36d604f1fp1a0e5ajsn93480bea412f",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ loading: false });
        console.log(data);
        console.log(data[0].country); // get country, you can switch to confirmed or recovered etc..
        this.setState({
          confirmed: data[0].confirmed,
          recovered: data[0].recovered,
          critical: data[0].critical,
          deaths: data[0].deaths,
        });
      })
      .catch((err) => {
        console.log(err);
      });*/
  }

  render() {
    return (
      <div className="box">
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
          <p id="state"></p>
        </ul>
      </div>
    );
  }
}
export default DataBox;