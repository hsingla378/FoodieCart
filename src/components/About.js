import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("contructor called");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render called");
    return (
      <div>
        <h1>About</h1>
        <UserClass name={"Tushar"} location={"Sirsa, Haryana"} />
      </div>
    );
  }
}

export default About;
