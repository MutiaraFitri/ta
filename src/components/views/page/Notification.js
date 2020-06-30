import React, { Component } from 'react'
import NavbarTop from '../navbar/NavbarTop';
import { connect } from "react-redux";
import io from 'socket.io-client';
import Skeleton from 'react-loading-skeleton';
import { SkeletonTheme } from 'react-loading-skeleton';
import _ from 'lodash'
import NavbarBottom from '../navbar/NavbarBottom';
import moment from 'moment';
import { getNotificationByTechnicianId } from './../../../redux/api/notification';
import users from '../../../redux/api/users';
import { prod } from "./../../../redux/url/server";
const socketUrl = prod
const socket = io(socketUrl)
export class Notification extends Component {



    componentDidMount() {

        this.props.userku();

        socket.on("OPEN_TICKET", () => {
            this.props.getNotification()
        })
        this.props.getNotification()

    }

    renderNotification = () => {
        const { data } = this.props;
        const toDos = _.map(data.notification.data, (value, key) => {
            return (
                <div className="notification" key={key}>
                    <div className="time-notification">{moment(value.notification_timestamps).format('LT')}</div>
                    <div className="title-notification">{value.notification_title}</div>
                    <div className="description-notification">{value.notification_message}</div>
                </div>
            );
        });
        if (!_.isEmpty(toDos)) {
            return toDos;
        }
        return (
            <div className="notification">
                <div className="time-notification"><SkeletonTheme color="#35599e" highlightColor="#486fbb"><Skeleton duration={1} width="50px" /></SkeletonTheme></div>
                <div className="title-notification"><SkeletonTheme color="#35599e" highlightColor="#486fbb"><Skeleton duration={1} width="200px" /></SkeletonTheme></div>
                <div className="description-notification"><SkeletonTheme color="#35599e" highlightColor="#486fbb"><Skeleton duration={1} /></SkeletonTheme></div>
            </div>
        );
    }
    render() {
        return (
            <div className="home Ticket" style={{ paddingBottom: "50px", minHeight: "90vh" }}>
                <NavbarTop back="true" title="Notification" />
                <div style={{ width: "95%", paddingTop: "70px", textAlign: "left" }}>
                    {this.renderNotification()}
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

    return {
        getNotification: () => dispatch(getNotificationByTechnicianId()),
        userku: () => dispatch(users()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification);
