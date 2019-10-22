import React, { Component } from 'react'
import NavbarTop from '../navbar/NavbarTop';
import NavbarBottom from '../navbar/NavbarBottom';
import Top from '../Top';

export class History extends Component {
    render() {
        return (
            <div className="home">
                <NavbarTop back="true"/>
                <div className="Report" style={{width:"85%"}}>
                    <div className="title-page">
                        History
                    </div>
                    <div className="history">
                        <div className="title-issue">No internet connection</div>       
                        <Top/>
                        <hr/>        
                    </div>
                    <div className="history">
                        <div className="title-issue">No internet connection</div>       
                        <Top/>
                        <hr/>        
                    </div> 
                    <div className="history">
                        <div className="title-issue">No internet connection</div>       
                        <Top/>
                        <hr/>        
                    </div>            
                </div>
                <NavbarBottom active="Home"/>
            </div>
        )
    }
}

export default History
