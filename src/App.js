import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

// calling the connect wrapper and the function created in the actions section
import { connect } from 'react-redux';
import { defaultFunction } from './actions';

class App extends Component {
  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }

  render() {
    return (
      <div className="App">
        Altura Soluciones React Boilerplate
      </div>
    );
  }
}
  
// function to convert the global state obtained from redux to local props
const mapStateToProps = (state) => ({
  default: state.default
});


export default connect(mapStateToProps, { defaultFunction })(App);
