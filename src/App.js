import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Components/js/Login';
import Employees from './Components/js/Employees';

class App extends Component {
  constructor(props) {
    super(props);

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
const mapDispatchToProps = (dispatch) => { return {} }
export default connect(mapStateToProps, mapDispatchToProps)(App);
