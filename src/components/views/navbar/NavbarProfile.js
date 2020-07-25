import React, { Component } from 'react'
import profileBg from '../../../assets/img/bgProfile.png';
import back from './../../../assets/img/back.png';
import { connect } from 'react-redux';
import users from '../../../redux/api/users';
import { Link } from 'react-router-dom';
import { prod } from '../../../redux/url/server';
import axios from 'axios';
const jwt = require('jsonwebtoken');


export class NavbarProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        this.props.userku();

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
        const { data } = this.props;


        // const back = (this.props.back == "true") ?<Link to="." ><div className="back-button"><img src={arrow} alt="" style={{padding:"15px"}}/></div></Link>:'';
        // const title = (this.props.title) ? <div className="title-pages" style={{paddingTop:"5px"}}>{this.props.title}</div>:<img src={logo} alt="Komatsu" style={{ margin: "0 auto", height: "30px",paddingTop:"15px" }} />;
        const profile = this.state.technician_image ? "https://api.ict-servicedesk.xyz/avatar/technician/" + this.state.technician_image : "https://api.ict-servicedesk.xyz/avatar/technician/defaultEmploy.png";
        console.log(profile)
        return (
            <div className="container" style={{ width: "100%" }}>
                <Link to='/'>
                    <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
                        <img src={back} alt="back" style={{ width: "20px" }} />
                    </div>
                </Link>
                <div className="row">
                    <img src={profileBg} alt="profile" style={{ marginTop: "-90px", width: "100%" }} />
                </div>
                <div style={{ position: "absolute", top: "175px", width: "100%", left: "0px" }}>
                    <div style={{ color: "black", fontSize: "20px" }}> {(this.state.technician_firstname) ? this.state.technician_firstname : ""} {(this.state.technician_lastname) ? this.state.technician_lastname : ""} </div>
                    <div style={{ color: "black", fontSize: "14px" }}>Technician ID : <span style={{ fontSize: "14px", color: "black" }}> {(this.state.user_id) ? this.state.user_id : ""}</span></div>
                </div>
                <div className="profile"
                    style={{
                        top: "50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        border: "1px solid",
                        position: "absolute",
                        overflow: "hidden"
                    }}>
                    <img src={profile} alt="img" style={{ width: "100%" }} />
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    data: state
})
const mapDispacthToProps = (dispatch) => {
    return {
        userku: () => dispatch(users()),
    }
}
export default connect(
    mapStateToProps, mapDispacthToProps
)(NavbarProfile)
