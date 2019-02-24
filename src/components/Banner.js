import React from 'react';

const Banner = () => {
    return (
        <div>
            <img src={require('../images/banner.jpg')} alt="banner" className="img-fluid banner" />
        </div>
    );
}

export default Banner;