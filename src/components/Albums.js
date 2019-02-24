import React from 'react';
import { connect } from 'react-redux';

const Albums = (props) => {

    const composeImgUrl = (url) => {
        return props.root + url.replace('html', 'webp');
    }

    const albumList = () => {

        if(props.artistInfo.albums){
            return props.artistInfo.albums.item.slice(0, 8).map(album => {
                return (
                    <div className="col-3" key={album.id}>
                        <div className="ui fluid card">
                            <a href={props.root + album.url} key="" target="_blank" rel="noopener noreferrer">
                                <div className="album-img">
                                    <img alt={album.desc} src={composeImgUrl(album.url)}/>
                                </div>
                            </a>
                            <div className="content">
                                <span className="header">{album.desc}</span>
                            </div>
                        </div>
                    </div>
                );
            })
        }
    }

    return (
        <div>
            <div className="ui row">
                {albumList()}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { artistInfo : state.artistInfo }
}

export default connect(mapStateToProps)(Albums);