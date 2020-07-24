import React, { Component } from 'react';
import NavbarBottom from '../navbar/NavbarBottom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ticketsById } from '../../../redux/api/ticket';
import { users } from '../../../redux/api/users';
import { connect } from 'react-redux';
import back from './../../../assets/img/back.png';
// import { kb } from '../../../redux/api/kb';
// import { css } from '@emotion/core';
import picture from './../../../assets/img/picture.png';
// import imgStep from './../../../assets/img/imgStep.png';
import { prod } from '../../../redux/url/server';

import _ from "lodash";
const url = prod
const gambar = prod + 'uploads/'

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

        var dataku = this.state.steps;
        console.log('datsiSTep', dataku)
        const toDos = _.map(dataku, (values, key) => {
            var kbImg = gambar + values.steps_image
            console.log("ini gambar", kbImg)
            return <div className="row step">
                <div className="no-step" style={{ width: "10%", color: "#000", fontSize: "16px", fontWeight: "bold" }}>
                    <p style={{ width: "30px", backgroundColor: "grey", color: "#000", fontSize: "14px", textAlign: "center", }}>{key + 1}</p>
                </div>
                <div className="judulstep" style={{ width: "80%", paddingLeft: "12px", color: "#000", fontSize: "16px", textAlign: "left", marginTop: "10px", fontWeight: "500" }}>
                    {values.steps_title ?
                        <p style={{ color: "#000", fontSize: "16px", textAlign: "left", marginTop: "1px", fontWeight: "500", wordBreak: "break-word" }}>{values.steps_title}</p>
                        : "STEP " + (key + 1)}
                </div>
                <div className="ket-step" style={{ width: "100%", paddingLeft: "17px", marginTop: "0px", color: "#000", fontSize: "14px", textAlign: "left", }}>
                    {values.steps_description ?
                        <p style={{ paddingLeft: "17px", marginTop: "0px", color: "#000", fontSize: "14px", textAlign: "left", wordBreak: "break-word" }}>{values.steps_description}</p>
                        : null}
                    {values.steps_image ?
                        <img src={kbImg} alt=" " style={{ paddingLeft: "12px", float: "left", width: "80%" }} />
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
        // const judul = ("No Internet Connection").length > 25 ? ("No No Internet Connectionnnn Connection").slice(0, 20) + " ..." : " No Internet Connection"
        return (
            <div className="home" style={{ height: (this.state.loading) ? "100vh" : "auto", overflow: (this.state.loading) ? "hidden" : "auto" }}>
                <div className="navbar-message">
                    <div className="menu-article" >
                        <Link to='/article'>
                            <div className="menu-detArticle" >
                                <img src={back} alt="back" style={{ width: "20px" }} />
                            </div>
                        </Link>
                    </div>
                    Detail Article
                </div>
                <div className="bungkus-article">
                    <div className="jarak">
                        <div className="row edit" >
                            <div className="edit-article">
                                <p className="edit-article-judul">Issue</p>
                                <p className="edit-article-judul2">{(this.state.kb) ? this.state.kb[0].issue_subject : "title"}</p>
                            </div>
                            <div className="edit-artikel2"  >
                                <div className="edit-articleIcon">
                                    <Link to={'/edit/kb/' + this.props.match.params.id}>
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

                    <div className="kotak-detArticle">
                        {/* <p className="p-kotak">Authored By : <span style={{ fontSize: "14px", color: "#000" }}>Justin Bieber</span></p> */}
                        <div className="row category-detArticle" >
                            <div className=" date-detArticle" style={{ width: "60%" }} >
                                {/* <p className=" date-detArticleP">ICT Services - 10/03/2020</p> */}
                            </div>
                            <div className="category-detArticle" style={{ width: "90%", display:"flex",margin:"0px auto",marginTop:"15px" }} >
                                <p className=" category-detArticleP" style={{textAlign:"left"}}>Categories :  {(this.state.kb) ? this.state.kb[0].issue_category ? this.state.kb[0].issue_category : null : null}  </p>
                                <p className=" category-detArticleP">Status : {(this.state.kb) ? this.state.kb[0].kb_publish ? "Publish" : "Draft" : null}</p>
                            </div>
                        </div>
                        <p clasName="detArticle-P1" style={{ fontSize: "24px", padding: "0px", margin: "17px", fontWeight: "bold", color: "#000", textAlign: "left", marginTop: "40px" }}>Problem Solving</p>
                        <p clasName="detArticle-P2" style={{ fontSize: "14px", padding: "0px", margin: "17px", fontWeight: "400", color: "#000", textAlign: "left", }}>{(this.state.kb) ? this.state.kb[0].kb_description : "description for problem solve"}</p>
                        <div className="description-detArticle" >
                            <div className="title-kotakdetArticle">Troubleshooting Steps</div>
                            {this.renderStep()}

                        </div>
                        {/* <div className="row last-edit" style={{ padding: "0px", marginTop: "-20px", marginBottom: "-25px" }}>
                            <div className="editor" style={{ width: "70%" }}>
                                <p className="editor-lastEdit1" style={{ textAlign: "left", }}>Last Edit By : dimas putra</p>
                            </div>
                            <div className="time-edit" style={{ width: "30%" }}>
                                <p className="editor-lastEdit1" style={{ textAlign: "right", }}>9 hour ago</p>
                            </div>
                        </div> */}
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
