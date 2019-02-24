import React from 'react';
import SearchBar from './SearchBar';
import Card from './Card';
import List from './List';
import Albums from './Albums';

const ArtistInfo = (props) => {
    const root = "https://www.vagalume.com.br"

    return (
        <div className="text-center my-5 py-5" style={{background: '#dee2e68c'}}>
            <div className="container">
                <SearchBar />
                <div className="row">
                    <div className="col-4">
                        <Card root={root}/>
                    </div>
                    <div className="col-6 mx-auto">
                        <List root={root}/>
                    </div>
                </div>
                <div>
                    <Albums root={root}/>
                </div>
            </div>
        </div>
    );
}

export default ArtistInfo;