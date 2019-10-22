import React, { Component } from 'react'
import NavbarTop from '../navbar/NavbarTop';
import NavbarBottom from '../navbar/NavbarBottom';
import picture from './../../../assets/img/picture.png';
import Category from '../Category';
import {Link} from 'react-router-dom';

export class Report extends Component {
    render() {
        return (
            <div className="home">  
                <NavbarTop back="true"/>
                <div className="Report" style={{width:"85%"}}>
                    <div className="title-page">
                        Report <br/> Issue
                    </div>
                    <div className="label">
                        <div className="row">
                            Have something wrong ?
                        </div>
                        <Category/>
                    </div>
                    <div className="label">
                        <div className="row">
                            Title
                        </div>
                        <input className="input-form-full" type="text" placeholder="-- Choose your issue --"/>
                    </div>
                    <div className="label">
                        <div className="row">
                            Due Date
                        </div>
                        <input className="input-form-full" type="text" placeholder="- - Days"/>
                    </div>
                    <div className="label">
                        <div className="row">
                            Description
                        </div>
                        <textarea className="input-form-textarea" type="text-area" placeholder="..."/>
                    </div>
                    <div className="label">
                        <div className="row">
                            Send us troubles
                        </div>
                        <div className="kotak-input">
                        <div className="row">
                            <img src={picture} alt="" style={{margin:"0px auto"}}/>
                        </div>
                            Choose from library
                        </div>
                    </div>
                    <div className="row" style={{width:"100%",marginBottom:"70px"}}>
                            <button className="button" type="submit">
                                <Link to="/problemsolve" style={{color:"#FFF"}}>
                                        submit
                                </Link>
                            </button>
                    </div>
                </div>
                <NavbarBottom active="Home"/>
            </div>
        )
    }
}

export default Report
