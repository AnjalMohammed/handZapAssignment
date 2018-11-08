import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Button } from 'antd';

import "./App.css";
import { incrementCount, decrementCount } from "./actions/exampleAction";
import { P } from "./styledCSS/styles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <Button
          onClick={this.props.increment}
          type="primary"
        > + </Button>
        <P> counter value is {this.props.counter}</P>
        <Button
          type="primary"
          onClick={this.props.decrement}
        > - </Button>
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