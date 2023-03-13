import React from 'react'
import {API} from '../config'



const ShowImage = ({ item, url }) => (
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
            style={{ height: "100%", maxWidth: "100%" }}
            className="product-img"
            
        />
);

export default ShowImage;


