import React, { Component } from 'react';
import NavbarBottom from '../navbar/NavbarBottom';
import starfull from './../../../assets/img/star.png';
// import { Link } from 'react-router-dom';
import Ratingdesc from '../../Ratingdesc.js';
import { tickets } from '../../../redux/api/ticket';
import { connect } from 'react-redux';
import axios from 'axios';
import _ from "lodash";
import { prod } from "./../../../redux/url/server";

const url = prod;
class Rating extends Component {
    state = {
        rating: [],

    }
    componentDidMount() {
        axios.get(url + `rating/all/9`, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const rating = res.data.values;
                console.log("data rating", rating)
                this.setState({
                    rating
                })
            })
        axios.get(url + `rating/6/9`, {
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
        this.props.tiketku()
    }

    renderToDos() {
        const { data } = this.props;
        var dataku = "";
        if (this.props.tipe === "all") {
            if (data.personState.data) {
                dataku = data.personState.data;
                const toDos = _.map(dataku, (values, key) => {
                    if (values.ticket_rating) {
                        return <div key={key}>
                            <Ratingdesc
                                //imageKategori={hardware}
                                sender1={values.employee_firstname}
                                sender2={values.employee_lastname}
                                email={values.employee_email}
                                due_date={values.ticket_timestamp}
                                bintang={values.ticket_rating}
                                comment={values.ticket_comment}
                            />
                        </div>;
                    }
                });
                if (!_.isEmpty(toDos)) {
                    return toDos;
                }
            }
        }
        if (this.props.tipe === "month") {
            if (data.personState.data) {
                dataku = data.personState.data;
                const toDos = _.map(dataku, (values, key) => {
                    console.log("bulan", new Date(values.ticket_timestamp).getMonth());
                    if (values.ticket_rating && new Date(values.ticket_timestamp).getMonth() === 5) {
                        return <div key={key}>
                            <Ratingdesc
                                //imageKategori={hardware}
                                sender1={values.employee_firstname}
                                sender2={values.employee_lastname}
                                email={values.employee_email}
                                due_date={values.ticket_timestamp}
                                bintang={values.ticket_rating}
                                comment={values.ticket_comment}
                            />
                        </div>;
                    }
                });
                if (!_.isEmpty(toDos)) {
                    return toDos;
                }
            }
        }
    }



    render() {
        //console.log('jumlahtiket', size);
        var varRating1 = 0;
        var varRating2 = 0;
        var varRating3 = 0;
        var varRating4 = 0;
        var varRating5 = 0;
        var datanya = null;
        if (this.props.tipe === "all") {
            datanya = this.state.rating;
        }
        if (this.props.tipe === "month") {
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
        const jumlahRating = (varRating1 * 1) + (varRating2 * 2) + (varRating3 * 3) + (varRating4 * 4) + (varRating5 * 5);
        console.log('jumlahRating', varRating3);
        const rating5 = varRating5 ? varRating5 : 0
        const rating4 = varRating4 ? varRating4 : 0
        const rating3 = varRating3 ? varRating3 : 0
        const rating2 = varRating2 ? varRating2 : 0
        const rating1 = varRating1 ? varRating1 : 0
        var countJumlah = 0;
        _.map(datanya, (values, key) => {
            countJumlah += values.jumlah;
        })
        return (

            <div className="home">
                <div className="rating" style={{ width: "80%" }}>
                    <div className="overal"
                        style={{
                            marginTop: "50px",
                            textAlign: "left",
                            color: "black", fontSize: "18px", fontWeight: "600"
                        }}> Overal Rating</div>
                    <div className="row">
                        <div className="overal"
                            style={{
                                textAlign: "left",
                                width: "55%",
                                color: "black", fontSize: "35px", fontWeight: "bold"
                            }}>{jumlahRating ? (jumlahRating / countJumlah).toFixed(1) : "0"} </div>
                        <div className="overal"
                            style={{
                                textAlign: "right",
                                float: "left",
                                width: "45%"
                            }}>
                            <div className="star-bg" style={{ width: "150px" }}></div>
                            <div className="star-isi" style={{ width: jumlahRating ? (jumlahRating / countJumlah) * 30 : 0 + "px", transition: "width 0.5s" }}></div>
                            <div className="star" style={{ fontSize: "14px" }}>
                                {countJumlah ? countJumlah : "0"} feedback
                            </div>
                        </div>

                        <div className="row bungkusBar" style={{ width: "100%" }}>
                            <div style={{ width: "100%", display: "flex" }}>
                                <div className="row angka-star" style={{
                                    width: "20%",
                                    margin: "0px"
                                }}>
                                    <div className="angkas" style={{ color: "black", paddingTop: "0px", fontSize: "20px" }} >
                                        5
                                    <img src={starfull} alt="star" style={{ width: "38%", marginLeft: "5px", marginBottom: "5px", verticalAlign: "middle" }} />
                                    </div>
                                </div>
                                <div className="bar-star" style={{
                                    width: "70%",
                                    height: "30px",
                                }}>
                                    <div className="barbg" style={{ width: "100%", height: "10px", backgroundColor: "#C4C4C4", margin: "10px auto", }}>
                                        <div className="isibar" style={{ width: rating5 ? ((rating5 / countJumlah).toFixed(1) * 100) + "%" : 0 + "%", transition: "width 0.5s", height: "10px", backgroundColor: "#141AA2", color: "white", fontSize: "20px" }} >
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: "10%", color: "black", fontSize: "20px" }}>
                                    {rating5 ? rating5 : '0'}
                                </div>
                            </div>
                            <div style={{ width: "100%", display: "flex" }}>
                                <div className="row angka-star" style={{
                                    width: "20%",
                                    margin: "0px"
                                }}>
                                    <div className="angkas" style={{ color: "black", paddingTop: "0px", fontSize: "20px" }} >
                                        4
                                    <img src={starfull} alt="star" style={{ width: "38%", marginLeft: "5px", marginBottom: "5px", verticalAlign: "middle" }} />
                                    </div>
                                </div>
                                <div className="bar-star" style={{
                                    width: "70%",
                                    height: "30px",
                                }}>
                                    <div className="barbg" style={{ width: "100%", height: "10px", backgroundColor: "#C4C4C4", margin: "10px auto", }}>
                                        <div className="isibar" style={{ width: rating4 ? ((rating4 / countJumlah).toFixed(1) * 100) + "%" : 0 + "%", transition: "width 0.5s", height: "10px", backgroundColor: "#141AA2", color: "white", fontSize: "20px" }} >
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: "10%", color: "black", fontSize: "20px" }}>
                                    {rating4 ? rating4 : '0'}
                                </div>
                            </div>
                            <div style={{ width: "100%", display: "flex" }}>
                                <div className="row angka-star" style={{
                                    width: "20%",
                                    margin: "0px"
                                }}>
                                    <div className="angkas" style={{ color: "black", paddingTop: "0px", fontSize: "20px" }} >
                                        3
                                    <img src={starfull} alt="star" style={{ width: "38%", marginLeft: "5px", marginBottom: "5px", verticalAlign: "middle" }} />
                                    </div>
                                </div>
                                <div className="bar-star" style={{
                                    width: "70%",
                                    height: "30px",
                                }}>
                                    <div className="barbg" style={{ width: "100%", height: "10px", backgroundColor: "#C4C4C4", margin: "10px auto", }}>
                                        <div className="isibar" style={{ width: rating3 ? ((rating3 / countJumlah).toFixed(1) * 100) + "%" : 0 + "%", transition: "width 0.5s", height: "10px", backgroundColor: "#141AA2", color: "white", fontSize: "20px" }} >
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: "10%", color: "black", fontSize: "20px" }}>
                                    {rating3 ? rating3 : '0'}
                                </div>
                            </div>
                            <div style={{ width: "100%", display: "flex" }}>
                                <div className="row angka-star" style={{
                                    width: "20%",
                                    margin: "0px"
                                }}>
                                    <div className="angkas" style={{ color: "black", paddingTop: "0px", fontSize: "20px" }} >
                                        2
                                    <img src={starfull} alt="star" style={{ width: "38%", marginLeft: "5px", marginBottom: "5px", verticalAlign: "middle" }} />
                                    </div>
                                </div>
                                <div className="bar-star" style={{
                                    width: "70%",
                                    height: "30px",
                                }}>
                                    <div className="barbg" style={{ width: "100%", height: "10px", backgroundColor: "#C4C4C4", margin: "10px auto", }}>
                                        <div className="isibar" style={{ width: rating2 ? ((rating2 / countJumlah).toFixed(1) * 100) + "%" : 0 + "%", transition: "width 0.5s", height: "10px", backgroundColor: "#141AA2", color: "white", fontSize: "20px" }} >
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: "10%", color: "black", fontSize: "20px" }}>
                                    {rating2 ? rating2 : '0'}
                                </div>
                            </div>
                            <div style={{ width: "100%", display: "flex" }}>
                                <div className="row angka-star" style={{
                                    width: "20%",
                                    margin: "0px"
                                }}>
                                    <div className="angkas" style={{ color: "black", paddingTop: "0px", fontSize: "20px" }} >
                                        1
                                    <img src={starfull} alt="star" style={{ width: "38%", marginLeft: "5px", marginBottom: "5px", verticalAlign: "middle" }} />
                                    </div>
                                </div>
                                <div className="bar-star" style={{
                                    width: "70%",
                                    height: "30px",
                                }}>
                                    <div className="barbg" style={{ width: "100%", height: "10px", backgroundColor: "#C4C4C4", margin: "10px auto", }}>
                                        <div className="isibar" style={{ width: rating1 ? ((rating1 / countJumlah).toFixed(1) * 100) + "%" : 0 + "%", transition: "width 0.5s", height: "10px", backgroundColor: "#141AA2", color: "white", fontSize: "20px" }} >
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: "10%", color: "black", fontSize: "20px" }}>
                                    {rating1 ? rating1 : '0'}
                                </div>
                            </div>
                        </div>

                        <div className="feedback" style={{
                            margin: "50px 0px 20px ",
                            textAlign: "left",
                            color: "black", fontSize: "20px", fontWeight: "600"
                        }}> Feedbacks
                        <span style={{ color: "black", fontSize: "14px", marginLeft: "10px" }}>({countJumlah ? countJumlah : 0})</span>
                        </div>

                        {this.renderToDos()}
                    </div>
                </div>
                <NavbarBottom />
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    data: state
})
const mapDispacthToProps = (dispatch) => {
    return {
        tiketku: () => dispatch(tickets()),

    }
}
export default connect(
    mapStateToProps, mapDispacthToProps
)(Rating)