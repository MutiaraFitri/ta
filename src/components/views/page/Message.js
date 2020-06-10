import React, { Component } from 'react';
import priority from './../../../assets/img/priority.png';
import garbage from './../../../assets/img/garbage.png';
import tambah from './../../../assets/img/tambah.png';
import baloon from './../../../assets/img/side-chat.png';
import baloon2 from './../../../assets/img/side-chat-2.png';
import NavbarBottom from '../navbar/NavbarBottom';
import { Link } from 'react-router-dom';
import mann from './../../../assets/img/mann.png';
import moment from 'moment'
import axios from 'axios';
import write from '../../../assets/img/write.png';
import { ticketsById } from '../../../redux/api/ticket';
import { users } from '../../../redux/api/users';
import { connect } from 'react-redux';
import { dev, prod } from '../../../redux/url/server'
import jwt from "jsonwebtoken";
import TicketDetailDesc from '../../TicketDetailDesc';
import back from './../../../assets/img/back.png';
import _ from "lodash";

const url = prod
class Message extends Component {
    state = {
        tiket: [],
        message: "",
        message_ticket_id: this.props.match.params.id
    }

    fetchData = () => {
        axios.get(url + `ticket/id/` + this.props.match.params.id, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const tiket = res.data.values;
                console.log("data", tiket)
                this.setState({
                    tiket
                })
            })
    }

    componentDidMount() {
        this.props.userku();
        this.fetchData()
        this.fetchMessage()
        jwt.verify(localStorage.getItem("jwt"), 'dimasputray', (err, decoded) => {
            if (err) {
                console.log("Error", err)
                localStorage.removeItem("jwt");
                // dispatch(loginFailed("Your session has expired"));
            }
            const user = decoded.data;
            this.setState({
                message_technician_id: user.user_id
            })
        });
    }

    fetchMessage = () => {
        axios.get(url + `message/` + this.props.match.params.id, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const state_message = res.data.values;
                this.setState({
                    state_message
                })
            })
    }

    renderToDos() {
        const toDos = _.map(this.state.tiket, (values, key) => {
            return <div key={key} style={{ width: "90%", margin: "0px auto" }}>
                <div>
                    <div className="title-kendala" style={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
                        <p style={{ fontSize: "20px", color: "#A4A6B3", fontWeight: "700" }}>Issue</p>
                        <p style={{ fontSize: "20px", color: "black", marginTop: "-20px", fontWeight: "700" }}>{values.ticket_subject}</p>
                    </div>
                    <div style={{ width: "100%", display: "flex", marginTop: "-6px" }}>
                        <div className="pengirim" style={{ width: "15%" }}>
                            <div className="foto-pengim" style={{
                                width: "40px", backgroundColor: "#F1AEAE",
                                height: "40px", borderRadius: "50%", border: "1px solid", margin: "0px auto", overflow: "hidden"
                            }}>
                                <img src={mann} alt="mann" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className="nama-pengirim" style={{ width: "80%", marginLeft: "5px" }}>
                            <div className="nama" style={{ fontSize: "16px", color: "black", fontWeight: "bold", textAlign: "left" }}>{values.employee_firstname} {values.employee_lastname}</div>
                            <div className="row" style={{ marginTop: "-4px" }}>
                                <div className="time" style={{ width: "50%", fontSize: "14px", color: "black", textAlign: "left" }}> {moment(values.ticket_timestamp).format('L') + " (" + moment(values.ticket_timestamp).format('LT')}) </div>
                                <Link to={'/ticket/detail/' + values.ticket_id} style={{ width: "50%", fontSize: "14px", textAlign: "right", textDecoration: "underline", fontStyle: "italic" }}>Details Issue </Link>

                            </div>
                        </div>
                    </div>
                </div>

            </div >;
        });
        if (!_.isEmpty(toDos)) {
            return toDos;
        }
    }
    renderMessage() {
        const toDos = _.map(this.state.state_message, (values, key) => {
            if (values.message_employee_id) {
                return (
                    <div style={{ width: "100%", display: "flex" }}>
                        <img src={baloon} width="20" height="30" style={{ margin: "10px 0px" }} />
                        <div className="description" style={{ backgroundColor: "#fff", width: "60%", padding: "20px", margin: "10px 0px" }}>
                            {/* <div className="title-kotak" style={{ textAlign: "left", color: "#0050A1", fontWeight: "700" }}>Dimas</div> */}
                            <div className="title-kotak" style={{ textAlign: "left", color: "#000", fontSize: "16px", fontWeight: "100" }}>{values.message}</div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div style={{ width: "100%", display: "flex" }}>
                        <div style={{ width: "30%", height: "10px" }}></div>
                        <div className="description" style={{ backgroundColor: "#c6e6f8", width: "60%", padding: "20px", margin: "10px 0px" }}>
                            {/* <div className="title-kotak" style={{ textAlign: "right", color: "#0050A1", fontWeight: "700" }}>Dimas</div> */}
                            <div className="title-kotak" style={{ textAlign: "right", color: "#000", fontSize: "16px", fontWeight: "100" }}>{values.message}</div>
                        </div>
                        <img src={baloon2} width="20" height="30" style={{ margin: "10px 0px", transform: "scale(-1, 1)" }} />
                    </div>
                );
            }
        });
        if (!_.isEmpty(toDos)) {
            return toDos;
        }
    }

    handleButtonAssignToMe = () => {
        axios.get(`https://api.ict-servicedesk.xyz/ticket/id/` + this.props.match.params.id, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const tiket = res.data.values;
                console.log("data", tiket[0])
                if (!tiket[0].ticket_technician_id) {
                    axios.put('https://api.ict-servicedesk.xyz/ticket/assign/' + this.props.match.params.id, { technician_id: this.props.data.personState.data.user_id }, {
                        headers: {
                            key: '8dfcb234a322aeeb6b530f20c8e9988e'
                        }
                    }
                    )
                        .then(res => res.data)
                        .then(res => {
                            if (res.error) {
                                throw (res.error);
                            }
                            console.log("hasil", res)
                            this.fetchData()
                        })
                        .catch(error => {
                            console.log("Error " + error);
                        })
                }
            })
        console.log("Assign To me");
    }
    handleButtonMakeItPriority = () => {
        console.log("Make it Priority");
    }
    handleButtonSpam = () => {
        axios.get(`https://api.ict-servicedesk.xyz/ticket/id/` + this.props.match.params.id, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const tiket = res.data.values;
                console.log("data", tiket[0])
                if (!tiket[0].ticket_technician_id) {
                    axios.put('https://api.ict-servicedesk.xyz/ticket/spam/' + this.props.match.params.id, { technician_id: this.props.data.personState.data.user_id }, {
                        headers: {
                            key: '8dfcb234a322aeeb6b530f20c8e9988e'
                        }
                    }
                    )
                        .then(res => res.data)
                        .then(res => {
                            if (res.error) {
                                throw (res.error);
                            }
                            console.log("hasil", res)
                            this.fetchData()
                        })
                        .catch(error => {
                            console.log("Error " + error);
                        })
                }
            })
        console.log("Spam");
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSend = () => {
        axios.post(url + `message`, this.state, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                this.fetchMessage()
                this.setState({
                    message: ""
                })
            })
    }
    render() {
        //console.log(this.props.match.params.id)
        return (
            <div className="home" style={{ paddingBottom: "10vh", minHeight: "90vh", backgroundColor: "#F4F4F6", }}>
                <div className="navbar-message">
                    <div className="menu" style={{ position: "absolute", top: "7px" }}>
                        <Link to={'/ticket/detail/' + this.state.message_ticket_id}>
                            <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
                                <img src={back} alt="back" style={{ width: "20px" }} />
                            </div>
                        </Link>
                    </div>
                    Detail Ticket
                </div>
                <div style={{ marginTop: "50px", width: "414px", position: "fixed", backgroundColor: "#fff", zIndex: "2" }}>
                    {this.renderToDos()}
                </div>
                <div className="kotak" style={{ marginTop: "180px", paddingTop: "20px", width: "100%" }}>
                    {this.renderMessage()}
                </div>
                <div style={{ width: "414px", display: "flex", backgroundColor: "#0050A1", bottom: "0px", position: "fixed", marginBottom: "0px" }}>
                    <div style={{ width: "90%", margin: "0px auto", minHeight: "50px", display: "flex" }}>
                        <div style={{ width: "80%", padding: "10px" }}>
                            <textarea placeholder="Type Message" style={{ height: this.state.message.length > 54 ? "100px" : "20px", width: "100%", padding: "10px 17px", borderRadius: "20px", fontSize: "17px" }} name="message" onChange={this.handleChange} value={this.state.message} />
                        </div>
                        <div style={{ width: "20%", height: "100%" }} onClick={this.handleSend}>
                            <span class="material-icons" style={{ marginTop: "17px", color: "#fff", marginLeft: "15px", fontSize: "24px" }}>
                                send
                            </span>
                        </div>
                    </div>
                </div>
                {/* <NavbarBottom active="Ticket" /> */}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    data: state
})
const mapDispacthToProps = (dispatch) => {
    return {
        userku: () => dispatch(users()),
        ticket: (id) => dispatch(ticketsById(id)),
    }
}

export default connect(
    mapStateToProps, mapDispacthToProps
)(Message)
