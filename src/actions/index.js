import axios from 'axios';

//ACTION CREATOR
export const fetchSongs = (searchTerm) => {
    return async function(dispatch) {
        //first call
        const firstResponse = await axios.get(`https://api.vagalume.com.br/search.artmus?q=${searchTerm}&limit=10`);
        //second call
        const artist = firstResponse.data.response.docs[0].url;
        const finalResponse = await axios.get(`https://www.vagalume.com.br/${artist}/index.js`);
        //create and send action to reducers
        dispatch({type: 'FETCH_SONGS', payload: finalResponse.data.artist});
    }
}

export const saveTerm = (event) => {
    const searchTerm = event.target.value;

    return {
        type: 'SAVE_TERM',
        payload: searchTerm
    }
}