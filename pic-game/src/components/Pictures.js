import React from 'react';
import mclaren from '../images/senna.jpg';
import blueMclaren from '../images/blueSenna.jpg';

const Display = () => {


    return(
        <div>
            <img src={mclaren} width="300px" alt="A Mclaren Senna" />
            <img src={blueMclaren} width="240px" alt="A Mclaren Senna" />
        
        </div>
    )
}

export default Display;