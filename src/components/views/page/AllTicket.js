import React, { Component } from 'react';
import NavbarTop from '../navbar/NavbarTop';
import filter from './../../../assets/img/filter.png';
import search from './../../../assets/img/search.png';
import low from './../../../assets/img/low.jpg';
import NavbarBottom from '../navbar/NavbarBottom';
import { fetchProductPending, fetchProductSuccess, fectProductError } from './../../../redux/action/action';
import Antrian from '../../Antrian';
import { tickets } from '../../../redux/api/ticket';
import { connect } from 'react-redux';
import _ from "lodash";


class AllTicket extends Component {

    state = {
        tiket: []
    }
    componentDidMount() {
        this.props.tiketku();
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
        // const { data } = this.props;
        // const detail = this.props.active == "Detail" ? "navbar-icon active" : "navbar-icon";


        return (
            <div className="home">
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
                            <div style={{ width: "20%" }}>
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
