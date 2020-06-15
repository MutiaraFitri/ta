import React, { Component } from 'react'
import '../../../loading.css';
import '../../../assets/style.css';
import NavbarBottom from '../navbar/NavbarBottom';
import { Link } from 'react-router-dom';
import back from './../../../assets/img/back.png';
import { dev} from '../../../redux/url/server';
import Chartjs2 from '../Chartjs2';
import { CSVLink} from "react-csv";
import axios from 'axios';
import Rating from './Rating';
const jwt = require('jsonwebtoken');

const url = dev;
export class Home extends Component {

    state = {
        tab: "summary",
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
    }
    renderSummary = () => {
        const csvData = [
            ["firstname", "lastname", "email"],
            ["Ahmed", "Tomi", "ah@smthing.co.com"],
            ["Raed", "Labes", "rl@smthing.co.com"],
            ["Yezzi", "Min l3b", "ymin@cocococo.com"]
        ];
        const totalRating = this.state.rating ?
            (this.state.rating[0].jumlah * 1) +
            (this.state.rating[1].jumlah * 2) +
            (this.state.rating[2].jumlah * 3) +
            (this.state.rating[3].jumlah * 4) +
            (this.state.rating[4].jumlah * 5) : 0;
        const jumlahRating = this.state.rating ? this.state.rating.length : 0;
        return (
            <div className="home" style={{ paddingBottom: "70px", width: "100%" }} >
                <div className="curva" style={{ display: "flex", width: "100%" }}>
                    <div className="curva"
                        style={{
                            width: "80%",
                            margin: "20px auto 0px auto",
                            borderRadius: "10px",
                            height: "200px",
                            paddingBottom: "10px"
                        }}>

                        <div className="row" style={{ padding: "10px", margin: "0px", height: '200px' }}>
                            {/* <ChartComponent data={this.state.datasets} /> */}
                            <Chartjs2 data={this.state.chartData} />
                        </div>
                    </div>
                </div>
                <div className="menu-atas" style={{ display: "flex", width: "80%" }}>
                    <div className="menu"
                        style={{
                            width: "50%",
                            margin: "20px 10px 0px auto",
                            borderRadius: "10px",
                            border: "2px solid #DEDEDE",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}>
                        <div className="row" style={{ padding: "20px", margin: "0px" }}>

                            <div className="desc" style={{ width: "100%" }}>
                                <div className="desc-main" style={{ fontSize: "24px", fontWeight: "700" }}>{this.state.jumlahTaskDone ? this.state.jumlahTaskDone : "0"}</div>
                                <div className="desc-main" style={{ fontSize: "12px", fontWeight: "500", textTransform: "uppercase" }}>Task Done</div>
                            </div>
                        </div>
                    </div>
                    <div className="menu"
                        style={{
                            width: "50%",
                            margin: "20px auto 0px 10px",
                            borderRadius: "10px",
                            border: "2px solid #DEDEDE",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}>
                        <div className="row" style={{ padding: "20px", margin: "0px" }}>
                            <div className="desc" style={{ width: "100%" }}>
                                <div className="desc-main" style={{ fontSize: "24px", fontWeight: "700" }}>{this.state.jumlahTaskDone ? ((this.state.jumlahTaskDone / (this.state.jumlahTaskDone + this.state.jumlahTaskNotDone)) * 100).toFixed(1) + "%" : "0%"}</div>
                                <div className="desc-main" style={{ fontSize: "12px", fontWeight: "500", textTransform: "uppercase" }}>Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menuReport"
                    style={{
                        width: "80%",
                        height: "81px",
                        margin: "30px auto 0px auto",
                        borderRadius: "10px",
                        border: "2px solid #DEDEDE",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        display: "flex",
                        paddingBottom: "10px"

                    }}>
                    <div className="row" style={{ padding: "10px", margin: "0px", width: "100%" }}>

                        <div className="gambar" style={{ width: "100%", padding: "5px 0px" }}>
                            <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600", color: "black", float: "left", marginLeft: "20px" }}>Created vs Done</div>
                        </div>
                        <div className="desc" style={{ width: "45%", textAlign: "left", paddingLeft: "20px" }}>
                            <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600" }}>{this.state.jumlahTaskDone ? this.state.jumlahTaskDone + this.state.jumlahTaskNotDone : "0"}</div>
                            <div className="desc-main" style={{ fontSize: "12px", fontWeight: "300" }}>Created</div>
                        </div>
                        <div className="desc" style={{ width: "35%", textAlign: "left", paddingLeft: "20px" }}>
                            <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600" }}>{this.state.jumlahTaskDone ? this.state.jumlahTaskDone : "0"}</div>
                            <div className="desc-main" style={{ fontSize: "12px", fontWeight: "300" }}>Done</div>
                        </div>
                    </div>
                </div>
                <div className="menu_bawah2" style={{ width: "80%", display: "flex" }}>
                    <div className="menuReport"
                        style={{
                            width: "100%",
                            height: "81px",
                            margin: "20px auto 0px auto",
                            borderRadius: "10px",
                            border: "2px solid #DEDEDE",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            paddingBottom: "10px"
                        }}>
                        <div className="row" style={{ padding: "10px", margin: "0px" }}>

                            <div className="gambar" style={{ width: "100%", padding: "5px 0px" }}>
                                <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600", color: "black", float: "left", marginLeft: "20px" }}>Customer Satisfaction</div>
                            </div>
                            <div className="desc" style={{ width: "45%", textAlign: "left", paddingLeft: "20px" }}>
                                <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600" }}>{this.state.rating ? ((totalRating / (jumlahRating * 5)) * 100).toFixed(1) : "0"}%</div>
                                <div className="desc-main" style={{ fontSize: "12px", fontWeight: "300" }}>Average Rating</div>
                            </div>
                            <div className="desc" style={{ width: "35%", textAlign: "left", paddingLeft: "20px" }}>
                                <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600" }}>{this.state.rating ? jumlahRating : "0"}</div>
                                <div className="desc-main" style={{ fontSize: "12px", fontWeight: "300" }}>User Review</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ width: "80%", border: "1px solid #0050A1", padding: "10px 0px", borderRadius: "10px" }}>
                    <div style={{ width: "100%" }}>
                        <CSVLink data={csvData}>
                            <div style={{ width: "40%", margin: "0px auto" }}>
                                <span class="material-icons" style={{ marginRight: "10px", verticalAlign: "bottom" }}>
                                    print
                            </span>
                                <span style={{ fontSize: "18px", fontWeight: "700" }}>
                                    Print
                            </span>
                            </div>
                        </CSVLink>
                    </div>
                </div>
            </div>
        )
    }

