import React, { Component } from 'react'
import NavbarTop from '../navbar/NavbarTop';
import logo from "./../../../assets/img/logo_komatsu.png"
import NavbarBottom from '../navbar/NavbarBottom';
import internet from '../../../assets/img/network.png';
import Top from '../Top';

export class Ticket extends Component {
    render() {
        return (
            <div className="home Ticket">
                <NavbarTop back="true" title="Your Ticket"/>                
                <div className="ticket">
                    <div className="row">
                        <div className="left-ticket">
                            <div className="content-ticket">
                                <div className="top">
                                    <div className="row" style={{margin:"0px"}}>
                                        <div className="date-ticket">12</div>
                                        <div className="month-ticket">
                                            SEPT 2019 <br/>
                                            3:15 PM
                                        </div>
                                        <div className="status">
                                            <div className="content-status">
                                                Pending
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr width="90%" align="left" style={{border:"1px solid #0050A1"}}/>
                                <div className="row" style={{width:"100%"}}>
                                    <div className="row" style={{margin:"5px auto"}}>
                                        <img src={internet} alt="Komatsu" style={{height: "30px",marginRight:"20px" }} />
                                        <div style={{height:"20px"}}>Network</div>                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-ticket">
                            <div className="content-ticket">
                                <img src={logo} alt="Komatsu" style={{ margin: "0 auto", height: "20px" }} />                               
                                <div className="queue">35</div>
                                <div className="button-detail">Detail</div>
                                <div className="id-ticket">131231241</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ticket">
                    <div className="row">
                        <div className="left-ticket">
                            <div className="content-ticket">
                                <div className="top">
                                    <div className="row" style={{margin:"0px"}}>
                                        <div className="date-ticket">12</div>
                                        <div className="month-ticket">
                                            SEPT 2019 <br/>
                                            3:15 PM
                                        </div>
                                        <div className="status">
                                            <div className="content-status">
                                                Pending
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr width="90%" align="left" style={{border:"1px solid #0050A1"}}/>
                                <div className="row" style={{width:"100%"}}>
                                    <div className="row" style={{margin:"5px auto"}}>
                                        <img src={internet} alt="Komatsu" style={{height: "30px",marginRight:"20px" }} />
                                        <div style={{height:"20px"}}>Network</div>                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-ticket">
                            <div className="content-ticket">
                                <img src={logo} alt="Komatsu" style={{ margin: "0 auto", height: "20px" }} />                               
                                <div className="queue">35</div>
                                <div className="button-detail">Detail</div>
                                <div className="id-ticket">131231241</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ticket">
                    <div className="row">
                        <div className="left-ticket">
                            <div className="content-ticket">
                                <Top/>
                                <hr width="90%" align="left" style={{border:"1px solid #0050A1"}}/>
                                <div className="row" style={{width:"100%"}}>
                                    <div className="row" style={{margin:"5px auto"}}>
                                        <img src={internet} alt="Komatsu" style={{height: "30px",marginRight:"20px" }} />
                                        <div style={{height:"20px"}}>Network</div>                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-ticket">
                            <div className="content-ticket">
                                <img src={logo} alt="Komatsu" style={{ margin: "0 auto", height: "20px" }} />                               
                                <div className="queue">35</div>
                                <div className="button-detail">Detail</div>
                                <div className="id-ticket">131231241</div>
                            </div>
                        </div>
                    </div>
                </div>
                <NavbarBottom active="Ticket" />
            </div>
        )
    }
}

export default Ticket
