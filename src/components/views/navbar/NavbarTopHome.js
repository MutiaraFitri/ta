import React, { Component } from 'react'
import top from '../../../assets/img/tops.png';
import notification from '../../../assets/img/notification.png';
import users from '../../../redux/api/users';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { prod } from '../../../redux/url/server';
import { Link } from 'react-router-dom';
import axios from 'axios';
const jwt = require('jsonwebtoken');


export class NavbarTopHome extends Component {
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
        console.log("Profile", profile)
        return (
            <div className="container" style={{ width: "100%" }}>
                <div style={{ backgroundImage: "url(" + top + ")", height: "300px", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
                    <div className="row" style={{ width: "100%", marginBottom: "0px", marginTop: "0px" }} >
                        <div style={{ textAlign: "right", width: "100%", marginRight: "10px", marginTop: "10px" }}>
                            <Link to="/Notification">
                                <img src={notification} alt="ehe" />
                            </Link>
                        </div>
                    </div>
                    <Link to="/profile">
                        <div className="profile"
                            style={{
                                width: "110px",
                                height: "110px",
                                borderRadius: "50%",
                                overflow: "hidden",
                                margin: "0px auto"
                            }}>
                            <img src={profile} alt="man" style={{ width: "100%" }} />
                        </div>
                    </Link>
                    <div>

                        <div style={{ color: "white", textAlign: "center" }}>Welcome, {!(data.personState.data) ? <Skeleton duration={1} /> : data.personState.data ? data.personState.data.user_firstname : "Technician"} </div>
                        <div style={{ color: "white", fontSize: "14px", paddingTop: "5px", textAlign: "center" }}>IT Service</div>
                    </div>
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
        userku: () => dispatch(users())
    }
}
export default connect(
    mapStateToProps, mapDispacthToProps
)(NavbarTopHome)
