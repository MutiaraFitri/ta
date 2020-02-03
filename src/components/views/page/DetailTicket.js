import React, { Component } from 'react';
import NavbarTop from '../navbar/NavbarTop';
import filter from './../../../assets/img/filter.png';
import search from './../../../assets/img/search.png';
import mouseBlack from './../../../assets/img/mouse-black.png';
import left from './../../../assets/img/left-arrow.png';
import mann from './../../../assets/img/mann.png';
import priority from './../../../assets/img/priority.png';
import garbage from './../../../assets/img/garbage.png';
import tambah from './../../../assets/img/tambah.png';
import macbook from './../../../assets/img/smashed_macbook-1-780x521.png';
import down from './../../../assets/img/arrow_down.png';
import NavbarBottom from '../navbar/NavbarBottom';
import {Link} from 'react-router-dom';
import menu from '../../../assets/img/menu.png';

class AllTicket extends Component {
    render() {
        return (
            <div className="home" style={{ paddingBottom: "70px" }}>
                <div style={{backgroundColor:"#141AA2",fontSize:"22px",fontFamily:"Muli",width:"100%",color:"white",padding:"16px 0px"}}>
                    <div className="menu" style={{position:"absolute",top:"7px"}}>
                        <img src={menu} alt=""/>
                    </div>
                    Detail Ticket
                </div>
                <div style={{ color: "black" }} style={{ width: "100%" }}>
                    <div className="search" style={{ width: "100%" }}>
                        <Link to='/all-ticket'>
                        <div className="row">
                            <div style={{ width: "20%",float:"left",marginLeft:"-10px" }}>
                                    <img src={left} alt="filter" /> 
                            </div>
                            
                        </div>
                        </Link>
                    </div>
                </div>
                <div style={{ width: "100%" }}>
                    <div className="title" style={{ textAlign: "left", margin: "25px" }}>
                        <p style={{ fontSize: "12px", padding: "0px", margin: "0px" }}>Title </p>
                        <p style={{ fontSize: "22px", padding: "0px", margin: "0px" }}>I Need new laptop please.</p>
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
                        <div className="nama" style={{ fontSize: "24px", color: "black", fontWeight: "bold", textAlign: "left" }}>Justin Bieber</div>
                        <div className="email" style={{ fontSize: "20px", color: "black", textAlign: "center", textAlign: "left" }}> bieber@gmail.com </div>
                    </div>
                </div>

                <div className="deskripsi-isi" style={{ width: "100%", marginTop: "10px" }}>
                    <div style={{ backgroundColor: "#F4F4F6", width: "170px", fontSize: "14px", float: "right", fontWeight: "700" }}>
                        Waiting for Support
                        <img src={down} alt="down" width="10" style={{ marginLeft: "5px" }} />
                    </div>
                </div>

                <div className="kotak" style={{ backgroundColor: "#F4F4F6", width: "100%", marginTop: "20px", paddingBottom: "30px" }}>
                    <div className="description" style={{ backgroundColor: "#fff", width: "80%", margin: "0px auto", padding: "20px", margin: "20px auto" }}>
                        <div className="title-kotak" style={{ textAlign: "left", color: "#7D7D7D" }}>Description</div>
                        <div className="title-kotak" style={{ textAlign: "left", color: "#000", fontSize: "16px", fontWeight: "700", marginTop: "10px" }}>I dropped my laptop as I was walking to work this morning. can i get a new one?</div>
                        <div style={{ width: "100%", textAlign: "left", marginTop: "10px" }}>
                            <img src={macbook} alt="macbook" style={{ textAlign: "left" }} />
                        </div>
                        <div className="title-kotak" style={{ textAlign: "left", color: "#000", fontSize: "16px", fontWeight: "100", marginTop: "10px" }}>Desktop/Laptop</div>
                    </div>
                    <div style={{ textAlign: "left", width: "100%", marginLeft: "25px", fontSize: "14px", fontWeight: "700", display: "flex" }}>Location  : Divisi MIS Lantai 3</div>
                    <div style={{ textAlign: "left", width: "100%", marginLeft: "25px", fontSize: "14px", fontWeight: "700", display: "flex" }}>Report  : Divisi MIS Lantai 3</div>
                </div>
                <div className="row" style={{ width: "100%" }}>
                    <div className="kotak-menu" style={{ width: "33%" }}>
                        <div style={{ padding: "5px" }}>
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
                    <div className="kotak-menu" style={{ width: "33%" }}>
                        <div style={{ padding: "5px" }}>
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
                    <div className="kotak-menu" style={{ width: "33%" }}>
                        <div style={{ padding: "5px" }}>
                            <div style={{ border: "1px solid #e9e9e9", borderRadius: "10px", padding: "10px 0px" }}>
                                <div className="icon-menu">
                                    <img src={garbage} alt="tambah" />
                                </div>
                                <div className="desc-menu" style={{ fontSize: "14px" }}>
                                    Assign to Me
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NavbarBottom active="Ticket" />
            </div>
        );
    }
}

export default AllTicket;
