import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: "",
            Password: "",
            Message: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
    }
    componentDidMount() {
        document.getElementById("userName").focus();
        this.setState({ UserName: "", Password: "", Message: "" });

    }
    handleChange(e) {
        let inputValue = e.target.value;
        (e.target.id == "userName") ? this.setState({ UserName: inputValue }) : this.setState({ Password: inputValue })
    }
    togglePassword() {
        let pwd = document.getElementById("password");
        if (pwd.type === "password") {
            pwd.type = "text";
        } else {
            pwd.type = "password";
        }
    }
    handleClick() {
        let isCredentialsValid = (this.state.UserName == this.props.LoginConfig.UserName && this.state.Password == this.props.LoginConfig.Password) ? true : false;
        this.props.checkCredentials(isCredentialsValid);
        if (!isCredentialsValid) this.setState({ Message: "**Invalid Credentials" });
    }
    render() {
        return (
            <div className="login-page">
                <div>
                    <span>UserName</span>
                    <input id="userName" type="textbox" title="Please enter userName" onChange={this.handleChange}></input>
                </div>
                <div>
                    <span>Password</span>
                    <input id="password" type="password" title="Please enter password" onChange={this.handleChange}></input>
                </div>
                <div><input type="checkbox" onClick={this.togglePassword} />Show Password</div>
                <div className="login-btn">
                    <input type="button" title="Login" value="Login" onClick={this.handleClick}></input>
                </div>
                <div className="message">{this.state.Message}</div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        LoginConfig: state.Config.LogInData
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);