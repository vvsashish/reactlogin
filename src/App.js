import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Components/js/Login';
import Employees from './Components/js/Employees';

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    fetch('config.json')
      .then((data) => data.json())
      .then((config) => {
        this.props.getConfig(config);
      });
  }
  render() {
    return (
      <div className="App">
        {
          (this.props.IsCredentialsValid) ? <Employees /> : <Login />
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    IsCredentialsValid: state.IsCredentialsValid
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getConfig: (data) => {
      dispatch({
        type: "GET_CONFIG",
        payload: data
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
