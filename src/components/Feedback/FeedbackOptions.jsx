import React from "react";
// import './FeedbackOptions'
import PropTypes from 'prop-types';



const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return(
        <>
            <div> {
                options.map(el => {
                    return (
                        <button
                            type="button"
                            onClick={() => onLeaveFeedback(el)}
                            key={el}
                        >
                            {el}
                        </button>
                    )
                })
            }  
            </div>
        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}



export default FeedbackOptions;