import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import '../../../loading.css';
import '../../../assets/style.css';
import '../../../assets/style.css';
import { Link } from 'react-router-dom';
import back from './../../../assets/img/back.png';
import { users } from '../../../redux/api/users';
import { prod } from '../../../redux/url/server';
// import defaultEmploy from '../../../assets/img/worker.png';
import axios from 'axios';
const jwt = require('jsonwebtoken');


export class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            editPassword: false,
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
            success: false
        }
    }

    handleChange = (e) => {
        //console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value,
            save: false,
            nrp: this.props.data.personState.data.user_id
        })
    }

    handleClickChangePassword = () => {
        this.setState({
            editPassword: !this.state.editPassword

        })
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file_to_upload: file,
                user_image_temp: reader.result
            });
        }

        reader.readAsDataURL(file)

        const formData = new FormData();

        formData.append('myImage', file);
        formData.append('technician_id', this.state.user_id);

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                key: '8dfcb234a322aeeb6b530f20c8e9988e'
            }
        };

        // axios.post(url+"ticket", formData, config)
        axios.post(prod + "edit/image/technician", formData, config)
            .then((response) => {
                this.setState({
                    redirect: true
                })
            }).catch((error) => {
            });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.userku(this.state)
    }

    handleSave = () => {
        axios.put(prod + `technician/` + this.state.user_id, this.state, {
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
        axios.get(prod + `user/technician/` + this.state.user_id, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const user = res.data.values[0];
                this.setState({ ...user })
            })
    }

    handleSavePassword = (e) => {
        e.preventDefault()
        if (this.state.newPassword.length > 5 && this.state.newPassword == this.state.confirmPassword)
            axios.put(`https://api.ict-servicedesk.xyz/change/password/technician`, this.state, {
                headers: {
                    key: "8dfcb234a322aeeb6b530f20c8e9988e"
                }
            })
                .then(res => {
                    console.log(res.data.values)
                    if (res.data.values.message == "success") {
                        this.setState({ success: true })
                    } else {
                        this.setState({ passwordSalah: true })
                    }
                })
    }

    render() {
        if (this.state.save) return <Redirect to="/profile" />
        // var userImgLink = (this.state.user_image) ? this.state.user_image : "defaultEmploy";
        // var userImg = prod + 'avatar/technician/' + userImgLink;
        const profile = this.state.technician_image ? "https://api.ict-servicedesk.xyz/avatar/technician/" + this.state.technician_image : "https://api.ict-servicedesk.xyz/avatar/technician/defaultEmploy.png";
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
                {/* <div className="row editProfile" style={{ width: "100%", display: this.state.save ? "flex" : "none" }}>
                    <div style={{ padding: "10px", color: "white" }}>
                        Save successfully
                        </div>
                </div> */}

                <div className="bungkusBg" style={{
                    borderRadius: "10px",
                    padding: "20px",
                }}>

                    {!this.state.editPassword ?

                        <form onSubmit={this.handleSubmit} >
                            <div className="container" style={{ width: "100%" }}>
                                <label htmlFor="files">
                                    <div className="profile"
                                        style={{
                                            top: "10px",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            width: "90px",
                                            height: "90px",
                                            borderRadius: "50%",
                                            backgroundColor: "#fff",
                                            border: "1px solid",
                                            position: "relative",
                                            overflow: "hidden"
                                        }}>
                                        <img src={(this.state.user_image_temp) ? this.state.user_image_temp : profile} alt="man" style={{ width: "100%" }} />
                                    </div>
                                </label>
                                <div className="ganti-foto" > <label htmlFor="files">Change Photo Profile</label>
                                    <input className="fileInput"
                                        id="files"
                                        type="file"
                                        onChange={(e) => this._handleImageChange(e)} style={{ display: "none" }} />
                                </div>
                            </div>
                            <div className="container" style={{ backgroundColor: "#edf4ff", padding: "10px", borderRadius: "10px" }}>
                                <div className="row-editProfile" style={{ display: "flex", width: "92%", margin: "0px auto" }} >
                                    <div className="kiri" style={{ width: "50%" }}>
                                        <div className="sub-editProfile"  >First Name</div>
                                        <input
                                            className="editInput"
                                            type="text"
                                            placeholder="First Name"
                                            name="technician_firstname"
                                            onChange={this.handleChange}
                                            value={this.state.technician_firstname}
                                            style={{ width: "80%", margin: "0px" }}
                                        />
                                    </div>
                                    <div className="kanan" style={{ width: "50%" }}>
                                        <div className="sub-editProfile" >Last Name</div>
                                        <input
                                            className="editInput"
                                            type="text"
                                            placeholder="Last Name  "
                                            name="technician_lastname"
                                            onChange={this.handleChange}
                                            value={this.state.technician_lastname}
                                            style={{ width: "80%", margin: "0px" }}
                                        />
                                    </div>
                                </div>
                                <div className="row-editProfile" style={{ alignItems: "center" }}>
                                    <div className="sub-editProfile">Job</div>
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
                                    <div className="sub-editProfile"> Department</div>
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
                                    <div className="sub-editProfile">Location / Plan</div>
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
                                    <div className="sub-editProfile">Email</div>
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
                                    <div className="sub-editProfile">Contact</div>
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
                            <div className="row-editProfile" style={{ alignItems: "center" }}>
                                <div
                                    style={{
                                        fontSize: "16px",
                                        textAlign: "left",
                                    }}
                                    onClick={this.handleClickChangePassword}
                                >
                                    Change Password
                                </div>
                            </div>
                            <div className="row" style={{ width: "100%" }}>
                                <div className="row" style={{ marginTop: "2rem", width: "100%" }}>
                                    <button className="button-submit" type="submit" onClick={this.handleSave}>Save</button>
                                </div>
                            </div>
                        </form>
                        :
                        <form style={{ marginTop: "1rem" }} onSubmit={this.handleSavePassword} >
                            <div className="container">
                                <div className="row-editProfile" style={{ alignItems: "center" }}>
                                    <div className="sub-editProfile">Old Password</div>
                                    <div>
                                        <input
                                            required={true}
                                            className="editInput"
                                            type="password"
                                            placeholder="Old Password"
                                            name="oldPassword"
                                            onChange={this.handleChange}
                                            value={this.state.oldPassword}
                                            style={{
                                                color: this.props.data.auth ? this.props.data.auth.message !== "succes" ? "red" : "#0050A1" : "#0050A1",
                                                borderBottom: this.props.data.auth ? this.props.data.auth.message !== "succes" ? "1px solid red" : "1px solid #C6C6C6" : "1px solid #C6C6C6"
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row-editProfile" style={{ alignItems: "center" }}>
                                    <div className="sub-editProfile">New Password</div>
                                    <div>
                                        <input
                                            required={true}
                                            className="editInput"
                                            type="password"
                                            name="newPassword"
                                            placeholder="New Password"
                                            onChange={this.handleChange}
                                            value={this.state.newPassword}
                                            style={{
                                                color: this.state.newPassword ? this.state.newPassword.length < 6 ? "red" : "#0050A1" : "#0050A1",
                                                borderBottom: this.state.newPassword ? this.state.newPassword.length < 6 ? "1px solid red" : "1px solid #C6C6C6" : "1px solid #C6C6C6"
                                            }}
                                        />
                                        <div
                                            style={this.state.newPassword ? this.state.newPassword.length < 6 ? { width: "280px", color: "red", display: "block", fontSize: "14px" } : { display: "none" } : { display: "none" }}>
                                            Password must be at least 6 characters.
                                        </div>
                                    </div>
                                </div>
                                <div className="row-editProfile" style={{ alignItems: "center" }}>
                                    <div className="sub-editProfile"> Confirm Password</div>
                                    <div>
                                        <input
                                            required={true}
                                            className="editInput"
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm New Password"
                                            onChange={this.handleChange}
                                            value={this.state.confirmPassword}
                                        />
                                        <div className="sub-title" style={this.state.confirmPassword ? this.state.newPassword !== this.state.confirmPassword ? { color: "red", display: "block", fontSize: "14px" } : { display: "none" } : { display: "none" }}>Password doesn't match!.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ width: "100%" }}>
                                <div className="row" style={{ marginTop: "2rem", width: "100%" }}>
                                    <button className="button-submit" type="submit" onClick={this.handleSavePassword}>Save</button>
                                    <button className="button-submit" type="submit" onClick={this.handleClickChangePassword} style={{ marginTop: "10px" }}>Discard</button>
                                </div>
                            </div>
                            <div
                                style={this.state.success ? { width: "100%", color: "green", display: "block", fontSize: "14px" } : { display: "none" }}>
                                Password has been changed.
                            </div>
                            <div
                                style={this.state.passwordSalah ? { width: "100%", color: "red", display: "block", fontSize: "14px" } : { display: "none" }}>
                                Incorrect Password!
                            </div>
                        </form>
                    }
                </div>
            </div >


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