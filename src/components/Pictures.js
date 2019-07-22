import React, { useState } from 'react';
import mclaren from '../images/senna.jpg';
import blueMclaren from '../images/blueSenna.jpg';
import orangeMclaren from '../images/mclarenOrange.jpg';

const Display = () => {

    const [clicked, clickImage] = useState(0);

    console.log(clicked);
    if (clicked === 3) {
        console.log("You are at 3 clicks!!")
    }
    return(
        <div className="picRow">
            <img src={mclaren} width="300px" alt="A Mclaren Senna" onClick={() => clickImage(clicked + 1)} />
            <img src={blueMclaren} width="240px" alt="A Mclaren Senna" onClick={() => clickImage(clicked + 1)} />
            <img src={orangeMclaren} width="270px" alt="An orange Mclaren Senaa" onClick={() => clickImage(clicked + 1)}/>
            <h4>{clicked} </h4>
        </div>
    )
}

export default Display;