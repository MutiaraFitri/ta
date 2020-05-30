import React, { Component } from 'react';
import write from '../../../assets/img/write.png';
import NavbarBottom from '../navbar/NavbarBottom';
import back from './../../../assets/img/back.png';
import { Link } from 'react-router-dom';

class AllTicket extends Component {
    render() {

        return (
            <div className="home">

                <div style={{ backgroundColor: "#141AA2", fontSize: "22px", fontFamily: "Muli", width: "100%", color: "white", padding: "16px 0px" }}>
                    <div className="menu" style={{ position: "absolute", top: "7px" }}>
                        <Link to='.'>
                            <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
                                <img src={back} alt="back" style={{ width: "20px" }} />
                            </div>
                        </Link>
                    </div>
                    Article
                </div>
                <div style={{ width: "100%" }}>
                    <div className="title" style={{ width: "80%", textAlign: "left", padding: "30px 30px", marginTop: "-35px", letterSpacing: "0.09em" }}>
                        <p style={{ fontSize: "15px", color: "black", }}>Share solution with your customers and by adding articles to your knowlage base.</p>
                    </div>

                    <div className="tiket" style={{ width: "85%", marginTop: "10px", paddingBottom: "10px", borderBottom: "1px solid black", display: "flex", margin: "0px auto" }}>

                        <div className="judul-topic" style={{ width: "30%", textAlign: "left" }}>
                            <p style={{ fontSize: "15px", color: "black", }}>Topic</p>
                        </div>
                        <div className="judul-kategori" style={{ width: "20%" }}>
                            <p style={{ fontSize: "15px", color: "black", }}>Categories</p>
                        </div>
                        <div className="jdul-authors" style={{ width: "20%" }}>
                            <p style={{ fontSize: "15px", color: "black", }}>Authors</p>
                        </div>
                        <div className="jdul-view" style={{ width: "15%" }}>
                            <p style={{ fontSize: "15px", color: "black", }}>Views</p>
                        </div>
                        <div className="jdul-update" style={{ width: "15%", paddingRight: "10px" }}>
                            <p style={{ fontSize: "15px", color: "black", }}>Update</p>
                        </div>
                    </div>
                    <Link to='/new-article'>
                        <div className="tiket" style={{ width: "85%", marginTop: "10px", paddingBottom: "10px", display: "flex", margin: "0px auto" }}>

                            <div className="judul-topic" style={{ width: "30%", textAlign: "left" }}>
                                <p style={{ fontSize: "15px", color: "#104FAD", }}>No Internet connection</p>
                            </div>
                            <div className="judul-kategori" style={{ width: "20%" }}>
                                <p style={{ fontSize: "15px", color: "black", float: "left" }}>Network</p>
                            </div>
                            <div className="jdul-authors" style={{ width: "20%" }}>
                                <p style={{ fontSize: "15px", color: "black", }}>Yayan</p>
                            </div>
                            <div className="jdul-view" style={{ width: "15%" }}>
                                <p style={{ fontSize: "15px", color: "#545050", }}>2</p>
                            </div>
                            <div className="jdul-update" style={{ width: "15%", paddingRight: "10px" }}>
                                <p style={{ fontSize: "15px", color: "black", }}>16h</p>
                            </div>
                        </div>
                    </Link>
                    <div className="tiket" style={{ width: "85%", marginTop: "10px", paddingBottom: "10px", display: "flex", margin: "0px auto" }}>

                        <div className="judul-topic" style={{ width: "30%", textAlign: "left" }}>
                            <p style={{ fontSize: "15px", color: "#104FAD", }}>Anti Virus</p>
                        </div>
                        <div className="judul-kategori" style={{ width: "20%" }}>
                            <p style={{ fontSize: "15px", color: "black", float: "left" }}>Virus</p>
                        </div>
                        <div className="jdul-authors" style={{ width: "20%" }}>
                            <p style={{ fontSize: "15px", color: "black", }}>Ucup</p>
                        </div>
                        <div className="jdul-view" style={{ width: "15%" }}>
                            <p style={{ fontSize: "15px", color: "#545050", }}>8</p>
                        </div>
                        <div className="jdul-update" style={{ width: "15%", paddingRight: "10px" }}>
                            <p style={{ fontSize: "15px", color: "black", }}>1h</p>
                        </div>
                    </div>
                    <div className="tiket" style={{ width: "85%", marginTop: "10px", paddingBottom: "10px", display: "flex", margin: "0px auto" }}>

                        <div className="judul-topic" style={{ width: "30%", textAlign: "left" }}>
                            <p style={{ fontSize: "15px", color: "#104FAD", }}>Fix Printer</p>
                        </div>
                        <div className="judul-kategori" style={{ width: "20%" }}>
                            <p style={{ fontSize: "15px", color: "black", float: "left" }}>Hardware</p>
                        </div>
                        <div className="jdul-authors" style={{ width: "20%" }}>
                            <p style={{ fontSize: "15px", color: "black", }}>Yuli</p>
                        </div>
                        <div className="jdul-view" style={{ width: "15%" }}>
                            <p style={{ fontSize: "15px", color: "#545050", }}>2</p>
                        </div>
                        <div className="jdul-update" style={{ width: "15%", paddingRight: "10px" }}>
                            <p style={{ fontSize: "15px", color: "black", }}>2h</p>
                        </div>
                    </div>
                    <div style={{ width: "30%", float: "right", marginTop: "20px" }}>
                        <Link to="/new-article">
                            <img src={write} alt="" />
                        </Link>
                    </div>
                    <br /><br /><br /><br />

                </div>

                <NavbarBottom />
            </div>
        );
    }
}

export default AllTicket;