    renderFeedback = () =>{
        return (<Rating/>)
    }
    componentDidMount() {
        axios.get(`https://api.ict-servicedesk.xyz/rating`, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const rating = res.data.values;
                console.log("data", rating)
                this.setState({
                    rating
                })
            })
        jwt.verify(localStorage.getItem("jwt"), 'dimasputray', (err, decoded) => {
            if (err) {
                console.log("Error", err)
                localStorage.removeItem("jwt");
                // dispatch(loginFailed("Your session has expired"));
            }
            const user = decoded.data;
            this.setState({ ...user },
                () => {
                    axios.get(url + `ticket/done/` + this.state.user_id, {
                        headers: {
                            key: "8dfcb234a322aeeb6b530f20c8e9988e"
                        }
                    })
                        .then(res => {
                            this.setState({ jumlahTaskDone: res.data.values.length })
                        })
                    axios.get(url + `ticket/not-done/` + this.state.user_id, {
                        headers: {
                            key: "8dfcb234a322aeeb6b530f20c8e9988e"
                        }
                    })
                        .then(res => {
                            this.setState({ jumlahTaskNotDone: res.data.values.length })
                        })
                }
            )
        });
    }

    handleClickTab = (e) => {
        this.setState({
            tab: e.target.id
        });
    }
    render() {
        return (
            <div className="home" style={{ paddingBottom: "70px" }} >
                <div className="navbar-message" >
                    <div className="menu" style={{ position: "absolute", top: "7px" }}>
                        <Link to='.'>
                            <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
                                <img src={back} alt="back" style={{ width: "20px" }} />
                            </div>
                        </Link>
                    </div>
                    Report
                </div>
                <div className="mainmenu" style={{ display: "flex", width: "100%", textAlign: "center" }}>
                    <div className="menu"
                        style={{
                            width: "90%",
                            margin: "20px auto 0px auto",
                            height: "38px",
                            backgroundColor: "#F7F8FF",
                            borderRadius: "10px",
                            marginTop: "100px",
                        }}>
                        <div className="row" style={{ padding: "10px", margin: "0px", }}>
                            <div className="desc" style={{ width: "100%", display: "flex" }}>
                                <div className="desc-main" id="summary" onClick={this.handleClickTab} style={{ cursor: "pointer", width: "50%", fontSize: "15px", fontWeight: "500", borderRadius: (this.state.tab === "summary" ? "10px" : "0px"), backgroundColor: (this.state.tab === "summary" ? "#1477DB" : "#F6F8FF"), color: (this.state.tab === "summary" ? "#fff" : "#837F7F") }}>SUMMARY</div>
                                <div className="desc-main" id="feedbacks" onClick={this.handleClickTab} style={{ cursor: "pointer", width: "50%", borderRadius: (this.state.tab === "feedbacks" ? "10px" : "0px"), backgroundColor: (this.state.tab === "feedbacks" ? "#1477DB" : "#F6F8FF"), fontSize: "15px", fontWeight: "500", color: (this.state.tab === "feedbacks" ? "#fff" : "#837F7F") }}>FEEDBACK</div>
                                {/* <div className="desc-main" id="monthly" onClick={this.handleClickTab} style={{ cursor: "pointer", width: "33.333%", fontSize: "15px", fontWeight: "500", borderRadius: (this.state.tab === "monthly" ? "10px" : "0px"), backgroundColor: (this.state.tab === "monthly" ? "#1477DB" : "#F6F8FF"), color: (this.state.tab === "monthly" ? "#fff" : "#837F7F") }}>MONTHLY</div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {
                    (this.state.tab==="summary")?
                        this.renderSummary() :
                            this.renderFeedback()
                }
                <NavbarBottom active="Home" />
            </div>
        )
    }
}

export default Home
