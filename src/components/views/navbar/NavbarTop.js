import React, { Component } from 'react';
import back from './../../../assets/img/back.png';
import { Link } from 'react-router-dom';

class NavbarTop extends Component {
  render() {
    return (
      <div className="navbar-message">
        <div className="menu" style={{ position: "absolute", top: "7px" }}>
          <Link to={this.props.backUrl ? this.props.backUrl : "/"}>
            <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
              <img src={back} alt="back" style={{ width: "20px" }} />
            </div>
          </Link>
        </div>
        {this.props.title ? this.props.title : "All Ticket"}
      </div>
    );
  }
}

export default NavbarTop;
