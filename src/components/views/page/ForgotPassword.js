import React, { Component } from 'react';
import '../../../loading.css';
import { resetPassword } from '../../../redux/api/users';
import '../../../assets/style.css';
import logo from '../../../assets/img/logo_komatsu.png';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

export class ForgotPassword extends Component {
    state = {
        nrp: ""
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


    render() {
        const ada = <div className="loading">
            <div className="container">
                <div className="row">
                    <img src={logo} alt="Komatsu" />
                </div>
            </div>
            <form style={{ marginTop: "1rem" }} onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="row">
                        <input className="form-input" type="text" placeholder="Employee ID"
                            onChange={this.handleChange}
                            name="nrp"
                            value={this.state.nrp}
                        />
                    </div>
                </div>
                <div className="row" style={{ marginTop: "2rem" }}>
                    <button className="button-submit" type="submit">submit</button>
                </div>
                <div className="row" style={{ minHeight:"30px" }}>
                    {
                        (this.props.data.personState.reqResetPassword === "Failed") ?
                            <p style={{ margin: "0 auto", color: "red" }}> User not found !</p>
                            : null
                    }
                </div>

            </form>
        </div>;
        const isi =
            (!this.props.data.personState.reqResetPassword) ?
                ada
                : (this.props.data.personState.reqResetPassword === "Success") ?
                    <div className="loading">
                        <p>Reset Password has been send to your email</p>
                        <Link to=".">
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
        reset: (userId) => dispatch(resetPassword(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);