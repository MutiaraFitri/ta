import React, { Component } from 'react';
import { connect } from "react-redux";
import '../../../loading.css';
import '../../../assets/style.css';
import '../../../assets/style.css';
import { Link } from 'react-router-dom';
import back from './../../../assets/img/back.png';
import { users } from '../../../redux/api/users';
// import mann from '../../../assets/img/mann.png';
import axios from 'axios';
const jwt = require('jsonwebtoken');


export class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }
    handleChange = (e) => {
        //console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value,
            save: false
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.userku(this.state)
    }

    handleSave = () => {
        axios.put(`https://api.ict-servicedesk.xyz/technician/` + this.state.user_id, this.state, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const user = res.data;
                console.log(user);
                // this.fetchUser()
                this.setState({
                    save: true
                })
            })
    }
    componentDidMount() {
        this.props.userku();//get user
        jwt.verify(localStorage.getItem("jwt"), 'dimasputray', (err, decoded) => {
            if (err) {
                console.log("Error", err)
                localStorage.removeItem("jwt");
                // dispatch(loginFailed("Your session has expired"));
            }
            const user = decoded.data;
            this.setState({ ...user },
                () => {
                    this.fetchUser();
                }
            )

        });
    }
    fetchUser = () => {
        axios.get(`https://api.ict-servicedesk.xyz/user/technician/` + this.state.user_id, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const user = res.data.values[0];
                this.setState({ ...user })
            })
    }
    render() {
        //if (localStorage.getItem("jwt")) return <Redirect to="/profile" />
        return (

            <div className="home" style={{ paddingBottom: "70px" }}>
                <div style={{ backgroundColor: "#141AA2", fontSize: "22px", fontFamily: "Muli", width: "100%", color: "white", padding: "16px 0px" }}>
                    <div className="menu" style={{ position: "absolute", top: "7px" }}>
                        <Link to='/profile'>
                            <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
                                <img src={back} alt="back" style={{ width: "20px" }} />
                            </div>
                        </Link>
                    </div>
                        Edit Profile
                </div>
                <div style={{ color: "black", width: "100%" }}>
                </div>

                {/* <div className="container" style={{ width: "100%" }}>
                    <div className="profile"
                        style={{
                            top: "30px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "90px",
                            height: "90px",
                            borderRadius: "50%",
                            backgroundColor: "#fff",
                            border: "1px solid",
                            position: "relative",
                            overflow: "hidden",
                            marginBottom: "20px"
                        }}>
                        <img src={mann} alt="man" style={{ width: "100%" }} />
                    </div>
                    <div className="ganti-foto"> Change Profile Photo   </div>
                </div> */}

                <div className="row editProfile" style={{ width: "100%", display: this.state.save ? "flex" : "none" }}>
                    <div style={{ padding: "10px", color: "white" }}>
                        Save successfully
                        </div>
                </div>

                <div className="bungkusBg" style={{
                    borderRadius: "10px",
                    padding: "20px",
                    marginTop: "30px"
                }}>
                    <form style={{ marginTop: "1rem" }} onSubmit={this.handleSubmit} >
                        <div className="container">
                            <div className="row-editProfile" style={{ alignItems: "center" }}>
                                <div className="sub-editProfile"> job</div>
                                <div>
                                    <input
                                        className="editInput"
                                        type="text"
                                        placeholder="Your Job"
                                        name="technician_job"
                                        onChange={this.handleChange}
                                        value={this.state.technician_job}
                                    />
                                </div>
                            </div>
                            <div className="row-editProfile" style={{ alignItems: "center" }}>
                                <div className="sub-editProfile"> department</div>
                                <div>
                                    <input
                                        className="editInput"
                                        type="text"
                                        name="technician_department"
                                        placeholder="Your Department"
                                        onChange={this.handleChange}
                                        value={this.state.technician_department}
                                    />
                                </div>
                            </div>
                            <div className="row-editProfile" style={{ alignItems: "center" }}>
                                <div className="sub-editProfile"> address</div>
                                <div>
                                    <input
                                        className="editInput"
                                        type="text"
                                        name="technician_address"
                                        placeholder="Your Address"
                                        onChange={this.handleChange}
                                        value={this.state.technician_address}
                                    />
                                </div>
                            </div>
                            <div className="row-editProfile" style={{ alignItems: "center" }}>
                                <div className="sub-editProfile"> email</div>
                                <div>
                                    <input
                                        className="editInput"
                                        type="text"
                                        name="technician_email"
                                        placeholder="Your Email"
                                        onChange={this.handleChange}
                                        value={this.state.technician_email}
                                    />
                                </div>
                            </div>
                            <div className="row-editProfile" style={{ alignItems: "center" }}>
                                <div className="sub-editProfile"> contact</div>
                                <div>
                                    <input
                                        className="editInput"
                                        type="text"
                                        placeholder="Your Contact"
                                        name="technician_contact"
                                        onChange={this.handleChange}
                                        value={this.state.technician_contact}
                                    />
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
                <div className="row" style={{ width: "100%" }}>
                    <div className="row" style={{ marginTop: "2rem" }}>
                        <button className="button-submit" type="submit" onClick={this.handleSave}>Save</button>
                    </div>
                </div>
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
        userku: () => dispatch(users()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);