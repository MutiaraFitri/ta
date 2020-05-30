import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import '../../../loading.css';
import '../../../assets/style.css';
import logo from '../../../assets/img/logo_komatsu.png';
import { userLoginFetch } from '../../../redux/api/users';


export class Login extends Component {
    state = {
        nrp: "",
        password: "",
        type: "password"

    }
    handleChange = (e) => {
        //console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) =>
        this.setState(({ type }) => ({
            type: type === 'text' ? 'password' : 'text'
        }))

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.userLoginFetch(this.state)
    }

    render() {
        if (localStorage.getItem("jwt")) return <Redirect to="." />

        return (

            <div className="loading">
                <div className="container">
                    <div className="row">
                        <img src={logo} alt="Komatsu" />
                    </div>
                </div>
                <form style={{ marginTop: "1rem" }} onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <input
                                className="form-input"
                                type="text"
                                placeholder="Employee ID"
                                onChange={this.handleChange}
                                name="nrp"
                                value={this.state.nrp}
                            />
                        </div>
                        <div className="row-password" style={{ alignItems: "center" }}>
                            <input
                                className="form-input"
                                type={this.state.type}
                                name="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                                value={this.state.password}


                            />
                            <span className="password__show" onClick={this.handleClick} style={{ position: "absolute", marginLeft: "-35px", marginTop: "15px" }}>
                                {this.state.type === 'text' ?
                                    <i className="material-icons visibility" >
                                        visibility_off</i> :
                                    <i className="material-icons visibility">
                                        visibility</i>}
                            </span>

                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "2rem" }}>
                        <button className="button-submit" type="submit">Login</button>
                    </div>
                    <div className="row" style={{ marginTop: "3rem", fontWeight: "500" }}>
                        <a href="/forgotpassword" style={{ margin: "0 auto" }}>Forgot password ?</a>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        userLoginFetch: (userInfo) => dispatch(userLoginFetch(userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
