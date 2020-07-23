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
import { ticketByDetail, ticketsByTechnicianId } from '../../../redux/api/ticket';
import { connect } from 'react-redux';
import _ from "lodash";
const jwt = require('jsonwebtoken');

export class Ticket extends Component {
    state = {
        tiket: [],
        overlay: false,
        opacity: true,
        from: null,
        q: "",
        until: null,
        priority: null,
        category: null,
        transform: true,
        date: { awal: null, akhir: null },
    }
    componentDidMount() {
        if (this.props.match.params.detail === 'assign-to-me') {
            jwt.verify(localStorage.getItem("jwt"), 'dimasputray', (err, decoded) => {
                if (err) {
                    console.log("Error", err)
                    localStorage.removeItem("jwt");
                    // dispatch(loginFailed("Your session has expired"));
                }
                const user = decoded.data;
                this.setState({ ...user },
                    () => {
                        this.props.tiketById(this.state.user_id);
                    }
                )
            });
        }
        else {
            this.props.tiket(this.props.match.params.detail);
        }
    }

    handleDate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
    renderTicket() {
        const { data } = this.props;
        var dataku = "";
        var counter = 0;
        if (data.ticketState.data) {
            dataku = data.ticketState.data;
            const toDos = _.map(dataku, (values, key) => {
                // cek filter apakah aktif ketiganya
                if (this.state.priority && this.state.awal && this.state.category) {
                    console.log("TIKET")
                    if (values.ticket_priority === this.state.priority && values.ticket_timestamp >= this.state.awal && values.ticket_timestamp <= this.state.akhir && values.ticket_category === this.state.category) {
                        if (this.state.q) {
                            if ((values.ticket_subject).toLowerCase().search(this.state.q.toLowerCase()) > -1 || ((values.employee_firstname + " " + values.employee_lastname).toLowerCase().search(this.state.q.toLowerCase()) > -1) || (values.ticket_subject).toLowerCase().search(this.state.q.toLowerCase()) > -1 || ((values.employee_firstname + " " + values.employee_lastname).toLowerCase().search(this.state.q.toLowerCase()) > -1)) {
                                counter += 1
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
                            }
                        }
                        else {
                            counter += 1
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
                        }
                    }
                }
                // cek filter apakah aktif keduanya aktif (priority & tggl)
                else if (this.state.priority && this.state.awal) {
                    if (values.ticket_priority === this.state.priority && values.ticket_timestamp >= this.state.awal && values.ticket_timestamp <= this.state.akhir) {
                        if (this.state.q) {
                            if ((values.ticket_subject).toLowerCase().search(this.state.q.toLowerCase()) > -1 || ((values.employee_firstname + " " + values.employee_lastname).toLowerCase().search(this.state.q.toLowerCase()) > -1) || (values.ticket_subject).toLowerCase().search(this.state.q.toLowerCase()) > -1 || ((values.employee_firstname + " " + values.employee_lastname).toLowerCase().search(this.state.q.toLowerCase()) > -1)) {
                                counter += 1
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
                            }
                        }
                        else {
                            counter += 1
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
                        }
                    }
                }
                // cek filter apakah aktif keduanya aktif (tgl & category)
                else if (this.state.awal && this.state.category) {
                    if (values.ticket_timestamp >= this.state.awal && values.ticket_timestamp <= this.state.akhir && values.ticket_category === this.state.category) {
                        if (this.state.q) {
                            if ((values.ticket_subject).toLowerCase().search(this.state.q.toLowerCase()) > -1 || ((values.employee_firstname + " " + values.employee_lastname).toLowerCase().search(this.state.q.toLowerCase()) > -1) || (values.ticket_subject).toLowerCase().search(this.state.q.toLowerCase()) > -1 || ((values.employee_firstname + " " + values.employee_lastname).toLowerCase().search(this.state.q.toLowerCase()) > -1)) {
                                counter += 1
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
                            }
                        }
                        else {
                            counter += 1
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
                        }
                    }
                }
                // cek filter apakah aktif keduanya aktif (priority & category)
                else if (this.state.priority && this.state.category) {
                    if (values.ticket_priority === this.state.priority && values.ticket_category === this.state.category) {
                        if (this.state.q) {
                            if ((values.ticket_subject).toLowerCase().search(this.state.q.toLowerCase()) > -1 || ((values.employee_firstname + " " + values.employee_lastname).toLowerCase().search(this.state.q.toLowerCase()) > -1) || (values.ticket_subject).toLowerCase().search(this.state.q.toLowerCase()) > -1 || ((values.employee_firstname + " " + values.employee_lastname).toLowerCase().search(this.state.q.toLowerCase()) > -1)) {
                                counter += 1
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
                            }
                        }
                        else {
                            counter += 1
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
                        }
                    }
                }
                // cek filter apakah aktif salah satuu ( priority )
                else if (this.state.priority) {
                    if (values.ticket_priority === this.state.priority) {
                        if (this.state.q) {
                            if ((values.ticket_subject).toLowerCase().search(this.state.q.toLowerCase()) > -1 || ((values.employee_firstname + " " + values.employee_lastname).toLowerCase().search(this.state.q.toLowerCase()) > -1)) {
                                counter += 1
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
                            }
                        }
                        else {
                            counter += 1
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
                        }
                    }
                }
                // cek filter apakah aktif salah satuu ( tggl )
                else if (this.state.awal) {
                    if (values.ticket_timestamp <= this.state.akhir && values.ticket_timestamp >= this.state.awal) {
                        if (this.state.q) {
                            if ((values.ticket_subject).toLowerCase().search(this.state.q.toLowerCase()) > -1 || ((values.employee_firstname + " " + values.employee_lastname).toLowerCase().search(this.state.q.toLowerCase()) > -1)) {
                                counter += 1
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
                            }
                        }
                        else {
                            counter += 1
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
                        }
                    }
                }
                //  cek filter apakah aktif salah satuu ( category )
                else if (this.state.category) {
                    if (values.ticket_category === this.state.category) {
                        if (this.state.q) {
                            if ((values.ticket_subject).toLowerCase().search(this.state.q.toLowerCase()) > -1 || ((values.employee_firstname + " " + values.employee_lastname).toLowerCase().search(this.state.q.toLowerCase()) > -1)) {
                                counter += 1
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
                            }
                        }
                        else {
                            counter += 1
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
                        }
                    }
                }
                // cek pencarian
                else if (this.state.q) {
                    console.log("ticket Subject ", values.ticket_subject.toLowerCase())
                    console.log("q ", this.state.q)
                    console.log((values.ticket_subject).toLowerCase().search(this.state.q))
                    if ((values.ticket_subject).toLowerCase().search(this.state.q.toLowerCase()) > -1 || ((values.employee_firstname + " " + values.employee_lastname).toLowerCase().search(this.state.q.toLowerCase()) > -1)) {
                        counter += 1
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
                    }
                }
                // Search null
                else {
                    counter += 1
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
                }
            });
            if (counter === 0) {
                return <div style={{ margin: "0px auto", marginTop: "200px", textAlign: "center" }}> Sorry , Ticket is Empty </div>
            }
            if (!_.isEmpty(toDos)) {
                console.log(counter)
                return toDos;
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        const transform = (this.state.transform) ? "scale(1)" : "scale(0)";
        const opacity = (this.state.opacity) ? "1" : "0";
        // const { data } = this.props;
        // const detail = this.props.active == "Detail" ? "navbar-icon active" : "navbar-icon";
        if (!localStorage.getItem("jwt")) return <Redirect to="/Login" />

        return (
            <div className="home" style={{ height: (this.state.overlay) ? "100vh" : "auto", overflow: (this.state.overlay) ? "hidden" : "auto" }}>
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
                                    <img src={filterImage} alt="filter" width="30px" style={{ marginTop: "20px" }} />
                                </div>
                                <div style={{ marginTop: "-20px" }}>
                                    Filter
                                    </div>
                            </div>
                            <div className="row" style={{ textAlign: "center", marginTop: "50px" }}>
                                <div style={{ margin: "10px auto", width: "100%", letterSpacing: "5px", fontSize: "12px", color: "black" }}>DATE</div>
                                <div style={{ width: "50%" }}>
                                    <div style={{ textAlign: "left", width: "80%", margin: "0px auto" }}>
                                        <div style={{ fontSize: "11px", marginBottom: "5px", color: "black" }}>From</div>
                                        <div><input type="date" style={{ fontSize: "12px", padding: "5px", width: "100px" }} name="awal" onChange={this.handleDate} /></div>
                                    </div>
                                </div>
                                <div style={{ width: "50%" }}>
                                    <div style={{ textAlign: "left", width: "80%", margin: "0px auto" }}>
                                        <div style={{ fontSize: "11px", marginBottom: "5px", color: "black" }}>Until</div>
                                        <div><input type="date" style={{ fontSize: "12px", padding: "5px", width: "100px" }} name="akhir" onChange={this.handleDate} /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div style={{ margin: "10px auto", width: "100%", letterSpacing: "5px", fontSize: "12px", color: "black" }}>PRIORITY</div>
                                <div style={{ width: "80%" }} className="row">
                                    <div style={{ width: "50%" }}>
                                        <div className={(this.state.priority === "low") ? "box-priority active" : "box-priority"} onClick={this.handlePriority} id="low">
                                            Low
                                    </div>
                                    </div>
                                    <div style={{ width: "50%" }}>
                                        <div className={(this.state.priority === "Highest") ? "box-priority active" : "box-priority"} onClick={this.handlePriority} id="Highest">
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
                <NavbarTop title="Ticket" />
                <div style={{ color: "black", width: "100%", marginTop: "60px" }}>
                    <div className="search" style={{ width: "100%" }}>
                        <div className="row">
                            <div style={{ width: "80%" }}>
                                <input type="text" name="q" id="q" placeholder="Search . . ." style={{ marginLeft: "5px", padding: "10px", width: "100%" }} onChange={this.handleChange} />
                                <div style={{ marginTop: "-40px", width: "100%", marginLeft: "50%" }}>
                                    <img src={search} alt="search" style={{ top: "87px", position: "absolute" }} />
                                </div>
                            </div>
                            {/* menampilkan filter */}
                            <div style={{ width: "20%" }} onClick={this.showFilter}>
                                <button style={{ paddingTop: "10px", paddingBottom: "10px", float: "right", marginRight: "5px", paddingLeft: "12px", paddingRight: "12px", backgroundColor: "#fff", color: "#fff", borderRadius: "10%", border: "1px solid #c6c6c6" }}>
                                    <img src={filter} alt="filter" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: "90%" }}>
                    <div className="title" style={{ textAlign: "left", textTransform: "uppercase", marginLeft: "5px", letterSpacing: "5px" }}>
                        {this.props.match.params.detail} Ticket
                    </div>
                    {this.renderTicket()}
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
        tiket: (data) => dispatch(ticketByDetail(data)),
        tiketById: (data) => dispatch(ticketsByTechnicianId(data)),

    }
}

export default connect(
    mapStateToProps, mapDispacthToProps
)(Ticket)