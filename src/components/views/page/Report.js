import React, { Component } from 'react'
import '../../../loading.css';
import '../../../assets/style.css';
import NavbarBottom from '../navbar/NavbarBottom';
import _ from "lodash";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import back from './../../../assets/img/back.png';
import { prod } from '../../../redux/url/server';
import Chartjs2 from '../Chartjs2';
import { CSVLink } from "react-csv";
import axios from 'axios';
import Rating from './Rating';
import { fetchSummary } from '../../../redux/api/summary';
const jwt = require('jsonwebtoken');

const url = prod;
export class Home extends Component {

    state = {
        tab: "summary",
        report: "all"
    }

    renderSummary = () => {

        const totalRating = this.state.rating ?
            (this.state.rating[0].jumlah * 1) +
            (this.state.rating[1].jumlah * 2) +
            (this.state.rating[2].jumlah * 3) +
            (this.state.rating[3].jumlah * 4) +
            (this.state.rating[4].jumlah * 5) : 0;
        const jumlahRating = this.state.rating ? this.state.rating.length : 0;

        // _.map(this.props.data.summary.dataAssign, (values, key) => {
        // })
        var dataSummary = []
        var labesSummary = []
        var jumlahCancel = 0;
        var jumlahDone = 0;
        var jumlahSeluruh = 0;
        const csvData = []
        
        if (this.state.report === "all") {
            _.map(this.props.data.summary.data, (values, key) => {
                if (values.status === "DONE") { jumlahDone = values.jumlah }
                if (values.status === "CANCELED") { jumlahCancel = values.jumlah }
                jumlahSeluruh += values.jumlah;
                dataSummary.push(values.jumlah)
                labesSummary.push(values.status)
                csvData.push(values)
            })
        }
        else {
            _.map(this.props.data.summary.dataThisMonth, (values, key) => {
                if (values.status === "DONE") { jumlahDone = values.jumlah }
                if (values.status === "CANCELED") { jumlahCancel = values.jumlah }
                jumlahSeluruh += values.jumlah;
                dataSummary.push(values.jumlah)
                labesSummary.push(values.status)
                csvData.push(values)
            })
        }
        // console.log("dateku", jumlahSeluruh)
        // _.map(this.props.data.summary.dataDone, (values, key) => {
        //     csvData.push(values)
        // })
        // _.map(this.props.data.summary.dataCancel, (values, key) => {
        //     csvData.push(values)
        // })
        // _.map(this.props.data.summary.dataEscalated, (values, key) => {
        //     csvData.push(values)
        // })
        var dataHari = {
            chartData: {
                labels: labesSummary,
                datasets: [
                    {
                        data: dataSummary,
                        backgroundColor: [
                            "red", "#0050A1", "ORANGE"
                        ]
                    }
                ]
            }
        };


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
                            <Chartjs2 data={dataHari.chartData} />
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
                                <div className="desc-main" style={{ fontSize: "24px", fontWeight: "700" }}>{jumlahDone ? jumlahDone : "0"}</div>
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
                                <div className="desc-main" style={{ fontSize: "24px", fontWeight: "700" }}>{jumlahSeluruh ? ((jumlahDone / jumlahSeluruh) * 100).toFixed(1) + "%" : "0%"}</div>
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
                            <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600", color: "black", float: "left", marginLeft: "20px" }}>Assigned vs Done</div>
                        </div>
                        <div className="desc" style={{ width: "45%", textAlign: "left", paddingLeft: "20px" }}>
                            <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600" }}>{jumlahSeluruh ? jumlahSeluruh : "0"}</div>
                            <div className="desc-main" style={{ fontSize: "12px", fontWeight: "300" }}>Assigned</div>
                        </div>
                        <div className="desc" style={{ width: "35%", textAlign: "left", paddingLeft: "20px" }}>
                            <div className="desc-main" style={{ fontSize: "14px", fontWeight: "600" }}>{jumlahCancel ? jumlahCancel : "0"}</div>
                            <div className="desc-main" style={{ fontSize: "12px", fontWeight: "300" }}>Cancel</div>
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
                                <span className="material-icons" style={{ marginRight: "10px", verticalAlign: "bottom" }}>
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

    renderFeedback = () => {
        return (<Rating tipe={this.state.report} user={this.state.user_id} />)
    }
    componentDidMount() {
        jwt.verify(localStorage.getItem("jwt"), 'dimasputray', (err, decoded) => {
            if (err) {
                console.log("Error", err)
                localStorage.removeItem("jwt");
                // dispatch(loginFailed("Your session has expired"));
            }
            else {
                const user = decoded.data;
                this.props.getSummary("done",user.user_id);
                this.props.getSummary("escalated",user.user_id);
                this.props.getSummary("cancel",user.user_id);
                this.props.getSummary("all",user.user_id);
                this.props.getSummary("this_month",user.user_id);
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
            }
        });
    }

    handleChange = (e) => {
        this.setState({
            report: e.target.value
        })
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
                            marginTop: "80px",
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
                <select className="input-form-full" id="cars" name="issue_id" style={{ width: "80%", color: "grey", marginTop: "20px", padding: "10px" }} onChange={this.handleChange} value={this.state.report} defaultValue="all">
                    <option value="all" >All Day</option>
                    <option value="month" >This Month</option>
                </select>
                {
                    (this.state.tab === "summary") ?
                        this.renderSummary() :
                        this.renderFeedback()
                }
                <NavbarBottom active="Home" />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    data: state
})
const mapDispacthToProps = (dispatch) => {
    return {
        getSummary: (STATUS, id) => dispatch(fetchSummary(STATUS, id)),
    }
}

export default connect(
    mapStateToProps, mapDispacthToProps
)(Home);

