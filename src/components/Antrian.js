import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mouseBlack from './../assets/img/mouse-black.png';
import low from './../assets/img/low.jpg';
import hight from './../assets/img/hight.png';
import medium from './../assets/img/medium.png';
import network from './../assets/img/wifi.png';
import software from './../assets/img/virus.png';
import hardware from './../assets/img/mouse-black.png';

class Antrian extends Component {
    render() {
        const bgKategori =
            (this.props.imageKategori === network) ? "#617BBD" :
                (this.props.imageKategori === software) ? "#EFF25E" :
                    (this.props.imageKategori === hardware) ? "#F1AEAE" :
                        "red";

        return (
            <div>
                <Link to='/detail-ticket'>
                    <div className="tiket" style={{ marginTop: "20px", display: "flex", paddingBottom: "10px", borderBottom: "1px solid rgba(133, 127, 127, 0.8)" }}>

                        <div className="icon-category" style={{ width: "20%", marginTop: "15px", display: "flex" }}>
                            <div className="icon" style={{ width: "50px", backgroundColor: bgKategori, height: "50px", borderRadius: "50%" }}>
                                <img src={this.props.imageKategori} alt="mouse-black" style={{ marginTop: "25%" }} />
                            </div>
                        </div>
                        <div className="desc" style={{ width: "45%", textAlign: "left", paddingLeft: "20px" }}>
                            <div className="name" style={{ fontSize: "15px", color: "black" }}>{this.props.nama}</div>
                            <div className="type" style={{ fontSize: "10px", color: "#F1AEAE" }}>{this.props.kategori}</div>
                            <div className="message" style={{ fontSize: "12px", color: "#665858" }}>{this.props.judul}</div>
                            <div className="status" style={{ width: "102px", height: "12px", fontSize: "16px", padding: "2px 7px", borderRadius: "50px", backgroundColor: "#A4C7FA", textAlign: "center", marginTop: "10px" }}>
                                <div style={{ fontSize: "8px", textTransform: "uppercase" }}>{this.props.keterangan}</div>
                            </div>
                        </div>
                        <div className="dasc-status" style={{ width: "20%", textAlign: "left", padding: "30px 30px" }}>
                            <div style={{ fontSize: "12px", color: "#E0D21E" }}>{this.props.status}</div>
                        </div>
                        <div className="category" style={{ width: "15%", textAlign: "left" }}>
                            <div className="tanggal" style={{ fontSize: "9px", color: "black", letterSpacing: "0.2", fontWeight: "bold", textAlign: "center" }}>{this.props.tanggal}</div>
                            <div className="icon" style={{ fontSize: "10px", color: "black", textAlign: "center", marginTop: "10px" }}>
                                <img src={this.props.imagePriority} alt="low" style={{ width: "22px", height: "22px", margin: "0px auto" }} />
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
