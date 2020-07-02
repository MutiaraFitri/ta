import React, { Component } from 'react';
import priority from './../../../assets/img/priority.png';
import garbage from './../../../assets/img/garbage.png';
import tambah from './../../../assets/img/tambah.png';
import { ToastContainer, toast, Slide } from 'react-toastify';
import io from 'socket.io-client'
import 'react-toastify/dist/ReactToastify.css';
import NavbarBottom from '../navbar/NavbarBottom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ticketsById } from '../../../redux/api/ticket';
import { users } from '../../../redux/api/users';
import { connect } from 'react-redux';
// import TicketDetailDesc from '../../TicketDetailDesc';
import back from './../../../assets/img/back.png';
import _ from "lodash";
import * as moment from 'moment';
import { prod } from './../../../redux/url/server'

const url = prod
const socketUrl = url

const socket = io(socketUrl)
class DetailTicket extends Component {
    state = {
        tiket: [],
        ticket_status: -1,
        bottom: "-240px",
        confirmation: false,
        confirmationTitle: ""
    }

    handleChange = (e) => {
        this.setState({
            ticket_status: e.target.value,
            confirmation: !this.state.confirmation
        })
    }

    updateTicket = (data) => {
        this.setState({
            confirmation: !this.state.confirmation
        })
        var messageNotification = ""
        const notifDone = <div style={{ color: "white", textAlign: "center" }}>
            <span className="material-icons" style={{ fontSize: "20px", verticalAlign: "text-top", color: "white", marginRight: "5px" }}>
                done
            </span>
            Ticket Done !
        </div>
        const notifEscalated = <div style={{ color: "white", textAlign: "center" }}>
            <span className="material-icons" style={{ fontSize: "20px", verticalAlign: "text-top", color: "white", marginRight: "5px" }}>
                error_outline
            </span>
            Ticket Escalated !
        </div>
        const notifCancel = <div style={{ color: "white", textAlign: "center" }}>
            <span className="material-icons" style={{ fontSize: "20px", verticalAlign: "text-top", color: "white", marginRight: "5px" }}>
                clear
            </span>
            Ticket Canceled !
        </div>
        if (data === "finish") {
            toast.success(notifDone, {
                position: toast.POSITION.TOP_CENTER,
                transition: Slide,
                autoClose: 3000
            })
            messageNotification = "Your ticket has been resolved."
        }
        if (data === "cancel") {
            toast.info(notifCancel, {
                position: toast.POSITION.TOP_CENTER,
                transition: Slide,
                autoClose: 3000
            })
            messageNotification = "Your ticket has been canceled."
        }
        if (data === "escalated") {
            toast.info(notifEscalated, {
                position: toast.POSITION.TOP_CENTER,
                transition: Slide,
                autoClose: 3000
            })
            messageNotification = "Your ticket has been escalated."
        }
        axios.put(url + 'ticket/' + data + '/' + this.props.match.params.id, null, {
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
                // console.log("hasil", res)
                this.fetchData()
                socket.emit(`TICKET`, ({ message: messageNotification, employeeId: this.state.tiket[0].ticket_employee_id, ticketId: this.props.match.params.id }))
            })
            .catch(error => {
                console.log("Error " + error);
            })
    }

