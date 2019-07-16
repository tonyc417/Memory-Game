import React from 'react';

const Front = ({currentScore, topScore}) => {
    return(
        <div>
            <h1>Welcome</h1>
            <h4>Your Score: {currentScore} Your Top Score:{topScore} </h4>
        </div>
    )
};

 export default Front;