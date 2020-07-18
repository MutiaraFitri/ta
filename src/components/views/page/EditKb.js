import React, { Component } from 'react';
import _ from "lodash";
import { connect } from "react-redux";
import '../../../loading.css';
import '../../../assets/style.css';
import '../../../assets/style.css';
import { Link } from 'react-router-dom';
import back from './../../../assets/img/back.png';
import { users } from '../../../redux/api/users';
import picture from './../../../assets/img/picture.png';
import { prod } from '../../../redux/url/server';
import defaultEmploy from '../../../assets/img/worker.png';
import TextareaAutosize from 'react-textarea-autosize';
import axios from 'axios';


export class EditKb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePreviewUrl: picture,
            lengthSteps: null,
            edit: false,
            delete: false
        }
    }

    handleDelete = (id) => {
        this.handleSave()
        console.log(id);
        axios.delete("https://api.ict-servicedesk.xyz/steps/" + id, {
            headers: {
                key: '8dfcb234a322aeeb6b530f20c8e9988e'
            }
        }
        ).then(res => {
            this.fetchData()
        }).catch(error => {
            console.log("Error " + error);
        })
    }


    handleChange = (e) => {
        //console.log(e.target.value)

        // Steps array ke id
        var x = { ...this.state.steps[e.target.id] }

        // Array Steps seluruh
        var steps = { ...this.state.steps }

        // Steps data name, array ke id 
        x[e.target.name] = e.target.value;

        // steps ke id = array yang sudah edit
        steps[e.target.id] = x;

        // Ngedit state
        this.setState({ steps: steps, edit: true })
    }

    fetchData = () => {
        // Handle Fetch Steps
        axios.get("https://api.ict-servicedesk.xyz/steps/" + this.props.match.params.id, {
            headers: {
                key: '8dfcb234a322aeeb6b530f20c8e9988e'
            }
        }
        ).then(res => {
            const steps = res.data.values;
            const data = res.data.values[0];
            this.setState({ steps, lengthSteps: steps.length });
            console.log(this.state)
        }).catch(error => {
            console.log("Error " + error);
        })

        // Handle Fetch KB
        axios.get("https://api.ict-servicedesk.xyz/knowledge_base/id/" + this.props.match.params.id, {
            headers: {
                key: '8dfcb234a322aeeb6b530f20c8e9988e'
            }
        }
        ).then(res => {
            const kb = res.data.values[0];
            this.setState({ ...kb });
            console.log(this.state)
        }).catch(error => {
            console.log("Error " + error);
        })
    }
    _handleImageChange(e) {
        e.preventDefault();
        console.log(e.target.name)
        let reader = new FileReader();
        let file = e.target.files[0];
        var x = { ...this.state.steps[e.target.name] }
        var steps = { ...this.state.steps }
        x["file"] = e.target.files[0];
        var id = e.target.name;

        reader.onloadend = () => {
            x["imagePreviewUrl"] = reader.result;
            steps[id] = x;
            console.log("steps", steps)
            this.setState({
                steps: steps,
                edit: true,
            });
        }

        reader.readAsDataURL(file)
    }
    handleSave = (e) => {
        for (let mumut = 0; mumut < this.state.lengthSteps; mumut++) {
            const formData = new FormData();
            // e.preventDefault();
            console.log(this.state);
            if (this.state.steps[mumut].steps_title) {
                formData.append('steps_title', this.state.steps[mumut].steps_title);
            }
            
            if (this.state.steps[mumut].steps_description) {
                formData.append('steps_description', this.state.steps[mumut].steps_description);
            }
            if(!this.state.steps[mumut].steps_image){
                formData.append('myImage', this.state.steps[mumut].file);
            }else{
                formData.append('steps_image', this.state.steps[mumut].steps_image);
            }
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    key: '8dfcb234a322aeeb6b530f20c8e9988e'
                }
            };
            axios.post("https://api.ict-servicedesk.xyz/steps/update/" + this.state.steps[mumut].steps_id, formData, config)
                .then((response) => {
                    // this.fetchData();
                    this.setState({
                        edit: false
                    })
                    console.log(this.state)
                }).catch((error) => {
                });
        }
        axios.put("https://api.ict-servicedesk.xyz/knowledge_base/edit/" + this.props.match.params.id, this.state, {
            headers: {
                key: '8dfcb234a322aeeb6b530f20c8e9988e'
            }
        })
            .then((response) => {
                this.setState({
                    edit: false
                })
                console.log(this.state)
            }).catch((error) => {
            });
    }
    getState = () => {
        console.log(this.state)
    }
    renderSteps = () => {
        const { steps } = this.state;
        var x = 0;

        const stepsData = _.map(steps, (value, key) => {
            x += 1;
            const imagePreviewUrl = value.imagePreviewUrl ? value.imagePreviewUrl : picture;
            return (
                <div className="steps" key={key}>
                    <div style={{ position: "absolute", backgroundColor: "red", height: "50px", width: "50px", marginTop: "15px", right: "0px", cursor: "pointer", display: this.state.delete ? "inline" : "none" }} onClick={() => { this.handleDelete(value.steps_id) }}>
                        <span className="material-icons" style={{ color: "#fff", fontSize: "20px", marginTop: "15px" }}>
                            delete
                        </span>
                    </div>
                    <div>
                        <div className="row" style={{ width: "94%" }}>
                            <div style={{ width: "7%", color: "black", fontWeight: "700", fontSize: "18px", fontFamily: "Times New Roman" }}>{x}.</div>
                            <TextareaAutosize className="input-form-steps" onChange={this.handleChange} id={key} name="steps_title" type="text" placeholder="Steps" value={(value.steps_title) ? value.steps_title : ""} style={{ width: "90%", fontWeight: "700", textAlign: "left" }} />
                        </div>
                        <div>
                            <TextareaAutosize className="input-form-steps" onChange={this.handleChange} id={key} name="steps_description" type="text-area" placeholder="Description" value={value.steps_description ? value.steps_description : ""} />
                        </div>
                        <div className="label">
                            <div className="kotak-input">
                                <label className="row" style={{ width: "100%" }} htmlFor={"files" + key}>
                                    {value.steps_image ?
                                        <img src={"https://api.ict-servicedesk.xyz/uploads/" + value.steps_image} alt="" style={{ margin: "0px auto", maxWidth: "250px" }} />
                                        :
                                        <img src={imagePreviewUrl} alt="" style={{ margin: "0px auto", maxWidth: "250px" }} />
                                    }
                                </label>
                                {value.steps_image ?
                                    <label htmlFor="files" className="btn" style={{ display: (this.state.file) ? "none" : "inline", color: "rgba(0,80,160,0.5)", fontSize: "16px" }}>Click to Change</label>
                                    :
                                    <label htmlFor="files" className="btn" style={{ display: (this.state.file) ? "none" : "inline", color: "rgba(0,80,160,0.5)" }}>Choose from library</label>
                                }
                                <input className="fileInput"
                                    id={"files" + key}
                                    type="file"
                                    name={key}
                                    onChange={(e) => this._handleImageChange(e)} style={{ display: "none" }} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        if (!_.isEmpty(stepsData)) {
            return stepsData;
        }
        if (steps) {
            if (steps.length === 0) {
                return (
                    <div className="col s10 offset-s1 center-align">
                        <h4>Empty</h4>
                    </div>
                )
            }
        }
        return (
            <div className="steps">
                tunggu
            </div>
        );
    }

    componentDidMount() {
        this.fetchData()
    }

    addSteps = () => {
        this.handleSave();
        axios.post("https://api.ict-servicedesk.xyz/steps/", this.state, {
            headers: {
                key: '8dfcb234a322aeeb6b530f20c8e9988e'
            }
        }
        ).then(res => {
            this.fetchData()
        }).catch(error => {
            console.log("Error " + error);
        })
    }
    handleClickEdit = () => {
        this.setState({
            delete: !this.state.delete
        })
    }

    handleChangeTitle = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            edit: true
        })
    }

    render() {
        return (
            <div className="home" style={{ paddingBottom: "70px" }}>
                <div className="navtop" style={{ position: "fixed", backgroundColor: "#141AA2", fontSize: "22px", fontFamily: "Muli", color: "white", padding: "16px 0px", zIndex: "20" }}>
                    <div className="menu" style={{ position: "absolute", top: "7px" }}>
                        <Link to='/article'>
                            <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
                                <img src={back} alt="back" style={{ width: "20px" }} />
                            </div>
                        </Link>
                    </div>
                        Edit Knowledge Base
                    <div className="menu" style={{ position: "absolute", top: "12px", right: "10px", cursor: "pointer" }} onClick={this.handleSave}>
                        {this.state.edit ?
                            <span className="material-icons" style={{ color: "#fff", fontSize: "30px" }}>
                                done
                            </span>
                            :
                            <div style={{ color: "#fff", marginTop: "8px", fontSize: "14px" }}>
                                Saved
                            </div>
                        }
                    </div>
                </div>
                <div className="container" style={{ width: "85%", marginTop: "60px" }}>
                    <div className="row" style={{ width: "100%" }}>
                        <div className="issue-kb" style={{ width: "15%" }} onClick={this.getState}>Issue :</div>
                        <div className="issue-kb" style={{ width: "85%" }}>{this.state.issue_subject ? this.state.issue_subject : null}</div>
                    </div>
                </div>
                <div className="steps">
                    <TextareaAutosize className="input-form-steps title-kb" autoFocus={true} type="text" value={this.state.kb_subject ? this.state.kb_subject : ""} style={{ textAlign: "left" }} placeholder="Subject" name="kb_subject" onChange={this.handleChangeTitle} />
                    <TextareaAutosize className="input-form-steps description-kb" type="text" value={this.state.kb_description ? this.state.kb_description : ""} name="kb_description" placeholder="Description" onChange={this.handleChangeTitle} />
                </div>
                {this.renderSteps()}
                <div style={{ width: "80%", margin: "0px auto", marginTop: "40px" }}>
                    <hr />
                    <div className="circle-add" onClick={this.addSteps}>
                        <span className="material-icons" style={{ color: "#fff", fontSize: "20px" }}>
                            add
                        </span>
                    </div>
                </div>
                <div className="navbar-edit-kb" onClick={this.handleClickEdit}>
                    <div style={{ position: "relative", width: "50%"}}>
                        <div style={{ position: "absolute", left: "20px",fontWeight:"700" }}>
                            {this.state.delete ?
                                "Done"
                                :
                                "Edit"
                            }</div>
                    </div>
                    <div style={{ position: "relative", width: "50%"}}>
                        <div style={{ position: "absolute", right: "20px",fontWeight:"700" }}>
                            {this.state.delete ?
                                "Published"
                                :
                                "Draft"
                            }</div>
                    </div>
                </div>
            </div >


        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        userku: () => dispatch(users()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditKb);