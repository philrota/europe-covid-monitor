import React, { Component } from "react";

class Heading extends Component {
  state = {};
  render() {
    return (
      <div id="page-top">
        <header>
          <h1>European Covid-19 Monitor</h1>
        </header>
        <br />
        <article>
          This non-profit web application is developed for informational
          purposes,it works just as a monitor of Covid-19 situation around the
          countries of Europe. Those data can find useful for the analysis of
          the pandemy or just to keep people informed about real-time
          statistics. <br />
          <h4>informations Provided by</h4>
          <p>
            COVID-19 data API from{" "}
            <a href="https://rapidapi.com/user/Gramzivi">Gramzivi</a>{" "}
          </p>
          <h4>COVID-19 data Overview</h4>
          <p>
            We collect information from several reliable sources, like Johns
            Hopkins CSSE, CDC, WHO and a few others. All our sources are
            verified, and we avoid collecting information that is not confirmed
            by official authorities. Every country sends official reports
            differently. From once per day to every hour. That depends on the
            scale of the pandemic and the time zone. Nevertheless, we are trying
            to update every new information ASAP. If you have a specific wish,
            please let us know (Discussions), and we will try to put it on our
            road map. This is a non-profit humanitarian project, and all the
            money we get goes for better servers, data providers and other
            expenses for providing you with a better, faster and more reliable
            API. Stay safe.
          </p>
        </article>
      </div>
    );
  }
}

export default Heading;
