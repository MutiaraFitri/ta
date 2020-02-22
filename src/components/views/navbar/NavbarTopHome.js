import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo_komatsu.png';
import arrow from '../../../assets/img/left-arrow.png';
import top from '../../../assets/img/tops.png';
import mann from '../../../assets/img/mann.png';
import menu from '../../../assets/img/menu.png';
import notification from '../../../assets/img/notification.png';
import axios from 'axios';
import users from '../../../redux/api/users';
import { connect } from 'react-redux';

export class NavbarTop extends Component {

    componentDidMount() {
        this.props.userku();
    }
    render() {
        const { data } = this.props;

        // const back = (this.props.back == "true") ?<Link to="." ><div className="back-button"><img src={arrow} alt="" style={{padding:"15px"}}/></div></Link>:'';
        // const title = (this.props.title) ? <div className="title-pages" style={{paddingTop:"5px"}}>{this.props.title}</div>:<img src={logo} alt="Komatsu" style={{ margin: "0 auto", height: "30px",paddingTop:"15px" }} />;
        return (
            <div className="container" style={{ width: "100%" }}>
                <div style={{ backgroundImage: "url(" + top + ")", height: "300px", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
                    <div className="row" style={{ width: "100%", marginBottom: "0px", marginTop: "0px" }} >
                        <div style={{ textAlign: "right", width: "100%", marginRight: "10px", marginTop: "10px" }}>
                            <img src={notification} alt="ehe" />
                        </div>
                    </div>
                    <div className="profile"
                        style={{
                            width: "110px",
                            height: "110px",
                            borderRadius: "50%",
                            overflow: "hidden",
                            margin: "0px auto"
                        }}>
                        <img src={mann} alt="man" style={{ width: "100%" }} />
                    </div>
                    <div>
                        <div style={{ color: "white", textAlign: "center" }}>Welcome, {(data.personState.data) ? data.personState.data.values[0].first_name : ""} </div>
                        <div style={{ color: "white", fontSize: "14px", paddingTop: "5px", textAlign: "center" }}>IT Service</div>
                    </div>
                </div>
                {/* <div className="menu" style={{ position: "absolute", top: "7px",marginLeft:"5px" }}>
                    <img src={menu} alt="" />
                </div>
                <div className="row" style={{ marginTop: "0px",width:"100%" }}>
                    <img src={top} style={{ marginTop: "-50px", width: "100%" }} />
                </div>
                <div className="row" style={{ position: "absolute", top: "0px",marginLeft:"330px" }} >
                    < img src={notification} alt="" />
                </div>
                <div style={{ marginTop: "-200px", width: "100%", marginBottom: "20px" }}>
                    <div style={{ color: "white", textAlign: "center" }}>Welcome, Yayan</div>
                    <div style={{ color: "white", fontSize: "14px", paddingTop: "5px", textAlign: "center" }}>IT Service</div>
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
                </div> */}
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
)(NavbarTop)
