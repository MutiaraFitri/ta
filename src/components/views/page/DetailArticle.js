import React, { Component } from 'react';
import NavbarBottom from '../navbar/NavbarBottom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ticketsById } from '../../../redux/api/ticket';
import { users } from '../../../redux/api/users';
import { connect } from 'react-redux';
import back from './../../../assets/img/back.png';
import { kb } from '../../../redux/api/kb';
import { css } from '@emotion/core';
import picture from './../../../assets/img/picture.png';
import imgStep from './../../../assets/img/imgStep.png';
import { dev, prod } from '../../../redux/url/server';

import _ from "lodash";
const url = prod
const gambar = prod + 'avatar/technician/'
class DetailArticle extends Component {
    state = {
        category: "",
        imagePreviewUrl: picture,
        loading: false,
        number: 0,
        steps: [],
        steps_description: "",
        steps_title: "",
        saved: true
    }
    renderStep() {
        const { data } = this.props;
        var dataku = this.state.steps;
        console.log('datsiSTep', dataku)
        const toDos = _.map(dataku, (values, key) => {
            return <div className="row step">
                <div className="no-step" style={{ width: "10%", color: "#000", fontSize: "16px", fontWeight: "bold" }}>
                    <p style={{ width: "30px", backgroundColor: "grey", color: "#000", fontSize: "14px", textAlign: "center", }}>{key + 1}</p>
                </div>
                <div className="judulstep" style={{ width: "90%" }}>
                    {values.steps_title ?
                        <p style={{ paddingLeft: "12px", marginTop: "8px", color: "#000", fontSize: "14px", textAlign: "left", }}>{values.steps_title}</p>
                        : "STEP " + (key + 1)}
                </div>
                <div className="ket-step" style={{ width: "100%" }}>
                    {values.steps_description ?
                        <p style={{ paddingLeft: "12px", marginTop: "8px", color: "#000", fontSize: "14px", textAlign: "left", }}>{values.steps_description}</p>
                        : null}
                    {values.steps_image ?
                        <img src={(gambar + values.steps_image)} alt="imgStep" style={{ paddingLeft: "12px", float: "left", width: "80%" }} />
                        : null}
                </div>
            </div>;
        });
        if (!_.isEmpty(toDos)) {
            return toDos;
        }
        return "Loading ..."
    }

    fetchdata = () => {
        axios.get(url + "steps/" + this.props.match.params.id, {
            headers: {
                key: '8dfcb234a322aeeb6b530f20c8e9988e'
            }
        }
        ).then(res => {
            const steps = res.data.values;
            const data = res.data.values[0];
            this.setState({ steps, ...data });
            console.log("dataSteps", steps)
        }).catch(error => {
            console.log("Error " + error);
        });

        axios.get(url + `knowledge_base/id/` + this.props.match.params.id, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const kb = res.data.values;
                console.log("dataKb", kb)
                this.setState({
                    kb
                })
            })
    }

    componentDidMount = () => {
        this.fetchdata();
    }

    render() {
        let { imagePreviewUrl } = this.state;
        const override = css`
            display: block;
            margin: 0px auto;
        `;
        const judul = ("No Internet Connection").length > 25 ? ("No No Internet Connectionnnn Connection").slice(0, 20) + " ..." : " No Internet Connection"
        return (
            <div className="home" style={{ height: (this.state.loading) ? "100vh" : "auto", overflow: (this.state.loading) ? "hidden" : "auto" }}>
                <div className="navbar-message">
                    <div className="menu" style={{ position: "absolute", top: "7px" }}>
                        <Link to='/article'>
                            <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
                                <img src={back} alt="back" style={{ width: "20px" }} />
                            </div>
                        </Link>
                    </div>
                    Detail Article
                </div>


                <div className="bungkus-article" style={{ width: "90%" }}>
                    <div className="jarak" style={{ width: "100%", marginTop: "100px" }}>
                        <div className="row edit" style={{ width: "100%", textAlign: "left", marginTop: "25px" }}>
                            <div style={{ width: "85%", textAlign: "left" }} >
                                <p style={{ fontSize: "18px", padding: "0px", margin: "0px", fontWeight: "bold", color: "#A4A6B3" }}>Issue</p>
                                <p style={{ fontSize: "24px", padding: "0px", margin: "0px", fontWeight: "bold", color: "#000", overflowX: "hidden", width: "300px" }}>{(this.state.kb) ? this.state.kb[0].issue_subject : "title"}</p>
                            </div>
                            <div className="edit-artikel" style={{ width: "15%", textAlign: "left" }} >
                                <div className="edit" style={{ width: "40px", height: "40px", borderRadius: "10px", padding: "5px", margin: "5px auto" }}>
                                    <Link to={'/knowledgebase/' + this.props.match.params.id}>
                                        <span
                                            className="material-icons"
                                            onClick={this.handleClick}
                                            style={{ position: "absolute", fontSize: "35px", margin: "5px 10px " }}>
                                            create
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="kotak" style={{ backgroundColor: "#F4F4F6", width: "100%", paddingTop: "5px", paddingBottom: "30px" }}>
                        <p style={{ margin: "17px", fontSize: "12px", color: "#4F4F4F", padding: "0px", marginTop: "2px", marginBottom: "0px", textAlign: "left" }}>Authored By : <span style={{ fontSize: "14px", color: "#000" }}>Justin Bieber</span></p>
                        <div className="row category" style={{ marginTop: "-15px", marginBottom: "-20px" }}>
                            <div style={{ width: "60%" }} >
                                <p style={{ margin: "17px", fontSize: "12px", color: "#4F4F4F", textAlign: "left" }}>ICT Services - 10/03/2020</p>
                            </div>
                            <div style={{ width: "40%" }} >
                                <p style={{ margin: "17px", fontSize: "12px", color: "#4F4F4F", textAlign: "right" }}>Categories : Network</p>
                            </div>
                        </div>
                        <p style={{ fontSize: "24px", padding: "0px", margin: "17px", fontWeight: "bold", color: "#000", textAlign: "left", }}>Problem Solving</p>
                        <p style={{ fontSize: "14px", padding: "0px", margin: "17px", fontWeight: "400", color: "#000", textAlign: "left", }}>{(this.state.kb) ? this.state.kb[0].kb_description : "description for problem solve"}</p>
                        <div className="description" style={{ backgroundColor: "#fff", width: "80%", padding: "20px", margin: "20px auto" }}>
                            <div className="title-kotak" style={{ textAlign: "left", color: "#000", fontWeight: "bold", }}>Troubleshooting Steps</div>
                            {this.renderStep()}

                        </div>
                        <div className="row last-edit" style={{ padding: "0px", marginTop: "-20px", marginBottom: "-25px" }}>
                            <div className="editor" style={{ width: "70%" }}>
                                <p style={{ fontSize: "14px", fontWeight: "300", padding: "0px", margin: "17px", color: "#4F4F4F", textAlign: "left", }}>Last Edit By : dimas putra</p>
                            </div>
                            <div className="time-edit" style={{ width: "30%" }}>
                                <p style={{ fontSize: "14px", fontWeight: "300", padding: "0px", margin: "17px", color: "#4F4F4F", textAlign: "right", }}>9 hour ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br /> <br />

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
        userku: () => dispatch(users()),
        ticket: (id) => dispatch(ticketsById(id)),
    }
}

export default connect(
    mapStateToProps, mapDispacthToProps
)(DetailArticle)
