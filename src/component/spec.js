import React, { Component } from 'react';
import { render } from 'react-dom';
import SpecificationsCard from "./SpecificationsCard";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

class spec extends Component {
  state = {
    selection: " "
  };

  handleChange = (value) => {
    this.setState({
      selection: value
    });
  };

  render() {
    const { selection } = this.state;
    return (
      <div className="App">
        <p>{selection}</p>
        <SpecificationsCard handleChange={this.handleChange} selection={selection} />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SpecificationsCard />
  </StrictMode>,
  rootElement
);
export default spec;