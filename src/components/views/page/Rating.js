import React, { Component } from 'react';
import back from './../../../assets/img/back.png';
import NavbarBottom from '../navbar/NavbarBottom';
import starfull from './../../../assets/img/star.png';
import starksg from './../../../assets/img/starr.png';
import mann from './../../../assets/img/mann.png';
import { Link } from 'react-router-dom';
import Ratingdesc from '../../TicketDetailDesc.js';
import { ticketsById } from '../../../redux/api/ticket';
import { connect } from 'react-redux';
import axios from 'axios';
import _ from "lodash";

class Rating extends Component {
    state = {
        tiket: []
    }
    componentDidMount() {
        axios.get(`https://api.ict-servicedesk.xyz/ticket/id/` + this.props.match.params.id, {
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
    }

    renderToDos() {
        const toDos = _.map(this.state.tiket, (values, key) => {
            return <div key={key}>
                <Ratingdesc
                    //imageKategori={hardware}
                    sender1={values.employee_firstname}
                    sender2={values.employee_lastname}
                    email={values.employee_email}
                />

            </div>;
        });
        if (!_.isEmpty(toDos)) {
            return toDos;
        }
    }

    render() {
        return (
            <div className="home">

                <div style={{ backgroundColor: "#141AA2", fontSize: "22px", fontFamily: "Muli", width: "100%", color: "white", padding: "16px 0px" }}>
                    <div className="menu" style={{ position: "absolute", top: "7px" }}>
                        <Link to='/report'>
                            <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
                                <img src={back} alt="back" style={{ width: "20px" }} />
                            </div>
                        </Link>
                    </div>
                            Feed Back
                    </div>

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
                                width: "30%",
                                color: "black", fontSize: "35px", fontWeight: "bold"
                            }}>4.5</div>
                        <div className="overal"
                            style={{
                                textAlign: "right",
                                float: "right",
                                width: "70%",
                            }}>
                            <div className="star">
                                <img src={starfull} style={{ width: "10%" }} />
                                <img src={starfull} style={{ width: "10%" }} />
                                <img src={starfull} style={{ width: "10%" }} />
                                <img src={starfull} style={{ width: "10%" }} />
                                <img src={starksg} style={{ width: "10%" }} />
                            </div>
                            <div className="star" style={{ fontSize: "14px" }}>
                                3 feedback
                            </div>
                        </div>

                        <div className="row bungkusBar" style={{ width: "80%" }}>
                            <div className="row angka-star" style={{
                                width: "20%",
                                marginTop: "-1px",
                            }}>
                                <div className="angkas" style={{ color: "black", paddingTop: "0px" }} >
                                    1
                                    <img src={starfull} alt="star" style={{ width: "40%", marginLeft: "5px" }} />
                                </div>
                            </div>
                            <div className="bar-star" style={{
                                width: "80%",
                                height: "30px",
                            }}>
                                <div className="barbg" style={{ width: "100%", height: "30px", backgroundColor: "#C4C4C4", margin: "0px auto", }}>
                                    <div className="isibar" style={{ width: "80%", height: "30px", backgroundColor: "#141AA2", color: "white", fontSize: "20px" }} >
                                        80%
                                    </div>
                                </div>
                            </div>
                            <div className="row angka-star" style={{
                                width: "20%",
                                marginTop: "-1px",
                            }}>
                                <div className="angkas" style={{ color: "black", paddingTop: "0px" }} >
                                    2
                                    <img src={starfull} alt="star" style={{ width: "40%", marginLeft: "5px" }} />
                                </div>
                            </div>
                            <div className="bar-star" style={{
                                width: "80%",
                                height: "30px",
                            }}>
                                <div className="barbg" style={{ width: "100%", height: "30px", backgroundColor: "#C4C4C4", margin: "0px auto", }}>
                                    <div className="isibar" style={{ width: "80%", height: "30px", backgroundColor: "#141AA2", color: "white", fontSize: "20px" }} >

                                    </div>
                                </div>
                            </div>
                            <div className="row angka-star" style={{
                                width: "20%",
                                marginTop: "-1px",
                            }}>
                                <div className="angkas" style={{ color: "black", paddingTop: "0px" }} >
                                    3
                                    <img src={starfull} alt="star" style={{ width: "40%", marginLeft: "5px" }} />
                                </div>
                            </div>
                            <div className="bar-star" style={{
                                width: "80%",
                                height: "30px",
                            }}>
                                <div className="barbg" style={{ width: "100%", height: "30px", backgroundColor: "#C4C4C4", margin: "0px auto", }}>
                                    <div className="isibar" style={{ width: "80%", height: "30px", backgroundColor: "#141AA2", color: "white", fontSize: "20px" }} >
                                        80%
                                    </div>
                                </div>
                            </div>
                            <div className="row angka-star" style={{
                                width: "20%",
                                marginTop: "-1px",
                            }}>
                                <div className="angkas" style={{ color: "black", paddingTop: "0px" }} >
                                    4
                                    <img src={starfull} alt="star" style={{ width: "40%", marginLeft: "5px" }} />
                                </div>
                            </div>
                            <div className="bar-star" style={{
                                width: "80%",
                                height: "30px",
                            }}>
                                <div className="barbg" style={{ width: "100%", height: "30px", backgroundColor: "#C4C4C4", margin: "0px auto", }}>
                                    <div className="isibar" style={{ width: "80%", height: "30px", backgroundColor: "#141AA2", color: "white", fontSize: "20px" }} >
                                        80%
                                    </div>
                                </div>
                            </div>
                            <div className="row angka-star" style={{
                                width: "20%",
                                marginTop: "-1px",
                            }}>
                                <div className="angkas" style={{ color: "black", paddingTop: "0px" }} >
                                    5
                                    <img src={starfull} alt="star" style={{ width: "40%", marginLeft: "5px" }} />
                                </div>
                            </div>
                            <div className="bar-star" style={{
                                width: "80%",
                                height: "30px",
                            }}>
                                <div className="barbg" style={{ width: "100%", height: "30px", backgroundColor: "#C4C4C4", margin: "0px auto", }}>
                                    <div className="isibar" style={{ width: "80%", height: "30px", backgroundColor: "#141AA2", color: "white", fontSize: "20px" }} >
                                        80%
                                    </div>
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

                        {/* {this.renderToDos()} */}

                        <div className="bungkusReview" style={{ width: "100%", display: "flex" }}>
                            <div className="pengirim" style={{ width: "20%", margin: '5px 0px 0px 5px' }}>
                                <div className="foto-pengim" style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%", border: "1px solid", overflow: "hidden",
                                    float: "left"
                                }}>
                                    <img src={mann} alt="mann" style={{ width: "100%" }} />
                                </div>
                            </div>
                            <div className="nama-pengirim" style={{ width: "30%", marginTop: "5px" }}>
                                <div className="nama" style={{ fontSize: "18px", color: "black", fontWeight: "400", textAlign: "left" }}> Dimas Putra</div>
                                <div className="email" style={{ fontSize: "14px", color: "#141AA2", textAlign: "left" }}>15/05/2020</div>
                            </div>
                            <div className="bungkusStar" style={{ width: "50%", marginTop: "5px" }}>
                                <div className="overal"
                                    style={{
                                        textAlign: "right",
                                        float: "right",
                                    }}>
                                    <div className="star" >
                                        <img src={starfull} style={{ width: "10%", margin: "2px" }} />
                                        <img src={starfull} style={{ width: "10%", margin: "2px" }} />
                                        <img src={starfull} style={{ width: "10%", margin: "2px" }} />
                                        <img src={starksg} style={{ width: "10%", margin: "2px" }} />
                                        <img src={starksg} style={{ width: "10%", margin: "2px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review" style={{ marginLeft: "10px", paddingBottom: "10px" }}>
                            <p style={{ color: "black", textAlign: "left", fontSize: "16px" }}>" Kinerja bagus, dalam penanganan dan penyelesaian tepat waktu, teknisi ramah dan sabar "</p>
                        </div>
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
        ticket: (id) => dispatch(ticketsById(id)),

    }
}

export default connect(
    mapStateToProps, mapDispacthToProps
)(Rating)
