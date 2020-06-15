import React, { Component } from 'react';
import NavbarBottom from '../navbar/NavbarBottom';
import starfull from './../../../assets/img/star.png';
// import { Link } from 'react-router-dom';
import Ratingdesc from '../../Ratingdesc.js';
import { tickets } from '../../../redux/api/ticket';
import { connect } from 'react-redux';
import axios from 'axios';
import _ from "lodash";

class Rating extends Component {
    state = {
        rating: [],

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
        axios.get(`https://api.ict-servicedesk.xyz/ticket/`, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const tiket = res.data.values;
                console.log("data", tiket)
                this.setState({
                    tiket
                })
            })
        this.props.tiketku()
    }

    renderToDos() {
        const { data } = this.props;
        var dataku = "";
        if (data.personState.data) {
            dataku = data.personState.data.values;
            const toDos = _.map(dataku, (values, key) => {
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
            });
            if (!_.isEmpty(toDos)) {
                return toDos;
            }
        }
    }



    render() {
        const size = this.state.tiket ? this.state.tiket.length : 0
        //console.log('jumlahtiket', size);
        const jumlahRating = this.state.rating[0] ?
            (this.state.rating[0].jumlah * 1) +
            (this.state.rating[1].jumlah * 2) +
            (this.state.rating[2].jumlah * 3) +
            (this.state.rating[3].jumlah * 4) +
            (this.state.rating[4].jumlah * 5) : 0;
        //console.log('jumlahRating', jumlahRating);
        const rating5 = this.state.rating[4] ? this.state.rating[4].jumlah : 0
        const rating4 = this.state.rating[3] ? this.state.rating[3].jumlah : 0
        const rating3 = this.state.rating[2] ? this.state.rating[2].jumlah : 0
        const rating2 = this.state.rating[1] ? this.state.rating[1].jumlah : 0
        const rating1 = this.state.rating[0] ? this.state.rating[0].jumlah : 0
        // console.log(rating5 / size)
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
                            }}>{size ? (jumlahRating / size).toFixed(1) : "0"} </div>
                        <div className="overal"
                            style={{
                                textAlign: "right",
                                float: "left",
                                width: "45%"
                            }}>
                            <div className="star-bg" style={{ width: "150px" }}></div>
                            <div className="star-isi" style={{ width: size ? (jumlahRating / size) * 30 : 0 + "px", transition: "width 0.5s" }}></div>
                            <div className="star" style={{ fontSize: "14px" }}>
                                3 feedback
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
                                        <div className="isibar" style={{ width: size ? (rating5 / size).toFixed(1) * 100 : 0 * 100 + "%", transition: "width 0.5s", height: "10px", backgroundColor: "#141AA2", color: "white", fontSize: "20px" }} >
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: "10%", color: "black", fontSize: "20px" }}>
                                    {this.state.rating[4] ? this.state.rating[4].jumlah : '0'}
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
                                        <div className="isibar" style={{ width: size ? (rating4 / size).toFixed(1) * 100 : 0 * 100 + "%", transition: "width 0.5s", height: "10px", backgroundColor: "#141AA2", color: "white", fontSize: "20px" }} >
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: "10%", color: "black", fontSize: "20px" }}>
                                    {this.state.rating[3] ? this.state.rating[3].jumlah : '0'}
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
                                        <div className="isibar" style={{ width: size ? (rating3 / size).toFixed(1) * 100 : 0 + "%", transition: "width 0.5s", height: "10px", backgroundColor: "#141AA2", color: "white", fontSize: "20px" }} >
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: "10%", color: "black", fontSize: "20px" }}>
                                    {this.state.rating[2] ? this.state.rating[2].jumlah : '0'}
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
                                        <div className="isibar" style={{ width: size ? (rating2 / size).toFixed(1) * 100 : 0 * 100 + "%", transition: "width 0.5s", height: "10px", backgroundColor: "#141AA2", color: "white", fontSize: "20px" }} >
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: "10%", color: "black", fontSize: "20px" }}>
                                    {this.state.rating[1] ? this.state.rating[1].jumlah : '0'}
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
                                        <div className="isibar" style={{ width: size ? (rating1 / size).toFixed(1) * 100 : 0 * 100 + "%", transition: "width 0.5s", height: "10px", backgroundColor: "#141AA2", color: "white", fontSize: "20px" }} >
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: "10%", color: "black", fontSize: "20px" }}>
                                    {this.state.rating[0] ? this.state.rating[0].jumlah : '0'}
                                </div>
                            </div>
                        </div>

                        <div className="feedback" style={{
                            margin: "50px 0px 20px ",
                            textAlign: "left",
                            color: "black", fontSize: "20px", fontWeight: "600"
                        }}> Feedbacks
                        <span style={{ color: "black", fontSize: "14px" }}> (3)</span>
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