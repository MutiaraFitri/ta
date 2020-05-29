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
// import users from '../../../redux/api/users';
import { userLogOut, users } from '../../../redux/api/users';

export class Profile extends Component {

    handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        this.props.logOut()
    };
    componentDidMount() {
        this.props.userku();
    }
    render() {
        if (!localStorage.getItem("jwt")) return <Redirect to="/Login" />
        const { data } = this.props;
        console.log(data.personState.data)
        const department = (data.personState.data) ? data.personState.data.user_department: "Your Departement";
        const address = (data.personState.data) ? data.personState.data.user_address : "Your Address";
        const email = (data.personState.data) ? data.personState.data.user_email  :"Your Mail";
        const job = (data.personState.data) ? (data.personState.data.user_job)   : "Your Skill";
        const phone = (data.personState.data) ? data.personState.data.user_contact : "Your Phone Number";

        const colorJob =
            !(data.personState.data) ? "#837E7E" : (data.personState.data.data) ? "#3f4377" : "#837E7E";
        const colorDepartment =
            !(data.personState.data) ? "#837E7E" : (data.personState.data.data) ? "#3f4377" : "#837E7E";
        const colorContact =
            !(data.personState.data) ? "#837E7E" : (data.personState.data.data) ? "#3f4377" : "#837E7E";
        const colorAddress =
            !(data.personState.data) ? "#837E7E" : (data.personState.data.data) ? "#3f4377" : "#837E7E";


        return (
            <div className="home" style={{ paddingBottom: "70px" }}>
                <NavbarProfile />

                <div className="description" style={{ backgroundColor: "#EDF4FF", width: "70%", margin: "0px auto", padding: "20px", marginTop: "120px", borderRadius: "10px" }}>
                    <div className="title-kotak" style={{ textAlign: "left", letterSpacing: "2.7px", color: "black", fontSize: "15px", fontWeight: "bold" }}>About</div>
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
                            <div className="desc-main" style={{ fontSize: "15px", color: colorContact }}>{email}</div>
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
                        <button className="button-submit" type="submit" onClick={this.handleLogout}>logOut</button>
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
