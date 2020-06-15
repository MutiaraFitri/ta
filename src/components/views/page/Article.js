import React, { Component } from 'react';
import write from '../../../assets/img/write.png';
import NavbarBottom from '../navbar/NavbarBottom';
import back from '../../../assets/img/back.png';
import { users } from '../../../redux/api/users';
import { kb } from '../../../redux/api/kb';
import { connect } from 'react-redux';
import _ from "lodash";
import { Link } from 'react-router-dom';


class Article extends Component {
    componentDidMount() {
        this.props.userku();
        this.props.fetchKb();
    }

    renderKB() {
        const { data } = this.props;
        var dataku = data.kb.data;
        const toDos = _.map(dataku, (values, key) => {
            return <Link to={'/article/detail/' + values.kb_id} ><div key={values.kb_id} className="ticket-article">
                <div className="judul-topic" >
                    <p>{values.issue_subject}</p>
                </div>
                <div className="jdul-kategori" >
                    <p>{values.issue_category}</p>
                </div>
                <div className="jdul-authors"  >
                    <p>{values.kb_subject}</p>
                </div>
            </div></Link>;
        });
        if (!_.isEmpty(toDos)) {
            return toDos;
        }
        return "Loading ..."
    }

    render() {

        return (
            <div className="home">

                <div className="navbar-message" >
                    <div className="menu" style={{ position: "absolute", top: "7px" }}>
                        <Link to='.'>
                            <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
                                <img src={back} alt="back" style={{ width: "20px" }} />
                            </div>
                        </Link>
                    </div>
                    Article
                </div>
                <div style={{ width: "100%", marginBottom: "100px" }}>
                    <div className="title" style={{ width: "80%", textAlign: "left", padding: "15px 30px", letterSpacing: "0.09em", marginTop: "70px" }}>
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
                    <br /><br />
                </div>
                <div className="row" style={{ width: "414px", bottom: "55px", position: "fixed" }}>
                    <div style={{ width: "82%", height: "10px" }}>
                    </div>
                    <Link to="/new-article">
                        <div class="chatIcon">
                            <span class="material-icons chatIcons" style={{ verticalAlign: "bottom", color: "#fff" }}>
                                add
                            </span>
                        </div>
                    </Link>
                </div>
                <NavbarBottom active="Home" />
            </div >
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
)(Article);
