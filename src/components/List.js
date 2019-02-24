import React from 'react';
import { connect } from 'react-redux';

const List = (props) => {
    const songsList = () => {
        if(props.artistInfo.toplyrics){
            return props.artistInfo.toplyrics.item.slice(0, 9).map(song => {
                return (
                    <a
                        key={song.id}
                        href={props.root + song.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="list-group-item list-group-item-action">
                        {song.desc}
                    </a>
                )
            })
        }
    }

    return (
        <div>
            <div className="list-group list-custom mt-2">
                {songsList()}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { artistInfo : state.artistInfo }
}

export default connect(mapStateToProps)(List);