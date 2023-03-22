import React from "react";
// import './Statistics'
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <div>
        <div>
            <p>Good</p>
            <span>{good}</span>
        </div>
        <div>
            <p>Neutral</p>
            <span>{neutral}</span>
        </div>
        <div>
            <p>Bad</p>
            <span>{bad}</span>
        </div>
        <div>
            <p>Total</p>
            <span>{total}</span>
        </div>   
        <div>
            <p>Positive feedback</p>
            <span>{positivePercentage}%</span>
        </div>                 
    </div>
);


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}


export default Statistics;