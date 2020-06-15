import React, { Component } from 'react';
import priority from './../../../assets/img/priority.png';
import garbage from './../../../assets/img/garbage.png';
import tambah from './../../../assets/img/tambah.png';
import NavbarBottom from '../navbar/NavbarBottom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ticketsById } from '../../../redux/api/ticket';
import { users } from '../../../redux/api/users';
import { connect } from 'react-redux';
import TicketDetailDesc from '../../TicketDetailDesc';
import back from './../../../assets/img/back.png';
import _ from "lodash";

class DetailTicket extends Component {
    state = {
        tiket: []
    }

    fetchData = () => {
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

    componentDidMount() {
        this.props.userku();
        this.fetchData()
    }

    renderToDos() {
        const toDos = _.map(this.state.tiket, (values, key) => {
            return <div key={key} style={{ width: "100%" }}>
                <TicketDetailDesc
                    //imageKategori={hardware}
                    sender1={values.employee_firstname}
                    sender2={values.employee_lastname}
                    category={values.ticket_category}
                    title={values.ticket_subject}
                    image={values.ticket_image}
                    assign_to={values.technician_firstname}
                    status={values.ticket_status}
                    due_date={values.ticket_timestamp}
                    priority={values.ticket_priority}
                    id={values.ticket_id}
                    employee_email={values.employee_email}
                    description={values.ticket_description}
                    email={values.employee_email}
                    location={values.ticket_location}
                    time={values.ticket_timestamp}
                />

            </div>;
        });
        if (!_.isEmpty(toDos)) {
            return toDos;
        }
    }

    handleButtonAssignToMe = () => {
        axios.get(`https://api.ict-servicedesk.xyz/ticket/id/` + this.props.match.params.id, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const tiket = res.data.values;
                console.log("data", tiket[0])
                if (!tiket[0].ticket_technician_id) {
                    axios.put('https://api.ict-servicedesk.xyz/ticket/assign/' + this.props.match.params.id, { technician_id: this.props.data.personState.data.user_id }, {
                        headers: {
                            key: '8dfcb234a322aeeb6b530f20c8e9988e'
                        }
                    }
                    )
                        .then(res => res.data)
                        .then(res => {
                            if (res.error) {
                                throw (res.error);
                            }
                            console.log("hasil", res)
                            this.fetchData()
                        })
                        .catch(error => {
                            console.log("Error " + error);
                        })
                }
            })
        console.log("Assign To me");
    }
    handleButtonMakeItPriority = () => {
        console.log("Make it Priority");
    }
    handleButtonSpam = () => {
        axios.get(`https://api.ict-servicedesk.xyz/ticket/id/` + this.props.match.params.id, {
            headers: {
                key: "8dfcb234a322aeeb6b530f20c8e9988e"
            }
        })
            .then(res => {
                const tiket = res.data.values;
                console.log("data", tiket[0])
                if (!tiket[0].ticket_technician_id) {
                    axios.put('https://api.ict-servicedesk.xyz/ticket/spam/' + this.props.match.params.id, { technician_id: this.props.data.personState.data.user_id }, {
                        headers: {
                            key: '8dfcb234a322aeeb6b530f20c8e9988e'
                        }
                    }
                    )
                        .then(res => res.data)
                        .then(res => {
                            if (res.error) {
                                throw (res.error);
                            }
                            console.log("hasil", res)
                            this.fetchData()
                        })
                        .catch(error => {
                            console.log("Error " + error);
                        })
                }
            })
        console.log("Spam");
    }
    render() {
        //console.log(this.props.match.params.id)
        return (
            <div className="home" style={{ paddingBottom: "70px" }}>
                <div className="navbar-message" >
                    <div className="menu" style={{ position: "absolute", top: "7px" }}>
                        <Link to='/all-ticket'>
                            <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
                                <img src={back} alt="back" style={{ width: "20px" }} />
                            </div>
                        </Link>
                    </div>
                    Detail Ticket
                </div>
                <div style={{ marginTop: "50px", width: "100%" }}>
                    {this.renderToDos()}
                </div>
                {(this.state.tiket[0]) ?
                    (!this.state.tiket[0].ticket_technician_id && this.state.tiket[0].ticket_is_active) ?
                        <div className="row" style={{ width: "100%" }}>
                            <div className="kotak-menu" style={{ width: "33%" }}>
                                <div style={{ padding: "5px" }} onClick={this.handleButtonAssignToMe}>
                                    <div style={{ border: "1px solid #e9e9e9", borderRadius: "10px", padding: "10px 0px" }}>
                                        <div className="icon-menu">
                                            <img src={tambah} alt="tambah" />
                                        </div>
                                        <div className="desc-menu" style={{ fontSize: "14px" }}>
                                            Assign to Me
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="kotak-menu" style={{ width: "33%" }}>
                                <div style={{ padding: "5px" }} onClick={this.handleButtonMakeItPriority}>
                                    <div style={{ border: "1px solid #e9e9e9", borderRadius: "10px", padding: "10px 0px" }}>
                                        <div className="icon-menu">
                                            <img src={priority} alt="tambah" />
                                        </div>
                                        <div className="desc-menu" style={{ fontSize: "14px" }}>
                                            Make it Priority
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="kotak-menu" style={{ width: "33%" }}>
                                <div style={{ padding: "5px" }} onClick={this.handleButtonSpam}>
                                    <div style={{ border: "1px solid #e9e9e9", borderRadius: "10px", padding: "10px 0px" }}>
                                        <div className="icon-menu">
                                            <img src={garbage} alt="tambah" />
                                        </div>
                                        <div className="desc-menu" style={{ fontSize: "14px" }}>
                                            Spam
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                    :
                    null
                }
                <div className="row" style={{ width: "414px", bottom: "55px", position: "fixed" }}>
                    <div style={{ width: "82%", height: "10px" }}>
                    </div>
                    <Link to={'/message/' + this.props.match.params.id}>
                        <div className="chatIcon" style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", padding: "15px 16px", backgroundColor: "#0050A1", borderRadius: "50%" }}>
                            <span class="material-icons" style={{ verticalAlign: "bottom", color: "#fff" }}>
                                chat
                            </span>
                        </div>
                    </Link>
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
        userku: () => dispatch(users()),
        ticket: (id) => dispatch(ticketsById(id)),
    }
}

export default connect(
    mapStateToProps, mapDispacthToProps
)(DetailTicket)
