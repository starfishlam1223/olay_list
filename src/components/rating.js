import React from 'react'

export function Rating(props) {
    const { score, count } = props

    if (count == 0) {
        return null;
    } else {
        return <div className="itemRating">
            <div className="ratingBg">
                <img src="./images/RatingStars.png"></img>
                <div className={"rating score-" + score}>
                    <img src="./images/RatingStars-on.png"></img>
                </div>

            </div>

            <span className="ratingCount">({count})</span>
        </div>
    }
}