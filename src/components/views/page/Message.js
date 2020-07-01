import React, { Component } from 'react';
import baloon from './../../../assets/img/side-chat.png';
import baloon2 from './../../../assets/img/side-chat-2.png';
import { Link } from 'react-router-dom';
import moment from 'moment'
import axios from 'axios';
import { ticketsById } from '../../../redux/api/ticket';
import io from 'socket.io-client'
import { users } from '../../../redux/api/users';
import { connect } from 'react-redux';
import { prod } from '../../../redux/url/server'
import jwt from "jsonwebtoken";
import back from './../../../assets/img/back.png';
import _ from "lodash";

const url = prod
const socketUrl = url
const socket = io(socketUrl)
class Message extends Component {
    state = {
        tiket: [],
        message: "",
        message_ticket_id: this.props.match.params.id,
        socket: null,
        employeeTyping: false
    }
    initSocket = () => {
        // this.setState({ socket })
        console.log('MESSAGE_SENT-' + this.props.match.params.id)
        socket.on('MESSAGE_SENT-' + this.props.match.params.id, (data) => {
            //   toast("wow")
            this.fetchMessage();
        })
        socket.on('TYPING-T' + this.props.match.params.id, ({ isTyping }) => {
            this.setState({
                employeeTyping: isTyping
            })
        })
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

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }
    componentDidMount() {
        this.initSocket()
        this.scrollToBottom();
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
            var imgEmployee = (values.employee_image) ? (values.employee_image) ? values.employee_image : "defaultEmploy.png" : "defaultEmploy.png";
            var gambarEmployee = 'https://api.ict-servicedesk.xyz/avatar/employee/' + imgEmployee;
            return <div key={key} style={{ width: "85%", margin: "0px auto" }}>
                <div>
                    <div className="title-kendala" style={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
                        <p style={{ fontSize: "20px", color: "black", marginTop: "-20px", fontWeight: "700" }}>{values.ticket_subject}</p>
                    </div>
                    <div style={{ width: "100%", display: "flex", marginTop: "-6px" }}>
                        <div className="pengirim" style={{ width: "15%" }}>
                            <div className="foto-pengim" style={{
                                width: "40px", backgroundColor: "#F1AEAE",
                                height: "40px", borderRadius: "50%", border: "1px solid", margin: "0px auto", overflow: "hidden"
                            }}>
                                <img src={gambarEmployee} alt="mann" style={{ width: "100%" }} />
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
                    <div style={{ width: "100%", display: "flex" }} key={key}>
                        <img src={baloon} width="10" height="15" style={{ margin: "5px 0px" }} alt="baloon" />
                        <div className="description" style={{ backgroundColor: "#fff", padding: "15px", wordWrap: "break-word", maxWidth: "80%", margin: "5px 0px", borderRadius: "0px 10px 10px 10px" }}>
                            {/* <div className="title-kotak" style={{ textAlign: "left", color: "#0050A1", fontWeight: "700" }}>Dimas</div> */}
                            <div className="title-kotak" style={{ textAlign: "left", color: "#000", fontSize: "16px", fontWeight: "100" }}>{values.message}</div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div style={{ width: "100%", clear: "both" }} key={key}>
                        <img src={baloon2} width="10" height="15" style={{ margin: "5px 0px", float: "right", transform: "scale(-1, 1)" }} alt="baloon" />
                        <div className="description" style={{ backgroundColor: "#c6e6f8", float: "right", wordWrap: "break-word", maxWidth: "80%", padding: "15px", margin: "5px 0px", borderRadius: "10px 0px 10px 10px" }}>
                            {/* <div className="title-kotak" style={{ textAlign: "right", color: "#0050A1", fontWeight: "700" }}>Dimas</div> */}
                            <div className="title-kotak" style={{ textAlign: "right", color: "#000", fontSize: "16px", fontWeight: "100" }}>{values.message}</div>
                        </div>
                    </div>
                );
            }
        });
        if (!_.isEmpty(toDos)) {
            return toDos;
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSend = () => {
        socket.emit('MESSAGE', {
            userId: this.state.tiket[0].ticket_employee_id,
            messageId: this.props.match.params.id,
            from: this.state.tiket[0].technician_firstname,
            message: this.state.message,
        })
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
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSend();
        }
    }
    sendTyping = () => {
        this.lastUpdateTime = Date.now()
        if (!this.state.isTyping) {
            this.setState({ isTyping: true })
            this.sendTypingKu(true)
            this.startCheckingTyping()
        }
    }

    /*
	*	startCheckingTyping
	*	Start an interval that checks if the user is typing.
	*/
    startCheckingTyping = () => {
        console.log("Typing");
        this.typingInterval = setInterval(() => {
            if ((Date.now() - this.lastUpdateTime) > 300) {
                this.setState({ isTyping: false })
                this.stopCheckingTyping()
            }
        }, 300)
    }

	/*
	*	stopCheckingTyping
	*	Start the interval from checking if the user is typing.
	*/
    stopCheckingTyping = () => {
        console.log("Stop Typing");
        if (this.typingInterval) {
            clearInterval(this.typingInterval)
            this.sendTypingKu(false)
        }
    }
    componentWillUnmount() {
        this.stopCheckingTyping()
    }

    sendTypingKu = (type) => {
        socket.emit("TYPING", {
            ticketId: "E" + this.props.match.params.id,
            isTyping: type
        })
    }
    renderIsTyping = () => {
        if (this.state.employeeTyping) {
            return <div style={{ float: "left", marginLeft: "20px", padding: "10px 0px" }}><i>Typing . . .</i></div>
        }
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
                    Message
                </div>
                <div style={{ marginTop: "50px", width: "414px", position: "fixed", backgroundColor: "#fff", zIndex: "2" }}>
                    {this.renderToDos()}
                </div>
                <div className="kotak" style={{ marginTop: "140px", paddingTop: "20px", width: "100%", marginBottom: "7px" }}>
                    {this.renderMessage()}
                    {this.renderIsTyping()}
                </div>
                <div style={{ float: "left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
                <div style={{ width: "414px", display: "flex", backgroundColor: "#0050A1", bottom: "0px", position: "fixed", marginBottom: "0px" }}>
                    <div style={{ width: "90%", margin: "0px auto", minHeight: "50px", display: "flex" }}>
                        <div style={{ width: "80%", padding: "10px" }}>
                            <textarea placeholder="Type Message"
                                onKeyUp={e => { e.keyCode !== 13 && this.sendTyping() }}
                                style={{ height: this.state.message.length > 54 ? "100px" : "20px", width: "100%", padding: "10px 17px", borderRadius: "20px", fontSize: "17px" }} name="message" onKeyPress={this.handleKeyPress} onChange={this.handleChange} value={this.state.message} />
                        </div>
                        <div style={{ width: "20%", height: "100%" }} onClick={this.handleSend}>
                            <span className="material-icons" style={{ marginTop: "17px", color: "#fff", marginLeft: "15px", fontSize: "24px" }}>
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
