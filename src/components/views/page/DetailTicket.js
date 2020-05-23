import React, { Component } from 'react';
import left from './../../../assets/img/left-arrow.png';
import priority from './../../../assets/img/priority.png';
import garbage from './../../../assets/img/garbage.png';
import tambah from './../../../assets/img/tambah.png';
import NavbarBottom from '../navbar/NavbarBottom';
import { Link } from 'react-router-dom';
import menu from '../../../assets/img/menu.png';
import { ticketsById } from '../../../redux/api/ticket';
import { connect } from 'react-redux';
import TicketDetailDesc from '../../TicketDetailDesc';
import _ from "lodash";

class DetailTicket extends Component {
    componentDidMount() {
        this.props.ticket(this.props.match.params.id)
    }
    state = {
        tiket: []
    }
    renderToDos() {
        const { data } = this.props;
        var dataku = "";
        if (data.personState.data) {
            dataku = data.personState.data.values;
            const toDos = _.map(dataku, (values, key) => {
                return <div key={key}>
                    <TicketDetailDesc
                        //imageKategori={hardware}
                        sender1={values.employee_firstname}
                        sender2={values.employee_lastname}
                        category={values.ticket_category}
                        title={values.ticket_subject}
                        assign_to={values.technician_firstname}
                        status={values.ticket_status}
                        due_date={values.ticket_timestamp}
                        priority={values.ticket_priority}
                        id={values.ticket_id}
                        employee_email={values.employee_email}
                        description={values.ticket_description}
                        email={values.employee_email}
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
        //console.log(this.props.match.params.id)
        return (
            <div className="home" style={{ paddingBottom: "70px" }}>
                <div style={{ backgroundColor: "#141AA2", fontSize: "22px", fontFamily: "Muli", width: "100%", color: "white", padding: "16px 0px" }}>
                    <div className="menu" style={{ position: "absolute", top: "7px" }}>
                        <img src={menu} alt="" />
                    </div>
                    Detail Ticket
                </div>
                <div style={{ color: "black", width: "100%" }}>
                    <div className="search" style={{ width: "100%" }}>
                        <Link to='/all-ticket'>
                            <div className="row">
                                <div style={{ width: "20%", float: "left", marginLeft: "-10px" }}>
                                    <img src={left} alt="filter" />
                                </div>

                            </div>
                        </Link>
                    </div>
                </div>
                {this.renderToDos()}

                <div className="row" style={{ width: "100%" }}>
                    <div className="kotak-menu" style={{ width: "33%" }}>
                        <div style={{ padding: "5px" }}>
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
                        <div style={{ padding: "5px" }}>
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
                        <div style={{ padding: "5px" }}>
                            <div style={{ border: "1px solid #e9e9e9", borderRadius: "10px", padding: "10px 0px" }}>
                                <div className="icon-menu">
                                    <img src={garbage} alt="tambah" />
                                </div>
                                <div className="desc-menu" style={{ fontSize: "14px" }}>
                                    Assign to Me
                                </div>
                            </div>
                        </div>
                    </div>

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
        ticket: (id) => dispatch(ticketsById(id)),

    }
}

export default connect(
    mapStateToProps, mapDispacthToProps
)(DetailTicket)
