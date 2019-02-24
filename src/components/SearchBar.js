import React from 'react';
import { connect } from 'react-redux';
import { fetchSongs, saveTerm } from '../actions';


class SearchBar extends React.Component {

    fetchSongsOnSubmit = (event) => {
        event.preventDefault();
        this.props.fetchSongs(this.props.state.searchTerm)
        setTimeout(() => {
            console.log(this.props.state);
        }, 2000);
    }

    render() {
        return (
            <div className="search-bar ui segment pb-4">
                <form onSubmit={this.fetchSongsOnSubmit} className="ui form">
                <div className="field d-flex">
                    <input
                        placeholder="Digite aqui seu artista favorito"
                        type="text"
                        value={this.props.state.searchTerm} //IMPORTANT to get value from state anyway
                        onChange={this.props.saveTerm}
                    />
                    <button
                        className="waves-effect waves-light btn-flat mt-1 ml-2"
                        onClick={() => this.props.fetchSongs(this.props.state.searchTerm)}>
                        <i className="material-icons">search</i>
                    </button>
                </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { state : state }
}

export default connect(mapStateToProps, { fetchSongs, saveTerm })(SearchBar);