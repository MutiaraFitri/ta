import React, { Component } from 'react';
import NavbarBottom from '../navbar/NavbarBottom';
import { Link } from 'react-router-dom';
import back from './../../../assets/img/back.png';
import { Redirect } from 'react-router-dom';
import _ from 'lodash'
import { connect } from 'react-redux';
import { kb } from '../../../redux/api/kb';
import axios from 'axios';
import lain from '../../../assets/img/more.png';
import mouse from '../../../assets/img/mouse-blue.png';
import software from '../../../assets/img/software.png';
import network from '../../../assets/img/network-blue.png';
import lainActive from '../../../assets/img/more-active.png';
import mouseActive from '../../../assets/img/mouse-active.png';
import softwareActive from '../../../assets/img/software-active.png';
import networkActive from '../../../assets/img/network-active.png';

export class Report extends Component {
    state = {
        issue_category: "",
        kb_id: (new Date().getTime()).toString(36),
    }
    handleCategory = (e) => {
        // console.log(e.target.id)
        this.setState({
            issue_category: e.target.id,
            issue_id: "xx",
        })
    }

    renderOption = () => {
        if (this.state.issue_category === "network") {
            const toDos = _.map(this.state.categoryNetwork, (value, key) => {
                return (
                    <option key={key} value={value.issue_id}>{value.issue_subject}</option>
                );
            });
            if (!_.isEmpty(toDos)) {
                return toDos;
            } else {
                return <option >Please wait ...</option>
            }
        }
        if (this.state.issue_category === "hardware") {
            const toDos = _.map(this.state.categoryHardware, (value, key) => {
                return (
                    <option key={key} value={value.issue_id}>{value.issue_subject}</option>
                );
            });
            if (!_.isEmpty(toDos)) {
                return toDos;
            } else {
                return <option >Please wait ...</option>
            }
        }
        if (this.state.issue_category === "software") {
            const toDos = _.map(this.state.categorySoftware, (value, key) => {
                return (
                    <option key={key} value={value.issue_id}>{value.issue_subject}</option>
                );
            });
            if (!_.isEmpty(toDos)) {
                return toDos;
            } else {
                return <option >Please wait ...</option>
            }
        }
        if (this.state.issue_category === "others") {
            const toDos = _.map(this.state.categoryOthers, (value, key) => {
                return (
                    <option key={key} value={value.issue_id}>{value.issue_subject}</option>
                );
            });
            if (!_.isEmpty(toDos)) {
                return toDos;
            } else {
                return <option >Please wait ...</option>
            }
        }
    }

