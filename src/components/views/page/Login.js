import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from "react-redux";
import '../../../loading.css';
import '../../../assets/style.css';
import logo from '../../../assets/img/logo_komatsu.png';
import { userLoginFetch, setNullError } from '../../../redux/api/users';


export class Login extends Component {
    state = {
        loading: false,
        nrp: "",
        password: "",
        type: "password"

    }
    handleChange = (e) => {
        //console.log(e.target.value)
        this.props.setNullError()
        this.setState({
            [e.target.name]: e.target.value,
            loading: false
        })
    }
    handleClick = (e) =>
        this.setState(({ type }) => ({
            type: type === 'text' ? 'password' : 'text'
        }))

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.setState({
            loading: true
        })
        this.props.userLoginFetch(this.state)
    }

    render() {
        if (localStorage.getItem("jwt")) return <Redirect to="." />

        const override = css`
            display: block;
            margin: 0px auto;
        `;
        return (

            <div className="loading">
                <div style={{
                    width: "100%",
                    position: "absolute",
                    top: "0px",
                    display: (this.state.loading && !this.props.data.personState.message) ? "flex" : "none"
                }}>
                    <div style={{
                        position: "absolute",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        width: "100%",
                        zIndex: "3",
                        transition: "opacity 0.2s"
                    }}>
                    </div>
                    <div style={{
                        display: "flex",
                        left: "50%"
                    }}
                        className="loading-overlay loading">
                        <div
                            className="loading-content"
                            style={{
                                backgroundColor: "white",
                                width: "200px",
                                borderRadius: "10px",
                                position: "absolute",
                                padding: "0px",
                                paddingTop: "20px",
                                overflow: "hidden",
                                height: "75px",
                                zIndex: "4",
                                top: "50vh",
                            }}>
                            <div style={{ fontSize: "18px" }}>Loading..</div>
                            <PulseLoader
                                css={override}
                                sizeUnit={"px"}
                                size={10}
                                color={'#0050A1'}
                                loading={this.state.loading}
                            />
                        </div>
                    </div>
                </div>
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
                                style={{ padding: "10px", width: "100%" }}
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
                                style={{ padding: "10px" }}


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
                    <div className="row" style={{ display: (this.props.data.personState.message) ? "flex" : "none" }}>
                        <div style={{ color: "red", margin: "0 auto" }}>
                            {this.props.data.personState.message}
                        </div>
                    </div>
                    <div className="row" style={{ fontWeight: "500", marginTop: "20px" }}>
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
        userLoginFetch: (userInfo) => dispatch(userLoginFetch(userInfo)),
        setNullError: () => dispatch(setNullError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);