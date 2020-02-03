import React, { Component } from 'react';
import NavbarTop from '../navbar/NavbarTop';
import filter from './../../../assets/img/filter.png';
import search from './../../../assets/img/search.png';
import hardware from './../../../assets/img/mouse-black.png';
import low from './../../../assets/img/low.jpg';
import hight from './../../../assets/img/hight.png';
import medium from './../../../assets/img/medium.png';
import network from './../../../assets/img/wifi.png';
import software from './../../../assets/img/virus.png';
import NavbarBottom from '../navbar/NavbarBottom';
import { Link } from 'react-router-dom';
import Antrian from '../../Antrian';

class AllTicket extends Component {
    render() {
        const detail = this.props.active == "Detail" ? "navbar-icon active" : "navbar-icon";

        return (
            <div className="home">
                <NavbarTop />
                <div style={{ color: "black" }} style={{ width: "100%" }}>
                    <div className="search" style={{ width: "100%" }}>
                        <div className="row">
                            <div style={{ width: "80%" }}>
                                <input type="text" name="q" id="q" placeholder="Search . . ." style={{ marginLeft: "5px", padding: "10px", width: "100%" }} />
                                <div style={{ marginTop: "-40px", width: "100%", marginLeft: "50%" }}>
                                    <img src={search} alt="search" style={{ top: "87px", right: "65px", position: "absolute" }} />
                                </div>
                            </div>
                            <div style={{ width: "20%" }}>
                                <button style={{ paddingTop: "10px", paddingBottom: "10px", float: "right", marginRight: "5px", paddingLeft: "12px", paddingRight: "12px", backgroundColor: "#fff", border: "none", color: "#fff", borderRadius: "10%", border: "1px solid #c6c6c6" }}>
                                    <img src={filter} alt="filter" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: "90%" }}>
                    <div className="title" style={{ textAlign: "left", marginLeft: "5px", letterSpacing: "5px" }}>
                        QUEUE
                    </div>

                    <Antrian
                        imageKategori={hardware}
                        nama="Justin"
                        kategori=" Hardware"
                        judul="I need new laptop"
                        keterangan="WAITING FOR SUPPORT"
                        status="Unassigned"
                        tanggal="29 Jan 20"
                        imagePriority={low}
                        priority="low"
                    />

                    <Antrian
                        imageKategori={network}
                        nama="Emma Wetson"
                        kategori="Network"
                        judul="I can't connect .."
                        keterangan="DONE"
                        status="Unassigned"
                        tanggal="29 Jan 20"
                        imagePriority={low}
                        priority="low"
                    />

                    <Antrian
                        imageKategori={software}
                        nama="Ningsih"
                        kategori="Software"
                        judul="Ada virus di ..  "
                        keterangan="WAITING FOR SUPPORT"
                        status="Unassigned"
                        tanggal="29 Jan 20"
                        imagePriority={low}
                        priority="low"
                    />

                    <br /><br /><br /><br />

                </div>
                <NavbarBottom active="Ticket" />
            </div>
        );
    }
}

export default AllTicket;
