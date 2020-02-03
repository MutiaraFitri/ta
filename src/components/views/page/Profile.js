import React, { Component } from 'react';
import NavbarProfile from '../navbar/NavbarProfile';
import filter from './../../../assets/img/filter.png';
import search from './../../../assets/img/search.png';
import mouseBlack from './../../../assets/img/mouse-black.png';
import mann from './../../../assets/img/mann.png';
import priority from './../../../assets/img/priority.png';
import garbage from './../../../assets/img/garbage.png';
import tambah from './../../../assets/img/tambah.png';
import macbook from './../../../assets/img/smashed_macbook-1-780x521.png';
import job from './../../../assets/img/job.png';
import email from './../../../assets/img/email.png';
import build from './../../../assets/img/building.png';
import place from './../../../assets/img/place.png';
import NavbarBottom from '../navbar/NavbarBottom';

class AllTicket extends Component {
    render() {
        return (
            <div className="home" style={{ paddingBottom: "70px" }}>
                <NavbarProfile />

                <div className="description" style={{ backgroundColor: "#EDF4FF", width: "70%", margin: "0px auto", padding: "20px", marginTop: "120px", borderRadius: "10px" }}>
                    <div className="title-kotak" style={{ textAlign: "left", color: "#7D7D7D", letterSpacing: "2.7px", color: "black", fontSize: "15px", fontWeight: "bold" }}>About</div>
                    <div className="row" style={{ width: "100%" }}>
                        <div className="gambar" style={{ width: "30%" }}>
                            <img src={job} alt="info" />
                        </div>
                        <div className="desc" style={{ width: "70%", textAlign: "left", height: "50px" }}>
                            <div className="desc-main" style={{ fontSize: "15px", color: "#837E7E" }}>Network Egineer</div>
                        </div>
                        <div className="gambar" style={{ width: "30%" }}>
                            <img src={build} alt="info" />
                        </div>
                        <div className="desc" style={{ width: "70%", textAlign: "left", height: "50px" }}>
                            <div className="desc-main" style={{ fontSize: "15px", color: "#837E7E" }}>Your departement</div>
                        </div>
                        <div className="gambar" style={{ width: "30%" }}>
                            <img src={place} alt="info" />
                        </div>
                        <div className="desc" style={{ width: "70%", textAlign: "left", height: "50px" }}>
                            <div className="desc-main" style={{ fontSize: "15px", color: "#837E7E" }}>Your Location</div>
                        </div>
                    </div>
                    <div className="title-kotak" style={{ textAlign: "left", color: "#7D7D7D", letterSpacing: "2.7px", color: "black", fontSize: "15px", fontWeight: "bold" }}>Contac</div>
                    <div className="row" style={{ width: "100%" }}>
                        <div className="gambar" style={{ width: "30%" }}>
                            <img src={email} alt="info" />
                        </div>
                        <div className="desc" style={{ width: "70%", textAlign: "left" }}>
                            <div className="desc-main" style={{ fontSize: "15px", color: "#837E7E" }}>Yayan@gmail.com</div>
                        </div>

                    </div>
                </div>

                <div className="row" style={{ width: "100%" }}>
                    <div className="kotak-menu" style={{ width: "60%", margin: "0px auto", backgroundColor: "#141AA2", height: "40px", marginTop: "30px" }}>
                        <div style={{ padding: "5px" }}>
                            <div style={{ border: "1px solid #141AA2", borderRadius: "4px" }}>
                                <div className="desc-menu" style={{ fontSize: "18px", color: "#ffff" }}>
                                    LOGOUT
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NavbarBottom />
            </div>
        );
    }
}

export default AllTicket;
