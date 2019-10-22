import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../../../assets/img/logo_komatsu.png';
import arrow from '../../../assets/img/left-arrow.png';

export class NavbarTop extends Component {
    render() {
        const back = (this.props.back == "true") ?<Link to="." ><div className="back-button"><img src={arrow} alt="" style={{padding:"15px"}}/></div></Link>:'';
        const title = (this.props.title) ? <div className="title-pages" style={{paddingTop:"5px"}}>{this.props.title}</div>:<img src={logo} alt="Komatsu" style={{ margin: "0 auto", height: "30px",paddingTop:"15px" }} />;
        return (
            <div className="container" style={{width:"100%"}}>
                <div className="row">
                    {back}
                    <Link to="." style={{width:"100%"}}>
                        {title}
                    </Link>
                </div>
            </div>
        )
    }
}

export default NavbarTop
