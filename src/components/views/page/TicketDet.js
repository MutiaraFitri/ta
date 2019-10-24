import React, { Component } from 'react'
import NavbarTop from '../navbar/NavbarTop';
import NavbarBottom from '../navbar/NavbarBottom';

export class TicketDet extends Component {
    render() {
        return (
            <div className="home Ticket">
                <NavbarTop back="true" title="Your Ticket" />
                <div className="wrap-ticket" style={{width:"100%"}}>
                    <div className="row ticket-det">
                        s
                    </div>
                </div>
                <NavbarBottom active="Ticket" />
            </div>
        )
    }
}

export default TicketDet
