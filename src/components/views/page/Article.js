import React, { Component } from 'react';
import left from './../../../assets/img/left-arrow.png';
import menu from '../../../assets/img/menu.png';
import write from '../../../assets/img/write.png';
import NavbarBottom from '../navbar/NavbarBottom';
import { users } from '../../../redux/api/users';
import { kb } from '../../../redux/api/kb';
import { connect } from 'react-redux';
import _ from "lodash";
import { Link } from 'react-router-dom';

class AllTicket extends Component {
    componentDidMount() {
        this.props.userku();
        this.props.fetchKb();
    }

    renderKB() {
        const { data } = this.props;
        var dataku = data.kb.data;
        const toDos = _.map(dataku, (values, key) => {
            return <div key={values.kb_id} className="tiket" style={{ width: "85%", marginTop: "10px", paddingBottom: "10px", display: "flex", margin: "0px auto" }}>
                <div className="judul-topic" style={{ width: "30%", textAlign: "left" }}>
                    <p style={{ fontSize: "15px", color: "#104FAD", }}>{values.issue_subject}</p>
                </div>
                <div className="judul-kategori" style={{ width: "30%" }}>
                    <p style={{ fontSize: "15px", color: "black", float: "left" }}>{values.issue_category}</p>
                </div>
                <div className="jdul-authors" style={{ width: "50%" }}>
                    <p style={{ fontSize: "15px", color: "black", }}>{values.kb_subject}</p>
                </div>
            </div>;
        });
        if (!_.isEmpty(toDos)) {
            return toDos;
        }
        return "Loading ..."
    }

    render() {

        return (
            <div className="home">

                <div style={{ backgroundColor: "#141AA2", fontSize: "22px", fontFamily: "Muli", width: "100%", color: "white", padding: "16px 0px" }}>
                    <div className="menu" style={{ position: "absolute", top: "7px" }}>
                        <img src={menu} alt="" />
                    </div>
                    Article
                </div>

                <div style={{ color: "black", width: "100%" }}>
                    <div className="search" style={{ width: "100%" }}>
                        <Link to='/home'>
                            <div className="row">
                                <div style={{ width: "20%", float: "left", marginLeft: "-10px" }}>
                                    <ig src={left} alt="filter" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div style={{ width: "100%" }}>
                    <div className="title" style={{ width: "80%", textAlign: "left", padding: "30px 30px", marginTop: "-35px", letterSpacing: "0.09em" }}>
                        <p style={{ fontSize: "15px", color: "black", }}>Share solution with your customers and by adding articles to your knowlage base.</p>
                    </div>

                    <div className="tiket" style={{ width: "85%", marginTop: "10px", paddingBottom: "10px", borderBottom: "1px solid black", display: "flex", margin: "0px auto" }}>

                        <div className="judul-topic" style={{ width: "30%", textAlign: "left" }}>
                            <p style={{ fontSize: "15px", color: "black", }}>Subject</p>
                        </div>
                        <div className="judul-kategori" style={{ width: "30%" }}>
                            <p style={{ fontSize: "15px", color: "black", }}>Categories</p>
                        </div>
                        <div className="jdul-authors" style={{ width: "50%" }}>
                            <p style={{ fontSize: "15px", color: "black", }}>ProblemSolve</p>
                        </div>
                    </div>
                    {this.renderKB()}
                    <div style={{ width: "30%", float: "right", marginTop: "20px" }}>
                        <Link to="/new-article">
                            <img src={write} alt="" />
                        </Link>
                    </div>
                    <br /><br /><br /><br />

                </div>

                <NavbarBottom />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state
})
const mapDispacthToProps = (dispatch) => {
    return {
        userku: () => dispatch(users()),
        fetchKb: () => dispatch(kb()),
    }
}

export default connect(
    mapStateToProps, mapDispacthToProps
)(AllTicket);
