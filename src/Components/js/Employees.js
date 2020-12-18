import React, { Component } from 'react';
import { connect } from 'react-redux';

class Employees extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        fetch('config.json')
            .then((data) => data.json())
            .then((config) => {
                console.log(config);
            });
    }
    handleClick() {
        this.props.checkCredentials(false);
    }
    render() {
        return (
            <div>
                <div className="employee-header">
                    <span>Employee List</span>
                    <input className="signout-btn" type="button" value="Sign Out" onClick={this.handleClick} ></input>
                </div>
                {
                    this.props.EmployeeConfig.user.map((employee) => {
                        return (
                            <div class="employee-details">
                                <div><span>ID</span><span>{employee.id}</span></div>
                                <div><span>Name</span><span>{employee.name}</span></div>
                                <div><span>Age</span><span>{employee.age}</span></div>
                                <div><span>Gender</span><span>{employee.gender}</span></div>
                                <div><span>Email</span><span>{employee.email}</span></div>
                                <div><span>Contact</span><span>{employee.phoneNo}</span></div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        EmployeeConfig: state.Config.EmployeeData
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        checkCredentials: (data) => {
            dispatch({
                type: "CHECK_LOGIN_CREDENTIALS",
                payload: data
            })
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Employees);