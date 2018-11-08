import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import "./App.css";
import { incrementCount, decrementCount } from "./actions/exampleAction";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <button
          onClick={this.props.increment}
        > + </button>
        <p> counter value is {this.props.counter}</p>
        <button
          onClick={this.props.decrement}
        > - </button>
      </div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const mapStatetoProps = state => {
  return ({
    counter: state.reducer.count,
  })
};

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCount()),
  decrement: () => dispatch(decrementCount()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);