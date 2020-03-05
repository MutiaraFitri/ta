import React, { Component } from 'react'
import home from '../../../assets/img/home.png';
import profile from '../../../assets/img/profile.png';
import ticket from '../../../assets/img/ticket.png';
import { Link } from 'react-router-dom';

export class NavbarBottom extends Component {
    handleNavbarBottom = (e) => {
        console.log(this.props.active);
        this.setState({
            ["class" + this.props.active]: "navbar-icon active"
        })
    }
    render() {
        const homeIcon = this.props.active === "Home" ? "navbar-icon active" : "navbar-icon";
        const ticketIcon = this.props.active === "Ticket" ? "navbar-icon active" : "navbar-icon";
        const profileIcon = this.props.active === "Profile" ? "navbar-icon active" : "navbar-icon";
        return (
            <div className="navbar">
                <div className="row" style={{ width: "80%", marginTop: "5px" }}>
                    <div className="menu-home">
                        <Link to='/'>
                            <img src={home} alt="Home" height="40px" className={homeIcon} ref="homeIcon" onClick={this.handleNavbarBottom} />
                        </Link>
                    </div>
                    <div className="menu-home">
                        <Link to='/all-ticket'>
                            <img src={ticket} alt="" height="40px" className={ticketIcon} ref="ticketIcon" />
                        </Link>
                    </div>
                    <div className="menu-home">
                        <Link to='/profile'>
                            <img src={profile} alt="" height="40px" className={profileIcon} ref="profileIcon" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavbarBottom
