import React, { Component } from 'react'
import '../../../loading.css';
import '../../../assets/style.css';
import NavbarBottom from '../navbar/NavbarBottom';
import { Link } from 'react-router-dom';
import menu from '../../../assets/img/menu.png';
import left from './../../../assets/img/left-arrow.png';
import ChartComponent from '../Chart_Component';

export class Home extends Component {

    state = {
        tab: "weekly",
        data: [
            {
                label: 'Senin',
                data: [[0, 1.5]]
            },
            {
                label: 'Selasa',
                data: [[0, 3]]
            },
            {
                label: 'Rabu',
                data: [[0, 3], [1, 3]]
            },
            {
                label: 'Kamis',
                data: [[0, 2]]
            },
            {
                label: "Jumat",
                data: [[0, 3]]
            }
        ]

    }

    handleClickTab = (e) => {
        this.setState({
            tab: e.target.id
        })
        if (e.target.id === "daily") {
            this.setState({
                data: [
                    {
                        label: 'Series 1',
                        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                    },
                    {
                        label: 'Series 2',
                        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
                    }
                ]
            })
        } else if (e.target.id === "weekly") {
            this.setState(
                {
                    data: [
                        {
                            label: 'Series 1',
                            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
                        },
                        {
                            label: 'Series 2',
                            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
                        }
                    ]
                }
            )
        } else if (e.target.id === "monthly") {
            this.setState(
                {
                    data: [
                        {
                            label: 'Series 1',
                            data: [[1, 1], [0, 3], [2, 5], [4, 4], [3, 6]]
                        },
                        {
                            label: 'Series 2',
                            data: [[1, 2], [3, 2], [2, 4], [4, 7], [0, 1]]
                        },
                        {
                            label: 'Series 2',
                            data: [[1, 2], [3, 2], [2, 4], [4, 7], [0, 1]]
                        }
                    ]
                }
            )
        }
    }
    render() {
        return (
            <div className="home">
                <div style={{ backgroundColor: "#141AA2", fontSize: "22px", fontFamily: "Muli", width: "100%", color: "white", padding: "16px 0px" }}>
                    <div className="menu" style={{ position: "absolute", top: "7px" }}>
                        <img src={menu} alt="" />
                    </div>
                    Detail Ticket
                </div>
                <div style={{ color: "black", width: "100%" }}>
                    <div className="search" style={{ width: "100%" }}>
                        <Link to='/home'>
                            <div className="row">
                                <div style={{ width: "20%", float: "left", marginLeft: "-10px" }}>
                                    <img src={left} alt="filter" />
                                </div>

                            </div>
                        </Link>
                    </div>
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
                                <div className="desc-main" id="daily" onClick={this.handleClickTab} style={{ width: "33.333%", fontSize: "15px", fontWeight: "500", borderRadius: (this.state.tab === "daily" ? "10px" : "0px"), backgroundColor: (this.state.tab === "daily" ? "#1477DB" : "#F6F8FF"), color: (this.state.tab === "daily" ? "#fff" : "#837F7F") }}>DAILY</div>
                                <div className="desc-main" id="weekly" onClick={this.handleClickTab} style={{ width: "33.333%", borderRadius: (this.state.tab === "weekly" ? "10px" : "0px"), backgroundColor: (this.state.tab === "weekly" ? "#1477DB" : "#F6F8FF"), fontSize: "15px", fontWeight: "500", color: (this.state.tab === "weekly" ? "#fff" : "#837F7F") }}>WEEKLY</div>
                                <div className="desc-main" id="monthly" onClick={this.handleClickTab} style={{ width: "33.333%", fontSize: "15px", fontWeight: "500", borderRadius: (this.state.tab === "monthly" ? "10px" : "0px"), backgroundColor: (this.state.tab === "monthly" ? "#1477DB" : "#F6F8FF"), color: (this.state.tab === "monthly" ? "#fff" : "#837F7F") }}>MONTHLY</div>
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

                        <div className="row" style={{ padding: "10px", margin: "0px", }}>
                            <ChartComponent data={this.state.data} />
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
