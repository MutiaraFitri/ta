import React, { Component } from 'react'
import '../../../loading.css';
import '../../../assets/style.css';
import logo from '../../../assets/img/logo_komatsu.png';
import header from '../../../assets/img/contact.png';
import service from '../../../assets/img/customer-support.png';
import history from '../../../assets/img/history.png';
import info from '../../../assets/img/info.png';
import lain from '../../../assets/img/lain.png';
import mouse from '../../../assets/img/mouse.png';
import software from '../../../assets/img/software.png';
import network from '../../../assets/img/network.png';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="container">
                    <div className="row">
                        <img src={logo} alt="Komatsu" style={{ margin: "0 auto", height: "30px" }} />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <img src={header} alt="Komatsu" style={{ width: "100%", margin: "0 auto", zIndex: "-2", marginBottom: "-15px" }} />
                    </div>
                    <div style={{ border: "2px solid rgba(0,0,0,0.08", borderRadius: "10px", margin: "-50px auto 0px auto", backgroundColor: "#fff", zIndex: "2", width: "90%" }}>
                        <div className="row" style={{ width: "90%", fontWeight: "bold" }}>
                            <div style={{ width: "70%", textAlign: "left" }}>Yuli Susanto</div>
                            <div style={{ width: "30%", textAlign: "right" }}>12345</div>
                            <hr width="100%" noshade style={{border:"1px solid #c6c6c6"}} />
                            <div className="row" style={{ width: "90%", margin: "0 auto" }}>
                                <div className="menu-home">
                                    <div className="isi-menu-home">
                                        <div className="row">
                                            <img src={service} alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                                        </div>
                                        <div className="font-small">Service</div>
                                    </div>
                                </div>
                                <div className="menu-home">
                                    <div className="isi-menu-home">
                                        <div className="row">
                                            <img src={history} alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                                        </div>
                                        <div className="font-small">History</div>
                                    </div>
                                </div>
                                <div className="menu-home">
                                    <div className="isi-menu-home">
                                        <div className="row">
                                            <img src={info} alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                                        </div>
                                        <div className="font-small">Info</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row" style={{width:"90%", fontWeight:"bold", marginBottom:"-15px"}}>
                            Our Services
                        </div>
                        <div className="row" style={{width:"90%"}}>
                            <hr width="15%" align="left" noshade style={{border:"2px solid #c6c6c6"}}/>
                        </div>
                        <div className="row" style={{ width: "90%", margin: "0 auto" }}>
                                <div className="menu-service">
                                    <div className="isi-our-service">
                                        <div className="row">
                                            <img src={network} alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                                        </div>
                                    </div>
                                        <div className="font-small">Network</div>
                                </div>
                                <div className="menu-service">
                                    <div className="isi-our-service">
                                        <div className="row">
                                            <img src={mouse} alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                                        </div>
                                    </div>
                                        <div className="font-small">Software</div>
                                </div>
                                <div className="menu-service">
                                    <div className="isi-our-service">
                                        <div className="row">
                                            <img src={software} alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                                        </div>
                                    </div>
                                        <div className="font-small">Hardware</div>
                                </div>
                                <div className="menu-service">
                                    <div className="isi-our-service">
                                        <div className="row">
                                            <img src={lain} alt="" style={{ margin: "0 auto -10px auto", height: "10px" }} />
                                        </div>
                                    </div>
                                        <div className="font-small">Others</div>
                                </div>
                            </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home
