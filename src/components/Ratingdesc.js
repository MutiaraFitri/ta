import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mann from '../assets/img/mann.png';
import * as moment from 'moment';


class Ratingdesc extends Component {
    render() {
        return (
            <div>
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
                    <div className="nama-pengirim" style={{ width: "70%", marginTop: "5px", marginLeft: "10px" }}>
                        <div className="nama" style={{ fontSize: "18px", color: "black", fontWeight: "400", textAlign: "left" }}>{this.props.sender1} {this.props.sender2}</div>
                        <div className="email" style={{ fontSize: "14px", color: "#141AA2", textAlign: "left" }}> {moment(this.props.due_date).subtract(10, 'days').calendar()}</div>
                    </div>
                    <div className="bungkusStar" style={{ width: "30%", marginTop: "5px" }}>
                        <div className="overal"
                            style={{
                                textAlign: "right",
                                float: "left",
                                width: "50%",
                            }}>
                            <div className="star-bgReview" style={{ width: "100px" }}></div>
                            <div className="star-isiReview" style={{ width: (this.props.bintang) * 20 + "px" }}></div>

                        </div>
                    </div>
                </div>
                <div className="review" style={{ marginLeft: "10px", paddingBottom: "10px" }}>
                    <p style={{ color: "black", textAlign: "left", fontSize: "16px" }}>" {this.props.comment} "</p>
                </div>
            </div>
        );
    }
}

export default Ratingdesc;
