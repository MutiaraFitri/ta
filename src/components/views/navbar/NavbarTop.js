import React, { Component } from 'react';
import back from './../../../assets/img/back.png';
import { Link } from 'react-router-dom';
import menu from '../../../assets/img/menu.png';

class NavbarTop extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#141AA2", fontSize: "22px", fontFamily: "Muli", width: "100%", color: "white", padding: "16px 0px" }}>
        <div className="menu" style={{ position: "absolute", top: "7px" }}>
          <Link to='.'>
            <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
              <img src={back} alt="back" style={{ width: "20px" }} />
            </div>
          </Link>
        </div>
          All Ticket
      </div>
    );
  }
}

export default NavbarTop;
