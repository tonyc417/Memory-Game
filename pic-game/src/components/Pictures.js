import React from 'react';
import mclaren from '../images/senna.jpg';
import blueMclaren from '../images/blueSenna.jpg';
import orangeMclaren from '../images/mclarenOrange.jpg';

const Display = () => {

    var picSelect = () => {
        console.log(`You clicked an image`);
    }

    return(
        <div className="picRow">
            <img src={mclaren} width="300px" alt="A Mclaren Senna" onClick={picSelect} />
            <img src={blueMclaren} width="240px" alt="A Mclaren Senna" onClick={picSelect}/>
            <img src={orangeMclaren} width="270px" alt="An orange Mclaren Senaa" onClick={picSelect}/>
        
        </div>
    )
}

export default Display;