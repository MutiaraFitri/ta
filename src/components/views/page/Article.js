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
            return <Link to={'/knowledgebase/' + values.kb_id} ><div key={values.kb_id} className="tiket" style={{ width: "85%", marginTop: "10px", paddingBottom: "10px", display: "flex", margin: "0px auto" }}>
                <div className="judul-topic" style={{ width: "30%", textAlign: "left" }}>
                    <p style={{ fontSize: "15px", color: "#104FAD", }}>{values.issue_subject}</p>
                </div>
                <div className="judul-kategori" style={{ width: "30%" }}>
                    <p style={{ fontSize: "15px", color: "black", float: "center" }}>{values.issue_category}</p>
                </div>
                <div className="jdul-authors" style={{ width: "50%" }}>
                    <p style={{ fontSize: "15px", color: "black", }}>{values.kb_subject}</p>
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

                <div style={{ backgroundColor: "#141AA2", fontSize: "22px", fontFamily: "Muli", width: "100%", color: "white", padding: "16px 0px", position: "fixed" }}>
                    <div className="menu" style={{ position: "absolute", top: "7px" }}>
                        <Link to='.'>
                            <div className="menu" style={{ position: "absolute", top: "7px", marginLeft: "15px" }}>
                                <img src={back} alt="back" style={{ width: "20px" }} />
                            </div>
                        </Link>
                    </div>
                    Article
                </div>
                <div style={{ width: "100%", marginTop: "60px" }}>
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
                    <br /><br /><br /><br />
                </div>
                <div className="row" style={{ width: "414px", bottom: "55px", position: "fixed" }}>
                    <div style={{ width: "82%", height: "10px" }}>
                    </div>
                    <Link to='/new-article'>
                        <div style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", padding: "15px 18px", backgroundColor: "#0050A1", borderRadius: "50%" }}>
                            <span class="material-icons" style={{ verticalAlign: "bottom", color: "#fff" }}>
                                add
                            </span>
                        </div>
                    </Link>
                </div>
                <NavbarBottom active="Home" />
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
)(Article);
