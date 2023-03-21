import React from "react";
import './FeedbackStats.styled'

const FeedbackStats = ({onGood, onNeutral, onBad}) => (
    <div>
        <div>
            <p>Good</p>
            <span>{onGood}</span>
        </div>
        <div>
            <p>Neutral</p>
            <span>{onNeutral}</span>
        </div>
        <div>
            <p>Bad</p>
            <span>{onBad}</span>
        </div>
        <div>
            <p>Total</p>
            {/* <span>{this.state.total}</span> */}
        </div>   
        <div>
            <p>Positive feedback</p>
            {/* <span>{this.state.positiveFeedback}%</span> */}
        </div>                 
    </div>
);


export default FeedbackStats;