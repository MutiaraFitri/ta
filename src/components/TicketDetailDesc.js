import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import macbook from './../assets/img/smashed_macbook-1-780x521.png';
import down from './../assets/img/arrow_down.png';
import mann from './../assets/img/mann.png';

class TicketDetailDesc extends Component {
    render() {


        return (
            <div>
                <div style={{ width: "100%" }}>
                    <div className="title" style={{ textAlign: "left", margin: "25px" }}>
                        <p style={{ fontSize: "12px", padding: "0px", margin: "0px" }}>Title </p>
                        <p style={{ fontSize: "22px", padding: "0px", margin: "0px" }}>{this.props.title}</p>
                    </div>
                </div>
                <div style={{ width: "100%", height: "70px", display: "flex" }}>
                    <div className="pengirim" style={{ width: "20%", marginLeft: "25px" }}>
                        <div className="foto-pengim" style={{
                            width: "60px", backgroundColor: "#F1AEAE",
                            height: "60px", borderRadius: "50%", border: "1px solid", margin: "0px auto", overflow: "hidden"
                        }}>
                            <img src={mann} alt="mann" style={{ width: "100%" }} />
                        </div>
                    </div>
                    <div className="nama-pengirim" style={{ width: "80%", marginLeft: "5px" }}>
                        <div className="nama" style={{ fontSize: "24px", color: "black", fontWeight: "bold", textAlign: "left" }}>{this.props.sender1} {this.props.sender2}</div>
                        <div className="email" style={{ fontSize: "20px", color: "black", textAlign: "left" }}> {this.props.email} </div>
                    </div>
                </div>

                <div className="deskripsi-isi" style={{ width: "100%", marginTop: "10px" }}>
                    <div style={{ backgroundColor: "#F4F4F6", width: "170px", fontSize: "14px", float: "right", fontWeight: "700" }}>
                        Waiting for Support
                        <img src={down} alt="down" width="10" style={{ marginLeft: "5px" }} />
                    </div>
                </div>

                <div className="kotak" style={{ backgroundColor: "#F4F4F6", width: "100%", marginTop: "20px", paddingBottom: "30px" }}>
                    <div className="description" style={{ backgroundColor: "#fff", width: "80%", padding: "20px", margin: "20px auto" }}>
                        <div className="title-kotak" style={{ textAlign: "left", color: "#7D7D7D" }}>Description</div>
                        <div className="title-kotak" style={{ textAlign: "left", color: "#000", fontSize: "16px", fontWeight: "700", marginTop: "10px" }}>{this.props.description}</div>
                        <div style={{ width: "100%", textAlign: "left", marginTop: "10px" }}>
                            <img src={macbook} alt="macbook" style={{ textAlign: "left" }} />
                        </div>
                        <div className="title-kotak" style={{ textAlign: "left", color: "#000", fontSize: "16px", fontWeight: "100", marginTop: "10px" }}>Desktop/Laptop</div>
                    </div>
                    <div style={{ textAlign: "left", width: "100%", fontSize: "14px", fontWeight: "700", display: "flex" }}>
                        <div style={{ paddingLeft: "25px" }}>Location  : Divisi MIS Lantai 3</div>
                    </div>
                    <div style={{ textAlign: "left", width: "100%", fontSize: "14px", fontWeight: "700", display: "flex" }}>
                        <div style={{ paddingLeft: "25px" }}>Report  : Divisi MIS Lantai 3</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TicketDetailDesc;
