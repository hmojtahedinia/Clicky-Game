import React, { Component } from "react";
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends Component {
  render() {
    return (
      // <div className="point">
      <nav className="navbar navbar-default navbar-fixed-top point">
        <div className="pointTitle">Test Your Memory!</div>
        <div className="card-body">
          <p className="card-text pointTitle">Point: {this.props.score}</p>
        </div>
        {/* </div> */}
      </nav>
    );
  }
}

export default Counter;
