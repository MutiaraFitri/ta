import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import low from './../assets/img/low.jpg';
import high from './../assets/img/hight.png';
import medium from './../assets/img/medium.png';
import network from './../assets/img/wifi.png';
import software from './../assets/img/virus.png';
import hardware from './../assets/img/mouse-black.png';
import lain from './../assets/img/signss.png';
import * as moment from 'moment';


class Antrian extends Component {
    render() {
        const bgCategory =
            (this.props.category === "network") ? "#617BBD" :
                (this.props.category === "software") ? "#EFF25E" :
                    (this.props.category === "hardware") ? "#F1AEAE" :
                        "#eae702";
        const imgCategory =
            (this.props.category === "network") ? network :
                (this.props.category === "software") ? software :
                    (this.props.category === "hardware") ? hardware :
                        lain;

        const bgStatus =
            (this.props.status === "DONE") ? "#BAF2D7" :
                (this.props.status === "WAITING FOR SUPPORT") ? "#A4C7FA" :
                    (this.props.status === "WAITING FOR TECHNICIAN") ? "#A4C7FA" :
                        (this.props.status === "ON PROCESS") ? "#FFD89D" :
                            (this.props.status === "CANCELED") ? "#FFABAB" :
                                "#A4C7FA";
        const imagePriority =
            (this.props.priority === "Low") ? low :
                (this.props.priority === "Highest") ? high :
                    (this.props.priority === "Medium") ? medium :
                        low;
        const statusPriority =
            (this.props.priority === "LOW") ? "LOW" :
                (this.props.priority === "HIGH") ? "HIGH" :
                    "LOW";

        const assignColor =
            (this.props.assign_to != null) ? "#002C6D" :
                "#bf0e0e"
            ;
        const assign =
            (this.props.assign_to === null) ? "Unassign" :
                this.props.assign_to;

        return (
            <div>
                <Link to={'/ticket/detail/' + this.props.id}>
                    <div className="tiket" >

                        <div className="icon-category" style={{ width: "20%", marginTop: "15px", display: "flex" }}>
                            <div className="icon" style={{ width: "50px", backgroundColor: bgCategory, height: "50px", borderRadius: "50%" }}>
                                <img src={imgCategory} alt="!" style={{ marginTop: "25%", width: "5 0%" }} />
                            </div>
                        </div>
                        <div className="desc" style={{ width: "45%", textAlign: "left", paddingLeft: "20px" }}>
                            <div className="name" style={{ fontSize: "15px", color: "black" }}>{this.props.sender1} {this.props.sender2}</div>
                            <div className="type" style={{ fontSize: "10px", color: "#F1AEAE" }}>{this.props.category}</div>
                            <div className="message" style={{ fontSize: "12px", color: "#665858" }}>{this.props.title}</div>
                            <div className="status" style={{ width: "102px", height: "15px", margin: "0px auto", borderRadius: "50px", backgroundColor: bgStatus, textAlign: "center", marginTop: "10px" }}>
                                <div style={{ fontSize: "9px", wight: "bold", color: "black", textTransform: "uppercase" }}>{this.props.status}</div>
                            </div>
                        </div>
                        <div className="dasc-status" style={{ width: "20%", textAlign: "left", padding: "30px 30px" }}>
                            <div style={{ fontSize: "12px", color: assignColor, fontWeight: "bold" }}>{assign}</div>
                        </div>
                        <div className="category" style={{ width: "15%", textAlign: "left" }}>
                            <div className="tanggal" style={{ fontSize: "9px", color: "black", letterSpacing: "0.2", fontWeight: "bold", textAlign: "center" }}> {moment(this.props.due_date).subtract(10, 'days').calendar()}</div>
                            <div className="icon" style={{ fontSize: "10px", color: "black", textAlign: "center", marginTop: "10px" }}>
                                <img src={imagePriority} alt="low" style={{ width: "22px", height: "22px", margin: "0px auto" }} />
                            </div>
                            <div className="name-category" style={{ fontSize: "10px", color: "#000", textAlign: "center", padding: "5px", wight: "bold" }}> {statusPriority}</div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Antrian;
