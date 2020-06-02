import React, { Component } from 'react';
import NavbarTop from '../navbar/NavbarTop';
import filter from './../../../assets/img/filter.png';
import search from './../../../assets/img/search.png';
import low from './../../../assets/img/low.jpg';
import filterImage from './../../../assets/img/descendant.png';
import NavbarBottom from '../navbar/NavbarBottom';
import { fetchProductPending, fetchProductSuccess, fectProductError } from './../../../redux/action/action';
import Antrian from '../../Antrian';
import { Redirect } from 'react-router-dom';
import { tickets } from '../../../redux/api/ticket';
import { connect } from 'react-redux';
import _ from "lodash";


class AllTicket extends Component {

    state = {
        tiket: [],
        overlay: false,
        opacity: true,
        from: null,
        until: null,
        priority: null,
        category: null,
        transform: true
    }
    componentDidMount() {
        this.props.tiketku();
    }

    showFilter = () => {
        this.setState({
            overlay: true
        })
    }
    closeFilter = () => {
        this.setState({
            overlay: false
        })
    }
    handlePriority = (e) => {
        this.setState({
            priority: e.target.id
        })
    }
    handleCategory = (e) => {
        this.setState({
            category: e.target.id
        })
    }
    renderToDos() {
        const { data } = this.props;
        var dataku = "";
        if (data.personState.data) {
            dataku = data.personState.data.values;
            const toDos = _.map(dataku, (values, key) => {
                return <div key={key}>
                    <Antrian
                        //imageKategori={hardware}
                        sender1={values.employee_firstname}
                        sender2={values.employee_lastname}
                        category={values.ticket_category}
                        title={values.ticket_subject}
                        assign_to={values.technician_firstname}
                        status={values.ticket_status}
                        due_date={values.ticket_timestamp}
                        imagePriority={low}
                        priority={values.ticket_priority}
                        id={values.ticket_id}
                        employee_email={values.employee_email}
                        description={values.ticket_description}
                        location={values.ticket_location}
                    />

                </div>;
            });
            if (!_.isEmpty(toDos)) {
                return toDos;
            }
        }
    }

