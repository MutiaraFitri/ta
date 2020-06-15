import React, { Component } from 'react';
import NavbarProfile from '../navbar/NavbarProfile';
import job2 from './../../../assets/img/job.png';
import call2 from './../../../assets/img/call.png';
import email2 from './../../../assets/img/email.png';
import build from './../../../assets/img/building.png';
import place from './../../../assets/img/place.png';
import NavbarBottom from '../navbar/NavbarBottom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import users from '../../../redux/api/users';
import { userLogOut, users } from '../../../redux/api/users';
import axios from 'axios';
const jwt = require('jsonwebtoken');


export class Profile extends Component {

    state = {
        technician_job: "",
        technician_address: "",
        technician_contact: "",
        technician_department: "",
        technician_email: "",
    }

    handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        this.props.logOut()
    };

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
        if (!localStorage.getItem("jwt")) return <Redirect to="/Login" />
        const { data } = this.props;

        const department = (data.personState.data) ? (this.state) ? (this.state.technician_department) ? (this.state.technician_department).length > 20 ? (this.state.technician_department).slice(0, 20) + " ..." : (this.state.technician_department) : "Your Departement" : "Your Departement" : "Your Departement";
        const address = (data.personState.data) ? (this.state) ? (this.state.technician_address) ? (this.state.technician_address).length > 20 ? (this.state.technician_address).slice(0, 20) + " ..." : (this.state.technician_email) : "Your Address" : "Your Address" : "Your Address";
        const email = (data.personState.data) ? (this.state) ? (this.state.technician_email) ? (this.state.technician_email).length > 20 ? (this.state.technician_email).slice(0, 20) + " ..." : (this.state.technician_email) : "Your Mail" : "Your Mail" : "Your Mail";
        const job = (data.personState.data) ? (this.state) ? (this.state.technician_job) ? (this.state.technician_job).length > 20 ? (this.state.technician_job).slice(0, 20) + " ..." : (this.state.technician_job) : "Your Skill" : "Your Skill" : "Your Skill";
        const phone = (data.personState.data) ? (this.state) ? (this.state.technician_contact) ? (this.state.technician_contact).length > 20 ? (this.state.technician_contact).slice(0, 20) + " ..." : (this.state.technician_contact) : "Your Phone Number" : "Your Phone Number" : "Your Phone Number";

        const colorJob =
            !(this.state.technician_job) ? "#837E7E" : "#3f4377";
        const colorDepartment =
            !(this.state.technician_department) ? "#837E7E" : "#3f4377";
        const colorContact =
            !(this.state.technician_contact) ? "#837E7E" : "#3f4377";
        const colorAddress =
            !(this.state.technician_address) ? "#837E7E" : "#3f4377";
        const colorEmail =
            !(this.state.technician_email) ? "#837E7E" : "#3f4377";


        return (
            <div className="home" style={{ paddingBottom: "70px" }}>
                <NavbarProfile />

                <div className="description" style={{ backgroundColor: "#EDF4FF", width: "70%", margin: "0px auto", padding: "20px", marginTop: "120px", borderRadius: "10px" }}>
                    <div className="row">
                        <div className="title-kotak" style={{ width: "30%", textAlign: "left", letterSpacing: "2.7px", color: "black", fontSize: "15px", fontWeight: "bold" }}>About
                    </div>
                        <div style={{ width: "60%", textAlign: "right", }}>
                            <Link to='/edit-profile'>
                                <span
                                    className="material-icons"
                                    onClick={this.handleClick}
                                    style={{ position: "absolute", fontSize: "22px" }}>
                                    create
                                </span>
                            </Link>
                        </div>
                    </div>


                    <div className="row" style={{ width: "100%" }}>
                        <div className="gambar" style={{ width: "20%" }}>
                            <img src={job2} alt="info" />
                        </div>
                        <div className="desc" style={{ width: "80%", textAlign: "left", height: "50px" }}>
                            <div className="desc-main" style={{ fontSize: "15px", color: colorJob }}>{job}</div>
                        </div>
                        <div className="gambar" style={{ width: "20%" }}>
                            <img src={build} alt="info" />
                        </div>
                        <div className="desc" style={{ width: "80%", textAlign: "left", height: "50px" }}>
                            <div className="desc-main" style={{ fontSize: "15px", color: colorDepartment }}>{department}</div>
                        </div>
                        <div className="gambar" style={{ width: "20%" }}>
                            <img src={place} alt="info" />
                        </div>
                        <div className="desc" style={{ width: "80%", textAlign: "left", height: "50px" }}>
                            <div className="desc-main" style={{ fontSize: "15px", color: colorAddress }}>{address}</div>
                        </div>
                    </div>
                    <div className="title-kotak" style={{ textAlign: "left", letterSpacing: "2.7px", color: "black", fontSize: "15px" }}>Contact</div>
                    <div className="row" style={{ width: "100%" }}>
                        <div className="gambar" style={{ width: "20%" }}>
                            <img src={email2} alt="info" />
                        </div>
                        <div className="desc" style={{ width: "80%", textAlign: "left" }}>
                            <div className="desc-main" style={{ fontSize: "15px", color: colorEmail }}>{email}</div>
                        </div>
                    </div>
                    <div className="row" style={{ width: "100%" }}>
                        <div className="gambar" style={{ width: "20%" }}>
                            <img src={call2} style={{ width: "28%" }} alt="info" />
                        </div>
                        <div className="desc" style={{ width: "80%", textAlign: "left" }}>
                            <div className="desc-main" style={{ fontSize: "15px", color: colorContact }}>{phone}</div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ width: "100%" }}>
                    <div className="row" style={{ marginTop: "2rem" }}>
                        <button className="buttonLogout" type="submit" onClick={this.handleLogout}>logOut</button>
                    </div>
                </div>
                <NavbarBottom active="Profile" />
            </div >
        );
    }
}


const mapStateToProps = (state) => ({
    data: state
})
const mapDispacthToProps = (dispatch) => {
    return {
        userku: () => dispatch(users()),
        logOut: () => dispatch(userLogOut())
    }
}
export default connect(
    mapStateToProps, mapDispacthToProps
)(Profile)
