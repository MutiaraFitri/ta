import React, { Component } from 'react';
import priority from './../../../assets/img/priority.png';
import garbage from './../../../assets/img/garbage.png';
import mann from './../../../assets/img/mann.png';
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
import { dev } from './../../../redux/url/server'

const url = dev
const socketUrl = url

const socket = io(socketUrl)
class DetailTicket extends Component {
    state = {
        tiket: [],
        ticket_status: -1
    }

    handleChange = (e) => {
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
        if (e.target.value === "finish") {
            toast.success(notifDone, {
                position: toast.POSITION.TOP_CENTER,
                transition: Slide,
                autoClose: 3000
            })
        }
        if (e.target.value === "cancel") {
            toast.info(notifCancel, {
                position: toast.POSITION.TOP_CENTER,
                transition: Slide,
                autoClose: 3000
            })
        }
        if (e.target.value === "escalated") {
            toast.info(notifEscalated, {
                position: toast.POSITION.TOP_CENTER,
                transition: Slide,
                autoClose: 3000
            })
        }

        this.setState({
            ticket_status: e.target.value
        })

        axios.put(url + 'ticket/' + e.target.value + '/' + this.props.match.params.id, null, {
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
                socket.emit(`TICKET`, ({ employeeId: this.state.tiket[0].ticket_employee_id,ticketId:this.props.match.params.id }))
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
            var imgEmployee = (values.employee_image) ? (values.employee_image) ? values.employee_image : "dimas.jpg" : "dimas.jpg";
            var gambarEmployee = 'https://api.ict-servicedesk.xyz/avatar/employee/' + imgEmployee;
            console.log(gambarEmployee);
            // var assign_to = values.technician_firstname;
            var status = values.ticket_status;
            // var due_date = values.ticket_timestamp;
            var priority = values.ticket_priority;
            // var id = values.ticket_id;
            var active = values.ticket_is_active;
            // var employee_email = values.employee_email;
            var description = values.ticket_description;
            var email = values.employee_email;
            // var location = values.ticket_location;
            var time = values.ticket_timestamp;
            return (<div>
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
                                <span class="material-icons" style={{ fontSize: "20px", verticalAlign: "text-top", color: "red", marginRight: "5px" }}>
                                    highlight_off
                        </span>
                        TICKET CLOSED
                        </div>
                        </div>
                        <div style={{ display: !(active) ? "none" : "flex", width: "100%" }}>
                            <div style={{ color: "#09d509", fontSize: "14px", fontWeight: "bold", marginTop: "10px" }}>
                                <span class="material-icons" style={{ fontSize: "20px", verticalAlign: "text-top", color: "#09d509", marginRight: "5px" }}>
                                    check_circle_outline
                        </span>
                        OPEN
                        </div>
                        </div>
                        <div className="deskripsi-isi" style={{ display: (!active || status === "CANCELED" || !technician_id) ? "none" : "flex" }}>
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
                                <div className="kotakKategori" style={{ width: "100px", height: "25px", border: "1px solid #7d7d7d", float: "right", borderRadius: "5px", fontSize: "16px", color: "#5A5454", fontWeight: "500" }}> {category} </div>
                            </div>
                        </div>
                        <div className="title-kotak" style={{ textAlign: "left", color: "#000", fontSize: "16px", fontWeight: "400", marginTop: "10px" }}>{description}</div>
                        <div style={{ maxWidth: "414px", textAlign: "left", marginTop: "10px" }}>
                            {(image) ?
                                <img src={'https://api.ict-servicedesk.xyz/uploads/' + image} alt="macbook" style={{ textAlign: "left", width: "100%" }} />
                                : null
                            }
                        </div>
                        <div className="title-kotak" style={{ textAlign: "left", color: "#7D7D7D", fontSize: "11px", fontWeight: "bold", marginTop: "10px" }}>Report : {moment(time).format("Do MMM YY")} , {moment(time).startOf('hour').fromNow()}</div>
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
            </div>)


                ;
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
                            socket.emit(`TICKET`, ({ employeeId: tiket[0].ticket_employee_id,ticketId:this.props.match.params.id }))
                        })
                        .catch(error => {
                            console.log("Error " + error);
                        })
                }
            })
        console.log("Assign To me");
    }
    handleButtonMakeItPriority = () => {
        axios.get(`https://api.ict-servicedesk.xyz/ticket/id/` + this.props.match.params.id, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const tiket = res.data.values;
                console.log("data", tiket[0])
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
                            console.log("hasil", res)
                            this.fetchData()
                            socket.emit(`TICKET`, ({ employeeId: tiket[0].ticket_employee_id,ticketId:this.props.match.params.id }))
                        })
                        .catch(error => {
                            console.log("Error " + error);
                        })
                }
            })
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
                            socket.emit(`TICKET`, ({ employeeId: tiket[0].ticket_employee_id,ticketId:this.props.match.params.id }))
                        })
                        .catch(error => {
                            console.log("Error " + error);
                        })
                }
            })
        console.log("Spam");
    }
    render() {
        //console.log(this.props.match.params.id)
        return (
            <div className="home" style={{ paddingBottom: "70px" }}>
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
                        <div className="row" style={{ width: "100%" }}>
                            <div className="kotak-menu" style={{ width: "33%" }} onClick={this.handleButtonAssignToMe}>
                                <div style={{ padding: "5px" }} >
                                    <div style={{ border: "1px solid #e9e9e9", borderRadius: "10px", padding: "10px 0px" }}>
                                        <div className="icon-menu">
                                            <img src={tambah} alt="tambah" />
                                        </div>
                                        <div className="desc-menu" style={{ fontSize: "14px" }}>
                                            Assign to Me
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="kotak-menu" style={{ width: "33%" }} onClick={this.handleButtonMakeItPriority}>
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
                            <div className="kotak-menu" style={{ width: "33%" }} onClick={this.handleButtonSpam}>
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
                <div className="row" style={{ width: "414px", bottom: "55px", position: "fixed" }}>
                    <div style={{ width: "82%", height: "10px" }}>
                    </div>
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