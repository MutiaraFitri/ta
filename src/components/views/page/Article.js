import React, { Component } from 'react';
import NavbarTop from '../navbar/NavbarTop';
import filter from './../../../assets/img/filter.png';
import left from './../../../assets/img/left-arrow.png';
import search from './../../../assets/img/search.png';
import mouseBlack from './../../../assets/img/mouse-black.png';
import low from './../../../assets/img/low.jpg';
import hight from './../../../assets/img/hight.png';
import medium from './../../../assets/img/medium.png';
import wifi from './../../../assets/img/wifi.png';
import virus from './../../../assets/img/virus.png';
import menu from '../../../assets/img/menu.png';
import write from '../../../assets/img/write.png';
import NavbarBottom from '../navbar/NavbarBottom';
import {Link} from 'react-router-dom';

class AllTicket extends Component {
    render() {
        
        const detail = this.props.active == "Detail" ? "navbar-icon active":"navbar-icon";
        return (
            <div className="home">
                
                <div style={{backgroundColor:"#141AA2",fontSize:"22px",fontFamily:"Muli",width:"100%",color:"white",padding:"16px 0px"}}>
                    <div className="menu" style={{position:"absolute",top:"7px"}}>
                        <img src={menu} alt=""/>
                    </div>
                    Article
                </div>

                <div style={{ color: "black" }} style={{ width: "100%" }}>
                    <div className="search" style={{ width: "100%" }}>
                        <Link to='/home'>
                        <div className="row">
                            <div style={{ width: "20%",float:"left",marginLeft:"-10px" }}>
                                    <img src={left} alt="filter" /> 
                            </div>
                            
                        </div>
                        </Link>
                    </div>
                </div>

                <div style={{width:"100%"}}>
                    <div className="title" style={{width:"80%",textAlign:"left",padding:"30px 30px",marginTop:"-35px",letterSpacing:"0.09em"}}>
                    <p style={{fontSize:"15px",color:"black",}}>Share solution with your customers and by adding articles to your knowlage base.</p>
                    </div>
                    
                    <div className="tiket" style={{width:"85%",marginTop:"10px",display:"flex",paddingBottom:"10px", borderBottom:"1px solid black",display:"flex",margin:"0px auto"}}>
                        
                        <div className="judul-topic" style={{width:"30%",textAlign:"left"}}>
                        <p style={{fontSize:"15px",color:"black",}}>Topic</p>
                        </div>
                        <div className="judul-kategori" style={{width:"20%"}}>
                        <p style={{fontSize:"15px",color:"black",}}>Categories</p>
                        </div>
                        <div className="jdul-authors" style={{width:"20%"}}>
                        <p style={{fontSize:"15px",color:"black",}}>Authors</p>
                        </div>
                        <div className="jdul-view" style={{width:"15%"}}>
                        <p style={{fontSize:"15px",color:"black",}}>Views</p>
                        </div>
                        <div className="jdul-update" style={{width:"15%",paddingRight:"10px"}}>
                        <p style={{fontSize:"15px",color:"black",}}>Update</p>
                        </div>
                    </div>
                    <Link to='/new-article'>
                    <div className="tiket" style={{width:"85%",marginTop:"10px",display:"flex",paddingBottom:"10px",display:"flex",margin:"0px auto"}}>
                        
                        <div className="judul-topic" style={{width:"30%",textAlign:"left"}}>
                        <p style={{fontSize:"15px",color:"#104FAD",}}>No Internet connection</p>
                        </div>
                        <div className="judul-kategori" style={{width:"20%"}}>
                        <p style={{fontSize:"15px",color:"black",float:"left"}}>Network</p>
                        </div>
                        <div className="jdul-authors" style={{width:"20%"}}>
                        <p style={{fontSize:"15px",color:"black",}}>Yayan</p>
                        </div>
                        <div className="jdul-view" style={{width:"15%"}}>
                        <p style={{fontSize:"15px",color:"#545050",}}>2</p>
                        </div>
                        <div className="jdul-update" style={{width:"15%",paddingRight:"10px"}}>
                        <p style={{fontSize:"15px",color:"black",}}>16h</p>
                        </div>
                    </div>
                    </Link>
                    <div className="tiket" style={{width:"85%",marginTop:"10px",display:"flex",paddingBottom:"10px",display:"flex",margin:"0px auto"}}>
                        
                        <div className="judul-topic" style={{width:"30%",textAlign:"left"}}>
                        <p style={{fontSize:"15px",color:"#104FAD",}}>Anti Virus</p>
                        </div>
                        <div className="judul-kategori" style={{width:"20%"}}>
                        <p style={{fontSize:"15px",color:"black",float:"left"}}>Virus</p>
                        </div>
                        <div className="jdul-authors" style={{width:"20%"}}>
                        <p style={{fontSize:"15px",color:"black",}}>Ucup</p>
                        </div>
                        <div className="jdul-view" style={{width:"15%"}}>
                        <p style={{fontSize:"15px",color:"#545050",}}>8</p>
                        </div>
                        <div className="jdul-update" style={{width:"15%",paddingRight:"10px"}}>
                        <p style={{fontSize:"15px",color:"black",}}>1h</p>
                        </div>
                    </div>
                    <div className="tiket" style={{width:"85%",marginTop:"10px",display:"flex",paddingBottom:"10px",display:"flex",margin:"0px auto"}}>
                        
                        <div className="judul-topic" style={{width:"30%",textAlign:"left"}}>
                        <p style={{fontSize:"15px",color:"#104FAD",}}>Fix Printer</p>
                        </div>
                        <div className="judul-kategori" style={{width:"20%"}}>
                        <p style={{fontSize:"15px",color:"black",float:"left"}}>Hardware</p>
                        </div>
                        <div className="jdul-authors" style={{width:"20%"}}>
                        <p style={{fontSize:"15px",color:"black",}}>Yuli</p>
                        </div>
                        <div className="jdul-view" style={{width:"15%"}}>
                        <p style={{fontSize:"15px",color:"#545050",}}>2</p>
                        </div>
                        <div className="jdul-update" style={{width:"15%",paddingRight:"10px"}}>
                        <p style={{fontSize:"15px",color:"black",}}>2h</p>
                        </div>
                    </div>
                    <div style={{width:"30%",float:"right",marginTop:"20px"}}>
                        <Link to="/new-article">
                        <img src={write} alt=""/>
                        </Link>
                    </div>
                    <br/><br/><br/><br/>
                    
                </div>
                
                <NavbarBottom/>
            </div>
        );
    }
}

export default AllTicket;
