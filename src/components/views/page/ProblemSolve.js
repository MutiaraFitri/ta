import React, { Component } from 'react'
import NavbarTop from '../navbar/NavbarTop';
import NavbarBottom from '../navbar/NavbarBottom';

export class ProblemSolve extends Component {
    render() {
        return (
            <div className="home">
                <NavbarTop back="true"/>
                <div className="Report" style={{width:"85%"}}>
                    <div className="title-page">
                        Problem <br/>
                        Solve
                    </div>
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
                        <div className="id-problem-solve">
                            <div className="isi-id">2</div>
                        </div>
                        <div className="title-problem-solve">title</div>
                    </div>
                    <div className="row" style={{textAlign:"center",width:"100%"}}>
                        Still not working ?
                    </div>
                    <div className="row">
                        <button className="button" style={{borderRadius:"5px",marginRight:"15px",width:"30%"}}>Yes</button>
                        <button className="button" style={{borderRadius:"5px",width:"30%",backgroundColor:"red"}}>No</button>
                    </div>
                </div>
                <NavbarBottom active="Home"/>
            </div>
        )
    }
}

export default ProblemSolve
