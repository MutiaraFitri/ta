import React, { Component } from 'react'

export class Top extends Component {
    render() {
        return (
            <div className="top">
                <div className="row" style={{ margin: "0px" }}>
                    <div className="date-ticket">12</div>
                    <div className="month-ticket">
                        SEPT 2019 <br />
                        3:15 PM
                                        </div>
                    <div className="status">
                        <div className="content-status">
                            Pending
                                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Top