    fetchData = () => {
        axios.get(`https://api.ict-servicedesk.xyz/ticket/id/` + this.props.match.params.id, {
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

    }

    renderToDos() {
        const toDos = _.map(this.state.tiket, (values, key) => {
            var sender1 = values.employee_firstname;
            var sender2 = values.employee_lastname;
            var category = values.ticket_category;
            var title = values.ticket_subject;
            var image = values.ticket_image;
            var technician_id = values.ticket_technician_id;
            var imgEmployee = (values.employee_image) ? (values.employee_image) ? values.employee_image : "defaultEmploy.png" : "defaultEmploy.png";
            var gambarEmployee = 'https://api.ict-servicedesk.xyz/avatar/employee/' + imgEmployee;
            console.log(gambarEmployee);
            // var assign_to = values.technician_firstname;
            var status = values.ticket_status;
            // var due_date = values.ticket_timestamp;
            // var priority = values.ticket_priority;
            // var id = values.ticket_id;
            var active = values.ticket_is_active;
            // var employee_email = values.employee_email;
            var description = values.ticket_description;
            var email = values.employee_email;
            // var location = values.ticket_location;
            var time = values.ticket_timestamp;
            var due = values.ticket_due_date;
            return (<div key={key}>
                <div style={{ width: "100%" }}>
                    <div className="title-ticketCategory" >
                        <p className="p-titile1" >Title</p>
                        <p className="p-titile2" >{title}</p>
                    </div>
                </div>
                <div style={{ width: "100%", height: "70px", display: "flex" }}>
                    <div className="pengirim" style={{ width: "20%", marginLeft: "25px" }}>
                        <div className="foto-pengim" >
                            <img src={gambarEmployee} alt="mann" style={{ width: "100%" }} />
                        </div>
                    </div>
                    <div className="nama-pengirim">
                        <div className="nama" >{sender1} {sender2}</div>
                        <div className="email" > {email} </div>
                        <div style={{ display: (active) ? "none" : "flex", width: "100%", textAlign: "right " }}>
                            <div style={{ color: "red", fontSize: "14px", fontWeight: "bold", marginTop: "10px" }}>
                                <span className="material-icons" style={{ fontSize: "20px", verticalAlign: "text-top", color: "red", marginRight: "5px" }}>
                                    highlight_off
                        </span>
                        TICKET CLOSED
                        </div>
                        </div>
                        <div style={{ display: !(active) ? "none" : "flex", width: "100%" }}>
                            <div style={{ color: "#09d509", fontSize: "14px", fontWeight: "bold", marginTop: "10px" }}>
                                <span className="material-icons" style={{ fontSize: "20px", verticalAlign: "text-top", color: "#09d509", marginRight: "5px" }}>
                                    check_circle_outline
                        </span>
                        TICKET OPEN
                        </div>
                        </div>
                        <div className="deskripsi-isi" style={{ display: (!active || status === "CANCELED" || !technician_id || this.state.tiket[0].ticket_technician_id !== this.props.data.personState.data.user_id) ? "none" : "flex" }}>
                            <select name="ticket_status" style={{ padding: "1px 5px", backgroundColor: "#F4F4F6", color: "#0050A1", border: "none", fontWeight: "700", fontSize: "16px" }} onChange={this.handleChange} value={this.state.ticket_status}>
                                <option value="-1" style={{ width: "200px", fontWeight: "700", fontSize: "16px" }} disabled>
                                    Waiting for support
                            </option>
                                <option value="cancel" style={{ width: "200px", fontWeight: "700", fontSize: "16px", color: "red" }}>
                                    Canceled
                            </option>
                                {/* <option value="escalated" style={{ width: "200px", fontWeight: "700", fontSize: "16px" }}>
                                    Escalated
                            </option> */}
                                <option value="finish" style={{ width: "200px", fontWeight: "700", fontSize: "16px", color: "green" }}>
                                    Set as Done
                            </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="kotak" style={{ backgroundColor: "#F6F6F6", width: "100%", marginTop: "50px", paddingTop: "10px", paddingBottom: "30px" }}>
                    <div className="description" style={{ backgroundColor: "#fff", width: "80%", padding: "20px", margin: "20px auto" }}>
                        <div className="row">
                            <div className="title-kotak" style={{ width: "50%", textAlign: "left", color: "#7D7D7D", fontSize: "22px", fontWeight: "bold" }}>Description</div>
                            <div className="categoryDetail" style={{ width: "50%" }}>
                                <div className="kotakKategori" style={{
                                    marginTop: "-20px",
                                    float: "right",
                                    borderRadius: "5px",
                                    fontSize: "14px",
                                    color: "black",
                                    fontWeight: "500",
                                    backgroundColor: "#f5e44c",
                                    padding: "4px"
                                }}> Due : {moment(due, "YYYYMMDD").endOf('day').fromNow()} </div>
                            </div>
                        </div>
                        <div className="title-kotak" style={{ textAlign: "left", color: "#000", fontSize: "16px", fontWeight: "400", marginTop: "10px", wordWrap: "break-word" }}>{description}</div>
                        <div style={{ maxWidth: "414px", textAlign: "left", marginTop: "10px" }}>
                            {(image) ?
                                <img src={'https://api.ict-servicedesk.xyz/uploads/' + image} alt="macbook" style={{ textAlign: "left", width: "100%" }} />
                                : null
                            }
                        </div>
                        <div>
                        </div>
                        <div className="row">
                            <div className="title-kotak" style={{ marginTop: "20px", width: "55%", textAlign: "left", color: "#7D7D7D", fontSize: "11px", fontWeight: "bold" }}>Report : {moment(time).format("Do MMM YY")}</div>
                            <div className="title-kotak" style={{ marginTop: "20px", width: "45%", textAlign: "right", color: "#7D7D7D", fontSize: "11px", fontWeight: "bold" }}>Category : {category}</div>
                            <div></div></div>
                    </div>
                    <div style={{ display: !(status === "CANCELED") ? "none" : "flex", width: "90%", margin: "0px auto", }}>
                        <div style={{ margin: "0px auto", padding: "10px", border: "1px solid #f35834", borderRadius: "8px", backgroundColor: "#f35834", color: "#fff", fontSize: "16px", fontWeight: "bold", marginTop: "10px", width: "100%" }}>
                            CANCELED
                        </div>
                    </div>
                    <div style={{ display: !(status === "DONE") ? "none" : "flex", width: "90%", margin: "0px auto", }}>
                        <div style={{ margin: "0px auto", padding: "10px", border: "1px solid #43bf57", borderRadius: "8px", backgroundColor: "#43bf57", color: "#fff", fontSize: "16px", fontWeight: "bold", marginTop: "10px", width: "100%" }}>
                            DONE
                        </div>
                    </div>
                    <div style={{ display: !(status === "SPAM") ? "none" : "flex", width: "90%", margin: "0px auto", }}>
                        <div style={{ margin: "0px auto", padding: "10px", border: "1px solid #FF0F17", borderRadius: "8px", backgroundColor: "#FF0F17", color: "#fff", fontSize: "16px", fontWeight: "bold", marginTop: "10px", width: "100%" }}>
                            SPAM
                        </div>
                    </div>
                </div>
            </div>
            );
        });
        if (!_.isEmpty(toDos)) {
            return toDos;
        }
    }

    handleButtonAssignToMe = () => {
        this.setState({
            confirmation: !this.state.confirmation
        })

        axios.get(`https://api.ict-servicedesk.xyz/ticket/id/` + this.props.match.params.id, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const tiket = res.data.values;
                // console.log("data", tiket[0])
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
                            // console.log("hasil", this.props.data.personState.data.user_firstname)
                            this.fetchData()
                            socket.emit(`TICKET`, ({ message: "Your ticket on process with " + this.props.data.personState.data.user_firstname + " " + this.props.data.personState.data.user_lastname, employeeId: tiket[0].ticket_employee_id, ticketId: this.props.match.params.id }))
                        })
                        .catch(error => {
                            console.log("Error " + error);
                        })
                }
            })
        // console.log("Assign To me");
    }
    handleButtonMakeItPriority = () => {
        this.setState({
            confirmation: !this.state.confirmation
        })

        axios.get(`https://api.ict-servicedesk.xyz/ticket/id/` + this.props.match.params.id, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const tiket = res.data.values;
                // console.log("data", tiket[0])
                if (!tiket[0].ticket_technician_id) {
                    axios.put('https://api.ict-servicedesk.xyz/ticket/priority/' + this.props.match.params.id, null, {
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
                            // console.log("hasil", res)
                            this.fetchData()
                            socket.emit(`TICKET`, ({ message: "Your ticket is Priority", employeeId: tiket[0].ticket_employee_id, ticketId: this.props.match.params.id }))
                        })
                        .catch(error => {
                            console.log("Error " + error);
                        })
                }
            })
        // console.log("Make it Priority");
    }
    handleButtonSpam = () => {
        this.setState({
            confirmation: !this.state.confirmation
        })

        axios.get(`https://api.ict-servicedesk.xyz/ticket/id/` + this.props.match.params.id, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const tiket = res.data.values;
                // console.log("data", tiket[0])
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
                            // console.log("hasil", res)
                            this.fetchData()
                            socket.emit(`TICKET`, ({ message: "Unfortunately your ticket has been tag Spam", employeeId: tiket[0].ticket_employee_id, ticketId: this.props.match.params.id }))
                        })
                        .catch(error => {
                            console.log("Error " + error);
                        })
                }
            })
        // console.log("Spam");
    }

    handleConfirmation = () => {
        this.setState({
            ticket_status: -1,
            confirmation: !this.state.confirmation,
        })
    }
    handleConfirmationAssign = () => {
        this.setState({
            confirmationTitle: "assign",
        })

        this.setState({
            confirmation: !this.state.confirmation
        })
    }
    handleConfirmationPriority = () => {
        this.setState({
            confirmationTitle: "priority",
        })

        this.setState({
            confirmation: !this.state.confirmation
        })
    }
    handleConfirmationSpam = () => {
        this.setState({
            confirmationTitle: "spam",
        })

        this.setState({
            confirmation: !this.state.confirmation
        })
    }
    render() {
        //console.log(this.props.match.params.id)
        const id_user = this.props.data.personState.data ? this.props.data.personState.data.user_id : null;
        const id_technician_ticket = this.state.tiket[0] ? this.state.tiket[0].ticket_technician_id ? this.state.tiket[0].ticket_technician_id : null : null;

        const chatBallon =
            id_technician_ticket ?
                id_user ?
                    id_user === id_technician_ticket ? "inline" : "none"
                    : "none"
                : "none"
        return (
            <div className="home" style={this.state.confirmation ? { height: "100vh", overflow: "hidden" } : {}}>
                <ToastContainer
                    position="top-center"
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {/* Confirmation */}
                <div className="white-overlay"
                    style={{
                        visibility: this.state.confirmation ? "visible" : "hidden",
                        opacity: this.state.confirmation ? "1" : "0"
                    }}

                    onClick={this.handleConfirmation}
                ></div>
                <div className="confirmation"
                    style={{
                        bottom: this.state.confirmation ? "0px" : "-200px"
                    }}
                >
                    <div style={{ marginTop: "30px", fontSize: "24px", fontWeight: "bold" }}>
                        {this.state.confirmationTitle === "assign" ?
                            "Assign to me ?"
                            : this.state.confirmationTitle === "priority" ?
                                "Make it Priority ?" :
                                this.state.confirmationTitle === "spam" ?
                                    "Make it spam ?" :
                                    this.state.ticket_status+" this Ticket ?"}
                    </div>
                    <div className="row" style={{ width: "100%", bottom: "15px", position: "absolute" }}>
                        <div style={{ margin: "0 auto", width: "100%" }}>
                            <button
                                className="button"
                                style={{
                                    borderRadius: "5px", padding: "15px", marginRight: "15px", width: "45%", color: "#0050A1", backgroundColor: "white", border: "1px solid #0050A1"
                                }}
                                onClick={this.handleConfirmation}
                                id="overlay">
                                No
                            </button>
                            {this.state.confirmationTitle === "assign" ?
                                <button className="button" style={{ padding: "15px", borderRadius: "5px", width: "45%", border: "1px solid #0050A1" }} onClick={this.handleButtonAssignToMe}>Yes</button>
                                : this.state.confirmationTitle === "priority" ?
                                    <button className="button" style={{ padding: "15px", borderRadius: "5px", width: "45%", border: "1px solid #0050A1" }} onClick={this.handleButtonMakeItPriority}>Yes</button> :
                                    this.state.confirmationTitle === "spam" ?
                                        <button className="button" style={{ padding: "15px", borderRadius: "5px", width: "45%", border: "1px solid #0050A1" }} onClick={this.handleButtonSpam}>Yes</button> :
                                        <button className="button" style={{ padding: "15px", borderRadius: "5px", width: "45%", border: "1px solid #0050A1" }} onClick={()=> {this.updateTicket(this.state.ticket_status)}}>Yes</button>
                            }
                        </div>
                    </div>
                </div>
                {/* End Confirmation */}

                <div className="navbar-message" >
                    <div className="menu" style={{ position: "absolute", top: "7px" }}>
                        <Link to='/ticket/all'>
                            <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
                                <img src={back} alt="back" style={{ width: "20px" }} />
                            </div>
                        </Link>
                    </div>
                    Detail Ticket
                </div>
                <div style={{ marginTop: "50px", width: "100%" }}>
                    {this.renderToDos()}
                </div>
                {(this.state.tiket[0]) ?
                    (!this.state.tiket[0].ticket_technician_id && this.state.tiket[0].ticket_is_active) ?
                        <div className="row" style={{ width: "100%", marginBottom: "65px" }}>
                            <div className="kotak-menu" style={{ width: "33%" }} onClick={this.handleConfirmationAssign}>
                                <div style={{ padding: "5px" }} >
                                    <div style={{ border: "1px solid #e9e9e9", borderRadius: "10px", padding: "10px 0px" }} id="1">
                                        <div className="icon-menu">
                                            <img src={tambah} alt="tambah" />
                                        </div>
                                        <div className="desc-menu" style={{ fontSize: "14px" }}>
                                            Assign to Me
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="kotak-menu" style={{ width: "33%" }} onClick={this.handleConfirmationPriority}>
                                <div style={{ padding: "5px" }} >
                                    <div style={{ border: "1px solid #e9e9e9", borderRadius: "10px", padding: "10px 0px" }}>
                                        <div className="icon-menu">
                                            <img src={priority} alt="tambah" />
                                        </div>
                                        <div className="desc-menu" style={{ fontSize: "14px" }}>
                                            Make it Priority
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="kotak-menu" style={{ width: "33%" }} onClick={this.handleConfirmationSpam}>
                                <div style={{ padding: "5px" }}>
                                    <div style={{ border: "1px solid #e9e9e9", borderRadius: "10px", padding: "10px 0px" }}>
                                        <div className="icon-menu">
                                            <img src={garbage} alt="tambah" />
                                        </div>
                                        <div className="desc-menu" style={{ fontSize: "14px" }}>
                                            Spam
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                    :
                    null
                }
                <div style={{ width: "414px", bottom: "55px", position: "fixed", clear: "both", display: chatBallon }}>
                    <Link to={'/message/' + this.props.match.params.id}>
                        <div className="chatIcon" >
                            <span className="material-icons chatIcons" style={{ verticalAlign: "bottom", color: "#fff" }}>
                                chat
                            </span>
                        </div>
                    </Link>
                </div>
                <NavbarBottom active="Ticket" />
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
)(DetailTicket)