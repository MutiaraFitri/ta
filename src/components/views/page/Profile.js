import React, { Component } from 'react';
import NavbarProfile from '../navbar/NavbarProfile';
import job from './../../../assets/img/job.png';
import email from './../../../assets/img/email.png';
import build from './../../../assets/img/building.png';
import place from './../../../assets/img/place.png';
import NavbarBottom from '../navbar/NavbarBottom';
import { connect } from 'react-redux';
import technician from '../../../redux/api/technician';

export class Profile extends Component {

    componentDidMount() {
        this.props.teknisiku();
    }
    render() {
        const { data } = this.props;
        const departement = !(data.personState.data) ? "null" : (data.personState.data.values[0].departement) ? data.personState.data.values[0].departement : "Your Departement";
        const location = !(data.personState.data) ? "null" : (data.personState.data.values[0].location) ? data.personState.data.values[0].locaction : "Your Address";
        const contact = !(data.personState.data) ? "null" : (data.personState.data.values[0].email) ? data.personState.data.values[0].email : "Your Mail";
        const skill = !(data.personState.data) ? "null" : (data.personState.data.values[0].skill) ? data.personState.data.values[0].skill : "Your Skill";

        const colorSkill =
            !(data.personState.data) ? "#837E7E" : (data.personState.data.values[0].skill) ? "#3f4377" : "#837E7E";
        const colorDepartement =
            !(data.personState.data) ? "#837E7E" : (data.personState.data.values[0].departement) ? "#3f4377" : "#837E7E";
        const colorContact =
            !(data.personState.data) ? "#837E7E" : (data.personState.data.values[0].email) ? "#3f4377" : "#837E7E";
        const colorLocation =
            !(data.personState.data) ? "#837E7E" : (data.personState.data.values[0].location) ? "#3f4377" : "#837E7E";


        return (
            <div className="home" style={{ paddingBottom: "70px" }}>
                <NavbarProfile />

                <div className="description" style={{ backgroundColor: "#EDF4FF", width: "70%", margin: "0px auto", padding: "20px", marginTop: "120px", borderRadius: "10px" }}>
                    <div className="title-kotak" style={{ textAlign: "left", letterSpacing: "2.7px", color: "black", fontSize: "15px", fontWeight: "bold" }}>About</div>
                    <div className="row" style={{ width: "100%" }}>
                        <div className="gambar" style={{ width: "30%" }}>
                            <img src={job} alt="info" />
                        </div>
                        <div className="desc" style={{ width: "70%", textAlign: "left", height: "50px" }}>
                            <div className="desc-main" style={{ fontSize: "15px", color: colorSkill }}>{skill}</div>
                        </div>
                        <div className="gambar" style={{ width: "30%" }}>
                            <img src={build} alt="info" />
                        </div>
                        <div className="desc" style={{ width: "70%", textAlign: "left", height: "50px" }}>
                            <div className="desc-main" style={{ fontSize: "15px", color: colorDepartement }}>{departement}</div>
                        </div>
                        <div className="gambar" style={{ width: "30%" }}>
                            <img src={place} alt="info" />
                        </div>
                        <div className="desc" style={{ width: "70%", textAlign: "left", height: "50px" }}>
                            <div className="desc-main" style={{ fontSize: "15px", color: colorLocation }}>{location}</div>
                        </div>
                    </div>
                    <div className="title-kotak" style={{ textAlign: "left", letterSpacing: "2.7px", color: "black", fontSize: "15px" }}>Contact</div>
                    <div className="row" style={{ width: "100%" }}>
                        <div className="gambar" style={{ width: "30%" }}>
                            <img src={email} alt="info" />
                        </div>
                        <div className="desc" style={{ width: "70%", textAlign: "left" }}>
                            <div className="desc-main" style={{ fontSize: "15px", color: colorContact }}>{contact}</div>
                        </div>

                    </div>
                </div>

                <div className="row" style={{ width: "100%" }}>
                    <div className="kotak-menu" style={{ width: "60%", margin: "0px auto", backgroundColor: "#141AA2", height: "40px", marginTop: "30px" }}>
                        <div style={{ padding: "5px" }}>
                            <div style={{ border: "1px solid #141AA2", borderRadius: "4px" }}>
                                <div className="desc-menu" style={{ fontSize: "18px", color: "#ffff" }}>
                                    LOGOUT
                                </div>
                            </div>
                        </div>
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
        teknisiku: () => dispatch(technician()),
    }
}
export default connect(
    mapStateToProps, mapDispacthToProps
)(Profile)
