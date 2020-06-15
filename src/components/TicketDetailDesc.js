import React, { Component } from 'react';
import mann from './../assets/img/mann.png';
import axios from 'axios';
import {dev} from './../redux/url/server'

const url = dev;
class TicketDetailDesc extends Component {
    state = {
        ticket_status: this.props.status
    }
    handleChange = (e) => {
        this.setState({
            ticket_status: e.target.value
        })
        axios.put(url+'ticket/status/' + this.props.id,{ticket_status: e.target.value}, {
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
            })
            .catch(error => {
                console.log("Error " + error);
            })
    }
    render() {
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
                            <img src={mann} alt="mann" style={{ width: "100%" }} />
                        </div>
                    </div>
                    <div className="nama-pengirim">
                        <div className="nama" >{this.props.sender1} {this.props.sender2}</div>
                        <div className="email" > {this.props.email} </div>
                        <div class="deskripsi-isi">
                            <select name="ticket_status" style={{ padding: "1px 5px", backgroundColor: "#F4F4F6", color: "#0050A1", border: "none", fontWeight: "700", fontSize: "16px" }} onChange={this.handleChange} value={this.state.ticket_status}>
                                <option value="WAITING FOR SUPPORT" style={{ width: "200px", fontWeight: "700", fontSize: "16px" }}>
                                    Waiting for support
                                </option>
                                <option value="Response to Employee" style={{ width: "200px", fontWeight: "700", fontSize: "16px" }}>
                                    Response to Employee
                                </option>
                                <option value="CANCELED" style={{ width: "200px", fontWeight: "700", fontSize: "16px", color: "red" }}>
                                    Canceled
                                </option>
                                <option value="ESCALATED" style={{ width: "200px", fontWeight: "700", fontSize: "16px" }}>
                                    Escalated
                                </option>
                                <option value="DONE" style={{ width: "200px", fontWeight: "700", fontSize: "16px", color: "green" }}>
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
