import React, { Component } from 'react';
import mann from './../assets/img/mann.png';
import axios from 'axios';
import { prod } from './../redux/url/server'

const url = prod;
const socketUrl = url

const socket = io(socketUrl)
class TicketDetailDesc extends Component {
    state = {
        ticket_status: -1
    }
    handleChange = (e) => {
        this.setState({
            ticket_status: e.target.value
        })
        axios.put(url + 'ticket/' + e.target.value + '/' + this.props.id, null, {
            headers: {
                key: '8dfcb234a322aeeb6b530f20c8e9988e'
            }
        }
        )
            .then(res => res.data)
            .then(res => {
                var messageNotification="";
                if (res.error) {
                    throw (res.error);
                }
                if(e.target.value=="cancel"){
                    messageNotification="Your ticket has been canceled."
                    socket.emit(`TICKET`, ({ message: messageNotification, employeeId: this.props.employeeId, ticketId: this.props.id }))
                }else if(e.target.value=="escalated"){
                    messageNotification="Your ticket has been escalated."
                    socket.emit(`TICKET`, ({ message: messageNotification, employeeId: this.props.employeeId, ticketId: this.props.id }))
                }else{
                    messageNotification="Your ticket has been resolved."
                    socket.emit(`TICKET`, ({ message: messageNotification, employeeId: this.props.employeeId, ticketId: this.props.id }))
                }

                console.log("hasil", res)
            })
            .catch(error => {
                console.log("Error " + error);
            })
    }
    render() {
        const gambarEmployee = (this.props.employee_image) ? (this.props.employee_image) ? this.props.employee_image : mann : mann;
        console.log(gambarEmployee);
        return (
            <div>
                <div style={{ width: "100%" }}>
                    <div className="title-ticketCategory" >
                        <p className="p-titile1" >Title</p>
                        <p className="p-titile2" >{this.props.title}</p>
                    </div>
                </div>
                <div style={{ width: "100%", height: "70px", display: "flex" }}>
                    <div className="pengirim" style={{ width: "20%", marginLeft: "25px" }}>
                        <div className="foto-pengim" >
                            <img src={gambarEmployee} alt="img" style={{ width: "100%" }} />
                        </div>
                    </div>
                    <div className="nama-pengirim">
                        <div className="nama" >{this.props.sender1} {this.props.sender2}</div>
                        <div className="email" > {this.props.email} </div>
                        <div style={{ display: (this.props.active) ? "none" : "flex", width: "100%" }}>
                            <div style={{ color: "red", fontSize: "14px", fontWeight: "bold", marginTop: "10px" }}>
                                <span class="material-icons" style={{ fontSize: "20px", verticalAlign: "text-top", color: "red", marginRight: "5px" }}>
                                    highlight_off
                            </span>
                            CLOSED
                            </div>
                        </div>
                        <div style={{ display: !(this.props.active) ? "none" : "flex", width: "100%" }}>
                            <div style={{ color: "#09d509", fontSize: "14px", fontWeight: "bold", marginTop: "10px" }}>
                                <span class="material-icons" style={{ fontSize: "20px", verticalAlign: "text-top", color: "#09d509", marginRight: "5px" }}>
                                    check_circle_outline
                            </span>
                            OPEN
                            </div>
                        </div>
                        <div class="deskripsi-isi" style={{ display: (!this.props.active || this.props.status === "CANCELED") ? "none" : "flex" }}>
                            <select name="ticket_status" style={{ padding: "1px 5px", backgroundColor: "#F4F4F6", color: "#0050A1", border: "none", fontWeight: "700", fontSize: "16px" }} onChange={this.handleChange} value={this.state.ticket_status}>
                                <option value="-1" style={{ width: "200px", fontWeight: "700", fontSize: "16px" }} disabled>
                                    Waiting for support
                                </option>
                                <option value="cancel" style={{ width: "200px", fontWeight: "700", fontSize: "16px", color: "red" }}>
                                    Canceled
                                </option>
                                <option value="escalated" style={{ width: "200px", fontWeight: "700", fontSize: "16px" }}>
                                    Escalated
                                </option>
                                <option value="finish" style={{ width: "200px", fontWeight: "700", fontSize: "16px", color: "green" }}>
                                    Set as Done
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="kotak" style={{ backgroundColor: "#F4F4F6", width: "100%", marginTop: "50px", paddingTop: "10px", paddingBottom: "30px" }}>
                    <div className="description" style={{ backgroundColor: "#fff", width: "80%", padding: "20px", margin: "20px auto" }}>
                        <div className="title-kotak" style={{ textAlign: "left", color: "#7D7D7D" }}>Description</div>
                        <div className="title-kotak" style={{ textAlign: "left", color: "#000", fontSize: "16px", fontWeight: "700", marginTop: "10px" }}>{this.props.description}</div>
                        <div style={{ maxWidth: "414px", textAlign: "left", marginTop: "10px" }}>
                            {(this.props.image) ?
                                <img src={'https://api.ict-servicedesk.xyz/uploads/' + this.props.image} alt="macbook" style={{ textAlign: "left", width: "100%" }} />
                                : null
                            }
                        </div>
                        <div className="title-kotak" style={{ textAlign: "left", color: "#7D7D7D", fontSize: "11px", fontWeight: "bold", marginTop: "10px" }}>category : {this.props.category}</div>
                        <div style={{ display: !(this.props.status === "CANCELED") ? "none" : "flex", width: "100%", marginTop: "15px" }}>
                            <div style={{ margin: "0px auto", padding: "10px 0px", border: "1px solid red", borderRadius: "8px", color: "red", fontSize: "16px", fontWeight: "bold", marginTop: "10px", width: "100%" }}>
                                CANCELED
                            </div>
                        </div>
                        <div style={{ display: !(this.props.status === "DONE") ? "none" : "flex", width: "100%", marginTop: "15px" }}>
                            <div style={{ margin: "0px auto", padding: "10px 0px", border: "1px solid #09d509", borderRadius: "8px", color: "#09d509", fontSize: "16px", fontWeight: "bold", marginTop: "10px", width: "100%" }}>
                                DONE
                            </div>
                        </div>

                    </div>
                    {/* <div style={{ textAlign: "left", width: "100%", fontSize: "14px", fontWeight: "700", display: "flex" }}>
                        <div style={{ paddingLeft: "25px" }}>Location  : Divisi MIS Lantai 3</div>
                    </div>
                    <div style={{ textAlign: "left", width: "100%", fontSize: "14px", fontWeight: "700", display: "flex" }}>
                        <div style={{ paddingLeft: "25px" }}>Report  : Divisi MIS Lantai 3</div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default TicketDetailDesc;
