import React, { Component } from 'react'
import '../../../loading.css';
import '../../../assets/style.css';
import NavbarBottom from '../navbar/NavbarBottom';
import { Link } from 'react-router-dom';
import back from './../../../assets/img/back.png';
import Chartjs2 from '../Chartjs2';

export class Home extends Component {

    state = {
        tab: "weekly",
        chartData: {
            labels: ['week1', 'week2', 'week3', 'week4'],
            datasets: [
                {
                    label: 'finish',
                    data: [
                        11,
                        1,
                        6,
                        20
                    ],
                    backgroundColor: [
                        "#ff4", "#ff4", "#ff4", "#ff4"
                    ],
                }, {
                    label: 'assign',
                    data: [
                        2,
                        7,
                        5,
                        5]
                    ,
                    backgroundColor: [
                        "#789999", "#789999", "#789999", "#789999"

                    ]
                }]
        }
    }

    handleClickTab = (e) => {
        this.setState({
            tab: e.target.id
        })
        if (e.target.id === "daily") {
            this.setState({
                chartData: {
                    labels: ['s', 's', 'r', 'k', 'j', 's', 'm'],
                    datasets: [
                        {
                            label: 'assigment',
                            data: [
                                1,
                                2,
                                3,
                                3,
                                5,
                                6,
                                4,],
                            backgroundColor: [
                                "#ff4", "#ff4", "#ff4", "#ff4", "#ff4", "#ff4", "#ff4",
                            ]
                        },
                        {
                            label: 'finish',
                            data: [
                                1,
                                4,
                                6,
                                5,
                                1,
                                9,
                                4,],
                            backgroundColor: [
                                "#789999", "#789999", "#789999", "#789999", "#789999", "#789999", "#789999"
                            ]
                        }
                    ]
                }
            })
        } else if (e.target.id === "weekly") {
            this.setState({
                chartData: {
                    labels: ['week1', 'week2', 'week3', 'week4'],
                    datasets: [
                        {
                            label: 'finish',
                            data: [
                                11,
                                1,
                                6,
                                20
                            ],
                            backgroundColor: [
                                "#ff4", "#ff4", "#ff4", "#ff4",
                            ]
                        }, {
                            label: 'assign',
                            data: [
                                2,
                                7,
                                5,
                                5]
                            ,
                            backgroundColor: [
                                "#789999", "#789999", "#789999", "#789999",

                            ]
                        }]
                }
            })
        } else if (e.target.id === "monthly") {
            this.setState({
                chartData: {
                    labels: ['jan', 'feb', 'mart', 'apr', 'mai', 'jun'],
                    datasets: [
                        {
                            label: 'assigment',
                            data: [
                                1,
                                4,
                                6,
                                3,
                                9,
                                3,
                            ],
                            backgroundColor: [
                                "#ff4", "#ff4", "#ff4", "#ff4", "#ff4", "#ff4",
                            ]
                        },
                        {
                            label: 'finish',
                            data: [
                                2,
                                7,
                                5,
                                5,
                                1,
                                9,
                            ],
                            backgroundColor: [
                                "#789999", "#789999", "#789999", "#789999", "#789999", "#789999",
                            ]
                        }
                    ]
                }
            })
        }
    }
    render() {
        return (
            <div className="home" >
                <div style={{ backgroundColor: "#141AA2", fontSize: "22px", fontFamily: "Muli", width: "100%", color: "white", padding: "16px 0px", }}>
                    <div className="menu" style={{ position: "absolute", top: "7px" }}>
                        <Link to='.'>
                            <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
                                <img src={back} alt="back" style={{ width: "20px" }} />
                            </div>
                        </Link>
                    </div>
                    Detail Ticket
                </div>
                <div className="mainmenu" style={{ display: "flex" }}>
                    <div className="menu"
                        style={{
                            width: "330px",
                            margin: "20px 20px 0px 0px",
                            height: "38px",
                            backgroundColor: "#F7F8FF",
                            borderRadius: "10px"
                        }}>
                        <div className="row" style={{ padding: "10px", margin: "0px", }}>
                            <div className="desc" style={{ width: "100%", display: "flex" }}>
                                <div className="desc-main" id="daily" onClick={this.handleClickTab} style={{ cursor: "pointer", width: "33.333%", fontSize: "15px", fontWeight: "500", borderRadius: (this.state.tab === "daily" ? "10px" : "0px"), backgroundColor: (this.state.tab === "daily" ? "#1477DB" : "#F6F8FF"), color: (this.state.tab === "daily" ? "#fff" : "#837F7F") }}>DAILY</div>
                                <div className="desc-main" id="weekly" onClick={this.handleClickTab} style={{ cursor: "pointer", width: "33.333%", borderRadius: (this.state.tab === "weekly" ? "10px" : "0px"), backgroundColor: (this.state.tab === "weekly" ? "#1477DB" : "#F6F8FF"), fontSize: "15px", fontWeight: "500", color: (this.state.tab === "weekly" ? "#fff" : "#837F7F") }}>WEEKLY</div>
                                <div className="desc-main" id="monthly" onClick={this.handleClickTab} style={{ cursor: "pointer", width: "33.333%", fontSize: "15px", fontWeight: "500", borderRadius: (this.state.tab === "monthly" ? "10px" : "0px"), backgroundColor: (this.state.tab === "monthly" ? "#1477DB" : "#F6F8FF"), color: (this.state.tab === "monthly" ? "#fff" : "#837F7F") }}>MONTHLY</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="curva" style={{ display: "flex" }}>
                    <div className="curva"
                        style={{
                            width: "330px",
                            margin: "20px 20px 0px 0px",
                            borderRadius: "10px",
                            height: "200px",
                        }}>

                        <div className="row" style={{ padding: "10px", margin: "0px", height: '200px' }}>
                            {/* <ChartComponent data={this.state.datasets} /> */}
                            <Chartjs2 data={this.state.chartData} />
                        </div>
                    </div>
                </div>
                <div className="menu-atas" style={{ display: "flex" }}>
                    <div className="menu"
                        style={{
                            width: "155px",
                            margin: "20px 20px 0px 0px",
                            borderRadius: "10px",
                            backgroundColor: "#FFF9F9",
                            border: "2px solid #DEDEDE",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}>
                        <div className="row" style={{ padding: "20px", margin: "0px" }}>

                            <div className="desc" style={{ width: "100%" }}>
                                <div className="desc-main" style={{ fontSize: "24px", fontWeight: "700" }}>12</div>
                                <div className="desc-main" style={{ fontSize: "12px", fontWeight: "500", textTransform: "uppercase" }}>Task Done</div>
                            </div>
                        </div>
                    </div>
                    <div className="menu"
                        style={{
                            width: "155px",
                            margin: "20px 20px 0px 0px",
                            borderRadius: "10px",
                            backgroundColor: "#FFF9F9",
                            border: "2px solid #DEDEDE",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}>
                        <div className="row" style={{ padding: "20px", margin: "0px" }}>
                            <div className="desc" style={{ width: "100%" }}>
                                <div className="desc-main" style={{ fontSize: "24px", fontWeight: "700" }}>70%</div>
                                <div className="desc-main" style={{ fontSize: "12px", fontWeight: "500", textTransform: "uppercase" }}>Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu_bawah">
                    <div className="menuReport"
                        style={{
                            width: "329px",
                            height: "81px",
                            margin: "30px 0px 0px -25px",
                            borderRadius: "10px",
                            backgroundColor: "#FFF9F9",
                            border: "2px solid #DEDEDE",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}>
                        <div className="row" style={{ padding: "10px", margin: "0px" }}>

                            <div className="gambar" style={{ width: "100%", padding: "5px 0px" }}>
                                <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600", color: "black", float: "left", marginLeft: "20px" }}>Created vs Done</div>
                            </div>
                            <div className="desc" style={{ width: "35%", textAlign: "left", paddingLeft: "20px" }}>
                                <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600" }}>17</div>
                                <div className="desc-main" style={{ fontSize: "12px", fontWeight: "300" }}>Created</div>
                            </div>
                            <div className="desc" style={{ width: "35%", textAlign: "left", paddingLeft: "20px" }}>
                                <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600" }}>12</div>
                                <div className="desc-main" style={{ fontSize: "12px", fontWeight: "300" }}>Done</div>
                            </div>
                        </div>
                    </div>
                    <div className="menu_bawah2">
                        <div className="menuReport"
                            style={{
                                width: "329px",
                                height: "81px",
                                margin: "20px 0px 0px -25px",
                                borderRadius: "10px",
                                backgroundColor: "#FFF9F9",
                                border: "2px solid #DEDEDE",
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                            }}>
                            <div className="row" style={{ padding: "10px", margin: "0px" }}>

                                <div className="gambar" style={{ width: "100%", padding: "5px 0px" }}>
                                    <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600", color: "black", float: "left", marginLeft: "20px" }}>Customer Satisfaction</div>
                                </div>
                                <div className="desc" style={{ width: "35%", textAlign: "left", paddingLeft: "20px" }}>
                                    <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600" }}>90,1%</div>
                                    <div className="desc-main" style={{ fontSize: "12px", fontWeight: "300" }}>Average Rating</div>
                                </div>
                                <div className="desc" style={{ width: "35%", textAlign: "left", paddingLeft: "20px" }}>
                                    <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600" }}>12</div>
                                    <div className="desc-main" style={{ fontSize: "12px", fontWeight: "300" }}>User Review</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                </div>
                <NavbarBottom active="Home" />
            </div>
        )
    }
}

export default Home
