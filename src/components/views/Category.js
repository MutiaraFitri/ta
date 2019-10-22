import React, { Component } from 'react'
import lain from '../../assets/img/lain.png';
import mouse from '../../assets/img/mouse.png';
import software from '../../assets/img/software.png';
import network from '../../assets/img/network.png';

export class Category extends Component {
    render() {
        return (
            <div className="row" style={{ width: "100%", margin: "0 auto",textAlign:"center" }}>
                <div className="menu-service">
                    <div className="isi-our-service">
                        <div className="row">
                            <img src={network} alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                        </div>
                    </div>
                    <div className="font-small">Network</div>
                </div>
                <div className="menu-service">
                    <div className="isi-our-service">
                        <div className="row">
                            <img src={mouse} alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                        </div>
                    </div>
                    <div className="font-small">Software</div>
                </div>
                <div className="menu-service">
                    <div className="isi-our-service">
                        <div className="row">
                            <img src={software} alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                        </div>
                    </div>
                    <div className="font-small">Hardware</div>
                </div>
                <div className="menu-service">
                    <div className="isi-our-service">
                        <div className="row">
                            <img src={lain} alt="" style={{ margin: "0 auto -10px auto", height: "30px" }} />
                        </div>
                    </div>
                    <div className="font-small">Others</div>
                </div>
            </div>
        )
    }
}

export default Category
