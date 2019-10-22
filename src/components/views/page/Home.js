import React, { Component } from 'react'
import '../../../loading.css';
import '../../../assets/style.css';
import NavbarTop from '../navbar/NavbarTop';
import NavbarBottom from '../navbar/NavbarBottom';
import header from '../../../assets/img/contact.png';
import service from '../../../assets/img/customer-support.png';
import history from '../../../assets/img/history.png';
import info from '../../../assets/img/info.png';
import {Link} from 'react-router-dom';
import Category from '../Category';

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <NavbarTop />
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
                                    <Link to="/report">
                                        <div className="isi-menu-home">
                                            <div className="row">
                                                <img src={service} alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                                            </div>
                                            <div className="font-small">Service</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="menu-home">
                                <Link to="/history">
                                    <div className="isi-menu-home">
                                        <div className="row">
                                            <img src={history} alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                                        </div>
                                        <div className="font-small">History</div>
                                    </div>
                                </Link>
                                </div>
                                <div className="menu-home">
                                <Link to="/about">
                                    <div className="isi-menu-home">
                                        <div className="row">
                                            <img src={info} alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                                        </div>
                                        <div className="font-small">Info</div>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Our Services */}
                    <div style={{marginBottom:"75px"}}>
                        <div className="row" style={{width:"90%", fontWeight:"bold", marginBottom:"-15px"}}>
                            Our Services
                        </div>
                        <div className="row" style={{width:"90%"}}>
                            <hr width="15%" align="left" noshade style={{border:"2px solid #c6c6c6"}}/>
                        </div>
                        <Category/>
                    </div>
                </div>
                <NavbarBottom active="Home"/>
            </div>
        )
    }
}

export default Home
