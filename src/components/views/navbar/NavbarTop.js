import React, { Component } from 'react';
import menu from '../../../assets/img/menu.png';

class NavbarTop extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#141AA2", fontSize: "22px", fontFamily: "Muli", width: "100%", color: "white", padding: "16px 0px" }}>
        <div className="menu" style={{ position: "absolute", top: "7px" }}>
          <img src={menu} alt="" />
        </div>
          All Ticket
      </div>
    );
  }
}

export default NavbarTop;
