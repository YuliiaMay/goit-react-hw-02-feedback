import React, { Component } from "react";
import FeedbackStats from "./FeedbackStats";
import './FeedbackBtns.styled'



class FeedbackBtns extends Component {
    state = {
        good : 0,
        neuteral: 0,
        bad: 0,
        // total: 0,
        // positiveFeedback: 0
    }

    onGoodClick = (e) => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1
            }
        })

    }

    onNeutralClick = (e) => {
        this.setState((prevState) => {
            return {
                neuteral: prevState.neuteral + 1
            }
        })
    }

    onBadClick = (e) => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1
            }
        })
    }

    // countTotalFeedback = () => {}

    // countPositiveFeedbackPercentage()


    render() {
        return (
            <>
                <div>
                    <button type="button" onClick={this.onGoodClick}>good</button>
                    <button type="button" onClick={this.onNeutralClick}>neutral</button>
                    <button type="button" onClick={this.onBadClick}>bad</button>
                </div>

                <FeedbackStats
                    onGood={this.state.good}
                    onNeutral={this.state.neuteral}
                    onBad={this.state.bad}
                />
            </>
        );
    }
}

export default FeedbackBtns;