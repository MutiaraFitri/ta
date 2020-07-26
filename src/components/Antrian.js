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
        console.log(this.props.due_date);
        const bgCategory =
            (this.props.category === "network") ? "#b7c9f6" :
                (this.props.category === "software") ? "#EFF25E" :
                    (this.props.category === "hardware") ? "#F1AEAE" :
                        "#eae702";
        const imgCategory =
            (this.props.category === "network") ? network :
                (this.props.category === "software") ? software :
                    (this.props.category === "hardware") ? hardware :
                        lain;

        const bgStatus =
            (this.props.status === "DONE") ? "#43bf57" :
                (this.props.status === "WAITING") ? "#619ffc" :
                    (this.props.status === "WAITING FOR TECHNICIAN") ? "#619ffc" :
                        (this.props.status === "ON PROCESS") ? "#f8c22d" :
                            (this.props.status === "CANCELED") ? "#f35834" :
                                (this.props.status === "SPAM") ? "#FF0F17" :
                                    "#A4C7FA";
        const imagePriority =
            (this.props.priority === "Low") ? low :
                (this.props.priority === "Highest") ? high :
                    (this.props.priority === "Medium") ? medium :
                        low;
        const statusPriority =
            (this.props.priority === "low") ? "LOW" :
                (this.props.priority === "Highest") ? "HIGH" :
                    "LOW";

        const assignColor =
            (this.props.assign_to != null) ? "#002C6D" :
                "#bf0e0e"
            ;
        const assign =
            (this.props.assign_to === null) ? "Unassign" :
                this.props.assign_to;
        var panjangTitle = (this.props.title) ? (this.props.title).length > 20 ? (this.props.title).slice(0, 20) + " ..." : (this.props.title) : null;
        return (
            <div>
                <Link to={'/ticket/detail/' + this.props.id}>
                    <div className="tiket antrian" >

                        <div className="icon-category" >
                            <div className="icon" style={{ backgroundColor: bgCategory }}>
                                <img className="imgCategory" src={imgCategory} alt="!" />
                            </div>
                        </div>
                        <div className="desc-antrian"  >
                            <div className="name" style={{ fontSize: "15px", color: "black" }}>{this.props.sender1} {this.props.sender2}</div>
                            <div className="type" style={{ fontSize: "10px", textTransform: "uppercase", color: "rgb(241, 174, 174)" }}>{this.props.category}</div>
                            <div className="message" style={{ fontSize: "13px", color: "#665858" }}>{panjangTitle}</div>
                            <div className="status" style={{ backgroundColor: bgStatus }}>
                                <div className="category-status" style={{ color: "#fff" }}>{this.props.status}</div>
                            </div>
                        </div>
                        <div className="dasc-status" >
                            <div className="assign" style={{ color: assignColor }}>{assign}</div>
                        </div>
                        <div className="category-antrian" >
                            <div className="tanggal" > {this.props.due_date}</div>
                            <div className="icon-priority" >
                                <img className="imgPriority" src={imagePriority} alt="low" />
                            </div>
                            <div className="name-category" > {statusPriority}</div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Antrian;
