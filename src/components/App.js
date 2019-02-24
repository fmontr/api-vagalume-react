import React from 'react';
import Banner from '../components/Banner';
import Content from '../components/Content';
import ArtistInfo from '../components/ArtistInfo';

//functional component
 const App = () => {
    return(
        <div>
            <Banner />
            <Content />
            <ArtistInfo />
        </div>
    );
}

export default App;