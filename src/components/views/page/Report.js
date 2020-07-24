import React, { Component } from 'react'
import '../../../loading.css';
import '../../../assets/style.css';
import NavbarBottom from '../navbar/NavbarBottom';
import _ from "lodash";
import moment from 'moment'
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
const csvData = []

export class Report extends Component {

    state = {
        tab: "summary",
        report: "all"
    }

    renderSummary = () => {

        var varRating1 = 0;
        var varRating2 = 0;
        var varRating3 = 0;
        var varRating4 = 0;
        var varRating5 = 0;
        var datanya = null;
        if (this.state.report === "all") {
            datanya = this.state.rating;
        }
        if (this.state.report === "month") {
            datanya = this.state.ratingMonth;
        }

        _.map(datanya, (values, key) => {
            if (values.ticket_rating === 1) {
                varRating1 = values.jumlah;
            }
            if (values.ticket_rating === 2) {
                varRating2 = values.jumlah;
            }
            if (values.ticket_rating === 3) {
                varRating3 = values.jumlah;
            }
            if (values.ticket_rating === 4) {
                varRating4 = values.jumlah;
            }
            if (values.ticket_rating === 5) {
                varRating5 = values.jumlah;
            }
        })
        const totalRating = (varRating1 * 1) + (varRating2 * 2) + (varRating3 * 3) + (varRating4 * 4) + (varRating5 * 5);
        const rating5 = varRating5 ? varRating5 : 0
        const rating4 = varRating4 ? varRating4 : 0
        const rating3 = varRating3 ? varRating3 : 0
        const rating2 = varRating2 ? varRating2 : 0
        const rating1 = varRating1 ? varRating1 : 0
        var jumlahRating = 0;
        _.map(datanya, (values, key) => {
            jumlahRating += values.jumlah;
        })

        // _.map(this.props.data.summary.dataAssign, (values, key) => {
        // })
        var dataSummary = []
        var labesSummary = []
        var jumlahCancel = 0;
        var jumlahDone = 0;
        var jumlahSeluruh = 0;

        if (this.state.report === "all") {
            if (this.props.data.summary.data) {
                _.map(this.props.data.summary.data, (values, key) => {
                    if (values.STATUS === "DONE") { jumlahDone = values.total }
                    if (values.STATUS === "CANCELED") { jumlahCancel = values.total }
                    jumlahSeluruh += values.total;
                    dataSummary.push(values.total);
                    labesSummary.push(values.STATUS)

                })

                if (csvData.length === 0) {
                    csvData.push(...this.props.data.summary.data)
                }
            }
        }
        else {
            _.map(this.props.data.summary.dataThisMonth, (values, key) => {
                if (values.status === "DONE") { jumlahDone = values.total }
                if (values.status === "CANCELED") { jumlahCancel = values.total }
                jumlahSeluruh += values.total;
                // dataSummary.push(values.jumlah)
                // labesSummary.push(values.status)
                // csvData.push(values)
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
                        ],
                        hoverBackgroundColor: [
                            "red", "#0050A1", "ORANGE"
                        ],
                    }
                ]
            }
        };


        return (
            <div className="home" style={{ paddingBottom: "70px", width: "100%" }} >
                {this.props.data.summary.data ? this.props.data.summary.data.length > 0 ?
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
                    : null : null
                }
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
                        height: "100px",
                        margin: "30px auto 0px auto",
                        borderRadius: "10px",
                        border: "2px solid #DEDEDE",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        display: "flex",
                        paddingBottom: "10px"
                    }}>
                    <div className="row" style={{ padding: "10px", margin: "0px", width: "100%" }}>
                        <div className="gambar" style={{ width: "100%", padding: "5px 0px" }}>
                            <div className="desc-main" style={{ fontSize: "18px", fontWeight: "600", color: "black", float: "left", marginLeft: "20px" }}>Assigned vs Done</div>
                        </div>
                        <div className="desc" style={{ width: "45%", textAlign: "left", paddingLeft: "20px" }}>
                            <div className="desc-main" style={{ fontSize: "20px", fontWeight: "600" }}>{jumlahSeluruh ? jumlahSeluruh : "0"}</div>
                            <div className="desc-main" style={{ fontSize: "14px", fontWeight: "300" }}>Assigned</div>
                        </div>
                        <div className="desc" style={{ width: "35%", textAlign: "left", paddingLeft: "20px" }}>
                            <div className="desc-main" style={{ fontSize: "20px", fontWeight: "600" }}>{jumlahCancel ? jumlahCancel : "0"}</div>
                            <div className="desc-main" style={{ fontSize: "14px", fontWeight: "300" }}>Cancel</div>
                        </div>
                    </div>
                </div>
                <div className="menu_bawah2" style={{ width: "80%", display: "flex" }}>
                    <div className="menuReport"
                        style={{
                            width: "100%",
                            height: "100px",
                            margin: "20px auto 0px auto",
                            borderRadius: "10px",
                            border: "2px solid #DEDEDE",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            paddingBottom: "10px"
                        }}>
                        <div className="row" style={{ padding: "10px", margin: "0px" }}>
                            <div className="gambar" style={{ width: "100%", padding: "5px 0px" }}>
                                <div className="desc-main" style={{ fontSize: "18px", fontWeight: "600", color: "black", float: "left", marginLeft: "20px" }}>Customer Satisfaction</div>
                            </div>
                            <div className="desc" style={{ width: "45%", textAlign: "left", paddingLeft: "20px" }}>
                                <div className="desc-main" style={{ fontSize: "20px", fontWeight: "600" }}>{this.state.rating ? totalRating? ((totalRating / (jumlahRating * 5)) * 100).toFixed(1) :"0" : "0"}%</div>
                                <div className="desc-main" style={{ fontSize: "14px", fontWeight: "300" }}>Average Rating</div>
                            </div>
                            <div className="desc" style={{ width: "35%", textAlign: "left", paddingLeft: "20px" }}>
                                <div className="desc-main" style={{ fontSize: "20px", fontWeight: "600" }}>{this.state.rating ? jumlahRating : "0"}</div>
                                <div className="desc-main" style={{ fontSize: "14px", fontWeight: "300" }}>User Review</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ width: "80%", border: "1px solid #0050A1", padding: "10px 0px", borderRadius: "10px" }}>
                    <div style={{ width: "100%" }}>
                        <CSVLink data={csvData}>
                            <div style={{ width: "60%", margin: "0px auto" }}>
                                <span className="material-icons" style={{ marginRight: "10px", verticalAlign: "bottom" }}>
                                    print
                            </span>
                                <span style={{ fontSize: "18px", fontWeight: "600" }}>
                                    Export to CSV
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
                this.props.getSummary("done", user.user_id);
                this.props.getSummary("escalated", user.user_id);
                this.props.getSummary("cancel", user.user_id);
                this.props.getSummary("all", user.user_id);
                this.props.getSummary("this_month", user.user_id);
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
                        axios.get(url + `rating/all/` + this.state.user_id, {
                            headers: {
                                key: "8dfcb234a322aeeb6b530f20c8e9988e"
                            }
                        })
                            .then(res => {
                                const rating = res.data.values;
                                console.log("data rating ku", rating)
                                this.setState({
                                    rating
                                })
                            })
                        console.log(url + `rating/` + moment().month() + `/` + this.state.user_id)
                        axios.get(url + `rating/` + moment().month() + `/` + this.state.user_id, {
                            headers: {
                                key: "8dfcb234a322aeeb6b530f20c8e9988e"
                            }
                        })
                            .then(res => {
                                const ratingMonth = res.data.values;
                                console.log("data rating", ratingMonth)
                                this.setState({
                                    ratingMonth
                                })
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
                {/* <select className="input-form-full" id="cars" name="issue_id" style={{ width: "80%", color: "grey", marginTop: "20px", padding: "10px" }} onChange={this.handleChange} value={this.state.report} defaultValue="all">
                    <option value="all" >All Summaries</option>
                    <option value="month" >This Month</option>
                </select> */}
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
)(Report);