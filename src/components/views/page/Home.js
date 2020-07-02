import React, { Component } from 'react'
import '../../../loading.css';
import '../../../assets/style.css';
import NavbarTop from '../navbar/NavbarTopHome';
import NavbarBottom from '../navbar/NavbarBottom';
import axios from 'axios';
import io from 'socket.io-client'
import { Redirect } from 'react-router-dom';
import tickets from '../../../assets/img/tickets.png';
import { toast } from 'react-toastify';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clipboard from '../../../assets/img/clipboard.png';
import insurance from '../../../assets/img/insurance.png';
import problem from '../../../assets/img/problem.png';
import { Link } from 'react-router-dom';
import { fetchProductPending, fetchProductSuccess, fectProductError } from './../../../redux/action/action';
import { connect } from 'react-redux';
import users from '../../../redux/api/users';
import { prod } from '../../../redux/url/server';

const jwt = require('jsonwebtoken');
const url = prod;
const socketUrl = prod
const socket = io(socketUrl)

export class Home extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            persons: []
        };
    }
    initSocket = () => {
        this.setState({ socket })
        socket.on('MESSAGE_SENT-' + this.state.user_id, (data) => {
            toast.success("New Message")
            // this.createNotificationSubscription(data)
        })
    }

    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this.timerID = setInterval(
                () => this.tick(),
                60000
            );
        }
        this.props.userku();

        axios.get(url + `ticket/done`, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                this.setState({ jumlahDone: res.data.values.length })
            })
        axios.get(url + `ticket/queue`, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                this.setState({ jumlahQueue: res.data.values.length })
            })
        axios.get(url + `ticket/all`, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                this.setState({ jumlahAll: res.data.values.length })
            })
        jwt.verify(localStorage.getItem("jwt"), 'dimasputray', (err, decoded) => {
            if (err) {
                console.log("Error", err)
                localStorage.removeItem("jwt");
                // dispatch(loginFailed("Your session has expired"));
            }
            else {
                const user = decoded.data;
                this.setState({ ...user },
                    () => {
                        axios.get(url + `ticket/technician/` + this.state.user_id, {
                            headers: {
                                key: "8dfcb234a322aeeb6b530f20c8e9988e"
                            }
                        })
                            .then(res => {
                                this.setState({ jumlahTask: res.data.values.length })
                                this.initSocket()
                            })
                    }
                )
            }
        });
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentWillUnmount() {
        //console.log("PPPPPPP")
        this._isMounted = false;
    }

    render() {
        // const { data } = this.props;
        var today = new Date()
        var curHr = today.getHours()
        var waktu = ""
        if (curHr < 12) {
            waktu = "Morning"
        } else if (curHr < 18) {
            waktu = "Afternoon"
        } else {
            waktu = "Evening"
        }
        if (!localStorage.getItem("jwt")) return <Redirect to="/Login" />

        return (
            <div className="home">
                <NavbarTop />
                <div className="container" style={{ width: "100%" }}>
                    <div className="row rowHome">
                        <div className="lingkaran">
                            <h6 style={{ fontSize: "18px", color: "black" }}>{this.state.date.toLocaleTimeString([], { timeStyle: 'short' })}</h6>
                            <h6 style={{ fontSize: "10px", color: "#A4A6B3", textAlign: "center", letterSpacing: "0.2", marginTop: "-40px" }}>Good {waktu} !</h6>
                        </div>
                        <Link to='/ticket/queue' style={{ zIndex: 5 }}>
                            <div className="lingkaran"
                                style={{
                                    width: "140px",
                                    height: "140px",
                                    borderRadius: "50%",
                                    backgroundColor: "#fff",
                                    border: "3px solid #e8e8e8",

                                    margin: "0px -20px"
                                }}>
                                <h6 style={{ fontSize: "21px", color: "black" }}>{this.state.jumlahQueue ? this.state.jumlahQueue : "0"} Tickets</h6>
                                <p style={{ fontSize: "12px", color: "#A4A6B3", textAlign: "center", letterSpacing: "0.2", marginTop: "-40px" }}>Unassign</p>
                            </div>
                        </Link>
                        <Link to="/ticket/done">
                            <div className="lingkaran"
                                style={{
                                    width: "110px",
                                    height: "110px",
                                    borderRadius: "50%",
                                    backgroundColor: "#fff",
                                    border: "2px solid #e8e8e8"
                                }}>
                                <h6 style={{ fontSize: "18px", color: "black" }}>{this.state.jumlahDone ? this.state.jumlahDone : "0"} </h6>
                                <h6 style={{ fontSize: "10px", color: "#A4A6B3", textAlign: "center", letterSpacing: "0.2", marginTop: "-40px" }}>
                                    Task Done
                                </h6>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="menu-atas" style={{ display: "flex", width: "100%" }}>
                    <div className="menu"
                        style={{
                            width: "50%",
                            padding: "0px 10px"
                        }}>
                        <Link to="/ticket/all">
                            <div className="row" style={{
                                padding: "10px", margin: "0px",
                                borderRadius: "10px",
                                backgroundColor: "#fff",
                                border: "2px solid #DEDEDE",
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                            }}>

                                <div className="gambar" style={{ width: "40%", padding: "10px 0px" }}>
                                    <img src={tickets} alt="info" />
                                </div>
                                <div className="descTask-home" style={{ width: "60%" }}>
                                    <div className="desc-main" style={{ fontSize: "12px", fontWeight: "500" }}>All Ticket</div>
                                    <div className="desc-main" style={{ fontSize: "24px", fontWeight: "700" }}>{this.state.jumlahAll ? this.state.jumlahAll : "0"}</div>
                                    <div className="desc-main" style={{ fontSize: "12px", fontWeight: "500", textTransform: "uppercase" }}>queue</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="menu"
                        style={{
                            width: "50%",
                            padding: "0px 10px",
                        }}>
                        <Link to="/ticket/assign-to-me">
                            <div className="row" style={{
                                padding: "10px", margin: "0px", borderRadius: "10px",
                                backgroundColor: "#fff",
                                border: "2px solid #DEDEDE",
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                            }}>

                                <div className="gambar" style={{ width: "40%", padding: "10px 0px" }}>
                                    <img src={clipboard} alt="info" />
                                </div>
                                <div className="descTask-home" style={{ width: "60%" }}>
                                    <div className="desc-main" style={{ fontSize: "12px", fontWeight: "500" }}>Your Task</div>
                                    <div className="desc-main" style={{ fontSize: "24px", fontWeight: "700" }}>{this.state.jumlahTask ? this.state.jumlahTask : "0"}</div>
                                    <div className="desc-main" style={{ fontSize: "12px", fontWeight: "500", textTransform: "uppercase" }}>assign</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="menu_bawah" style={{
                    width: "100%",
                    height: "81px",

                }} >
                    <Link to='/report' >
                        <div className="menuReport"
                            style={{ padding: "0px 10px" }}
                        >
                            <div className="row" style={{
                                borderRadius: "10px",
                                padding: "10px",
                                backgroundColor: "#fff",
                                border: "2px solid #DEDEDE",
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                            }}>

                                <div className="gambar" style={{ width: "20%", padding: "5px 0px" }}>
                                    <img src={insurance} alt="info" />
                                </div>
                                <div className="descTask-home" style={{ width: "70%", textAlign: "left", paddingLeft: "20px" }}>
                                    <div className="desc-main" style={{ fontSize: "24px", fontWeight: "700" }}>Report</div>
                                    <div className="desc-main" style={{ fontSize: "12px", fontWeight: "300", textTransform: "uppercase" }}>summary</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/article'>
                        <div className="menuKnowlageBase"
                            style={{ padding: "0px 10px", paddingBottom: "70px" }}>
                            <div className="row" style={{
                                borderRadius: "10px",
                                padding: "10px",
                                backgroundColor: "#fff",
                                border: "2px solid #DEDEDE",
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            }}>
                                <div className="gambar" style={{ width: "20%", padding: "5px 0px" }}>
                                    <img src={problem} alt="info" />
                                </div>
                                <div className="descTask-home" style={{ width: "70%", textAlign: "left", paddingLeft: "20px" }}>
                                    <div className="desc-main" style={{ fontSize: "24px", fontWeight: "700" }}>Knowlage Base</div>
                                    <div className="desc-main" style={{ fontSize: "12px", fontWeight: "300", textTransform: "uppercase" }}>Problem Solving </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <NavbarBottom active="Home" />
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    data: state
})
const mapDispacthToProps = (dispatch) => {
    return {
        fetchPendingku: () => dispatch(fetchProductPending()),
        fetchSuccessku: () => dispatch(fetchProductSuccess()),
        fetchErrorku: () => dispatch(fectProductError()),
        userku: () => dispatch(users()),
    }
}

export default connect(
    mapStateToProps, mapDispacthToProps
)(Home)
