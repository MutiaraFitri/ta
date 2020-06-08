import React, { Component } from 'react';
import NavbarBottom from '../navbar/NavbarBottom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ticketsById } from '../../../redux/api/ticket';
import { users } from '../../../redux/api/users';
import { connect } from 'react-redux';
import back from './../../../assets/img/back.png';
import { css } from '@emotion/core';
import picture from './../../../assets/img/picture.png';
import imgStep from './../../../assets/img/imgStep.png';


import _ from "lodash";

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

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    handleChange = (e) => {
        // console.log(this.props.data.person.data.data.user_id)
        this.setState({
            [e.target.name]: e.target.value,
            save: false,
            saved: false,
        })
    }

    hanndleNext = () => {
        if (this.state.number < this.state.steps.length - 1) {
            const angka = this.state.number + 1
            const data = this.state.steps[angka]
            this.setState({
                number: angka,
                save: false,
                ...data
            })
        }
    }
    hanndleBefore = () => {
        if (this.state.number > 0) {
            const angka = this.state.number - 1
            const data = this.state.steps[angka]
            this.setState({
                number: angka,
                save: false,
                ...data
            })
        }
    }

    fetchdata = () => {
        axios.get("https://api.ict-servicedesk.xyz/steps/" + this.props.match.params.id, {
            headers: {
                key: '8dfcb234a322aeeb6b530f20c8e9988e'
            }
        }
        ).then(res => {
            const steps = res.data.values;
            const data = res.data.values[0];
            this.setState({ steps, ...data });
        }).catch(error => {
            console.log("Error " + error);
        })
    }

    componentDidMount = () => {
        this.fetchdata()
    }

    handleSave = (e) => {
        if (this.state.steps[this.state.number]) {
            console.log(this.state.steps[this.state.number].steps_id)
            const formData = new FormData();
            e.preventDefault();
            // console.log(this.state);
            formData.append('steps_title', this.state.steps_title);
            formData.append('myImage', this.state.file);
            if (this.state.steps_description) {
                formData.append('steps_description', this.state.steps_description);
            }

            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    key: '8dfcb234a322aeeb6b530f20c8e9988e'
                }
            };

            // axios.post("https://api.ict-servicedesk.xyz/ticket", formData, config)
            axios.post("https://api.ict-servicedesk.xyz/steps/update/" + this.state.steps[this.state.number].steps_id, formData, config)
                .then((response) => {
                    // alert("The file is successfully uploaded");
                    this.fetchdata();
                    this.setState({
                        save: true,
                        saved: true
                    })
                }).catch((error) => {
                });
        }
    }

    handleGoTo = (e) => {
        const data = -1 + parseInt(e.target.value)
        const dataSteps = this.state.steps[data]
        if (e.target.value && e.target.value <= this.state.steps.length && e.target.value > 0) {
            this.setState({
                number: data,
                ...dataSteps,
                errorNumber: false
            })
        } else if (e.target.value > this.state.steps.length || e.target.value < 1) {
            this.setState({
                errorNumber: true
            })
        }
    }

    handleClose = (e) => {
        e.preventDefault()
        this.setState({
            loading: false
        })
    }
    handleOpen = () => {
        this.setState({
            loading: true
        })
    }
    handleProhibit = () => {
        alert("Please Save before you Go !")
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
                <div style={{ backgroundColor: "#141AA2", fontSize: "22px", fontFamily: "Muli", width: "100%", color: "white", padding: "16px 0px" }}>
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
                    <div style={{ width: "100%" }}>
                        <div className="row edit" style={{ width: "100%", textAlign: "left", marginTop: "25px" }}>
                            <div style={{ width: "85%", textAlign: "left" }} >
                                <p style={{ fontSize: "18px", padding: "0px", margin: "0px", fontWeight: "bold", color: "#A4A6B3" }}>Issue</p>
                                <p style={{ fontSize: "24px", padding: "0px", margin: "0px", fontWeight: "bold", color: "#000" }}>{judul}</p>
                            </div>
                            <div className="edit-artikel" style={{ width: "15%", textAlign: "left" }} >
                                <div className="edit" style={{ width: "40px", height: "40px", borderRadius: "10px", padding: "5px", margin: "5px auto" }}>
                                    <span
                                        className="material-icons"
                                        onClick={this.handleClick}
                                        style={{ position: "absolute", fontSize: "35px", margin: "5px 10px " }}>
                                        create
                                </span>
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
                        <p style={{ fontSize: "14px", padding: "0px", margin: "17px", fontWeight: "400", color: "#000", textAlign: "left", }}>The following steps assume there is NO Internet access. Specific websites and ISPs can have outages that have nothing to do with your computer or its settings.</p>
                        <div className="description" style={{ backgroundColor: "#fff", width: "80%", padding: "20px", margin: "20px auto" }}>
                            <div className="title-kotak" style={{ textAlign: "left", color: "#000", fontWeight: "bold", }}>Troubleshooting Steps</div>
                            <div className="row step">
                                <div className="no-step" style={{ width: "10%", color: "#000", fontSize: "16px", fontWeight: "bold" }}>
                                    <p style={{ width: "30px", backgroundColor: "grey", color: "#000", fontSize: "14px", textAlign: "center", }}>1</p>
                                </div>
                                <div className="ket-step" style={{ width: "90%" }}>
                                    <p style={{ paddingLeft: "12px", marginTop: "8px", color: "#000", fontSize: "14px", textAlign: "left", }}>Check the network icon (or wireless connection settings) to see if you have Internet access. Ensure that your network adapter is not turned off.</p>
                                    <img src={imgStep} alt="imgStep" style={{ paddingLeft: "12px", float: "left", width: "80%" }} />
                                </div>
                            </div>
                            <div className="row step">
                                <div className="no-step" style={{ width: "10%", color: "#000", fontSize: "16px", fontWeight: "bold" }}>
                                    <p style={{ width: "30px", backgroundColor: "grey", color: "#000", fontSize: "14px", textAlign: "center", }}>2</p>
                                </div>
                                <div className="ket-step" style={{ width: "90%" }}>
                                    <p style={{ paddingLeft: "12px", marginTop: "8px", color: "#000", fontSize: "14px", textAlign: "left", }}>Check the network icon (or wireless connection settings) to see if you have Internet access. Ensure that your network adapter is not turned off.</p>
                                    <img src={imgStep} alt="imgStep" style={{ paddingLeft: "12px", float: "left", width: "80%" }} />
                                </div>
                            </div>
                            <div className="row step">
                                <div className="no-step" style={{ width: "10%", color: "#000", fontSize: "16px", fontWeight: "bold" }}>
                                    <p style={{ width: "30px", backgroundColor: "grey", color: "#000", fontSize: "14px", textAlign: "center", }}>3</p>
                                </div>
                                <div className="ket-step" style={{ width: "90%" }}>
                                    <p style={{ paddingLeft: "12px", marginTop: "8px", color: "#000", fontSize: "14px", textAlign: "left", }}>Check the network icon (or wireless connection settings) to see if you have Internet access. Ensure that your network adapter is not turned off.</p>
                                    <img src={imgStep} alt="imgStep" style={{ paddingLeft: "12px", float: "left", width: "80%" }} />
                                </div>
                            </div>
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
