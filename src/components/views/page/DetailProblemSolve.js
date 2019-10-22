import React, { Component } from 'react'

import NavbarTop from '../navbar/NavbarTop';
import NavbarBottom from '../navbar/NavbarBottom';

export class DetailProblemSolve extends Component {
    render() {
        return (
            <div className="home">
                <NavbarTop back="true"/>
                <div className="Report" style={{width:"85%"}}>
                    <div className="title-issue" style={{margin:"15px auto"}}>
                        No internet connection
                    </div>
                    <div className="row">
                        <div className="id-problem-solve">
                            <div className="isi-id">1</div>
                        </div>
                        <div className="title-problem-solve">title</div>
                    </div>
                    <div className="row">
                        <div className="detail-problem-solve">sssssssssssssssssssssssssss s s ss s s s                     ss s s s s s s s s </div>
                    </div>
                </div>
                <div className="row" style={{textAlign:"center",width:"100%"}}>
                    <div style={{textAlign:"center",width:"100%",fontWeight:"700"}}>
                        Was this helpful ?
                    </div>
                </div>
                <div className="row" style={{width:"100%"}}>
                    <div style={{margin:"0 auto",width:"100%"}}>
                        <button className="button" style={{borderRadius:"5px",marginRight:"15px",width:"30%"}}>Yes</button>
                        <button className="button" style={{borderRadius:"5px",width:"30%",backgroundColor:"red"}}>No</button>
                    </div>
                </div>
                <NavbarBottom active="Home"/>
            </div>
        )
    }
}

export default DetailProblemSolve
