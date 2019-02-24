import React from 'react';
import { connect } from 'react-redux'


class Card extends React.Component {

    composeImgUrl = () => {
        const imgUrl = this.props.artistInfo.pic_medium

        if(imgUrl) {
            return this.props.root + imgUrl;
        } else {
            return require("../images/placeholder.jpg");
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                        <img alt="img" src={this.composeImgUrl()}/>
                        <a className="btn-floating halfway-fab waves-effect waves-light red" target="_blank" rel="noopener noreferrer" href={this.props.root + this.props.artistInfo.url}><i className="material-icons">add</i></a>
                    </div>
                        <div className="card-content">
                        <p>{this.props.artistInfo.desc}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { artistInfo : state.artistInfo }
}

export default connect(mapStateToProps)(Card);