    render() {

        const transform = (this.state.transform) ? "scale(1)" : "scale(0)";
        const opacity = (this.state.opacity) ? "1" : "0";
        // const { data } = this.props;
        // const detail = this.props.active == "Detail" ? "navbar-icon active" : "navbar-icon";
        if (!localStorage.getItem("jwt")) return <Redirect to="/Login" />

        return (
            <div className="home" style={{height:(this.state.overlay)?"100vh":"auto", overflow:(this.state.overlay)?"hidden":"auto"}}>
                <div style={{
                    width: "100%",
                    position: "absolute",
                    display: (this.state.overlay) ? "inline" : "none"
                }}>
                    <div style={{
                        position: "absolute",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        width: "100%",
                        zIndex: "3",
                        transition: "opacity 0.2s",
                        opacity: opacity
                    }} onClick={this.handleOverlayClose} id="overlay">
                    </div>
                    <div style={{
                        display: "flex",
                        left: "50%"
                    }}
                        className="loading-overlay loading">
                        <div
                            className="loading-content"
                            style={{
                                position: "absolute",
                                backgroundColor: "white",
                                width: "300px",
                                borderRadius: "10px",
                                transition: "transform 0.3s",
                                padding: "0px",
                                paddingTop: "20px",
                                zIndex: "4",
                                transform: transform,
                                top: "25vh"
                            }}>
                                <div className="circle-filter">
                                    <div className="content-circle-filter">
                                        <img src={filterImage} width="30px" style={{marginTop:"20px"}}/>
                                    </div>
                                    <div style={{marginTop:"-20px"}}>
                                        Filter
                                    </div>
                                </div>
                            <div className="row" style={{ textAlign: "center",marginTop:"50px" }}>
                                <div style={{ margin: "10px auto", width: "100%", letterSpacing: "5px", fontSize: "12px", color: "black" }}>DATE</div>
                                <div style={{ width: "50%" }}>
                                    <div style={{ textAlign: "left", width: "80%", margin: "0px auto" }}>
                                        <div style={{ fontSize: "11px", marginBottom: "5px", color: "black" }}>From</div>
                                        <div><input type="date" style={{ fontSize: "12px", padding: "5px", width: "100px" }} /></div>
                                    </div>
                                </div>
                                <div style={{ width: "50%" }}>
                                    <div style={{ textAlign: "left", width: "80%", margin: "0px auto" }}>
                                        <div style={{ fontSize: "11px", marginBottom: "5px", color: "black" }}>Until</div>
                                        <div><input type="date" style={{ fontSize: "12px", padding: "5px", width: "100px" }} /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div style={{ margin: "10px auto", width: "100%", letterSpacing: "5px", fontSize: "12px", color: "black" }}>PRIORITY</div>
                                <div style={{ width: "90%" }} className="row">
                                    <div style={{ width: "33.3333%" }}>
                                        <div className={(this.state.priority === "low") ? "box-priority active" : "box-priority"} onClick={this.handlePriority} id="low">
                                            Low
                                    </div>
                                    </div>
                                    <div style={{ width: "33.3333%" }}>
                                        <div className={(this.state.priority === "medium") ? "box-priority active" : "box-priority"} onClick={this.handlePriority} id="medium">
                                            Medium
                                    </div>
                                    </div>
                                    <div style={{ width: "33.3333%" }}>
                                        <div className={(this.state.priority === "high") ? "box-priority active" : "box-priority"} onClick={this.handlePriority} id="high">
                                            High
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div style={{ margin: "10px auto", width: "100%", letterSpacing: "5px", fontSize: "12px", color: "black" }}>CATEGORY</div>
                                <div style={{ width: "90%" }} className="row">
                                    <div style={{ width: "25%" }}>
                                        <div className={(this.state.category === "hardware") ? "box-priority active" : "box-priority"} onClick={this.handleCategory} id="hardware">
                                            Hardware
                                    </div>
                                    </div>
                                    <div style={{ width: "25%" }}>
                                        <div className={(this.state.category === "software") ? "box-priority active" : "box-priority"} onClick={this.handleCategory} id="software">
                                            Software
                                    </div>
                                    </div>
                                    <div style={{ width: "25%" }}>
                                        <div className={(this.state.category === "network") ? "box-priority active" : "box-priority"} onClick={this.handleCategory} id="network">
                                            Network
                                    </div>
                                    </div>
                                    <div style={{ width: "25%" }}>
                                        <div className={(this.state.category === "others") ? "box-priority active" : "box-priority"} onClick={this.handleCategory} id="others">
                                            Others
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" onClick={this.closeFilter}>
                                <div className="box-apply">
                                    Apply
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NavbarTop />
                <div style={{ color: "black", width: "100%" }}>
                    <div className="search" style={{ width: "100%" }}>
                        <div className="row">
                            <div style={{ width: "80%" }}>
                                <input type="text" name="q" id="q" placeholder="Search . . ." style={{ marginLeft: "5px", padding: "10px", width: "100%" }} />
                                <div style={{ marginTop: "-40px", width: "100%", marginLeft: "50%" }}>
                                    <img src={search} alt="search" style={{ top: "87px", right: "65px", position: "absolute" }} />
                                </div>
                            </div>
                            <div style={{ width: "20%" }} onClick={this.showFilter}>
                                <button style={{ paddingTop: "10px", paddingBottom: "10px", float: "right", marginRight: "5px", paddingLeft: "12px", paddingRight: "12px", backgroundColor: "#fff", color: "#fff", borderRadius: "10%", border: "1px solid #c6c6c6" }}>
                                    <img src={filter} alt="filter" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: "90%" }}>
                    <div className="title" style={{ textAlign: "left", marginLeft: "5px", letterSpacing: "5px" }}>
                        QUEUE
                    </div>
                    {this.renderToDos()}
                    <br /><br /><br /><br />

                </div>
                <NavbarBottom active="Ticket" />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state
})
const mapDispacthToProps = (dispatch) => {
    return {
        fetchPendingku: () => dispatch(fetchProductPending()),
        fetchSuccessku: () => dispatch(fetchProductSuccess()),
        fetchErrorku: () => dispatch(fectProductError()),
        tiketku: () => dispatch(tickets()),

    }
}

export default connect(
    mapStateToProps, mapDispacthToProps
)(AllTicket)
