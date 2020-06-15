import React, { Component } from 'react'
import NavbarTop from '../navbar/NavbarTop';
import { connect } from "react-redux";
import Skeleton from 'react-loading-skeleton';
import {SkeletonTheme} from 'react-loading-skeleton';
import _ from 'lodash'
import NavbarBottom from '../navbar/NavbarBottom';
import { getNotificationByEmployeeId } from './../../../redux/api/notification'

export class Notification extends Component {
    componentDidMount() {
        this.props.getNotification(12345)
    }
    renderTicket = () => {
        const { data } = this.props;
        const toDos = _.map(data.notification.data, (value, key) => {
            return (
                <div className="notification" key={key}>
                    <div className="time-notification">3:25 AM</div>
                    <div className="title-notification">Ticket on Proccess</div>
                    <div className="description-notification">Your ticket has ben process with Dimas Putra</div>
                </div>
            );
        });
        if (!_.isEmpty(toDos)) {
            return toDos;
        }
        return (
            <div className="notification">
                <div className="time-notification"><SkeletonTheme color="#35599e" highlightColor="#486fbb"><Skeleton duration={1} width="50px"/></SkeletonTheme></div>
                <div className="title-notification"><SkeletonTheme color="#35599e" highlightColor="#486fbb"><Skeleton duration={1} width="200px"/></SkeletonTheme></div>
                <div className="description-notification"><SkeletonTheme color="#35599e" highlightColor="#486fbb"><Skeleton duration={1} /></SkeletonTheme></div>
            </div>
        );
    }
    render() {
        return (
            <div className="home Ticket" style={{ paddingBottom: "50px", minHeight:"90vh" }}>
                <NavbarTop back="true" title="Notification" />
                <div style={{ width: "95%",paddingTop:"70px",textAlign:"left" }}>
                    {this.renderTicket()}
                </div>
                <NavbarBottom active="Home" />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    data: state
})

const mapDispatchToProps = (dispatch) => {
    // console.log("asu");
    return {
        getNotification: (id) => dispatch(getNotificationByEmployeeId(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification);