    handleChange = (e) => {
        // console.log(this.props.data.person.data.data.user_id)
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    componentDidMount() {
        this.props.fetchKb();

        if (this.props.match.params.paramsss) {
            this.setState({
                issue_category: this.props.match.params.paramsss
            })
        }
        // console.log("isi", this.props.match.params.paramsss);

        // fetch issue list
        axios.get("https://api.ict-servicedesk.xyz/issue/category/network", {
            headers: {
                key: '8dfcb234a322aeeb6b530f20c8e9988e'
            }
        }
        ).then(res => {
            const categoryNetwork = res.data.values;
            this.setState({ categoryNetwork });
        }).catch(error => {
            console.log("Error " + error);
        })
        axios.get("https://api.ict-servicedesk.xyz/issue/category/software", {
            headers: {
                key: '8dfcb234a322aeeb6b530f20c8e9988e'
            }
        }
        ).then(res => {
            const categorySoftware = res.data.values;
            this.setState({ categorySoftware });
        }).catch(error => {
            console.log("Error " + error);
        })
        axios.get("https://api.ict-servicedesk.xyz/issue/category/hardware", {
            headers: {
                key: '8dfcb234a322aeeb6b530f20c8e9988e'
            }
        }
        ).then(res => {
            const categoryHardware = res.data.values;
            this.setState({ categoryHardware });
        }).catch(error => {
            console.log("Error " + error);
        })
        axios.get("https://api.ict-servicedesk.xyz/issue/category/others", {
            headers: {
                key: '8dfcb234a322aeeb6b530f20c8e9988e'
            }
        }
        ).then(res => {
            const categoryOthers = res.data.values;
            this.setState({ categoryOthers });
        }).catch(error => {
            console.log("Error " + error);
        })
    }

    handleSubmit = () => {
        if (this.state.issue_id === "lainnya") {
            var issue_idku=(new Date().getTime()).toString(36);
            this.setState({
                issue_id: issue_idku,
                kb_issue_id: issue_idku,
                kb_id: (new Date().getTime() + 9).toString(36),
            }, () => {

                axios.post("https://api.ict-servicedesk.xyz/issue", this.state, {
                    headers: {
                        key: '8dfcb234a322aeeb6b530f20c8e9988e'
                    }
                }
                ).then(res => {
                    this.setState({
                        redirect_2: true
                    })
                    console.log(res)
                }).catch(error => {
                    console.log("Error " + error);
                })
                axios.post("https://api.ict-servicedesk.xyz/knowledge_base", this.state, {
                    headers: {
                        key: '8dfcb234a322aeeb6b530f20c8e9988e'
                    }
                }
                ).then(res => {
                    this.setState({
                        redirect_1: true
                    })
                    console.log(res)
                }).catch(error => {
                    console.log("Error " + error);
                })
            })
        }
        else {
            axios.post("https://api.ict-servicedesk.xyz/steps", this.state, {
                headers: {
                    key: '8dfcb234a322aeeb6b530f20c8e9988e'
                }
            }
            ).then(res => {
                this.setState({
                    redirect_1: true,
                    redirect_2: true
                })
                console.log(res.value)
            }).catch(error => {
                console.log("Error " + error);
            })
        }
    }
    render() {
        if (this.state.redirect_1 && this.state.redirect_2) return <Redirect to={"/new/kb/" + this.state.kb_id} />
        const imgmouse = this.state.issue_category === "hardware" ? mouseActive : mouse;
        const imgnetwork = this.state.issue_category === "network" ? networkActive : network;
        const imgsoftware = this.state.issue_category === "software" ? softwareActive : software;
        const imglain = this.state.issue_category === "others" ? lainActive : lain;
        return (
            <div className="home">
                <div style={{ backgroundColor: "#141AA2", fontSize: "22px", fontFamily: "Muli", width: "100%", color: "white", padding: "16px 0px" }}>
                    <div className="menu" style={{ position: "absolute", top: "7px" }}>
                        <Link to='/article'>
                            <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
                                <img src={back} alt="back" style={{ width: "20px" }} />
                            </div>
                        </Link>
                    </div>
                    New Knowledge Base
                </div>

                <div className="Report" style={{ width: "85%" }}>
                    <div className="row" style={{ fontSize: "22px", color: " #A4A6B3" }}>Category </div>
                    <div className="row" style={{ width: "100%", margin: "0 auto", textAlign: "center" }}>
                        <div className="menu-service">
                            <div className="isi-our-service" id="network" onClick={this.handleCategory} style={{ backgroundColor: (this.state.issue_category === "network") ? "#0050A1" : "white" }}>
                                <div className="row" id="network" onClick={this.handleCategory}>
                                    <img src={imgnetwork} id="network" alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                                </div>
                            </div>
                            <div className="font-small">Network</div>
                        </div>
                        <div className="menu-service">
                            <div className="isi-our-service" id="software" onClick={this.handleCategory} style={{ backgroundColor: (this.state.issue_category === "software") ? "#0050A1" : "white" }}>
                                <div className="row" id="software" onClick={this.handleCategory}>
                                    <img src={imgsoftware} id="software" alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                                </div>
                            </div>
                            <div className="font-small">Software</div>
                        </div>
                        <div className="menu-service">
                            <div className="isi-our-service" id="hardware" onClick={this.handleCategory} style={{ backgroundColor: (this.state.issue_category === "hardware") ? "#0050A1" : "white" }}>
                                <div className="row" id="hardware" onClick={this.handleCategory}>
                                    <img src={imgmouse} id="hardware" alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                                </div>
                            </div>
                            <div className="font-small">Hardware</div>
                        </div>
                        <div className="menu-service">
                            <div className="isi-our-service" id="others" onClick={this.handleCategory} style={{ backgroundColor: (this.state.issue_category === "others") ? "#0050A1" : "white" }}>
                                <div className="row" id="others" onClick={this.handleCategory}>
                                    <img src={imglain} id="others" alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                                </div>
                            </div>
                            <div className="font-small">Others</div>
                        </div>
                    </div>
                    <i style={{ display: !(this.state.issue_category) ? "inline" : "none" }}>
                        <div className="row" style={{ fontSize: "12px" }}>
                            *Please Choose
                                </div>
                    </i>
                    <div className="row" style={{ fontSize: "22px", marginTop: "20px", color: " #A4A6B3", display: (this.state.issue_category) ? "flex" : "none" }}>
                        Issue
                    </div>
                    <select className="input-form-full" id="cars" name="issue_id" style={{ display: (this.state.issue_category) ? "inline" : "none", width: "99%", color: "grey" }} onChange={this.handleChange} value={this.state.issue_id} defaultValue="xx">
                        <option value="xx" disabled style={{ color: "grey" }}>------- Choose your issue -------</option>
                        {this.renderOption()}
                        <option value="lainnya">( + ) Create New Issue</option>
                    </select>
                    <div className="label" style={{ height: "30px", display: (this.state.issue_id === "lainnya") ? "inline" : "none" }} >
                        <div className="row" style={{ fontSize: "22px", color: " #A4A6B3" }}>
                            New Issue
                        </div>
                        <input className="input-form-full" type="text" placeholder="-- Title your article --" onChange={this.handleChange} name="issue_subject" />
                    </div>
                    {/* <div className="label" style={{ display: (this.state.issue_category) ? "inline" : "none" }}>
                        <div className="row" style={{ fontSize: "22px", color: " #A4A6B3" }}>
                            Problem Solve
                        </div>
                        <input className="input-form-PB" type="text" placeholder="Problem Solve" onChange={this.handleChange} name="kb_subject" />
                    </div>
                    <div className="label" style={{ display: (this.state.issue_category) ? "inline" : "none" }}>
                        <div className="row" style={{ fontSize: "22px", color: " #A4A6B3" }}>
                            Description Problem Solve
                        </div>
                        <textarea className="input-form-textarea" type="text-area" placeholder="..." onChange={this.handleChange} name="kb_description" />
                    </div>
                    <div className="label" style={{ display: (this.state.issue_category) ? "inline" : "none" }}>
                        <div className="row" style={{ fontSize: "22px", color: " #A4A6B3" }}>
                            How Many Step ?
                        </div>
                        <input className="input-form-PB" type="number" placeholder="2,3,4,..." onChange={this.handleChange} name="much" />
                    </div> */}
                    <div className="row" style={{ display: (this.state.issue_category) ? "inline" : "none", width: "100%", marginBottom: "70px", float: "right" }}>
                        <button className="button" type="submit" onClick={this.handleSubmit}>
                            submit
                        </button>
                    </div>
                </div>
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
        fetchKb: () => dispatch(kb()),
    }
}

export default connect(
    mapStateToProps, mapDispacthToProps
)(Report);
