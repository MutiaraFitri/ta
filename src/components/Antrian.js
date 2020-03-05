import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import low from './../assets/img/low.jpg';
import high from './../assets/img/hight.png';
import medium from './../assets/img/medium.png';
import network from './../assets/img/wifi.png';
import software from './../assets/img/virus.png';
import hardware from './../assets/img/mouse-black.png';

class Antrian extends Component {
    render() {
        const bgCategory =
            (this.props.category === "network") ? "#617BBD" :
                (this.props.category === "software") ? "#EFF25E" :
                    (this.props.category === "hardware") ? "#F1AEAE" :
                        "red";
        const imgCategory =
            (this.props.category === "network") ? network :
                (this.props.category === "software") ? software :
                    (this.props.category === "hardware") ? hardware :
                        "red";

        const bgStatus =
            !(this.props.status === "DONE") ? "#BAF2D7" :
                (this.props.status === "WAITING FOR SUPPORT") ? "#A4C7FA" :
                    (this.props.status === "CANCALED") ? "#FFD89D" :
                        (this.props.status === "ESCATED") ? "#FFABAB" :
                            "red";
        const imagePriority =
            (this.props.priority === "Low") ? low :
                (this.props.priority === "Highest") ? high :
                    (this.props.priority === "Medium") ? medium :
                        low;
        return (
            <div>
                <Link to='/detail-ticket'>
                    <div className="tiket" >

                        <div className="icon-category" style={{ width: "20%", marginTop: "15px", display: "flex" }}>
                            <div className="icon" style={{ width: "50px", backgroundColor: bgCategory, height: "50px", borderRadius: "50%" }}>
                                <img src={imgCategory} alt="mouse-black" style={{ marginTop: "25%" }} />
                            </div>
                        </div>
                        <div className="desc" style={{ width: "45%", textAlign: "left", paddingLeft: "20px" }}>
                            <div className="name" style={{ fontSize: "15px", color: "black" }}>{this.props.sender}</div>
                            <div className="type" style={{ fontSize: "10px", color: "#F1AEAE" }}>{this.props.category}</div>
                            <div className="message" style={{ fontSize: "12px", color: "#665858" }}>{this.props.title}</div>
                            <div className="status" style={{ width: "102px", height: "12px", fontSize: "16px", padding: "2px 7px", borderRadius: "50px", backgroundColor: bgStatus, textAlign: "center", marginTop: "10px" }}>
                                <div style={{ fontSize: "8px", textTransform: "uppercase" }}>{this.props.status}</div>
                            </div>
                        </div>
                        <div className="dasc-status" style={{ width: "20%", textAlign: "left", padding: "30px 30px" }}>
                            <div style={{ fontSize: "12px", color: "#E0D21E" }}>{this.props.assign_to}</div>
                        </div>
                        <div className="category" style={{ width: "15%", textAlign: "left" }}>
                            <div className="tanggal" style={{ fontSize: "9px", color: "black", letterSpacing: "0.2", fontWeight: "bold", textAlign: "center" }}>{this.props.due_date}</div>
                            <div className="icon" style={{ fontSize: "10px", color: "black", textAlign: "center", marginTop: "10px" }}>
                                <img src={imagePriority} alt="low" style={{ width: "22px", height: "22px", margin: "0px auto" }} />
                            </div>
                            <div className="name-category" style={{ fontSize: "10px", color: "#C0BEBE", textAlign: "center", padding: "5px" }}>{this.props.priority}</div>
                        </div>

                    </div>
                </Link>
            </div>
        );
    }
}

export default Antrian;
