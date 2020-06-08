import React, { Component } from 'react'
import profileBg from '../../../assets/img/bgProfile.png';
import back from './../../../assets/img/back.png';
import { connect } from 'react-redux';
import users from '../../../redux/api/users';
import { Link } from 'react-router-dom';
import { dev, prod } from '../../../redux/url/server';


export class NavbarProfile extends Component {

    componentDidMount() {
        this.props.userku();
    }
    render() {
        const { data } = this.props;


        // const back = (this.props.back == "true") ?<Link to="." ><div className="back-button"><img src={arrow} alt="" style={{padding:"15px"}}/></div></Link>:'';
        // const title = (this.props.title) ? <div className="title-pages" style={{paddingTop:"5px"}}>{this.props.title}</div>:<img src={logo} alt="Komatsu" style={{ margin: "0 auto", height: "30px",paddingTop:"15px" }} />;
        const profile = (data.personState.data) ? (data.personState.data) ? data.personState.data.user_image : "mann.png" : "mann.png"
        const gambar = prod + 'avatar/technician/' + profile
        console.log(gambar)
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
                    <div style={{ color: "black", fontSize: "20px" }}> {(data.personState.data) ? (data.personState.data.data) ? data.personState.data.data.user_firstname : "" : ""} {(data.personState.data) ? (data.personState.data.data) ? data.personState.data.data.user_lastname : "" : ""} </div>
                    <div style={{ color: "black", fontSize: "14px" }}>Technician ID <span style={{ fontSize: "14px" }}> {(data.personState.data) ? (data.personState.data.data) ? data.personState.data.data.user_id : "" : ""}</span></div>
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
                    <img src={gambar} alt="man" style={{ width: "100%" }} />
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
