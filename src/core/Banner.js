import React from 'react';
import "../css/style.css";

const Banner = (props) => {
    
    return(

        <div className='my-banner reveal' style={{ backgroundImage: `url(${props.image})`}} >

        </div>
    )

};

export default Banner;