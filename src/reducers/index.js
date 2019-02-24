import { combineReducers } from 'redux';

//HAS PREVIOUS STATE and ACTION
const ArtistReducer = (artistInfo = {}, action) => {
    if (action.type === 'FETCH_SONGS') {
        return action.payload;
    }

    return artistInfo;
};

const searchTermReducer = (searchTerm = "", action) => {
    if (action.type === 'SAVE_TERM') {
        return action.payload;
    }

    return searchTerm;
}

export default combineReducers({
    artistInfo: ArtistReducer,
    searchTerm: searchTermReducer
});