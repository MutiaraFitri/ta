import React, { Component } from 'react';
import NavbarBottom from '../navbar/NavbarBottom';
import { Link } from 'react-router-dom';
import { css } from '@emotion/core';
import back from '../../../assets/img/back.png';
import axios from 'axios';
import picture from './../../../assets/img/picture.png';
// import _ from 'lodash'
// import menu from '../../../assets/img/menu.png'
// import { PulseLoader } from 'react-spinners';

export class KnowledgeBase extends Component {
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
                         Edit Article
                </div>
                <div style={{
                    width: "100%",
                    position: "absolute",
                    top: "0px",
                    display: (this.state.loading) ? "flex" : "none"
                }}>
                    <div style={{
                        position: "absolute",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        width: "100%",
                        zIndex: "3",
                        transition: "opacity 0.2s"
                    }}>
                    </div>
                    <div style={{
                        display: "flex",
                        left: "50%"
                    }}
                        className="loading-overlay loading">
                        <div
                            className="loading-content"
                            style={{
                                backgroundColor: "white",
                                width: "100%",
                                borderRadius: "10px",
                                position: "absolute",
                                padding: "0px",
                                paddingTop: "10px",
                                overflow: "hidden",
                                height: "190px",
                                zIndex: "4",
                                bottom: "0px",
                            }}>
                            <div className="row">
                                <div style={{ fontSize: "18px", fontWeight: "700", textAlign: "left", marginLeft: "30px", width: "80%" }}>Go to</div>
                                <span class="material-icons" onClick={this.handleClose}>
                                    close
                                </span>
                                <div style={{ fontSize: "14px", color: "red", textAlign: "left", marginLeft: "30px", width: "50%", display: this.state.errorNumber ? "flex" : "none" }}>Input not valid</div>
                            </div>
                            <form onSubmit={this.handleClose}>
                                <input className="input-form-full" onChange={this.handleGoTo} name="goto" type="number" placeholder={this.state.number + 1} style={{ width: "80%" }} />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="Report" style={{ width: "85%" }}>
                    <div className="row" style={{ width: "100%" }}>
                        <button className="button" type="submit" style={{ width: "20%" }} onClick={this.state.saved ? this.hanndleBefore : this.handleProhibit}>
                            {'<'}
                        </button>
                        <button className="button" type="submit" style={{ width: "20%" }}>
                            {this.state.number + 1}
                        </button>
                        <button className="button" type="submit" style={{ width: "20%" }} onClick={this.state.saved ? this.hanndleNext : this.handleProhibit}>
                            >
                        </button>
                        <button className="button" type="submit" style={{ width: "40%" }} onClick={this.state.saved ? this.handleOpen : this.handleProhibit}>
                            Go To
                        </button>
                    </div>
                    <div className="label">
                        <div className="row" style={{ fontSize: "22px", color: " #A4A6B3" }}>
                            Title Step
                        </div>
                        <input className="input-form-full" onChange={this.handleChange} name="steps_title" type="text" placeholder="Problem Solve" value={(this.state.steps_title) ? this.state.steps_title : ""} />
                    </div>
                    <div className="label">
                        <div className="row" style={{ fontSize: "22px", color: " #A4A6B3" }}>
                            Description Step
                        </div>
                        <textarea className="input-form-textarea" onChange={this.handleChange} name="steps_description" type="text-area" placeholder="..." value={this.state.steps_description ? this.state.steps_description : ""} />
                    </div>
                    <div className="label">
                        <div className="row" >
                            Send us troubles
                                    </div>
                        <div className="kotak-input">
                            <label className="row" style={{ width: "100%" }} htmlFor="files">
                                {this.state.steps_image ?
                                    <img src={"https://api.ict-servicedesk.xyz/uploads/" + this.state.steps_image} alt="" style={{ margin: "0px auto", maxWidth: "250px" }} />
                                    :
                                    <img src={imagePreviewUrl} alt="" style={{ margin: "0px auto", maxWidth: "250px" }} />
                                }
                            </label>
                            {this.state.steps_image ?
                                <label htmlFor="files" className="btn" style={{ display: (this.state.file) ? "none" : "inline", color: "rgba(0,80,160,0.5)" }}>Click to Change</label>
                                :
                                <label htmlFor="files" className="btn" style={{ display: (this.state.file) ? "none" : "inline", color: "rgba(0,80,160,0.5)" }}>Choose from library</label>
                            }
                            <input className="fileInput"
                                id="files"
                                type="file"
                                onChange={(e) => this._handleImageChange(e)} style={{ display: "none" }} />
                        </div>
                    </div>
                    <div className="row" style={{ width: "100%", marginBottom: "20px" }}>
                        <button className="button" type="submit" onClick={this.handleSave} style={{ backgroundColor: (this.state.steps[this.state.number]) ? "#0050A1" : "#bebebe", cursor: (this.state.steps[this.state.number]) ? "pointer" : "not-allowed" }}>
                            Save
                        </button>
                    </div>
                    <div className="row" style={{ width: "100%", backgroundColor: "#06d755", display: this.state.save ? "flex" : "none" }}>
                        <div style={{ padding: "10px", color: "white" }}>
                            Save successfully
                        </div>
                    </div>
                    <div className="row" style={{ width: "100%", marginBottom: "70px" }}>
                        <button className="button" type="submit" style={{ width: "20%" }} onClick={this.state.saved ? this.hanndleBefore : this.handleProhibit}>
                            {'<'}
                        </button>
                        <button className="button" type="submit" style={{ width: "20%" }}>
                            {this.state.number + 1}
                        </button>
                        <button className="button" type="submit" style={{ width: "20%" }} onClick={this.state.saved ? this.hanndleNext : this.handleProhibit}>
                            >
                        </button>
                        <button className="button" type="submit" style={{ width: "40%" }} onClick={this.state.saved ? this.handleOpen : this.handleProhibit}>
                            Go To
                        </button>
                    </div>
                </div>
                <NavbarBottom active="Home" />
            </div>
        )
    }
}

export default KnowledgeBase