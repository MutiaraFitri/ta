import React, { Component } from 'react';
import '../../../loading.css';
import '../../../assets/style.css';
import logo from '../../../assets/img/logo_komatsu.png';
import { updatePassword } from '../../../redux/api/users';
import axios from 'axios';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

export class ResetPassword extends Component {
    state = {
        message: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.reset(this.state);
    }

    renderContent = () => {
        if (this.state.message === "") {
            return <div className="row">Please wait . . .</div>;
        } else if (this.state.message === "Token valid") {
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <input className="form-input" type="password" placeholder="Passowrd"
                                onChange={this.handleChange}
                                name="password"
                                value={this.state.password}
                            />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <input className="form-input" type="password" placeholder="Confirm Passowrd"
                                onChange={this.handleChange}
                                name="confirmPassword"
                                value={this.state.confirmPassword}
                            />
                        </div>
                    </div>
                    <div className="container" >
                        {
                            (this.state.password && (this.state.password).length < 6) ?
                                <div style={{ color: "red", fontSize: "14px" }}>Password must be at least 6 characters</div> :
                                    (this.state.password && this.state.confirmPassword && this.state.password !== this.state.confirmPassword) ?
                                        <div style={{ color: "red" }}>Password doesn't match</div> :
                                            null
                        }

                    </div>
                    <div className="row" style={{ marginTop: "2rem" }}>
                        <button className="button-submit" type="submit">Save</button>
                    </div>
                </div>)
        } else if (this.state.message === "No Internet Connection") {
            return (<div className="row">No Internet Connection.</div>)
        } else {
            return (<div className="row">Link has been expired.</div>)
        }
    }
    componentDidMount() {
        axios.get("https://api.ict-servicedesk.xyz/auth/reset/technician/" + this.props.match.params.token, {
            headers: {
                key: '8dfcb234a322aeeb6b530f20c8e9988e'
            }
        }
        ).then(res => {
            const message = res.data.values.message;
            this.setState({ message });
        }).catch(error => {
            console.log("Error " + error);
            this.setState({ message: "No Internet Connection" });
        })
        this.setState({
            token:this.props.match.params.token
        })
    }

    render() {
        const ada = <div className="loading">
            <div className="container">
                <div className="row">
                    <img src={logo} alt="Komatsu" />
                </div>
            </div>
            <form style={{ marginTop: "1rem" }} onSubmit={this.handleSubmit}>
                {this.renderContent()}
            </form>
        </div>;
        const isi =
            (!this.props.data.personState.reqResetPassword) ?
                ada
                : (this.props.data.personState.reqResetPassword === "Success") ?
                    <div className="loading">
                        <p>Your Password has been save.</p>
                        <Link to="./../">
                            <button className="button-submit" type="submit" style={{ padding: "10px 30px" }}>Home</button>
                        </Link>
                    </div>
                    : ada;
        return (
            <div className="loading">
                {isi}
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
        reset: (userId) => dispatch(updatePassword(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);

