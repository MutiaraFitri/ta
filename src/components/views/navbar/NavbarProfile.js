import React, { Component } from 'react'
import profile from '../../../assets/img/bgProfile.png';
import mann from '../../../assets/img/mann.png';
import back from './../../../assets/img/back.png';
import { connect } from 'react-redux';
import technician from '../../../redux/api/technician';
import left from './../../../assets/img/left-arrow.png';
import { Link } from 'react-router-dom';


export class NavbarProfile extends Component {

    componentDidMount() {
        this.props.teknisiku();
    }
    render() {
        const { data } = this.props;


        // const back = (this.props.back == "true") ?<Link to="." ><div className="back-button"><img src={arrow} alt="" style={{padding:"15px"}}/></div></Link>:'';
        // const title = (this.props.title) ? <div className="title-pages" style={{paddingTop:"5px"}}>{this.props.title}</div>:<img src={logo} alt="Komatsu" style={{ margin: "0 auto", height: "30px",paddingTop:"15px" }} />;
        return (
            <div className="container" style={{ width: "100%" }}>
                <Link to='/'>
                    <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
                        <img src={back} alt="back" style={{ width: "20px" }} />
                    </div>
                </Link>
                <div className="row">
                    <img src={profile} alt="profile" style={{ marginTop: "-90px", width: "100%" }} />
                </div>
                <div style={{ position: "absolute", top: "175px", width: "100%", left: "0px" }}>
                    <div style={{ color: "black", fontSize: "20px" }}> {(data.personState.data) ? data.personState.data.values[0].first_name : ""} {(data.personState.data) ? data.personState.data.values[0].last_name : ""} </div>
                    <div style={{ color: "black", fontSize: "14px" }}>Technician ID <span style={{ fontSize: "14px" }}> {(data.personState.data) ? data.personState.data.values[0].nrp : ""}</span></div>
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
                    <img src={mann} alt="man" style={{ width: "100%" }} />
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
        teknisiku: () => dispatch(technician()),
    }
}
export default connect(
    mapStateToProps, mapDispacthToProps
)(NavbarProfile)
